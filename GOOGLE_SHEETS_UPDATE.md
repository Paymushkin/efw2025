# Обновление Google Sheets для поддержки статусов компаний

## Что нужно сделать:

### 1. Обновить Google Apps Script
1. Откройте Google Apps Script: https://script.google.com/
2. Найдите проект для Emirates Fashion Week
3. Замените весь код на содержимое файла `UPDATED_APPS_SCRIPT.js`
4. Сохраните и разверните как веб-приложение

### 2. Проверить структуру Google Sheets
Убедитесь, что в таблице есть следующие колонки (в правильном порядке):

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Company Name | Industry | Name | Email | # Phone | Message | Agreement 1 | Agreement 2 | IP Address | User Agent | **status** |

### 3. Добавить колонку status (если её нет)
Если колонка `status` отсутствует:
1. Добавьте новую колонку L с заголовком `status`
2. Для существующих записей установите:
   - `waitlist` - для компаний в ожидании
   - `approved` - для одобренных компаний

### 4. Обновить URL в коде
В файлах компонентов обновите URL Google Apps Script на новый (если изменился):
- `components/CompaniesList.vue`
- `components/ApprovedCompaniesList.vue`

### 5. Тестирование
После обновления:
1. Запустите функцию `testGetCompanies()` в Google Apps Script
2. Проверьте логи на наличие ошибок
3. Протестируйте загрузку данных на сайте

## Структура данных:

### Waitlist компании (показываются в CompaniesList):
- `status = 'waitlist'` или `status = 'Waitlist'`
- `status = ''` (пустой)
- `status = undefined` (отсутствует)

### Approved компании (показываются в ApprovedCompaniesList):
- `status = 'approved'` или `status = 'Approved'`

## Новые функции в Apps Script:
- `getCompanies` - получение списка всех компаний
- `testGetCompanies` - тестирование получения компаний
- Автоматическое добавление статуса `waitlist` для новых записей
