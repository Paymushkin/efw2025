<template>
  <section class="relative flex flex-col min-h-screen overflow-hidden">
    <video
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      preload="auto"
      class="absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-multiply"
      ref="videoRef"
    >
      <source
        src="https://storage.yandexcloud.net/videos-meyou/bg-video.mp4"
        type="video/mp4"
      />
      Ваш браузер не поддерживает видео.
    </video>
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"
    ></div>
    <div class="container flex flex-col grow mx-auto px-4 py-10 relative z-20">
      <h1 class="hidden md:block xl:text-5xl text-4xl font-light max-w-3xl mb-10 text-white">
        Emirates Fashion Week: Beauty meets business
      </h1>
      <div id="reportage" class="grow mb-10"></div>
    </div>

    <!-- Новый блок -->
    <div class="relative z-20">
      <div class="flex flex-col w-[645px] max-w-full">
        <div class="bg-white py-8 p-8 md:text-right">
          <LogoIcon class="md:ml-auto h-8" />
        </div>
        <div class="bg-black text-white p-8 md:text-right">
          <span class="text-xl text-white">#JOINDUBAI</span>
        </div>
      </div>
    <Marquee content="text text text text text text text" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import LogoIcon from '~/components/icons/LogoIcon.vue';
import Marquee from '~/components/MarqueeSection.vue';

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
  script.src = 'https://meyou.ru/public/meyou_init.js';
  script.id = 'meyou_init';
  
  // Устанавливаем разные параметры в зависимости от ширины экрана
  const params = isMobile.value 
    ? 'UTM=smi&header&footer&adv&tag&count=9&nobutton&size=100'
    : 'UTM=smi&header&footer&adv&tag&count=15&nobutton&size=150';
    
  script.setAttribute(
    'data-event',
    `https://meyou.ru/testrep22/live?${params}`
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
</script>

<style scoped>
/* Убедитесь, что видео не перекрывает текст */
h1 {
  position: relative;
  z-index: 20;
}
</style>
