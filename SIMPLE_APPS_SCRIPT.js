function doGet(e) {
  try {
    Logger.log('doGet called');
    Logger.log('e:', e);
    Logger.log('e.parameter:', e.parameter);
    Logger.log('e.parameter.action:', e.parameter ? e.parameter.action : 'undefined');
    
    // Проверяем action параметр
    if (e.parameter && e.parameter.action === 'getCount') {
      const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
      const lastRow = sheet.getLastRow();
      const count = Math.max(0, lastRow - 1);
      
      Logger.log('Count:', count);
      
      const result = {success: true, count: count};
      
      // Проверяем, есть ли callback для JSONP
      if (e.parameter.callback) {
        const callback = e.parameter.callback;
        return ContentService.createTextOutput(`${callback}(${JSON.stringify(result)})`).setMimeType(ContentService.MimeType.JAVASCRIPT);
      } else {
        return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Обрабатываем отправку данных
    if (e.parameter && e.parameter.action === 'submit') {
      Logger.log('Processing submit');
      
      const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
      
      const rowData = [
        new Date(),
        e.parameter.companyName || '',
        e.parameter.industry || '',
        e.parameter.name || '',
        e.parameter.email || '',
        e.parameter.phone || '',
        e.parameter.message || '',
        e.parameter.agreement1 === 'true' ? 'Yes' : 'No',
        e.parameter.agreement2 === 'true' ? 'Yes' : 'No',
        e.parameter.timestamp || '',
        e.parameter.source || ''
      ];
      
      sheet.appendRow(rowData);
      Logger.log('Row added successfully');
      
      return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({error: 'Invalid action'})).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

// Простая тестовая функция
function testSimple() {
  Logger.log('Testing simple function...');
  
  const e = {
    parameter: {
      action: 'submit',
      companyName: 'Test Company',
      industry: 'Beauty',
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'Test message',
      agreement1: 'true',
      agreement2: 'true',
      timestamp: new Date().toISOString(),
      source: 'Test'
    }
  };
  
  const result = doGet(e);
  Logger.log('Result:', result.getContent());
}
