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
  },
  // Дополнительные опции для микроразметки
  schemaType: {
    type: String,
    default: null, // 'event', 'faq', 'article', 'collection', 'award', null
    validator: (value) => !value || ['event', 'faq', 'article', 'collection', 'award'].includes(value)
  },
  // Данные для Event
  eventData: {
    type: Object,
    default: null
  },
  // Данные для FAQ
  faqData: {
    type: Array,
    default: null
  },
  // Данные для BreadcrumbList
  breadcrumbs: {
    type: Array,
    default: null
  },
  // Данные для Article
  articleData: {
    type: Object,
    default: null
  }
})

const route = useRoute()

// Используем computed для канонического URL:
// - игнорируем query-параметры (utm, трекинг и т.п.)
// - убираем лишний закрывающий слэш, чтобы /station и canonical совпадали
const canonicalPath = computed(() => {
  const path = route.path || '/'
  if (path === '/') return '/'
  return path.endsWith('/') ? path.slice(0, -1) : path
})

const canonicalUrl = computed(() => `${CANONICAL_DOMAIN}${canonicalPath.value}`)

// Вычисляем скрипты для микроразметки
const schemaScripts = computed(() => {
  const scripts = [
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

  // BreadcrumbList для всех страниц
  if (props.breadcrumbs && props.breadcrumbs.length > 0) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: props.breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url || `${CANONICAL_DOMAIN}${crumb.path || route.path}`
        }))
      })
    })
  } else {
    // Автоматические breadcrumbs на основе пути
    const pathSegments = route.path.split('/').filter(Boolean)
    if (pathSegments.length > 0) {
      const breadcrumbItems = [
        { '@type': 'ListItem', position: 1, name: 'Home', item: CANONICAL_DOMAIN }
      ]
      let currentPath = ''
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`
        const name = segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: index + 2,
          name: name,
          item: `${CANONICAL_DOMAIN}${currentPath}`
        })
      })
      scripts.push({
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems
        })
      })
    }
  }

  // Event микроразметка
  if (props.schemaType === 'event' && props.eventData) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: props.eventData.name || props.title,
        description: props.eventData.description || props.description,
        startDate: props.eventData.startDate || '2025-11-08T00:00:00+04:00',
        endDate: props.eventData.endDate || '2025-11-11T23:59:59+04:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: props.eventData.location?.name || 'Skylight Gallery, Arjaan by Rotana, Dubai Media City',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE'
          }
        },
        organizer: {
          '@type': 'Organization',
          name: 'Emirates Fashion Week',
          url: CANONICAL_DOMAIN
        },
        image: props.eventData.image || props.image,
        url: canonicalUrl.value
      })
    })
  }

  // FAQPage микроразметка
  if (props.schemaType === 'faq' && props.faqData && props.faqData.length > 0) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    })
  }

  // Article микроразметка
  if (props.schemaType === 'article' && props.articleData) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.articleData.headline || props.title,
        description: props.articleData.description || props.description,
        image: props.articleData.image || props.image,
        datePublished: props.articleData.datePublished,
        dateModified: props.articleData.dateModified || props.articleData.datePublished,
        author: {
          '@type': 'Organization',
          name: 'Emirates Fashion Week'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Emirates Fashion Week',
          logo: {
            '@type': 'ImageObject',
            url: `${CANONICAL_DOMAIN}/favicon-512x512.png`
          }
        },
        url: canonicalUrl.value
      })
    })
  }

  // CollectionPage микроразметка
  if (props.schemaType === 'collection') {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: props.title,
        description: props.description,
        url: canonicalUrl.value,
        image: props.image
      })
    })
  }

  return scripts
})

useHead(() => ({
  title: props.title,
  meta: [
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'googlebot',
      content: 'index, follow'
    },
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
  script: schemaScripts.value
}))
</script>
