<template></template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Emirates Fashion Week Dubai 2025'
  },
  description: {
    type: String,
    default: 'Emirates Fashion Week Dubai 2025: Beauty meets business. Join us on April 13-15, 2025 for an exclusive fashion and beauty event in Dubai.'
  },
  image: {
    type: String,
    default: '/seo-poster.png'
  },
  keywords: {
    type: String,
    default: 'Emirates Fashion Week, Dubai Fashion, Beauty Services, Fashion Show 2025, Dubai Events'
  }
})

useHead({
  title: props.title,
  meta: [
    {
      name: 'description',
      content: props.description
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
      name: 'keywords',
      content: props.keywords
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://emiratesfashionweeks.com${useRoute().path}`
    }
  ]
})
</script> 