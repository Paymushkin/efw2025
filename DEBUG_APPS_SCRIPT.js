function doPost(e) {
  try {
    // Логируем входящие данные
    console.log('Received data:', e.postData.contents);
    
    // Получаем данные из запроса
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Открываем таблицу
    const sheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM').getActiveSheet();
    console.log('Sheet opened successfully');
    
    // Проверяем, что таблица доступна
    const sheetName = sheet.getName();
    console.log('Sheet name:', sheetName);
    
    // Добавляем новую строку
    const newRow = [
      new Date(), // Timestamp
      data.companyName,
      data.industry,
      data.name || '',
      data.email,
      data.phone || '',
      data.message || '',
      data.agreement1 ? 'Yes' : 'No',
      data.agreement2 ? 'Yes' : 'No'
    ];
    
    console.log('Adding row:', newRow);
    sheet.appendRow(newRow);
    console.log('Row added successfully');
    
    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true, 
        message: 'Data added successfully',
        rowData: newRow
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    console.error('Error details:', error.toString());
    
    // Возвращаем ошибку
    return ContentService
      .createTextOutput(JSON.stringify({
        error: error.toString(),
        message: 'Failed to add data'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для тестирования
function testFunction() {
  const testData = {
    companyName: 'Test Company',
    industry: 'Test Industry',
    name: 'Test Name',
    email: 'test@example.com',
    phone: '+1234567890',
    message: 'Test message',
    agreement1: true,
    agreement2: true
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
