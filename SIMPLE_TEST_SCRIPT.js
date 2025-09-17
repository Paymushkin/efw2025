function testStatusColumn() {
  try {
    Logger.log('=== ТЕСТ КОЛОНКИ СТАТУС ===');
    
    // Проверяем доступ к таблице
    const spreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
    Logger.log('Таблица открыта:', spreadsheet.getName());
    
    const sheet = spreadsheet.getActiveSheet();
    Logger.log('Активный лист:', sheet.getName());
    
    // Проверяем размеры листа
    const lastRow = sheet.getLastRow();
    const lastCol = sheet.getLastColumn();
    Logger.log('Последняя строка:', lastRow);
    Logger.log('Последняя колонка:', lastCol);
    
    if (lastRow === 0 || lastCol === 0) {
      Logger.log('ОШИБКА: Лист пустой!');
      return;
    }
    
    // Получаем данные разными способами
    const dataValues = sheet.getDataRange().getValues();
    const dataDisplay = sheet.getDataRange().getDisplayValues();
    
    Logger.log('Количество строк:', dataValues.length);
    Logger.log('Количество колонок:', dataValues[0] ? dataValues[0].length : 0);
    
    // Проверяем заголовки
    Logger.log('Заголовки (getValues):', dataValues[0]);
    Logger.log('Заголовки (getDisplayValues):', dataDisplay[0]);
    
    // Проверяем первые 5 строк данных
    for (let i = 1; i <= Math.min(5, dataValues.length - 1); i++) {
      Logger.log(`--- Строка ${i} ---`);
      Logger.log('getValues[11]:', dataValues[i][11], 'тип:', typeof dataValues[i][11]);
      Logger.log('getDisplayValues[11]:', dataDisplay[i][11], 'тип:', typeof dataDisplay[i][11]);
      
      // Пробуем получить статус напрямую из ячейки
      const cell = sheet.getRange(i + 1, 12); // +1 потому что getRange начинается с 1, а не с 0
      Logger.log('Cell value:', cell.getValue());
      Logger.log('Cell display value:', cell.getDisplayValue());
      Logger.log('Cell formula:', cell.getFormula());
      
      // Проверяем всю строку
      Logger.log('Вся строка:', dataValues[i]);
    }
    
    // Дополнительная проверка - читаем конкретные ячейки
    Logger.log('=== ПРОВЕРКА КОНКРЕТНЫХ ЯЧЕЕК ===');
    for (let row = 2; row <= Math.min(6, lastRow); row++) {
      const statusCell = sheet.getRange(row, 12); // Колонка L (12)
      Logger.log(`Ячейка L${row}:`, statusCell.getDisplayValue());
    }
    
  } catch (error) {
    Logger.log('Ошибка:', error.toString());
  }
}

function doGet(e) {
  try {
    if (e.parameter && e.parameter.action === 'getCompanies') {
      const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
      const data = sheet.getDataRange().getDisplayValues();
      
      const companies = data.slice(1).map((row, index) => {
        return {
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
          status: row[11] || '' // Используем getDisplayValues для правильного чтения dropdown
        };
      });
      
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
