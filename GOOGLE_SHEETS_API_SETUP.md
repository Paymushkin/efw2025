# Настройка Google Sheets API

## Шаги для настройки:

### 1. Создать API ключ в Google Cloud Console:

1. Перейти в [Google Cloud Console](https://console.cloud.google.com/)
2. Создать новый проект или выбрать существующий
3. Включить Google Sheets API:
   - Перейти в "APIs & Services" → "Library"
   - Найти "Google Sheets API"
   - Нажать "Enable"
4. Создать API ключ:
   - Перейти в "APIs & Services" → "Credentials"
   - Нажать "Create Credentials" → "API Key"
   - Скопировать созданный ключ
5. Ограничить API ключ:
   - Нажать на созданный ключ
   - В разделе "API restrictions" выбрать "Restrict key"
   - Выбрать "Google Sheets API"

### 2. Настроить доступ к таблице:

1. Открыть Google Sheets таблицу с ID: `1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM`
2. Нажать "Поделиться" → "Изменить доступ"
3. Установить "Любой, у кого есть ссылка, может просматривать"

### 3. Добавить API ключ в проект:

Создать файл `.env` в корне проекта:
```
GOOGLE_SHEETS_API_KEY=ваш_api_ключ_здесь
```

### 4. Обновить компонент формы:

Изменить в `components/WaitlistForm.vue`:
```javascript
// Заменить
const response = await $fetch('/api/waitlist', {
  method: 'POST',
  body: formData
});

// На
const response = await $fetch('/api/waitlist-sheets-api', {
  method: 'POST',
  body: formData
});
```

## Преимущества Google Sheets API:

- ✅ Более надежно чем Google Apps Script
- ✅ Прямое взаимодействие с Google Sheets
- ✅ Лучшая обработка ошибок
- ✅ Не зависит от внешних скриптов
- ✅ Работает на GitHub Pages

## Безопасность:

- API ключ ограничен только Google Sheets API
- Таблица доступна только для чтения публично
- Запись возможна только через API ключ

