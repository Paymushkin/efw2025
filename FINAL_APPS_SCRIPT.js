function doPost(e) {
  try {
    Logger.log('doPost called');
    Logger.log('e parameter:', e);
    Logger.log('e type:', typeof e);
    
    // Проверяем, что параметр e существует
    if (!e) {
      Logger.log('Error: Parameter e is undefined');
      return ContentService.createTextOutput(JSON.stringify({error: 'Parameter e is undefined'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    let data = {};
    
    // Пробуем получить данные из postData (JSON)
    if (e.postData && e.postData.contents) {
      Logger.log('Getting data from postData.contents');
      Logger.log('postData.contents:', e.postData.contents);
      data = JSON.parse(e.postData.contents);
    }
    // Если нет postData, пробуем получить из parameters (URL encoded)
    else if (e.parameter) {
      Logger.log('Getting data from parameters');
      Logger.log('parameters:', e.parameter);
      data = e.parameter;
    }
    else {
      Logger.log('Error: No data found in postData or parameters');
      Logger.log('Available properties:', Object.keys(e));
      return ContentService.createTextOutput(JSON.stringify({error: 'No data found'})).setMimeType(ContentService.MimeType.JSON);
    }
    
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
      data.agreement1 === 'true' || data.agreement1 === true ? 'Yes' : 'No',
      data.agreement2 === 'true' || data.agreement2 === true ? 'Yes' : 'No',
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
    Logger.log('doGet called');
    Logger.log('e parameter:', e);
    Logger.log('e type:', typeof e);
    Logger.log('e is null:', e === null);
    Logger.log('e is undefined:', e === undefined);
    
    // Проверяем, что параметр e существует
    if (!e) {
      Logger.log('Error: Parameter e is undefined in doGet');
      return ContentService.createTextOutput(JSON.stringify({error: 'Parameter e is undefined'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('e.parameter exists:', !!e.parameter);
    if (e.parameter) {
      Logger.log('e.parameter:', e.parameter);
      Logger.log('e.parameter.action:', e.parameter.action);
    }
    
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
    
    // Обрабатываем отправку данных (action=submit)
    if (e.parameter && e.parameter.action === 'submit') {
      Logger.log('Processing submit action');
      Logger.log('Parameters:', e.parameter);
      
      const data = e.parameter;
      
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
        data.agreement1 === 'true' ? 'Yes' : 'No',
        data.agreement2 === 'true' ? 'Yes' : 'No',
        data.timestamp || '',
        data.source || ''
      ];
      
      Logger.log('Row data to append:', rowData);
      sheet.appendRow(rowData);
      Logger.log('Row appended successfully');
      
      return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
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

// Функция для тестирования doGet
function testGetCount() {
  Logger.log('Testing getCount...');
  
  const e = {
    parameter: {
      action: 'getCount'
    }
  };
  
  const result = doGet(e);
  Logger.log('GetCount result:', result.getContent());
  
  Logger.log('testGetCount finished.');
}

// Функция для тестирования submit через GET
function testSubmitGet() {
  Logger.log('Testing submit via GET...');
  
  // Создаем объект e с параметрами
  const e = {
    parameter: {
      action: 'submit',
      companyName: 'Test Company LLC',
      industry: 'Beauty & Cosmetics Brands',
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message via GET.',
      agreement1: 'true',
      agreement2: 'true',
      timestamp: new Date().toISOString(),
      source: 'Test GET Function'
    }
  };
  
  Logger.log('Test e object:', e);
  Logger.log('Test e.parameter:', e.parameter);
  
  const result = doGet(e);
  Logger.log('Submit GET result:', result.getContent());
  
  Logger.log('testSubmitGet finished.');
}

// Простая функция для прямого тестирования добавления в таблицу
function testDirectAdd() {
  Logger.log('Testing direct add to sheet...');
  
  try {
    // Открываем таблицу
    const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
    Logger.log('Sheet opened successfully');
    
    // Добавляем тестовые данные
    const rowData = [
      new Date(),
      'Test Company LLC',
      'Beauty & Cosmetics Brands',
      'Test User',
      'test@example.com',
      '+1234567890',
      'This is a direct test message.',
      'Yes',
      'Yes',
      new Date().toISOString(),
      'Direct Test Function'
    ];
    
    Logger.log('Row data to append:', rowData);
    sheet.appendRow(rowData);
    Logger.log('Row appended successfully');
    
    Logger.log('testDirectAdd finished successfully');
    
  } catch (error) {
    Logger.log('Error in testDirectAdd: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
  }
}
