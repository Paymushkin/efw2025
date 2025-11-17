<template>
  <!-- SEO компонент без визуального отображения -->
</template>

<script setup>
import { computed } from 'vue'

const CANONICAL_DOMAIN = 'https://www.emiratesfashionweek.com'

const props = defineProps({
  title: {
    type: String,
    default: 'Emirates Fashion Week Dubai 2025'
  },
  description: {
    type: String,
    default: 'Emirates Fashion Week Dubai 2025: Beauty meets business. Join us on 8–11 November, 2025 for an exclusive fashion and beauty event in Dubai.'
  },
  image: {
    type: String,
    default: `${CANONICAL_DOMAIN}/seo-poster-wa.png?v=2`
  },
  keywords: {
    type: String,
    default: 'Emirates Fashion Week, Dubai Fashion, Beauty Services, Fashion Show 2025, Dubai Events'
  }
})

const route = useRoute()

// Используем computed для канонического URL, чтобы избежать проблем с SSR
const canonicalPath = computed(() => {
  const path = route.path
  return path === '/' ? '/' : (path.endsWith('/') ? path : path + '/')
})

const canonicalUrl = computed(() => `${CANONICAL_DOMAIN}${canonicalPath.value}`)

useHead(() => ({
  title: props.title,
  meta: [
    {
      name: 'description',
      content: props.description
    },
    {
      property: 'og:url',
      content: canonicalUrl.value
    },
    {
      property: 'og:title',
      content: props.title
    },
    {
      property: 'og:description',
      content: props.description
    },
    {
      property: 'og:image',
      content: props.image
    },
    {
      property: 'og:image:secure_url',
      content: props.image
    },
    {
      property: 'og:image:type',
      content: 'image/png'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:image:alt',
      content: 'Emirates Fashion Week Dubai 2025 - 8-11 November'
    },
    {
      name: 'keywords',
      content: props.keywords
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: 'Emirates Fashion Week'
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:image',
      content: props.image
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Emirates Fashion Week',
        url: CANONICAL_DOMAIN,
        logo: `${CANONICAL_DOMAIN}/favicon-512x512.png`,
        sameAs: [
          'https://www.instagram.com/emiratesfashionweek/',
          'https://www.youtube.com/@emiratesfashionweek'
        ],
        contactPoint: [{
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'team@emiratesfashionweeks.com',
          telephone: '+971569534134'
        }]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Emirates Fashion Week',
        url: CANONICAL_DOMAIN,
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.google.com/search?q=site:www.emiratesfashionweek.com+{search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
}))
</script> 