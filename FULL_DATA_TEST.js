function testAllData() {
  try {
    Logger.log('=== ПОЛНЫЕ ДАННЫЕ ИЗ ТАБЛИЦЫ ===');
    
    const spreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
    const sheet = spreadsheet.getActiveSheet();
    
    Logger.log('Таблица:', spreadsheet.getName());
    Logger.log('Лист:', sheet.getName());
    Logger.log('Строк:', sheet.getLastRow());
    Logger.log('Колонок:', sheet.getLastColumn());
    
    // Получаем все данные
    const data = sheet.getDataRange().getDisplayValues();
    
    Logger.log('=== ВСЕ ДАННЫЕ ===');
    for (let i = 0; i < data.length; i++) {
      Logger.log(`--- Строка ${i + 1} ---`);
      for (let j = 0; j < data[i].length; j++) {
        const columnLetter = String.fromCharCode(65 + j); // A, B, C, ...
        Logger.log(`${columnLetter}${i + 1}:`, data[i][j]);
      }
    }
    
    // Проверяем конкретно колонку L (статус)
    Logger.log('=== КОЛОНКА L (СТАТУС) ===');
    for (let i = 0; i < data.length; i++) {
      if (data[i].length > 11) {
        Logger.log(`L${i + 1}:`, data[i][11]);
      }
    }
    
  } catch (error) {
    Logger.log('ОШИБКА:', error.toString());
  }
}

function doGet(e) {
  try {
    if (e.parameter && e.parameter.action === 'getCompanies') {
      const spreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
      const sheet = spreadsheet.getActiveSheet();
      const data = sheet.getDataRange().getDisplayValues();
      
      Logger.log('=== ОТЛАДКА В doGet ===');
      Logger.log('Количество строк:', data.length);
      Logger.log('Количество колонок:', data[0] ? data[0].length : 0);
      
      if (data.length > 0) {
        Logger.log('Заголовки:', data[0]);
      }
      
      if (data.length > 1) {
        Logger.log('Первая строка данных:', data[1]);
        Logger.log('Длина первой строки:', data[1].length);
        if (data[1].length > 11) {
          Logger.log('Статус в первой строке (L2):', data[1][11]);
        }
      }
      
      const companies = data.slice(1).map((row, index) => {
        const company = {
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
          status: row[11] || ''
        };
        
        // Логируем первые 3 компании
        if (index < 3) {
          Logger.log(`Компания ${index + 1}:`, company);
        }
        
        return company;
      });
      
      Logger.log('Всего компаний:', companies.length);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        companies: companies
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Invalid action'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Ошибка в doGet:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}


