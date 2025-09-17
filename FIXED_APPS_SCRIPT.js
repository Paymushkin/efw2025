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
      data.source || '',
      data.status || 'WAITLIST' // Используем переданный статус или WAITLIST по умолчанию
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
    
    // Получаем список компаний
    if (e.parameter && e.parameter.action === 'getCompanies') {
      Logger.log('Processing getCompanies action');
      
      const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
      const data = sheet.getDataRange().getDisplayValues();
      
      Logger.log('Raw sheet data rows:', data.length);
      Logger.log('First row (headers):', data[0]);
      Logger.log('Headers length:', data[0].length);
      Logger.log('Header at index 11 (status column):', data[0][11]);
      if (data.length > 1) {
        Logger.log('Second row (first data):', data[1]);
        Logger.log('Second row length:', data[1].length);
        Logger.log('Status value in second row:', data[1][11]);
      }
      
      // Пропускаем заголовок (первую строку)
      const companies = data.slice(1).map((row, index) => {
        // Логируем сырые данные строки для отладки
        if (index < 3) {
          Logger.log(`Raw row ${index + 1}:`, row);
          Logger.log(`Row length:`, row.length);
          Logger.log(`Status column (index 11):`, row[11]);
          Logger.log(`Status column type:`, typeof row[11]);
        }
        
        // Пробуем получить статус разными способами для dropdown ячеек
        let status = row[11] || '';
        
        // Если статус пустой, пробуем получить его как текст
        if (!status && row[11] !== undefined) {
          status = row[11].toString();
        }
        
        // Логируем финальный статус для первых 3 компаний
        if (index < 3) {
          Logger.log(`Final status for row ${index + 1}:`, status);
        }
        
        const company = {
          timestamp: row[0] ? row[0].toString() : '',
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
        
        // Логируем каждую компанию для отладки
        if (index < 3) { // Логируем только первые 3 компании
          Logger.log(`Company ${index + 1}:`, company);
        }
        
        return company;
      });
      
      Logger.log('Found companies:', companies.length);
      Logger.log('First company:', companies[0]);
      
      // Проверяем статусы
      const statusCounts = {};
      companies.forEach(company => {
        const status = company.status || 'no-status';
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      });
      Logger.log('Status distribution:', statusCounts);
      
      return ContentService.createTextOutput(JSON.stringify({success: true, companies: companies})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Получаем FAQ данные
    if (e.parameter && e.parameter.action === 'getFaq') {
      Logger.log('Processing getFaq action');
      const result = getFaq();
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
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
        data.source || '',
        data.status || 'WAITLIST' // Используем переданный статус или WAITLIST по умолчанию
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

// Функция для тестирования получения компаний с подробной отладкой
function testGetCompanies() {
  Logger.log('Testing getCompanies...');
  
  try {
    // Тестируем напрямую логику получения данных из таблицы
    Logger.log('Opening sheet...');
    const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
    Logger.log('Sheet opened successfully');
    
    const data = sheet.getDataRange().getDisplayValues();
    Logger.log('Raw sheet data rows:', data.length);
    Logger.log('First row (headers):', data[0]);
    Logger.log('Headers length:', data[0].length);
    Logger.log('Header at index 11 (status column):', data[0][11]);
    
    if (data.length > 1) {
      Logger.log('Second row (first data):', data[1]);
      Logger.log('Second row length:', data[1].length);
      Logger.log('Status value in second row:', data[1][11]);
    }
    
    // Тестируем обработку первых 3 строк
    const companies = data.slice(1, 4).map((row, index) => {
      Logger.log(`Raw row ${index + 1}:`, row);
      Logger.log(`Row length:`, row.length);
      Logger.log(`Status column (index 11):`, row[11]);
      Logger.log(`Status column type:`, typeof row[11]);
      
      // Пробуем получить статус разными способами
      let status = row[11] || '';
      
      // Если статус пустой, пробуем получить его как текст
      if (!status && row[11] !== undefined) {
        status = row[11].toString();
      }
      
      Logger.log(`Final status for row ${index + 1}:`, status);
      
      return {
        timestamp: row[0] ? row[0].toString() : '',
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
    });
    
    Logger.log('Processed companies:', companies);
    
    // Проверяем статусы
    const statusCounts = {};
    companies.forEach(company => {
      const status = company.status || 'no-status';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    Logger.log('Status distribution:', statusCounts);
    
  } catch (error) {
    Logger.log('Error in testGetCompanies:', error);
  }
  
  Logger.log('testGetCompanies finished.');
}

// Функция для тестирования getFaq
function testGetFaq() {
  Logger.log('Testing getFaq...');
  
  const e = {
    parameter: {
      action: 'getFaq'
    }
  };
  
  const result = doGet(e);
  Logger.log('GetFaq result:', result.getContent());
  
  Logger.log('testGetFaq finished.');
}

// Функция для проверки структуры таблицы
function checkSheetStructure() {
  Logger.log('Checking sheet structure...');
  
  try {
    const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    Logger.log('Total rows:', data.length);
    Logger.log('Total columns:', data[0] ? data[0].length : 0);
    
    if (data.length > 0) {
      Logger.log('Headers:', data[0]);
    }
    
    if (data.length > 1) {
      Logger.log('First data row:', data[1]);
      Logger.log('Status column (index 11):', data[1][11]);
    }
    
    Logger.log('checkSheetStructure finished.');
    
  } catch (error) {
    Logger.log('Error in checkSheetStructure: ' + error.toString());
  }
}

// Функция для тестирования doPost
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
    source: 'Test Function',
    status: 'waitlist'

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
      source: 'Test GET Function',
      status: 'waitlist'
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
      'Direct Test Function',
      'waitlist'
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

// Отдельная функция для получения FAQ данных
function getFaq() {
  Logger.log('getFaq function called');
  
  try {
    // Открываем лист FAQ (предполагаем, что он называется "FAQ")
    const spreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
    let sheet;
    
    try {
      // Пробуем открыть лист "FAQ"
      sheet = spreadsheet.getSheetByName('FAQ');
      if (!sheet) {
        Logger.log('FAQ sheet not found');
        return { success: false, error: 'FAQ sheet not found' };
      } else {
        Logger.log('FAQ sheet found successfully');
      }
    } catch (error) {
      Logger.log('Error opening FAQ sheet:', error.toString());
      return { success: false, error: error.toString() };
    }
    
    const data = sheet.getDataRange().getValues();
    
    Logger.log('FAQ sheet data rows:', data.length);
    Logger.log('Sheet name:', sheet.getName());
    Logger.log('Sheet ID:', sheet.getSheetId());
    if (data.length > 0) {
      Logger.log('FAQ headers:', data[0]);
      Logger.log('First few rows:', data.slice(0, 3));
    } else {
      Logger.log('No data found in sheet');
      return { success: true, faq: [] };
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
    return { success: false, error: error.toString() };
  }
}