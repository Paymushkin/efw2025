export default defineEventHandler(async (event) => {
  try {
    // ID таблицы компаний (из рабочего скрипта)
    const SPREADSHEET_ID = '1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM';
    
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
    
    // Преобразуем в формат компаний (согласно структуре из рабочего скрипта)
    const companies = rows.map((row, index) => ({
      timestamp: row[0] || '',
      companyName: row[1] || '',
      industry: row[2] || '',
      name: row[3] || '',
      email: row[4] || '',
      phone: row[5] || '',
      message: row[6] || '',
      agreement1: row[7] || '',
      agreement2: row[8] || '',
      ipAddress: row[9] || '',
      userAgent: row[10] || '',
      status: row[11] || 'WAITLIST'
    })).filter(company => company.companyName); // Фильтруем пустые записи
    
    // Отладочная информация
    console.log('Companies from CSV:', companies.length);
    if (companies.length > 0) {
      console.log('First company:', JSON.stringify(companies[0], null, 2));
      console.log('Status distribution:', companies.reduce((acc, company) => {
        const status = company.status || 'no-status';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {}));
    }
    
    return { success: true, companies: companies };
    
  } catch (error) {
    console.error('Error fetching companies from CSV:', error);
    return { success: true, companies: [], error: error.message };
  }
});
