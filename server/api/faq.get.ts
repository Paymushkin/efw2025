export default defineEventHandler(async (event) => {
  try {
    // ID таблицы FAQ
    const SPREADSHEET_ID = '1z3JLJVzDADNCa6oSq3R701xLB8K5yyuCFlPZpSMXa1s';
    
    // Публичный CSV endpoint (работает только если таблица публичная)
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=229786536`;
    
    const response = await fetch(CSV_URL);
    
    if (!response.ok) {
      throw new Error(`CSV export error: ${response.statusText}`);
    }
    
    const csvText = await response.text();
    
    // Парсим CSV правильно (учитывая запятые в кавычках)
    const lines = csvText.split('\n').filter(line => line.trim());
    
    // Пропускаем первую строку, если она содержит заголовки
    const dataLines = lines.length > 0 && lines[0].toLowerCase().includes('entry') 
      ? lines.slice(1) 
      : lines;
    
    const rows = dataLines.map(line => {
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
    
    // Преобразуем в FAQ формат
    const faqItems = rows.map((row, index) => ({
      id: `faq-${index + 1}`,
      question: row[0] || '',
      answer: row[1] || '',
      order: row[2] ? parseInt(row[2]) : (index + 1)
    })).filter(item => item.question && item.answer);
    
    console.log('FAQ items from CSV:', faqItems.length);
    
    return { success: true, faq: faqItems };
    
  } catch (error) {
    console.error('Error fetching FAQ from CSV:', error);
    return { success: true, faq: [], error: error.message };
  }
});