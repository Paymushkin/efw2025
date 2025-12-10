// Скрипт для обновления локальных данных Designer Runways из Google Sheets
// Используется для автоматического обновления данных перед пересборкой проекта

import { writeFileSync } from 'fs';
import { join } from 'path';

const SPREADSHEET_ID = '1uI5Y3opWDCV5a8v1hd-iKKOgrt5xEoNvdMULgkhpkPs';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;

interface DesignerRunwayItem {
  name: string;
  country: string;
  date: string;
  youtubeLinks: string[];
  photoLinks: string[];
  photoArticleLink: string;
  articleLink: string;
  articleTitle: string;
  gallery: string;
}

interface DesignerRunwayGroup {
  date: string;
  name: string;
  items: DesignerRunwayItem[];
}

function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  
  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];
  
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return watchMatch[1];
  
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];
  
  return null;
}

function transformRunwaysData(rows: any[]): DesignerRunwayGroup[] {
  const groupsMap = new Map<string, DesignerRunwayItem[]>();

  rows.forEach((row) => {
    const name = (row.name || '').trim();
    const date = (row.date || '').trim();
    
    if (!name || !date) return;

    const key = `${date}_${name}`;
    
    if (!groupsMap.has(key)) {
      groupsMap.set(key, []);
    }

    const photoArticleLink = (row['photo article link'] || row['photo_article_link'] || '').trim();
    const articleLink = (row['article link'] || row['article_link'] || '').trim();
    const articleTitle = (row['article title'] || row['article_title'] || '').trim();
    const gallery = (row['gallery'] || '').trim();

    const youtubeLinks: string[] = [];
    for (let i = 1; i <= 3; i++) {
      const youtubeLink = (
        row[`youtube link ${i}`] || 
        row[`youtube_link_${i}`] ||
        row[`youtube${i}`] ||
        row[`youtube_${i}`] ||
        (i === 1 ? (row['youtube link'] || row['youtube_link'] || '').trim() : '')
      ).trim();
      
      if (youtubeLink) {
        youtubeLinks.push(youtubeLink);
      }
    }

    const photoLinks: string[] = [];
    for (let i = 1; i <= 3; i++) {
      const photoLink = (
        row[`photo link ${i}`] || 
        row[`photo_link_${i}`] ||
        row[`photo${i}`] ||
        row[`photo_${i}`] ||
        (i === 1 ? (row['photo link'] || row['photo_link'] || '').trim() : '')
      ).trim();
      
      if (photoLink) {
        photoLinks.push(photoLink);
      }
    }

    const item: DesignerRunwayItem = {
      name,
      country: (row.country || '').trim(),
      date,
      youtubeLinks,
      photoLinks,
      photoArticleLink,
      articleLink,
      articleTitle,
      gallery,
    };

    if (item.youtubeLinks.length > 0 || item.photoLinks.length > 0 || item.photoArticleLink || item.articleLink) {
      groupsMap.get(key)!.push(item);
    }
  });

  const groups: DesignerRunwayGroup[] = Array.from(groupsMap.entries()).map(([key, items]) => {
    const [date, name] = key.split('_');
    return {
      date,
      name,
      items,
    };
  });

  groups.sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  });

  return groups;
}

async function updateLocalData() {
  try {
    console.log('🔄 Загрузка данных из Google Sheets...');
    
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`CSV export error: ${response.statusText}`);
    }

    const csvText = await response.text();
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

    const headers = rows[0].map((h) => h.toLowerCase().trim());
    const dataRows = rows.slice(1);

    const data = dataRows
      .map((row) => {
        const rowData: any = {};
        headers.forEach((header, index) => {
          rowData[header] = row[index] || '';
        });
        return rowData;
      })
      .filter((row) => row.name && row.date);

    const transformedData = transformRunwaysData(data);

    const fileContent = `// Локальные данные для SSR (SEO индексация)
// Автоматически обновлено: ${new Date().toISOString()}
// Эти данные используются при серверном рендеринге для индексации поисковыми роботами
// После загрузки страницы данные обновляются из Google Sheets

import type { DesignerRunwayGroup } from '~/composables/useDesignerRunways';

export const localDesignerRunwaysData: DesignerRunwayGroup[] = ${JSON.stringify(transformedData, null, 2)};
`;

    // Используем process.cwd() для получения корневой директории проекта
    const filePath = join(process.cwd(), 'constants', 'designerRunwaysData.ts');
    writeFileSync(filePath, fileContent, 'utf-8');

    console.log(`✅ Данные успешно обновлены: ${transformedData.length} групп`);
    console.log(`📝 Файл сохранен: ${filePath}`);
  } catch (error: any) {
    console.error('❌ Ошибка обновления данных:', error.message);
    process.exit(1);
  }
}

updateLocalData();

