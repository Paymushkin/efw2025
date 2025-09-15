# Настройка FAQ из Google Sheets

## Что нужно сделать:

### 1. Создать лист "FAQ" в Google Sheets
1. Откройте существующую таблицу: https://docs.google.com/spreadsheets/d/1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM
2. Создайте новый лист с названием **"FAQ"**
3. Добавьте заголовки в первую строку:

| A | B | C |
|---|---|---|
| **Question** | **Answer** | **Order** |

### 2. Добавить FAQ данные
Заполните лист данными:

| Question | Answer | Order |
|----------|--------|-------|
| What is the AI matchmaking tool? How does it work? | The AI matchmaking tool is available on laptops at each exhibitor station. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. | 1 |
| Are visitor passes free? How many invites are out? | Visitor entry is free. We usually welcome 300–700 guests, depending on the show. | 2 |
| Who are the 'Buyers'? What's their ratio? | Buyers include individuals purchasing for themselves and for retail stores. | 3 |
| What if I don't want a showcase station? | You can attend for free, observe how other beauty service providers present their services. | 4 |
| What's included in the showcase station? | Each showcase station includes a table, chairs, and a laptop with the AI matchmaking tool. | 5 |

### 3. Обновить Google Apps Script
1. Откройте Google Apps Script: https://script.google.com/
2. Найдите проект Emirates Fashion Week
3. Замените код на содержимое файла `UPDATED_APPS_SCRIPT.js`
4. Сохраните и разверните

### 4. Заменить компонент FAQ
Замените `FaqSection.vue` на `FaqSectionDynamic.vue`:

```bash
mv components/FaqSection.vue components/FaqSectionOld.vue
mv components/FaqSectionDynamic.vue components/FaqSection.vue
```

### 5. Структура данных FAQ

#### **Колонки**:
- **A (Question)**: Вопрос
- **B (Answer)**: Ответ (поддерживает HTML)
- **C (Order)**: Порядок отображения (число)

#### **Функции**:
- **Фильтрация**: пустые строки автоматически игнорируются
- **Сортировка**: по колонке Order (по возрастанию)
- **HTML поддержка**: в ответах можно использовать HTML теги

### 6. Тестирование
1. Запустите функцию `testGetFaq()` в Google Apps Script
2. Проверьте логи на наличие ошибок
3. Протестируйте загрузку FAQ на сайте

## Преимущества:

### **Управление через Google Sheets**:
- ✅ Легко редактировать вопросы и ответы
- ✅ Изменять порядок отображения
- ✅ Добавлять/удалять FAQ без изменения кода
- ✅ Поддержка HTML в ответах

### **Автоматическая синхронизация**:
- ✅ Изменения в таблице сразу отображаются на сайте
- ✅ Не нужно пересобирать проект
- ✅ Централизованное управление контентом

### **Совместимость**:
- ✅ Использует тот же Google Apps Script
- ✅ Работает локально и на продакшене
- ✅ Поддерживает JSONP для продакшена
