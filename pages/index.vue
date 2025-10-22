<template>
  <div>
    <AppSeo
      title="Emirates Fashion Week | Dubai 2025 | 14th Season | Spring Summer 26 | 8–11 November"
      description="Emirates Fashion Week Dubai 2025 celebrates its 14th Season (Spring/Summer 26) on 8–11 November at Skylight Gallery, Arjaan by Rotana, Dubai Media City. Featuring 2 days of runway shows and 2 days of 40 fashion pop-ups & 60 beauty services market. Since 2019, EFW has showcased 350+ designers and trained 1200+ models."
      keywords="Emirates Fashion Week, Dubai Fashion, Fashion Shows Runways Dubai, Beauty Exhibition UAE, Fashion Pop-up Market Dubai, Designer Collections, Beauty Services Dubai, Fashion Week 2025 Dubai"
    />
    <ClientOnly>
      <HeroSection class="mb-[56px] md:mb-[76px]" />
    </ClientOnly>
    <ClientOnly>
      <NewProgramSection id="spring-summer-2026" class="md:mb-[120px] mb-[76px]" />
    </ClientOnly>
    <ClientOnly>
      <MarqueeSection :content="sponsors" class="mb-[56px] md:mb-[76px]" />
    </ClientOnly>
    <HowItWasSection id="previous-seasons" class="mb-[56px] md:mb-[76px]" />
    <ClientOnly>
      <ProgramSection id="fall-winter-2025" class="md:mb-[56px] mb-[36px]" />
    </ClientOnly>
    <ClientOnly>
      <DesignersSection id="designers" class="md:mb-[76px] mb-[56px]" />
    </ClientOnly>
    <SponsorsSection id="partners-media" class="md:mb-[76px] mb-[56px]" />
    <StatisticsSection class="md:mb-[76px] mb-[56px]" />
    <div id="features-access" class="container mx-auto px-4 md:mb-[76px] mb-[56px]">
      <EventFeatures :data="featuresData.featuresDataPromo" />
    </div>
    <div id="faces-efw" class="container mx-auto px-4">
      <FacesOfEfwSection />
    </div>
    <section id="economy-dubai">
      <div class="container mx-auto px-4 md:mb-[76px] mb-[56px]">
        <ClientOnly>
          <ImageCarousel 
            title="We invest in and support the economy of Dubai | UAE" 
            :slidesPerView="6" 
            :autoplay="true"
            :autoplaySpeed="5000"
            :gap="20"
          />
        </ClientOnly>
      </div>
    </section>
    <ClientOnly>
      <FaqSectionDynamic id="faq" class="mb-[56px] md:mb-[76px]" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';

definePageMeta({
  layout: 'default'
});

// Components
import HeroSection from '@/components/HeroSection.vue';
import HowItWasSection from '~/components/HowItWasSection.vue';
import NewProgramSection from '~/components/NewProgramSection.vue';
import ProgramSection from '~/components/ProgramSection.vue';
import DesignersSection from '~/components/DesignersSection.vue';
import SponsorsSection from '~/components/SponsorsSection.vue';
import StatisticsSection from '@/components/StatisticsSection.vue';
import MarqueeSection from '~/components/MarqueeSection.vue';
import ImageCarousel from '~/components/ImageCarousel.vue';
import EventFeatures from '~/components/EventFeatures.vue';
import AppSeo from '@/components/AppSeo.vue';
import FaqSectionDynamic from '~/components/FaqSectionDynamic.vue';
import FacesOfEfwSection from '@/components/FacesOfEfwSection.vue';

// Constants and Assets
import { FEATURES_DATA } from '~/constants/featuresData';
import sponsor1 from '@/assets/image/sponsor-logo.webp';
import sponsor2 from '@/assets/image/sponsor-logo.webp';
import sponsor3 from '@/assets/image/sponsor-logo.webp';
import sponsor4 from '@/assets/image/sponsor-logo.webp';

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4];
const featuresData = FEATURES_DATA;

// Функция плавной прокрутки к секции по хешу
const scrollToHash = () => {
  if (!process.client) return;
  
  const hash = window.location.hash;
  
  if (hash) {
    // Убираем # из хеша
    const targetId = hash.substring(1);
    
    // Ждем, пока компоненты полностью загрузятся
    nextTick(() => {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Плавная прокрутка к элементу
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          console.log(`✅ Прокрутка к секции: #${targetId}`);
        } else {
          console.log(`❌ Элемент с id="${targetId}" не найден`);
        }
      }, 500); // Задержка для загрузки ClientOnly компонентов
    });
  }
};

// Инициализация при монтировании
onMounted(() => {
  if (!process.client) return;
  
  // Прокрутка к хешу при загрузке страницы
  scrollToHash();
  
  // Слушаем изменения хеша в URL
  window.addEventListener('hashchange', scrollToHash);
  
  console.log('🏠 Главная страница: Компонент загружен');
});

// Отладочная информация для главной страницы
console.log('🏠 Главная страница: Компонент загружен');

// Функция для принудительного обновления счетчика (для отладки)
const forceUpdateCounters = () => {
  if (!process.client) return;
  
  console.log('🔧 Принудительное обновление счетчиков...');
  
  // Обновляем счетчики напрямую
  const trialCountElement1 = document.getElementById('trial-waitlist-count-1');
  const trialCountElement2 = document.getElementById('trial-waitlist-count-2');
  
  if (trialCountElement1) {
    trialCountElement1.textContent = '111';
    console.log('✅ Обновлен trial-waitlist-count-1: 111');
  } else {
    console.log('❌ Элемент trial-waitlist-count-1 не найден');
  }
  
  if (trialCountElement2) {
    trialCountElement2.textContent = '111';
    console.log('✅ Обновлен trial-waitlist-count-2: 111');
  } else {
    console.log('❌ Элемент trial-waitlist-count-2 не найден');
  }
};

// Экспортируем функцию для использования в консоли браузера
if (process.client) {
  window.forceUpdateCounters = forceUpdateCounters;
}
</script>
