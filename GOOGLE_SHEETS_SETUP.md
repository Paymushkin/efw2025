# Настройка Google Sheets для записи данных регистрации

## Шаг 1: Настройка Google Apps Script

1. Откройте Google Sheets: https://docs.google.com/spreadsheets/d/12ZCFRsBNj2zEqKGjlbgmLX1N-05FE6NUFU2XL0jk8FY/edit

2. Перейдите в **Extensions > Apps Script**

3. Удалите весь существующий код и вставьте код из файла `google-apps-script.js`

4. Сохраните проект (Ctrl+S или Cmd+S)

## Шаг 2: Развертывание веб-приложения

1. В Apps Script нажмите **Deploy > New deployment**

2. Выберите тип: **Web app**

3. Настройки:
   - **Execute as**: Me (your-email@gmail.com)
   - **Who has access**: Anyone

4. Нажмите **Deploy**

5. **ВАЖНО**: Скопируйте URL веб-приложения (Web app URL)

## Шаг 3: Обновление API endpoint

1. Откройте файл `server/api/register-guest.post.ts`

2. Замените URL в коде на ваш URL веб-приложения:

```typescript
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## Шаг 4: Тестирование

1. Запустите тест в Apps Script:
   - В Apps Script нажмите **Run > testFunction**
   - Проверьте, что данные появились в таблице

2. Протестируйте регистрацию на сайте:
   - Заполните форму регистрации
   - Проверьте, что данные записались в Google Sheets

## Структура данных в таблице

| Name | Company | Email | Inviter | Timestamp | Source |
|------|---------|-------|---------|-----------|--------|
| John Doe | ABC Corp | john@example.com | by Marina Krapivina | 2025-01-27T10:30:00Z | EFW Registration |

## Устранение неполадок

- **Ошибка доступа**: Убедитесь, что веб-приложение развернуто с доступом "Anyone"
- **Данные не записываются**: Проверьте, что лист называется "efw2025" или используйте активный лист
- **CORS ошибки**: Apps Script автоматически обрабатывает CORS для веб-приложений