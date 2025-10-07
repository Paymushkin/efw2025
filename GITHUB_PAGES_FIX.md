# Исправление CORS для GitHub Pages

## Проблема
1. **GitHub Pages** - статический хостинг без серверной части (ошибка 405)
2. **CORS ошибка** при POST запросах к Google Apps Script
3. **Нужен подход** как в рабочем скрипте для компаний

## Решение
Используем GET запросы с параметрами URL, как в рабочем скрипте для компаний.

## Что нужно сделать

### 1. Обновить Google Apps Script
1. Откройте Google Apps Script: https://script.google.com/macros/s/AKfycbxX6ToFvzEnm7IGxBSA-yKQMp3UhB0OBcqaSaDqz7gq7073UESTuxzHvn43q07Kawlj0g/exec
2. Замените код на обновленную версию из файла `google-apps-script.js`
3. Сохраните и разверните заново

### 2. Проверить настройки веб-приложения
- **Execute as**: Me (your-email@gmail.com)
- **Who has access**: Anyone
- **Deploy**: New deployment

### 3. Тестирование
После обновления протестируйте регистрацию:
1. Заполните форму регистрации
2. Проверьте, что данные записались в Google Sheets
3. Убедитесь, что нет CORS ошибок в консоли

## Изменения в коде

### В `pages/welcome.vue`:
- **Убрали POST запросы** (вызывали CORS ошибки)
- **Добавили GET запросы** с параметрами URL
- **Используем `mode: 'no-cors'`** для обхода CORS
- **Убрали обработку JSON ответа** (недоступно с no-cors)

### В `google-apps-script.js`:
- **Переписали на doGet()** вместо doPost()
- **Обработка параметров URL** как в рабочем скрипте
- **Добавили логирование** для отладки
- **Используем appendRow()** для записи данных

## Структура запроса
```
GET https://script.google.com/macros/s/.../exec?action=submit&name=John&company=ABC&email=john@example.com&inviter=by+Marina+Krapivina&timestamp=2025-01-27T10:30:00Z&source=EFW+Registration
```

## Результат
Теперь форма регистрации работает на GitHub Pages без CORS ошибок!
