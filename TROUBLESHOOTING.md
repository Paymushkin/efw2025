# Устранение проблем

## GitHub Actions: деплой на GitHub Pages

Workflow: **Deploy to GitHub Pages** (`.github/workflows/deploy.yml`).

### Как смотреть логи

1. В репозитории: **Actions** → выберите последний запуск **Deploy to GitHub Pages**.
2. Откройте упавший step и прочитайте вывод (часто `npm ci`, `generate` или deploy).

### Частые ошибки

**`npm ci` падает**

- Проверьте, что **`package-lock.json` закоммичен** и не устарел относительно `package.json`.
- Локально выполните `npm ci` на чистой папке.

**`npm run generate` падает**

- Запустите локально `npm run generate` и исправьте ошибки сборки.
- Проверьте переменные окружения, если какие-то нужны на этапе сборки.

**Деплой: пустой или старый сайт**

- В workflow должна быть папка **`.output/public`** (результат `nuxt generate` для этого проекта).
- В **Settings → Pages** проверьте, что источник указывает на ту ветку/режим, куда пишет `peaceiris/actions-gh-pages`.

**Права `GITHUB_TOKEN`**

- Для публикации в `gh-pages` через action обычно достаточно встроенного `GITHUB_TOKEN` и разрешений workflow по умолчанию. При смене организационных политик смотрите **Settings → Actions → General**.

---

## Локально: `npm run update-runways-data`

**Нет данных / ошибка сети**

- Таблица должна отдавать CSV по URL из скрипта (см. `scripts/updateDesignerRunwaysData.ts`).
- Проверьте доступность таблицы из браузера/сети.

**`tsx` не найден**

- После `npm install` команда должна быть доступна как `npm run update-runways-data` (зависимость `tsx` в `devDependencies`).

```bash
npm install
npm run update-runways-data
git diff constants/designerRunwaysData.ts
```

---

## Прочее

- **Линтер:** `npm run lint`
- **Конфликт путей деплоя:** ручная команда `npm run deploy` также использует `generate` и **`.output/public`** (см. `package.json`).
