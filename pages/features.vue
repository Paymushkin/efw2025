<template>
  <div class="pt-10">
    <AppSeo
      title="Features & Highlights - Emirates Fashion Week Dubai 2025"
      description="Discover the unique features and highlights of Emirates Fashion Week Dubai 2025. From exclusive fashion shows to beauty exhibitions and networking opportunities."
      keywords="Emirates Fashion Week Features, Dubai Fashion Events, Fashion Show Highlights, Beauty Exhibition Features, Fashion Industry Dubai, Fashion Week Program"
    />
    <div class="container flex flex-col gap-[76px]">
      <EventFeatures :data="featuresData.featuresData1" />
      <EventFeatures :data="featuresData.featuresData2" />
      <EventFeatures :data="featuresData.featuresData3" />
      <EventFeatures :data="featuresData.featuresData4" />
      <EventFeatures :data="featuresData.featuresData5" />
      <EventFeatures :data="featuresData.featuresData6" />
      <EventFeatures :data="featuresData.featuresData7" />
      <!-- <div id="reportage" class="grow mb-10"></div> -->
    </div>
    <GalleryIframe />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import EventFeatures from '~/components/EventFeatures.vue';
import { FEATURES_DATA } from '~/constants/featuresData';
import AppSeo from '@/components/AppSeo.vue';
import GalleryIframe from '@/components/GalleryIframe.vue';

// Используем данные из констант
const featuresData = FEATURES_DATA;


const isMobile = ref(window?.innerWidth < 768);
const MOBILE_BREAKPOINT = 768;

// Добавляем переменную для отслеживания предыдущей ширины
let previousWidth = window?.innerWidth;

// Функция для проверки пересечения брейкпоинта
const hasBreakpointChanged = (currentWidth, previousWidth) => {
  return (
    (currentWidth < MOBILE_BREAKPOINT && previousWidth >= MOBILE_BREAKPOINT) ||
    (currentWidth >= MOBILE_BREAKPOINT && previousWidth < MOBILE_BREAKPOINT)
  );
};

// Функция для обновления размера
const updateSize = () => {
  const currentWidth = window.innerWidth;
  
  // Проверяем, пересекли ли мы брейкпоинт
  if (hasBreakpointChanged(currentWidth, previousWidth)) {
    isMobile.value = currentWidth < MOBILE_BREAKPOINT;
    updateScript();
  }
  
  // Обновляем предыдущую ширину
  previousWidth = currentWidth;
};

// Функция для обновления скрипта
const updateScript = () => {
  const reportageBlock = document.getElementById('reportage');
  if (!reportageBlock) return;

  // Очищаем содержимое блока
  reportageBlock.innerHTML = '';

  // Удаляем старый скрипт, если он есть
  const existingScript = document.getElementById('meyou_init');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.src = 'https://meyou.id/public/meyou_init.js';
  script.id = 'meyou_init';
  
  // Устанавливаем разные параметры в зависимости от ширины экрана
  const params = isMobile.value 
    ? 'UTM=smi&header&footer&tag&count=6&nobutton&size=100&noclick'
    : 'UTM=smi&header&footer&tag&count=32&nobutton&size=150&noclick';
    
  script.setAttribute(
    'data-event',
    `https://meyou.id/efw2025/live?${params}`
  );
  
  reportageBlock.appendChild(script);
};

const videoRef = ref(null);

onMounted(() => {
  // Добавляем слушатель изменения размера окна
  window.addEventListener('resize', updateSize);
  // Инициализируем скрипт
  updateScript();
  // Принудительный запуск видео для iOS
  if (videoRef.value) {
    videoRef.value.play().catch(error => {
      console.log('Autoplay failed:', error);
    });
  }
});

onUnmounted(() => {
  // Удаляем слушатель при размонтировании компонента
  window.removeEventListener('resize', updateSize);
});

const navigateToGallery = () => {
  window.location.href = '/gallery';
};

</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>