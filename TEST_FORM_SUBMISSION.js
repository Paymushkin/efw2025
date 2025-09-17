function testFormSubmission() {
  try {
    Logger.log('=== ТЕСТ ОТПРАВКИ ФОРМЫ ===');
    
    // Симулируем данные формы
    const testData = {
      action: 'submit',
      companyName: 'Test Company',
      industry: 'Beauty & Cosmetics Brands',
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'Test message',
      agreement1: 'true',
      agreement2: 'true',
      timestamp: new Date().toISOString(),
      source: 'Waitlist Form',
      status: 'WAITLIST'
    };
    
    Logger.log('Тестовые данные:', testData);
    
    // Открываем таблицу
    const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
    Logger.log('Таблица открыта:', sheet.getName());
    
    // Добавляем данные в таблицу
    const rowData = [
      new Date(),
      testData.companyName || '',
      testData.industry || '',
      testData.name || '',
      testData.email || '',
      testData.phone || '',
      testData.message || '',
      testData.agreement1 === 'true' ? 'Yes' : 'No',
      testData.agreement2 === 'true' ? 'Yes' : 'No',
      testData.timestamp || '',
      testData.source || '',
      testData.status || 'WAITLIST' // Используем переданный статус
    ];
    
    Logger.log('Данные для записи:', rowData);
    Logger.log('Статус (12-я колонка):', rowData[11]);
    
    // Записываем в таблицу
    sheet.appendRow(rowData);
    Logger.log('Данные записаны в таблицу');
    
    // Проверяем последнюю записанную строку
    const lastRow = sheet.getLastRow();
    Logger.log('Последняя строка:', lastRow);
    
    if (lastRow > 0) {
      const lastRowData = sheet.getRange(lastRow, 1, 1, 12).getValues()[0];
      Logger.log('Последняя записанная строка:', lastRowData);
      Logger.log('Статус в последней строке (L):', lastRowData[11]);
    }
    
  } catch (error) {
    Logger.log('ОШИБКА:', error.toString());
  }
}

function doGet(e) {
  try {
    Logger.log('=== doGet ВЫЗВАН ===');
    Logger.log('Параметры:', e.parameter);
    
    // Проверяем JSONP callback
    const callback = e.parameter && e.parameter.callback;
    Logger.log('Callback:', callback);
    
    if (e.parameter && e.parameter.action === 'submit') {
      Logger.log('Обрабатываем submit action');
      
      const data = e.parameter;
      Logger.log('Данные из формы:', data);
      Logger.log('Статус из формы:', data.status);
      
      // Открываем таблицу
      const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
      Logger.log('Таблица открыта:', sheet.getName());
      
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
        data.status || 'WAITLIST' // Используем переданный статус
      ];
      
      Logger.log('Данные для записи:', rowData);
      Logger.log('Статус (12-я колонка):', rowData[11]);
      
      // Записываем в таблицу
      sheet.appendRow(rowData);
      Logger.log('Данные записаны в таблицу');
      
      const response = {
        success: true,
        message: 'Data submitted successfully',
        status: data.status || 'WAITLIST'
      };
      
      if (callback) {
        // JSONP ответ
        return ContentService.createTextOutput(`${callback}(${JSON.stringify(response)})`).setMimeType(ContentService.MimeType.JAVASCRIPT);
      } else {
        // Обычный JSON ответ
        return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    if (e.parameter && e.parameter.action === 'getCompanies') {
      Logger.log('Обрабатываем getCompanies action');
      
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
          status: row[11] || ''
        };
      });
      
      Logger.log('Всего компаний:', companies.length);
      Logger.log('Первая компания:', companies[0]);
      
      const response = {
        success: true,
        companies: companies
      };
      
      if (callback) {
        // JSONP ответ
        return ContentService.createTextOutput(`${callback}(${JSON.stringify(response)})`).setMimeType(ContentService.MimeType.JAVASCRIPT);
      } else {
        // Обычный JSON ответ
        return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    const response = {
      success: false,
      message: 'Invalid action'
    };
    
    if (callback) {
      // JSONP ответ
      return ContentService.createTextOutput(`${callback}(${JSON.stringify(response)})`).setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      // Обычный JSON ответ
      return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    Logger.log('Ошибка в doGet:', error.toString());
    const response = {
      success: false,
      error: error.toString()
    };
    
    if (callback) {
      // JSONP ответ
      return ContentService.createTextOutput(`${callback}(${JSON.stringify(response)})`).setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      // Обычный JSON ответ
      return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
    }
  }
}
