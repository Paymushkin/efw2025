# Чеклист: GitHub и деплой

Репозиторий публикует статический сайт через **GitHub Actions** → **GitHub Pages** (workflow `deploy.yml`). Отдельного расписания (cron) для пересборки **нет**.

## 1. GitHub Actions включены

**Путь:** `Settings` → `Actions` → `General`

- [ ] Разрешены нужные actions (по умолчанию «Allow all actions» или политика организации)
- [ ] Для деплоя через `GITHUB_TOKEN` обычно достаточно стандартных прав workflow

## 2. GitHub Pages

**Путь:** `Settings` → `Pages`

- [ ] Указан источник публикации, соответствующий использованию `peaceiris/actions-gh-pages` (часто ветка **`gh-pages`**)
- [ ] Домен и `baseURL` в Nuxt согласованы с реальным URL сайта

## 3. Workflow деплоя

**Файл:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

- [ ] Триггер: `push` в ветку **`main`**
- [ ] Шаги: `npm ci` → `npm run generate` → публикация **`.output/public`**
- [ ] В логах Actions нет ошибок на шаге `Generate static site`

## 4. Локальная проверка перед push

```bash
npm ci
npm run generate
# убедиться, что появился .output/public с index.html и ассетами
```

## 5. Обновление данных Designer Runways (вручную)

SEO-HTML для блока runway опирается на `constants/designerRunwaysData.ts`. Чтобы подтянуть актуальный CSV из таблицы:

```bash
npm run update-runways-data
git diff constants/designerRunwaysData.ts
git add constants/designerRunwaysData.ts && git commit -m "chore: refresh designer runways data"
```

После push сработает обычный деплой workflow.

## 6. Если деплой падает

См. [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) и логи вкладки **Actions** → **Deploy to GitHub Pages**.
