function doPost(e) {
  try {
    Logger.log('doPost called with parameter:', e);
    
    // Проверяем, что параметр e существует
    if (!e) {
      Logger.log('Error: Parameter e is undefined');
      return ContentService.createTextOutput(JSON.stringify({error: 'Parameter e is undefined'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Проверяем, что postData существует
    if (!e.postData) {
      Logger.log('Error: postData is undefined');
      return ContentService.createTextOutput(JSON.stringify({error: 'postData is undefined'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Проверяем, что contents существует
    if (!e.postData.contents) {
      Logger.log('Error: postData.contents is undefined');
      return ContentService.createTextOutput(JSON.stringify({error: 'postData.contents is undefined'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('postData.contents:', e.postData.contents);
    
    const data = JSON.parse(e.postData.contents);
    Logger.log('Parsed data:', data);
    
    // Открываем таблицу
    const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
    Logger.log('Sheet opened successfully');
    
    // Добавляем данные в таблицу
    const rowData = [
      new Date(),
      data.companyName || '',
      data.industry || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
      data.agreement1 ? 'Yes' : 'No',
      data.agreement2 ? 'Yes' : 'No',
      data.timestamp || '',
      data.source || ''
    ];
    
    Logger.log('Row data to append:', rowData);
    sheet.appendRow(rowData);
    Logger.log('Row appended successfully');
    
    return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    Logger.log('doGet called with parameter:', e);
    
    // Проверяем action параметр
    if (e.parameter && e.parameter.action === 'getCount') {
      const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
      const lastRow = sheet.getLastRow();
      // Вычитаем 1, так как первая строка - это заголовки
      const count = Math.max(0, lastRow - 1);
      
      Logger.log('Total rows:', lastRow);
      Logger.log('Applications count:', count);
      
      return ContentService.createTextOutput(JSON.stringify({success: true, count: count})).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({error: 'Invalid action'})).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in doGet: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function testFunction() {
  Logger.log('Running testFunction...');
  
  const testData = {
    companyName: 'Test Company LLC',
    industry: 'Beauty & Cosmetics Brands',
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    message: 'This is a test message.',
    agreement1: true,
    agreement2: true,
    timestamp: new Date().toISOString(),
    source: 'Test Function'
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData),
      type: 'application/json'
    }
  };
  
  Logger.log('Test data:', testData);
  Logger.log('Test parameter e:', e);
  
  const result = doPost(e);
  Logger.log('Test result:', result.getContent());
  
  Logger.log('testFunction finished.');
}
