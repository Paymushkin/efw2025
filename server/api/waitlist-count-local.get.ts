import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    // Путь к файлу данных
    const dataPath = join(process.cwd(), 'waitlist-data.json');
    
    let count = 0;
    try {
      const fileContent = await readFile(dataPath, 'utf-8');
      const data = JSON.parse(fileContent);
      count = data.length;
    } catch (error) {
      // Файл не существует, возвращаем 0
      console.log('Data file does not exist, returning 0');
    }

    return {
      success: true,
      count: count
    };

  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return {
      success: false,
      count: 0,
      error: error.message
    };
  }
});
