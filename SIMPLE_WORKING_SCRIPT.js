// Простой рабочий Google Apps Script для тестирования
function doGet(e) {
  Logger.log('doGet called with parameters:', e.parameter);
  
  try {
    const action = e.parameter && e.parameter.action;
    
    if (action === 'getCompanies') {
      return getCompanies();
    } else if (action === 'getFaq') {
      return getFaq();
    } else if (action === 'getCount') {
      return getCount();
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        error: 'Invalid action',
        availableActions: ['getCompanies', 'getFaq', 'getCount']
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    Logger.log('Error in doGet:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getCompanies() {
  try {
    Logger.log('getCompanies called');
    
    // Открываем таблицу
    const spreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
    const sheet = spreadsheet.getActiveSheet();
    
    const data = sheet.getDataRange().getValues();
    Logger.log('Sheet data rows:', data.length);
    
    if (data.length <= 1) {
      Logger.log('No data found in sheet');
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        companies: []
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Пропускаем заголовок (первую строку)
    const companies = data.slice(1).map((row, index) => {
      const company = {
        companyName: row[1] || '',
        industry: row[2] || '',
        name: row[3] || '',
        email: row[4] || '',
        phone: row[5] || '',
        message: row[6] || '',
        agreement1: row[7] || '',
        agreement2: row[8] || '',
        timestamp: row[9] || '',
        status: row[10] || 'waitlist' // Добавляем статус
      };
      
      // Логируем первые 3 компании для отладки
      if (index < 3) {
        Logger.log(`Company ${index + 1}:`, company);
      }
      
      return company;
    }).filter(company => company.companyName); // Фильтруем пустые записи
    
    Logger.log('Found companies:', companies.length);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      companies: companies
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in getCompanies:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getFaq() {
  try {
    Logger.log('getFaq called');
    
    // Открываем лист FAQ
    const spreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
    let sheet;
    
    try {
      // Пробуем открыть лист "FAQ"
      sheet = spreadsheet.getSheetByName('FAQ');
      if (!sheet) {
        // Если лист "FAQ" не найден, используем активный лист
        sheet = spreadsheet.getActiveSheet();
        Logger.log('FAQ sheet not found, using active sheet');
      }
    } catch (error) {
      Logger.log('Error opening FAQ sheet:', error.toString());
      sheet = spreadsheet.getActiveSheet();
    }
    
    const data = sheet.getDataRange().getValues();
    Logger.log('FAQ sheet data rows:', data.length);
    
    if (data.length <= 1) {
      Logger.log('No FAQ data found');
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        faq: []
      })).setMimeType(ContentService.MimeType.JSON);
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
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      faq: faqItems
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in getFaq:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getCount() {
  try {
    Logger.log('getCount called');
    
    // Открываем таблицу
    const spreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
    const sheet = spreadsheet.getActiveSheet();
    
    const data = sheet.getDataRange().getValues();
    const count = Math.max(0, data.length - 1); // Исключаем заголовок
    
    Logger.log('Companies count:', count);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      count: count
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in getCount:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для тестирования
function testGetCompanies() {
  Logger.log('Testing getCompanies...');
  
  const e = {
    parameter: {
      action: 'getCompanies'
    }
  };
  
  const result = doGet(e);
  Logger.log('GetCompanies result:', result.getContent());
  
  Logger.log('testGetCompanies finished.');
}

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
