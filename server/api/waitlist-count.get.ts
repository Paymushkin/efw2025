export default defineEventHandler(async (event) => {
  try {
    // Google Sheets API endpoint для получения количества строк
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5uBhvvOPmM_8pO8zH54v6853vBSrDDPyPqWXrvYiZw1rwfGzSU_nOE2XoTms7yFLE5w/exec';
    
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getCount`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      count: result.count || 0
    };

  } catch (error) {
    console.error('Error getting waitlist count:', error);
    // Возвращаем 0 в случае ошибки, чтобы не ломать UI
    return {
      success: false,
      count: 0,
      error: error.message
    };
  }
});
