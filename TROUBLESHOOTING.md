# Устранение проблем с GitHub Actions workflow

## Как проверить логи workflow при ошибке:

1. **Откройте страницу Actions:**
   - Перейдите: `https://github.com/Paymushkin/efw2025/actions`
   - Или: `Actions` → `Daily Rebuild`

2. **Откройте упавший workflow:**
   - Кликните на workflow с красным крестиком
   - Вы увидите список шагов (steps)

3. **Проверьте каждый шаг:**
   - Кликните на шаг, который завершился с ошибкой
   - Внизу будут логи выполнения
   - Ищите строки с `❌` или `Error`

## Частые проблемы и решения:

### Проблема: "npm: command not found" или "tsx: command not found"
**Решение:**
- Убедитесь, что шаг "Install dependencies" выполнился успешно
- Проверьте, что `tsx` добавлен в `devDependencies` в `package.json`

### Проблема: "Permission denied" при git push
**Решение:**
- Проверьте настройки: `Settings` → `Actions` → `General` → `Workflow permissions`
- Должно быть выбрано: **"Read and write permissions"**
- Убедитесь, что в workflow есть `permissions: contents: write`

### Проблема: "fetch is not defined"
**Решение:**
- Node.js 18+ имеет встроенный fetch
- Убедитесь, что в workflow используется `node-version: '18'` или выше

### Проблема: Скрипт не может загрузить данные из Google Sheets
**Решение:**
- Проверьте, что таблица Google Sheets публично доступна
- Убедитесь, что URL правильный: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/export?format=csv&gid=0`
- Проверьте логи на наличие ошибок сети

### Проблема: "No changes to commit"
**Решение:**
- Это нормально, если данные не изменились
- Workflow завершится успешно, но commit не будет сделан

## Проверка настроек:

### 1. Workflow Permissions
```
Settings → Actions → General → Workflow permissions
Должно быть: "Read and write permissions" ✅
```

### 2. Node.js версия
В workflow должно быть:
```yaml
node-version: '18'  # или выше
```

### 3. Зависимости
В `package.json` должно быть:
```json
"devDependencies": {
  "tsx": "^4.7.0"
}
```

## Тестирование локально:

Перед запуском в GitHub Actions можно протестировать локально:

```bash
# Установите зависимости
npm install

# Запустите скрипт обновления данных
npm run update-runways-data

# Проверьте, что файл обновился
git diff constants/designerRunwaysData.ts
```

## Если проблема не решается:

1. Скопируйте полные логи из упавшего шага
2. Проверьте, что все файлы закоммичены и запушены
3. Убедитесь, что workflow файл находится в ветке `main`
4. Попробуйте запустить workflow вручную еще раз



