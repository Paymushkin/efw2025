// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
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
    cdnURL: '',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=3' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=3' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=3' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-93881479ZC', async: true },
        { type: 'text/javascript', innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-93881479ZC');" } as any
      ]
    }
  },
  ssr: true,
  nitro: {
    preset: 'vercel',
    routeRules: {
      '/': { ssr: false },
      '/offer': { ssr: false },
      '/dubaifw/**': { static: true },
      '/offer/tr': { redirect: '/offer?tr' },
      '/sitemap.xml': { static: true },
      '/__sitemap__/**': { static: true }
    },
    prerender: {
      // Не генерируем Nuxt-HTML для этих роутов, чтобы использовались файлы из public/*/index.html
      ignore: [
        '/trial',
        '/features',
        '/offer',
        '/gallery',
        '/request',
        '/faq',
        '/team',
        '/approved',
        '/station',
        '/calendar',
        '/visit',
        '/EFW_AICONTEST',
        '/welcome',
        '/home',
        '/widget'
      ]
    },
    experimental: {
      wasm: false
    }
  },
  sitemap: {
    hostname: 'https://www.emiratesfashionweek.com',
    exclude: ['/dubaifw/**'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    },
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1.0
      },
      {
        url: '/offer',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        url: '/features',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        url: '/gallery',
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        url: '/faq',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/team',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/station',
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        url: '/approved',
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        url: '/visit',
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        url: '/request',
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        url: '/EFW_AICONTEST',
        changefreq: 'weekly',
        priority: 0.7
      },
      {
        url: '/calendar',
        changefreq: 'weekly',
        priority: 0.8
      }
    ]
  } as any,
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    server: {
      watch: {
        ignored: ['**/.npm-cache/**', '**/node_modules/**', '**/.nuxt/**', '**/.git/**']
      }
    }
  },
  
  site: {
    url: 'https://www.emiratesfashionweek.com'
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    public: {
      apiBase: process.env.NODE_ENV === 'production' 
        ? 'https://api.emiratesfashionweeks.com/api'
        : 'http://localhost:3000/api',
      gallerySheetId: process.env.NUXT_PUBLIC_GALLERY_SHEET_ID || '13had7SsmycXCJ-UsGdoePnIgV2aHigWOth15_OhU360',
      gallerySheetGid: process.env.NUXT_PUBLIC_GALLERY_SHEET_GID || '0'
    }
  }
});
