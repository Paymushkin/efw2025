# Emirates Fashion Week — сайт (Nuxt 3)

Публичный сайт на **Nuxt 3** + **Vue 3** + **Tailwind CSS**. Данные части контента подгружаются из **Google Sheets** / Apps Script; для SEO часть блоков использует локальные константы и SSR.

## Требования

- **Node.js 20 или 22** (в `package.json` указано `>=20 <23`; **Node 25+** с Nuxt может вести себя непредсказуемо)
- npm

Файл **`.nvmrc`** содержит `22` — удобно так: `nvm install && nvm use` (или аналог).

## Быстрый старт

```bash
npm ci
npm run dev
```

Сервер разработки: `http://localhost:3000`

Если **`npm run dev`** падает с ошибкой про **`pathe`** / **`listhen`** — чаще всего битый **`node_modules`** (обрыв установки, облачная синхронизация папки проекта и т.п.). Полная переустановка:

```bash
rm -rf node_modules .nuxt
npm ci
```

## Основные команды

| Команда | Назначение |
|--------|------------|
| `npm run dev` | Режим разработки |
| `npm run build` | Production-сборка (Nitro `node-server`, для хостинга с Node) |
| `npm run generate` | Статическая генерация → артефакты в **`.output/public`** (GitHub Pages) |
| `npm run preview` | Превью **после `npm run build`** (Node-сервер из `.output/server`) |
| `npm run preview:static` | Превью **после `npm run generate`** (статика из `.output/public`, через `serve`) |
| `npm run deploy` | Локально: `generate` + публикация в `gh-pages` через `gh-pages` |
| `npm run update-runways-data` | Обновить `constants/designerRunwaysData.ts` из Google Sheets (для SEO блока runway) |
| `npm run lint` | ESLint |

## Деплой

### GitHub Pages (CI)

При **push в ветку `main`** запускается workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci`
2. `npm run generate`
3. Публикация каталога **`.output/public`**

В настройках репозитория GitHub: **Pages** → источник — ветка `gh-pages` (или тот вариант, который вы используете с `peaceiris/actions-gh-pages`).

> Ранее в репозитории был отдельный workflow ежедневной пересборки с коммитами от бота — он **удалён**. Обновление данных runway при необходимости делайте вручную: `npm run update-runways-data`, затем коммит.

### Vercel / Netlify

В `nuxt.config.ts` для Vercel используется preset `vercel` при `process.env.VERCEL`. Сборку и publish directory настраивают в панели хостинга (обычно `npm run build` и вывод по документации Nuxt для выбранного preset).

## Структура документации в репозитории

| Файл | Тема |
|------|------|
| [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) | Статический хостинг, JSONP / без server API |
| [GITHUB_SETUP_CHECKLIST.md](./GITHUB_SETUP_CHECKLIST.md) | Чеклист GitHub Actions для деплоя |
| [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) | Таблицы и интеграции |
| [FAQ_SETUP.md](./FAQ_SETUP.md) | FAQ из Sheets |
| [README_SEO.md](./README_SEO.md) | SEO и локальные данные Designer Runways |
| [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) | Частые ошибки сборки и CI |
| [LOCAL_PREVIEW.md](./LOCAL_PREVIEW.md) | Локальный превью |
| Остальные `*.md` в корне | Узкие темы (календарь, лица, counter и т.д.) |

## Важные пути в коде

- `pages/` — маршруты
- `components/` — UI, в т.ч. `AppSeo.vue`
- `server/api/` — API для **локальной** разработки (на GitHub Pages не выполняются)
- `constants/` — статические данные, в т.ч. `designerRunwaysData.ts`
- `nuxt.config.ts` — `runtimeConfig`, sitemap, prerender ignore

## Переменные окружения

См. `nuxt.config.ts` → `runtimeConfig`. Секреты (например `RESEND_API_KEY`) не коммитить; для публичных ID таблиц можно использовать `NUXT_PUBLIC_*`.

## Форма обратной связи

На статическом хостинге используется **Formspree** (см. исторический блок в старом README и компоненты форм). Для Netlify описан альтернативный вариант с функциями.

---

Официальная документация Nuxt: [nuxt.com/docs](https://nuxt.com/docs/getting-started/introduction).
