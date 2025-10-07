/**
 * Google Apps Script для записи данных регистрации в Google Sheets
 * 
 * Инструкция по настройке:
 * 1. Откройте Google Sheets: https://docs.google.com/spreadsheets/d/12ZCFRsBNj2zEqKGjlbgmLX1N-05FE6NUFU2XL0jk8FY/edit
 * 2. Перейдите в Extensions > Apps Script
 * 3. Вставьте этот код
 * 4. Сохраните и разверните как веб-приложение
 * 5. Скопируйте URL веб-приложения и используйте в API endpoint
 */

function doGet(e) {
  try {
    Logger.log('=== EFW Registration doGet ВЫЗВАН ===');
    Logger.log('Параметры:', e.parameter);
    
    if (e.parameter && e.parameter.action === 'submit') {
      Logger.log('Обрабатываем submit action для регистрации');
      
      const data = e.parameter;
      Logger.log('Данные из формы:', data);
      
      // Открываем таблицу
      const spreadsheet = SpreadsheetApp.openById('12ZCFRsBNj2zEqKGjlbgmLX1N-05FE6NUFU2XL0jk8FY');
      const sheet = spreadsheet.getSheetByName('efw2025') || spreadsheet.getActiveSheet();
      Logger.log('Таблица открыта:', sheet.getName());
      
      // Добавляем заголовки, если лист пустой
      if (sheet.getLastRow() === 0) {
        const headers = ['Name', 'Company', 'Email', 'Inviter', 'Barcode', 'Timestamp', 'Source'];
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
        Logger.log('Заголовки добавлены');
      }
      
      // Подготавливаем данные для записи
      const rowData = [
        data.name || '',
        data.company || '',
        data.email || '',
        data.inviter || '',
        data.barcode || '',
        data.timestamp || new Date().toISOString(),
        data.source || 'EFW Registration'
      ];
      
      Logger.log('Данные для записи:', rowData);
      
      // Записываем в таблицу
      sheet.appendRow(rowData);
      Logger.log('Данные записаны в таблицу');
      
      // Проверяем последнюю записанную строку
      const lastRow = sheet.getLastRow();
      Logger.log('Последняя строка:', lastRow);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Registration data saved successfully',
        row: lastRow
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    
    // Простая проверка работоспособности
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Apps Script is working',
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Ошибка в doGet:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * Функция для тестирования (можно запустить вручную)
 */
function testFunction() {
  const testData = {
    name: 'Test User',
    company: 'Test Company',
    email: 'test@example.com',
    inviter: 'Test Inviter',
    barcode: '123456789',
    timestamp: new Date().toISOString(),
    source: 'Test Registration'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
