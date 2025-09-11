# Настройка Google Sheets для Waitlist

## Шаг 1: Создание Google Sheet

1. Откройте [Google Sheets](https://sheets.google.com)
2. Создайте новую таблицу
3. Назовите её "EFW Waitlist"
4. Создайте заголовки в первой строке:
   - A1: Timestamp
   - B1: Company Name
   - C1: Industry
   - D1: Name
   - E1: Email
   - F1: Phone
   - G1: Message
   - H1: Agreement 1
   - I1: Agreement 2

## Шаг 2: Создание Google Apps Script

1. В Google Sheets нажмите "Расширения" → "Apps Script"
2. Удалите весь код по умолчанию
3. Вставьте следующий код:

```javascript
function doPost(e) {
  try {
    // Получаем данные из запроса
    const data = JSON.parse(e.postData.contents);
    
    // Открываем таблицу (замените ID на ваш)
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Добавляем новую строку
    sheet.appendRow([
      new Date(), // Timestamp
      data.companyName,
      data.industry,
      data.name || '',
      data.email,
      data.phone || '',
      data.message || '',
      data.agreement1 ? 'Yes' : 'No',
      data.agreement2 ? 'Yes' : 'No'
    ]);
    
    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Возвращаем ошибку
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Шаг 3: Настройка разрешений

1. Сохраните скрипт (Ctrl+S)
2. Нажмите "Развернуть" → "Новое развертывание"
3. Выберите тип: "Веб-приложение"
4. Настройки:
   - Выполнять как: "Я"
   - У кого есть доступ: "Все"
5. Нажмите "Развернуть"
6. Скопируйте URL веб-приложения

## Шаг 4: Обновление кода

1. Откройте файл `server/api/waitlist.post.ts`
2. Замените `YOUR_SCRIPT_ID` на ID из URL веб-приложения
3. Замените `YOUR_SHEET_ID` на ID вашей Google таблицы

## Получение ID таблицы

ID таблицы находится в URL:
`https://docs.google.com/spreadsheets/d/SHEET_ID/edit`

## Получение ID скрипта

ID скрипта находится в URL веб-приложения:
`https://script.google.com/macros/s/SCRIPT_ID/exec`

## Тестирование

После настройки:
1. Заполните форму на сайте
2. Проверьте, что данные появились в Google Sheets
3. Проверьте консоль браузера на ошибки

## Безопасность

Для продакшена рекомендуется:
1. Добавить проверку домена
2. Использовать API ключи
3. Ограничить доступ к скрипту
