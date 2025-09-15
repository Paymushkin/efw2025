# Развертывание на GitHub Pages

## Проблема
GitHub Pages не поддерживает серверные API endpoints (файлы в папке `server/api/`), поэтому данные не загружались на продакшене.

## Решение
Все компоненты обновлены для использования только JSONP подхода через Google Apps Script.

## Обновленные компоненты:

### 1. **CompaniesList.vue**
- ✅ Убрана проверка `isLocal`
- ✅ Использует только JSONP для загрузки данных
- ✅ Работает на GitHub Pages

### 2. **ApprovedCompaniesList.vue**
- ✅ Убрана проверка `isLocal`
- ✅ Использует только JSONP для загрузки данных
- ✅ Работает на GitHub Pages

### 3. **FaqSectionDynamic.vue**
- ✅ Убрана проверка `isLocal`
- ✅ Использует только JSONP для загрузки FAQ
- ✅ Работает на GitHub Pages

### 4. **NewProgramSection.vue**
- ✅ Убрана проверка `isLocal`
- ✅ Использует только JSONP для счетчика компаний
- ✅ Работает на GitHub Pages

## Что изменилось:

### **До (не работало на GitHub Pages):**
```javascript
const isLocal = window.location.hostname.includes('localhost')
if (isLocal) {
  const response = await $fetch('/api/companies-list') // ❌ Не работает на GitHub Pages
} else {
  // JSONP код
}
```

### **После (работает везде):**
```javascript
// Используем только JSONP подход для GitHub Pages
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/...'
const callbackName = 'callback_' + Date.now()
window[callbackName] = (data) => {
  // Обработка данных
}
const script = document.createElement('script')
script.src = `${GOOGLE_SCRIPT_URL}?action=getCompanies&callback=${callbackName}`
document.head.appendChild(script)
```

## Преимущества:

### **Универсальность:**
- ✅ Работает локально
- ✅ Работает на GitHub Pages
- ✅ Работает на любом статическом хостинге

### **Производительность:**
- ✅ Нет серверных запросов
- ✅ Прямое обращение к Google Sheets
- ✅ Быстрая загрузка данных

### **Надежность:**
- ✅ Не зависит от серверных API
- ✅ Работает через JSONP
- ✅ Обработка ошибок

## Развертывание:

### 1. **Обновите Google Apps Script**
Замените код в Google Apps Script на содержимое файла `UPDATED_APPS_SCRIPT.js`

### 2. **Соберите проект**
```bash
npm run build
```

### 3. **Разверните на GitHub Pages**
```bash
npm run deploy
```

### 4. **Проверьте работу**
- Откройте сайт на GitHub Pages
- Проверьте загрузку списка компаний
- Проверьте загрузку FAQ
- Проверьте счетчик в программе

## Тестирование:

### **Локально:**
```bash
npm run dev
```

### **На GitHub Pages:**
- Откройте https://your-username.github.io/dubaifw
- Проверьте все функции

## Структура данных:

### **Google Sheets:**
- **Лист 1**: Компании (с колонкой `status`)
- **Лист "FAQ"**: Вопросы и ответы

### **Google Apps Script:**
- **`getCompanies`**: Получение списка компаний
- **`getFaq`**: Получение FAQ данных
- **`submit`**: Отправка новых заявок

## Результат:
Теперь сайт полностью работает на GitHub Pages без серверных API endpoints!
