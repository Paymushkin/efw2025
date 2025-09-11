// Скрипт для экспорта локальных данных в Google Sheets
// Запустите: node export-to-sheets.js

const fs = require('fs');
const path = require('path');

// ID вашей Google Sheets таблицы
const SHEET_ID = '1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM';

// URL Google Apps Script для экспорта
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5uBhvvOPmM_8pO8zH54v6853vBSrDDPyPqWXrvYiZw1rwfGzSU_nOE2XoTms7yFLE5w/exec';

async function exportToSheets() {
  try {
    // Читаем локальные данные
    const dataPath = path.join(__dirname, 'waitlist-data.json');
    
    if (!fs.existsSync(dataPath)) {
      console.log('Файл waitlist-data.json не найден');
      return;
    }

    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const data = JSON.parse(fileContent);
    
    console.log(`Найдено ${data.length} записей для экспорта`);

    // Отправляем каждую запись в Google Sheets
    for (let i = 0; i < data.length; i++) {
      const record = data[i];
      
      const urlParams = new URLSearchParams();
      urlParams.append('action', 'submit');
      urlParams.append('companyName', record.companyName);
      urlParams.append('industry', record.industry);
      urlParams.append('name', record.name);
      urlParams.append('email', record.email);
      urlParams.append('phone', record.phone);
      urlParams.append('message', record.message);
      urlParams.append('agreement1', record.agreement1 === 'Yes' ? 'true' : 'false');
      urlParams.append('agreement2', record.agreement2 === 'Yes' ? 'true' : 'false');
      urlParams.append('timestamp', record.timestamp);
      urlParams.append('source', record.source);

      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${urlParams.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        console.log(`✓ Запись ${i + 1}/${data.length} экспортирована`);
      } else {
        console.log(`✗ Ошибка экспорта записи ${i + 1}:`, response.status);
      }

      // Небольшая задержка между запросами
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('Экспорт завершен!');

  } catch (error) {
    console.error('Ошибка экспорта:', error);
  }
}

// Запускаем экспорт
exportToSheets();
