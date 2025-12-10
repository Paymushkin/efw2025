# Чеклист настройки GitHub для автоматической пересборки

## Что нужно проверить в GitHub:

### 1. ✅ GitHub Actions включены
**Путь:** `Settings` → `Actions` → `General`

- [ ] Убедитесь, что "Allow all actions and reusable workflows" включено
- [ ] Или выберите "Allow local actions and reusable workflows"
- [ ] Проверьте, что "Workflow permissions" настроены правильно (см. пункт 2)

### 2. ✅ Workflow Permissions (Права для workflow)
**Путь:** `Settings` → `Actions` → `General` → `Workflow permissions`

- [ ] Выберите **"Read and write permissions"** 
- [ ] Или установите "Read repository contents and packages permissions" и добавьте `contents: write` в workflow (уже добавлено в `.github/workflows/daily-rebuild.yml`)

**Важно:** Без прав на запись workflow не сможет делать commit и push обновленных данных.

### 3. ✅ Workflow файл в правильной ветке
**Путь:** Проверьте файл `.github/workflows/daily-rebuild.yml`

- [ ] Убедитесь, что файл находится в ветке `main`
- [ ] Workflow должен быть в репозитории, чтобы GitHub мог его запускать

### 4. ✅ Vercel настроен на автоматическую пересборку
**Путь:** Vercel Dashboard → Project Settings → Git

- [ ] Убедитесь, что проект подключен к GitHub репозиторию
- [ ] Проверьте, что включена опция "Automatically deploy on push"
- [ ] Убедитесь, что отслеживается ветка `main`

### 5. ✅ Тестовая проверка workflow
**Путь:** `Actions` → `Daily Rebuild` → `Run workflow`

- [ ] Попробуйте запустить workflow вручную через кнопку "Run workflow"
- [ ] Проверьте, что workflow успешно выполняется
- [ ] Убедитесь, что данные обновляются и делается commit

### 6. ✅ Проверка логов
**Путь:** `Actions` → Выберите последний запуск workflow

Проверьте логи на наличие ошибок:
- [ ] Скрипт `update-runways-data` выполняется успешно
- [ ] Git commit и push проходят без ошибок
- [ ] Vercel получает уведомление о push

## Возможные проблемы и решения:

### Проблема: Workflow не запускается по расписанию
**Решение:** 
- Убедитесь, что в репозитории был хотя бы один push после создания workflow
- GitHub Actions не запускают scheduled workflows в неактивных репозиториях (нужна активность за последние 60 дней)

### Проблема: Permission denied при push
**Решение:**
- Проверьте Workflow permissions (пункт 2)
- Убедитесь, что используется правильный токен (`GITHUB_TOKEN`)

### Проблема: Vercel не пересобирает проект
**Решение:**
- Проверьте настройки Vercel (пункт 4)
- Убедитесь, что Vercel webhook настроен правильно
- Проверьте логи Vercel на наличие ошибок

## Быстрая проверка:

1. Откройте `https://github.com/Paymushkin/efw2025/settings/actions`
2. Проверьте раздел "Workflow permissions" - должно быть "Read and write permissions"
3. Откройте `https://github.com/Paymushkin/efw2025/actions`
4. Найдите workflow "Daily Rebuild" и попробуйте запустить его вручную
5. Проверьте Vercel Dashboard - должен быть настроен автоматический деплой

