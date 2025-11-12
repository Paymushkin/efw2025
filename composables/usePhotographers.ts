import { ref, computed } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';
import { photographers as localPhotographers } from '@/constants/photographers';

type PhotographerLink = {
  text: string;
  url: string;
};

type Photographer = {
  id?: string | number;
  name: string;
  profession: string;
  galleryUrl?: string;
  photos?: string[];
  videos?: string[];
  order: number;
  previewImage?: string;
  links?: PhotographerLink[];
  instagram?: string;
};

type UsePhotographersOptions = {
  sheetId?: string;
  gid?: string;
  initialData?: Photographer[];
};

const MEDIA_SLOTS = 6;

const normalizeMediaType = (value?: string | boolean) => {
  if (!value) return 'photo';
  const normalized = String(value).trim().toLowerCase();
  if (['video', 'videos', 'vid'].includes(normalized)) return 'video';
  return 'photo';
};

const normalizeKey = (key: string) => key.replace(/[\s_-]+/g, '').toLowerCase();

const getFirstNonEmptyValue = (
  row: Record<string, any>,
  normalizedRow: Record<string, any>,
  keys: string[]
): string => {
  for (const key of keys) {
    if (key in row && row[key] != null && String(row[key]).trim() !== '') {
      return String(row[key]).trim();
    }
    const normalizedKey = normalizeKey(key);
    if (
      normalizedKey in normalizedRow &&
      normalizedRow[normalizedKey] != null &&
      String(normalizedRow[normalizedKey]).trim() !== ''
    ) {
      return String(normalizedRow[normalizedKey]).trim();
    }
  }
  return '';
};

const transformPhotographersData = (rows: Record<string, any>[]) => {
  return rows
    .map((row, index) => {
      const normalizedRow = Object.keys(row).reduce<Record<string, any>>((acc, key) => {
        if (!key) return acc;
        acc[normalizeKey(key)] = row[key];
        return acc;
      }, {});

      const name = getFirstNonEmptyValue(row, normalizedRow, ['title', 'Title', 'name', 'Name']);
      if (!name) return null;

      const profession = getFirstNonEmptyValue(row, normalizedRow, ['subtitle', 'Subtitle', 'profession', 'Profession']);
      const galleryUrl = getFirstNonEmptyValue(row, normalizedRow, ['link', 'Link', 'gallery_url', 'Gallery', 'GalleryURL']);
      const instagram = getFirstNonEmptyValue(row, normalizedRow, ['inst', 'Inst', 'instagram', 'Instagram']);
      const baseType = normalizeMediaType(getFirstNonEmptyValue(row, normalizedRow, ['type', 'Type']));

      const orderString = getFirstNonEmptyValue(row, normalizedRow, ['order', 'Order']);
      const parsedOrder = parseInt(orderString, 10);
      const order = Number.isFinite(parsedOrder) ? parsedOrder : index + 1;

      const mediaItems: { type: 'photo' | 'video'; url: string }[] = [];

      for (let i = 1; i <= MEDIA_SLOTS; i += 1) {
        const url = getFirstNonEmptyValue(row, normalizedRow, [
          `photo-link-${i}`,
          `photo_link_${i}`,
          `photo${i}`,
          `photo_${i}`,
          `media_${i}_url`,
          `media_${i}`,
          `preview_${i}`,
        ]);

        if (!url) continue;

        const itemTypeKey = getFirstNonEmptyValue(row, normalizedRow, [
          `media_${i}_type`,
          `type_${i}`,
          `media_type_${i}`,
          'media_type',
        ]);

        const itemType = normalizeMediaType(itemTypeKey || baseType);
        mediaItems.push({ type: itemType, url });
      }

      if (mediaItems.length === 0) {
        return {
          id: row.id || row.Id || order || name,
          name,
          profession,
          galleryUrl,
          photos: undefined,
          videos: undefined,
          order,
          previewImage: row.preview_image || row.preview || '',
          links: [],
          instagram: instagram || undefined,
        } as Photographer;
      }

      const photos = mediaItems.filter((item) => item.type === 'photo').map((item) => item.url);
      const videos = mediaItems.filter((item) => item.type === 'video').map((item) => item.url);

      return {
        id: row.id || row.Id || order || name,
        name,
        profession,
        galleryUrl,
        photos: videos.length ? undefined : photos,
        videos: videos.length ? videos : undefined,
        order,
        previewImage: row.preview_image || row.preview || photos[0] || videos[0] || '',
        links: [],
        instagram: instagram || undefined,
      } as Photographer;
    })
    .filter((item): item is Photographer => Boolean(item))
    .sort((a, b) => a.order - b.order);
};

export const usePhotographers = (options: UsePhotographersOptions = {}) => {
  const initialData = options.initialData ?? localPhotographers;
  const photographersData = ref<Photographer[]>([...initialData]);
  const isLoading = ref(false);
  const isDataUpdated = ref(false);
  const lastFetchTime = ref<number | null>(null);
  const errorMessage = ref<string | null>(null);

  const config = useRuntimeConfig();

  const buildSheetUrl = () => {
    const sheetId = options.sheetId ?? config.public.gallerySheetId;
    const gid = options.gid ?? config.public.gallerySheetGid ?? '0';

    if (!sheetId) {
      return '';
    }

    return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${gid}`;
  };

  const fetchPhotographers = async () => {
    if (isLoading.value) return;

    const sheetUrl = buildSheetUrl();
    if (!sheetUrl) {
      console.warn('[usePhotographers] Google Sheet ID is not configured. Falling back to local data.');
      photographersData.value = [...initialData];
      return;
    }

    isLoading.value = true;
    errorMessage.value = null;

    try {
      const response = await fetch(sheetUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      const jsonText = text.replace(/^[^{]*/, '').replace(/[^}]*$/, '');
      const data = JSON.parse(jsonText);

      if (!data.table || !data.table.rows) {
        throw new Error('Invalid Google Sheets response format');
      }

      // Получаем заголовки: либо из cols.label, либо из первой строки
      let headers: string[] = data.table.cols.map((col: any) => col.label || '');
      let dataRows = data.table.rows;
      
      // Если все заголовки пустые, берем первую строку как заголовки
      if (headers.every(h => !h) && data.table.rows.length > 0) {
        const firstRow = data.table.rows[0];
        headers = firstRow.c.map((cell: any) => (cell ? String(cell.v || '') : ''));
        // Пропускаем первую строку, так как она была использована как заголовки
        dataRows = data.table.rows.slice(1);
      }

      const rows = dataRows.map((row: any) => {
        const rowData: Record<string, any> = {};
        row.c.forEach((cell: any, index: number) => {
          if (headers[index]) {
            rowData[headers[index]] = cell ? cell.v : '';
          }
        });
        return rowData;
      });

      const transformedData = transformPhotographersData(rows);
      if (transformedData.length > 0) {
        photographersData.value = transformedData;
        isDataUpdated.value = true;
        lastFetchTime.value = Date.now();
      } else {
        console.warn('[usePhotographers] Received empty dataset from Google Sheets. Using local data.');
        photographersData.value = [...initialData];
      }
    } catch (error: any) {
      console.error('[usePhotographers] Failed to load gallery data from Google Sheets:', error);
      errorMessage.value = error?.message || 'Unknown error';
      photographersData.value = [...initialData];
    } finally {
      isLoading.value = false;
    }
  };

  return {
    photographers: computed(() => photographersData.value),
    isLoading: computed(() => isLoading.value),
    isDataUpdated: computed(() => isDataUpdated.value),
    lastFetchTime: computed(() => lastFetchTime.value),
    errorMessage: computed(() => errorMessage.value),
    fetchPhotographers,
  };
};

