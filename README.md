# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Emirates Fashion Weeks

## Настройка формы обратной связи

Для работы формы обратной связи на GitHub Pages используется сервис Formspree:

1. Зайдите на [Formspree](https://formspree.io/) и создайте бесплатный аккаунт
2. Создайте новую форму и получите ID формы (уже добавлен: `mwplnlgo`)
3. Этот ID уже добавлен в компонент `ContactForm.vue`

Теперь форма будет отправлять сообщения через Formspree, и они будут приходить на email, указанный при регистрации.

## Деплой на GitHub Pages

```bash
npm run deploy
```

После успешного деплоя сайт будет доступен по адресу, указанному в настройках GitHub Pages в вашем репозитории.

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск локального сервера
npm run dev
```

## Альтернативный вариант: Деплой на Netlify (с серверными функциями)

Если вы предпочитаете использовать Netlify Functions для обработки форм:

1. Создайте аккаунт на [Netlify](https://www.netlify.com/)
2. Подключите репозиторий к Netlify:
   - Нажмите "Add new site" -> "Import an existing project"
   - Выберите GitHub и найдите этот репозиторий
   - В настройках сборки укажите:
     - Build command: `npm run build`
     - Publish directory: `dist`
3. В файле `components/ContactForm.vue` замените URL формы с `https://formspree.io/f/mwplnlgo` на `/api/send-email`

```bash
# Локальное тестирование Netlify Functions
npm run netlify-dev
```

## Деплой на Netlify (с работающей формой обратной связи)

```bash
git push
```

После push на GitHub, Netlify автоматически выполнит сборку и деплой сайта.
