<template>
  <div class="pt-10">
    <AppSeo
      title="Features & Highlights - Emirates Fashion Week Dubai 2025"
      description="Discover the unique features and highlights of Emirates Fashion Week Dubai 2025. From exclusive fashion shows to beauty exhibitions and networking opportunities."
      keywords="Emirates Fashion Week Features, Dubai Fashion Events, Fashion Show Highlights, Beauty Exhibition Features, Fashion Industry Dubai, Fashion Week Program"
    />
    <div class="container flex flex-col gap-[76px]">

      <!-- Digital Power Section -->
      <div class="max-w-full mx-auto text-left space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold text-black">Digital Power by MeYou Arena Event LLC</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Emirates Fashion Week 2025 powered its digital core together with our technology partner MeYou Arena Event LLC.
          Their solutions transformed the event into an interactive and media-rich experience, ensuring that every guest, designer, and brand was seamlessly connected.
        </p>
      </div>

      <EventFeatures :data="featuresData.featuresData1" />

      <!-- SecondScreen Section -->
      <div class="max-w-full mx-auto text-left space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold text-black">SecondScreen</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          No apps. No logins. SecondScreen by MeYou Arena Event LLC delivered instant interaction during Fashion Week. 
          Visitors connected through their browsers to vote in live polls, interact with speakers, explore designer profiles, and view real-time updates. 
          This invisible layer of technology turned traditional shows into interactive experiences, where the audience was fully engaged.
        </p>
      </div>

      <EventFeatures :data="featuresData.featuresData2" />

      <!-- MediaWall Section -->
      <div class="max-w-full mx-auto text-left space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold text-black">MediaWall</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          On giant LED walls across the venue, MediaWall by MeYou Arena Event LLC streamed live interviews, designer highlights, and guest profiles. 
          Every visitor became part of the digital story, and the event itself was documented in real time. 
          This constant stream of curated, branded content created both immersion at the venue and a media archive accessible worldwide.
        </p>
      </div>

      <EventFeatures :data="featuresData.featuresData3" />

      <!-- Paparazzi Section -->
      <div class="max-w-full mx-auto text-left space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold text-black">Paparazzi</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Guests experienced the unique Paparazzi service from MeYou Arena Event LLC: branded instant photography projected on venue screens and delivered directly to mobile devices. 
          This playful feature encouraged visitors to share their experience online, turning personal vanity into powerful event marketing.
        </p>
      </div>

      <EventFeatures :data="featuresData.featuresData4" />

      <!-- iFrame Reportage Section -->
      <div class="max-w-full mx-auto text-left space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold text-black">iFrame Reportage</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          MeYou Arena Event LLC also powered fast digital reportage: live interviews and highlights were instantly edited and embedded into web and social media via iFrame players. 
          This gave Fashion Week an always-on media presence and provided participants with ready-to-share, professional-quality content.
        </p>
      </div>

      <EventFeatures :data="featuresData.featuresData5" />
      
      <!-- TV Lobby Section -->
      <div class="max-w-full mx-auto text-left space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold text-black">TV Lobby / Realtime.Media</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          With TV Lobby by MeYou Arena Event LLC, Emirates Fashion Week set up a studio inside the venue where designers, stylists, and opinion leaders were interviewed on camera. 
          Thanks to the Realtime.Media pipeline, each interview was instantly edited, branded, and published during the event. 
          In 2025 this resulted in hundreds of professional-quality video stories, amplifying the voices of participants far beyond the catwalk.
        </p>
      </div>

      <EventFeatures :data="featuresData.featuresData6" />
      
      <!-- Expochat Section -->
      <div class="max-w-full mx-auto text-left space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold text-black">Expochat / AI Matchmaking</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Networking at Fashion Week was powered by Expochat from MeYou Arena Event LLC. 
          This AI-driven tool matched visitors and industry professionals by shared interests, sparking meaningful conversations with built-in icebreakers. 
          Instead of chance encounters, participants experienced AI-powered networking that created real connections and measurable outcomes.
        </p>
      </div>

      <EventFeatures :data="featuresData.featuresData7" />
      
      <!-- Lead Generation Section -->
      <div class="max-w-full mx-auto text-left space-y-6 mb-[76px]">
        <h2 class="text-2xl md:text-3xl font-bold text-black">Lead Generation via QR codes</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Every exhibitor and designer at Emirates Fashion Week was equipped with personalized QR codes from MeYou Arena Event LLC. 
          Scanning a code enabled instant lead capture — no business cards, no delay. 
          This simple but essential digital tool ensured that every conversation translated directly into follow-ups, multiplying the event's commercial impact.
        </p>
      </div>
      
      <EventFeatures :data="featuresData.featuresDataDigital" />
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