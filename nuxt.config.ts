// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-02-19',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/',
    buildAssetsDir: 'assets/'
  },
  ssr: false,
  nitro: {
    preset: 'github-pages',
    routeRules: {
      '/': { static: true },
      '/dubaifw/**': { static: true }
    },
    static: true
  },
  runtimeConfig: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    TO_EMAIL: process.env.TO_EMAIL,
  }
});
