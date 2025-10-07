export default defineEventHandler(async (event) => {
  try {
    // ID таблицы дизайнеров из Google Sheets
    const SPREADSHEET_ID = '1hr5eZ148EVDLhAdcY6L1t_PyNGlBtlQNIKm1jGhrQhw';
    
    // Публичный CSV endpoint
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
    
    // Преобразуем в формат дизайнеров
    const designers = rows.slice(1).map((row, index) => ({
      name: row[0] || '',
      country: row[1] || '',
      day: row[2] || '',
      month: row[3] || '',
      confirmed: row[4] === 'TRUE'
    })).filter(designer => designer.name); // Фильтруем пустые записи
    
    // Группируем по дням
    const designersByDay = designers.reduce((acc, designer) => {
      const day = designer.day;
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(designer);
      return acc;
    }, {} as Record<string, typeof designers>);
    
    return {
      success: true,
      designers: designersByDay,
      total: designers.length
    };
    
  } catch (error) {
    console.error('Error fetching designers:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      designers: {},
      total: 0
    };
  }
});


