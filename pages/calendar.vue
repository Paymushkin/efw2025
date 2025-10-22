<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-4 py-8">
    <AppSeo
      title="Emirates Fashion Week Calendar - Subscribe to Events"
      description="Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025."
      keywords="Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025"
    />
    
    <div class="text-center max-w-md w-full">
      <!-- Иконка календаря -->
      <div class="mb-6 md:mb-8">
        <div class="inline-block relative">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center">
            <svg class="w-10 h-10 md:w-12 md:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Текст -->
      <div class="text-white mb-8">
        <h1 class="text-2xl md:text-3xl font-bold mb-3">
          Subscribe to Emirates Fashion Week Calendar
        </h1>
        <p class="text-gray-300 text-base md:text-lg mb-2">
          Stay updated with all fashion events and shows
        </p>
        <p class="text-gray-400 text-sm">
          Subscribe to automatically sync all events to your calendar
        </p>
      </div>
      
      <!-- Кнопки -->
      <div v-if="showButton" class="space-y-4">
        <a 
          :href="calendarUrl"
          class="block w-full bg-white hover:bg-gray-100 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          📅 Subscribe to Calendar
        </a>
        
        <a 
          href="/"
          class="block w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 border border-gray-600"
        >
          🏠 Go to Main Page
        </a>
      </div>
      
      <!-- Информация для пользователя -->
      <div class="mt-8 text-gray-400 text-xs md:text-sm space-y-2">
        <p v-if="isIOSDevice">
          📱 For iOS/macOS: Calendar app will open automatically
        </p>
        <p v-else>
          🌐 For Android/Desktop: Google Calendar will open
        </p>
        <p class="text-gray-500">
          Events will automatically sync to your calendar
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Calendar ID
const calendarId = 'a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c@group.calendar.google.com'

// Состояние
const showButton = ref(false)
const isIOSDevice = ref(false)

// Определяем, является ли устройство iOS/macOS
const checkIsIOS = () => {
  if (process.client) {
    const userAgent = navigator.userAgent.toLowerCase()
    return userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('mac')
  }
  return false
}

// Определяем URL в зависимости от платформы
const getCalendarUrl = () => {
  if (process.client) {
    const userAgent = navigator.userAgent.toLowerCase()
    
    // Для iOS/macOS используем webcal (подписка)
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('mac')) {
      return `webcal://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`
    }
    
    // Для Android и остальных платформ используем Google Calendar subscription
    return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(calendarId)}`
  }
  
  // Для SSR возвращаем дефолтную ссылку
  return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(calendarId)}`
}

// Реактивный URL для календаря
const calendarUrl = computed(() => getCalendarUrl())

// Инициализация при монтировании
onMounted(() => {
  // Проверяем платформу
  isIOSDevice.value = checkIsIOS()
  
  // Показываем кнопку для всех платформ
  showButton.value = true
  
  // Для iOS также открываем автоматически через небольшую задержку
  if (isIOSDevice.value) {
    setTimeout(() => {
      window.location.href = calendarUrl.value
    }, 1000)
  }
})

// Мета-теги для SEO
useHead({
  title: 'Emirates Fashion Week Calendar - Subscribe to Events',
  meta: [
    {
      name: 'description',
      content: 'Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025.'
    },
    {
      name: 'keywords',
      content: 'Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025'
    },
    {
      property: 'og:title',
      content: 'Emirates Fashion Week Calendar - Subscribe to Events'
    },
    {
      property: 'og:description',
      content: 'Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025.'
    },
    {
      property: 'og:image',
      content: 'https://www.emiratesfashionweek.com/seo-poster.png'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
})
</script>

<style scoped>
/* Минимальные стили для мобильных устройств */
@media (max-width: 640px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
