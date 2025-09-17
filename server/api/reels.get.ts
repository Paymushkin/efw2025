export default defineEventHandler(async (event) => {
  try {
    // ID таблицы с видео
    const SPREADSHEET_ID = '12hBjIa1dMRgX7nVGBMvoAK_1d3Nxl4K-Gi0z9TIB4dQ';

    // Публичный CSV endpoint (работает только если таблица публичная)
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;

    const response = await fetch(CSV_URL);

    if (!response.ok) {
      throw new Error(`CSV export error: ${response.statusText}`);
    }

    const csvText = await response.text();

    // Парсим CSV правильно (учитывая запятые в кавычках)
    const lines = csvText.split('\n');
    const rows = lines.filter(line => line.trim()).map(line => {
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

    // Преобразуем в массив ссылок на видео
    const videoUrls = rows
      .map(row => row[0]?.trim()) // Берем первую колонку
      .filter(url => url && url.startsWith('http')) // Фильтруем только валидные URL
      .map(url => url.replace(/^"(.*)"$/, '$1')) // Убираем кавычки если есть
      .filter((url, index, array) => array.indexOf(url) === index); // Убираем дубликаты

    console.log('Video URLs from CSV:', videoUrls.length);
    console.log('First video URL:', videoUrls[0]);

    return { success: true, videos: videoUrls };

  } catch (error) {
    console.error('Error fetching reels from CSV:', error);
    return { success: true, videos: [], error: error.message };
  }
});
