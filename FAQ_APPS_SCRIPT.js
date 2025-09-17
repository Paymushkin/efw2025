// Основная функция для обработки GET запросов
function doGet(e) {
  Logger.log('FAQ doGet called');
  
  // Проверяем, что e существует (может быть undefined при прямом запуске)
  if (!e) {
    Logger.log('No event object provided, returning test data');
    const result = getFaq();
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  }
  
  Logger.log('e parameter:', e.parameter);
  
  if (e.parameter && e.parameter.action === 'getFaq') {
    Logger.log('Processing getFaq action');
    const result = getFaq();
    
    // Если есть callback параметр, возвращаем JSONP
    if (e.parameter.callback) {
      const jsonpResponse = e.parameter.callback + '(' + JSON.stringify(result) + ');';
      return ContentService.createTextOutput(jsonpResponse).setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      // Обычный JSON ответ
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' })).setMimeType(ContentService.MimeType.JSON);
}

// Функция для получения FAQ данных
function getFaq() {
  Logger.log('getFaq function called');
  
  try {
    // Используем отдельную FAQ таблицу
    Logger.log('Opening FAQ spreadsheet with ID: 1FGx4QGu8hqGgRvNXylLEPBhPwynpEUTbI4UJnRcttgg');
    const spreadsheet = SpreadsheetApp.openById('1FGx4QGu8hqGgRvNXylLEPBhPwynpEUTbI4UJnRcttgg');
    Logger.log('Spreadsheet opened successfully');
    
    // Получаем все листы
    const sheets = spreadsheet.getSheets();
    Logger.log('Available sheets:', sheets.map(sheet => sheet.getName()));
    
    // Проверяем, есть ли лист FAQ
    const faqSheet = spreadsheet.getSheetByName('FAQ');
    if (!faqSheet) {
      Logger.log('FAQ sheet not found');
      return { success: false, error: 'FAQ sheet not found' };
    }
    
    Logger.log('FAQ sheet found:', faqSheet.getName());
    
    // Проверяем размер листа
    const lastRow = faqSheet.getLastRow();
    const lastCol = faqSheet.getLastColumn();
    Logger.log('Sheet dimensions - Last row:', lastRow, 'Last column:', lastCol);
    
    if (lastRow === 0 || lastCol === 0) {
      Logger.log('Sheet is empty');
      return { success: true, faq: [] };
    }
    
    const data = faqSheet.getDataRange().getValues();
    
    Logger.log('FAQ sheet data rows:', data.length);
    Logger.log('Sheet name:', faqSheet.getName());
    if (data.length > 0) {
      Logger.log('FAQ headers:', data[0]);
      Logger.log('First few rows:', data.slice(0, 3));
    }
    
    // Пропускаем заголовок (первую строку)
    const faqItems = data.slice(1).map((row, index) => {
      const faqItem = {
        question: row[0] || '',
        answer: row[1] || ''
      };
      
      // Логируем первые 3 FAQ для отладки
      if (index < 3) {
        Logger.log(`FAQ ${index + 1}:`, faqItem);
      }
      
      return faqItem;
    }).filter(item => item.question && item.answer); // Фильтруем пустые записи
    
    Logger.log('Found FAQ items:', faqItems.length);
    
    if (faqItems.length > 0) {
      return { success: true, faq: faqItems };
    } else {
      Logger.log('No valid FAQ items found, returning empty array');
      return { success: true, faq: [] };
    }
    
  } catch (error) {
    Logger.log('Error in getFaq function: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
    return { success: false, error: error.toString() };
  }
}

// Функция для тестирования
function testGetFaq() {
  Logger.log('Testing getFaq...');
  const result = getFaq();
  Logger.log('GetFaq result:', result);
  Logger.log('testGetFaq finished.');
  return result;
}



