export interface DesignerRunwayItem {
  name: string;
  country: string;
  date: string;
  youtubeLink: string;
  photoLinks: string[]; // Массив до 3 фото
  photoArticleLink: string;
  articleLink: string;
  articleTitle: string;
}

export interface DesignerRunwayGroup {
  date: string;
  name: string;
  items: DesignerRunwayItem[];
}

export const useDesignerRunways = () => {
  const runways = ref<DesignerRunwayGroup[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const isDataUpdated = ref(false);

  // Функция для извлечения YouTube video ID из Shorts ссылки
  const extractYouTubeId = (url: string): string | null => {
    if (!url) return null;
    
    // Формат: https://www.youtube.com/shorts/VIDEO_ID?si=...
    const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    if (shortsMatch) {
      return shortsMatch[1];
    }
    
    // Формат: https://www.youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      return watchMatch[1];
    }
    
    // Формат: https://youtu.be/VIDEO_ID
    const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (youtuBeMatch) {
      return youtuBeMatch[1];
    }
    
    return null;
  };

  // Функция для преобразования данных из Google Sheets
  const transformRunwaysData = (rows: any[]): DesignerRunwayGroup[] => {
    const groupsMap = new Map<string, DesignerRunwayItem[]>();

    rows.forEach((row) => {
      const name = (row.name || '').trim();
      const date = (row.date || '').trim();
      
      if (!name || !date) return;

      const key = `${date}_${name}`;
      
      if (!groupsMap.has(key)) {
        groupsMap.set(key, []);
      }

      // Нормализуем названия колонок (могут быть с пробелами или подчеркиваниями)
      const youtubeLink = (row['youtube link'] || row['youtube_link'] || row['youtube link'] || '').trim();
      const photoArticleLink = (row['photo article link'] || row['photo_article_link'] || row['photo article link'] || '').trim();
      const articleLink = (row['article link'] || row['article_link'] || row['article link'] || '').trim();
      const articleTitle = (row['article title'] || row['article_title'] || row['article title'] || '').trim();

      // Собираем все фото (до 3 штук)
      const photoLinks: string[] = [];
      
      // Проверяем различные варианты названий колонок для фото
      for (let i = 1; i <= 3; i++) {
        const photoLink = (
          row[`photo link ${i}`] || 
          row[`photo_link_${i}`] || 
          row[`photo link ${i}`] ||
          row[`photo${i}`] ||
          row[`photo_${i}`] ||
          (i === 1 ? (row['photo link'] || row['photo_link'] || row['photo link'] || '').trim() : '')
        ).trim();
        
        if (photoLink) {
          photoLinks.push(photoLink);
        }
      }

      const item: DesignerRunwayItem = {
        name,
        country: (row.country || '').trim(),
        date,
        youtubeLink,
        photoLinks,
        photoArticleLink,
        articleLink,
        articleTitle,
      };

      // Добавляем только если есть хотя бы один контент (видео, фото или статья)
      if (item.youtubeLink || item.photoLinks.length > 0 || item.photoArticleLink || item.articleLink) {
        groupsMap.get(key)!.push(item);
      }
    });

    // Преобразуем в массив групп
    const groups: DesignerRunwayGroup[] = Array.from(groupsMap.entries()).map(([key, items]) => {
      const [date, name] = key.split('_');
      return {
        date,
        name,
        items,
      };
    });

    // Сортируем по дате (от новых к старым)
    groups.sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'));
      const dateB = new Date(b.date.split('.').reverse().join('-'));
      return dateB.getTime() - dateA.getTime();
    });

    return groups;
  };

  const fetchRunways = async () => {
    if (isDataUpdated.value) {
      console.log('📋 Данные уже обновлены, пропускаем запрос');
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      console.log('🌐 Запрашиваем данные Designer Runways из Google Sheets...');

      const SPREADSHEET_ID = '1uI5Y3opWDCV5a8v1hd-iKKOgrt5xEoNvdMULgkhpkPs';
      const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;

      const response = await fetch(CSV_URL);

      if (!response.ok) {
        throw new Error(`CSV export error: ${response.statusText}`);
      }

      const csvText = await response.text();
      console.log('📊 Получены CSV данные:', csvText.substring(0, 200) + '...');

      // Парсинг CSV
      const lines = csvText.split('\n');
      const rows = lines.filter((line) => line.trim()).map((line) => {
        const values = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
          const char = line[i];

          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            values.push(current.trim());
            current = '';
          } else {
            current += char;
          }
        }

        values.push(current.trim());
        return values;
      });

      if (rows.length < 2) {
        throw new Error('Недостаточно данных в таблице');
      }

      // Первая строка - заголовки
      const headers = rows[0].map((h) => h.toLowerCase().trim());
      const dataRows = rows.slice(1);

      // Преобразуем в объекты
      const data = dataRows
        .map((row) => {
          const rowData: any = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index] || '';
          });
          return rowData;
        })
        .filter((row) => row.name && row.date); // Фильтруем пустые строки

      const transformedData = transformRunwaysData(data);

      if (transformedData.length > 0) {
        runways.value = transformedData;
        isDataUpdated.value = true;
        console.log('✅ Данные Designer Runways успешно обновлены:', transformedData);
      } else {
        console.warn('⚠️ Нет данных для обновления из Google Sheets');
      }
    } catch (err: any) {
      console.error('❌ Ошибка загрузки данных Designer Runways из Google Sheets:', err);
      error.value = err.message || 'Ошибка загрузки данных';
    } finally {
      loading.value = false;
    }
  };

  return {
    runways,
    loading,
    error,
    isDataUpdated,
    fetchRunways,
    extractYouTubeId,
  };
};

