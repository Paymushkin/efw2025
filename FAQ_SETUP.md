# Настройка FAQ из Google Sheets

## ✅ Система готова к использованию!

### **Текущий статус:**
- ✅ Google Apps Script развернут и работает
- ✅ API endpoint настроен
- ✅ Компонент FAQ обновлен
- ✅ Система работает локально и на продакшене

### **ID Google Apps Script:**
```
AKfycbxJXRH6EMVI77_xlRlux2RbvYHzp-xVVRx23RkJa4jgWprEQvduKaJ7xBCYq_ihXZsS9g
```

### **URL скрипта:**
```
https://script.google.com/macros/s/AKfycbxJXRH6EMVI77_xlRlux2RbvYHzp-xVVRx23RkJa4jgWprEQvduKaJ7xBCYq_ihXZsS9g/exec
```

## 📊 Структура таблицы FAQ

### **Таблица:** [Emirates Fashion Week FAQ](https://docs.google.com/spreadsheets/d/1FGx4QGu8hqGgRvNXylLEPBhPwynpEUTbI4UJnRcttgg/edit?gid=599193953#gid=599193953)

### **Лист:** FAQ

### **Колонки:**
| A | B | C |
|---|---|---|
| **Question** | **Answer** | **Order** |

### **Пример данных:**
| Question | Answer | Order |
|----------|--------|-------|
| What is the AI matchmaking tool? How does it work? | The AI matchmaking tool is available on laptops at each exhibitor station. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. | 1 |
| Are visitor passes free? How many invites are out? | Visitor entry is free. We usually welcome 300–700 guests, depending on the show. | 2 |
| Who are the 'Buyers'? What's their ratio? | Buyers include individuals purchasing for themselves and for retail stores. | 3 |
| What if I don't want a showcase station? | You can attend for free, observe how other beauty service providers present their services. | 4 |
| What's included in the showcase station? | Each showcase station includes a table, chairs, and a laptop with the AI matchmaking tool. | 5 |

## 🔧 Как это работает

### **Локально (localhost):**
- Использует API endpoint: `/api/faq`
- Загружает данные через Google Apps Script
- Показывает fallback данные при ошибках

### **На продакшене (GitHub Pages):**
- Использует JSONP для обхода CORS
- Загружает данные напрямую из Google Apps Script
- Показывает fallback данные при ошибках

## 📝 Управление FAQ

### **Добавление нового FAQ:**
1. Откройте [таблицу FAQ](https://docs.google.com/spreadsheets/d/1FGx4QGu8hqGgRvNXylLEPBhPwynpEUTbI4UJnRcttgg/edit?gid=599193953#gid=599193953)
2. Добавьте новую строку
3. Заполните колонки: Question, Answer, Order
4. Сохраните - изменения появятся на сайте автоматически

### **Редактирование FAQ:**
1. Откройте таблицу
2. Измените нужные данные
3. Сохраните - изменения появятся на сайте автоматически

### **Удаление FAQ:**
1. Удалите строку из таблицы
2. Или оставьте пустую строку (она будет проигнорирована)

## 🚀 Преимущества системы

### **Управление через Google Sheets:**
- ✅ Легко редактировать вопросы и ответы
- ✅ Изменять порядок отображения
- ✅ Добавлять/удалять FAQ без изменения кода
- ✅ Поддержка HTML в ответах

### **Автоматическая синхронизация:**
- ✅ Изменения в таблице сразу отображаются на сайте
- ✅ Не нужно пересобирать проект
- ✅ Централизованное управление контентом

### **Совместимость:**
- ✅ Использует тот же подход, что и система компаний
- ✅ Работает локально и на продакшене
- ✅ Поддерживает JSONP для продакшена
- ✅ Fallback данные при ошибках

## 🧪 Тестирование

### **Локально:**
```bash
curl http://localhost:3000/api/faq
```

### **На продакшене:**
```bash
curl "https://script.google.com/macros/s/AKfycbx5d6YBNfICxU4VJfTPiFH4kTjmCw4avMcTAHX95XusjGEJcNE7v8-OqPd_s3gSV4wHIw/exec?action=getFaq"
```

### **В Google Apps Script:**
1. Откройте [Google Apps Script](https://script.google.com/)
2. Найдите проект Emirates Fashion Week
3. Запустите функцию `testGetFaq()`
4. Проверьте логи

## 📁 Файлы системы

- **`FAQ_APPS_SCRIPT.js`** - Код для Google Apps Script
- **`server/api/faq.get.ts`** - API endpoint для локальной разработки
- **`components/FaqSectionDynamic.vue`** - Компонент FAQ
- **`pages/faq.vue`** - Страница FAQ
- **`FAQ_SETUP.md`** - Эта документация

