export default defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxUuh8iEc5YE8k2q5e36DE66OpYPetpEOA0YdpQm0QwRXqqEcBDPcU5xP0RZI71R-bsbA/exec';
    
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getCompanies`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    
    const result = await response.json();
    
    // Отладочная информация
    console.log('Raw result from Google Sheets:', JSON.stringify(result, null, 2));
    if (result.companies && result.companies.length > 0) {
      console.log('First company:', JSON.stringify(result.companies[0], null, 2));
      console.log('Status distribution:', result.companies.reduce((acc, company) => {
        const status = company.status || 'no-status';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {}));
    }
    
    // Используем статусы как есть из таблицы, без автоматического назначения
    
    return { success: true, companies: result.companies || [] };
  } catch (error) {
    console.error('Error fetching companies list:', error);
    // Возвращаем пустой список вместо ошибки
    return { success: true, companies: [], error: error.message };
  }
});
