export default defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygds0XlVVKqRN56BVHo4S25BN96LRz8urJuur9crjlOR3lgYl__MHwrgu_GmKU_wjEPg/exec';
    
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getFaq`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    
    const result = await response.json();
    return { success: true, faq: result.faq || [] };
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    // Возвращаем пустой список вместо ошибки
    return { success: true, faq: [], error: error.message };
  }
});
