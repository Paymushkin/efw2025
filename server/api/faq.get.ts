export default defineEventHandler(async (event) => {
  try {
    // Используем оригинальный URL для локальных API
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbWqpE_TR7HJoClggVpGBYdUGcssKxWOpbFAa7nZGQp69jrE0hUxLiiCx5nY8T_x70jg/exec';
    
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
