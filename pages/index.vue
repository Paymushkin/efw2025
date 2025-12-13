<template>
  <div class="w-full max-w-full overflow-x-hidden">
    <AppSeo
      title="Emirates Fashion Week | Dubai 2025 | 14th Season | Spring Summer 26 | 8–11 November"
      description="Emirates Fashion Week Dubai 2025 celebrates its 14th Season (Spring/Summer 26) on 8–11 November at Skylight Gallery, Arjaan by Rotana, Dubai Media City. Featuring 2 days of runway shows and 2 days of 40 fashion pop-ups & 60 beauty services market. Since 2019, EFW has showcased 350+ designers and trained 1200+ models."
      keywords="Emirates Fashion Week, Dubai Fashion, Fashion Shows Runways Dubai, Beauty Exhibition UAE, Fashion Pop-up Market Dubai, Designer Collections, Beauty Services Dubai, Fashion Week 2025 Dubai"
      schema-type="event"
      :event-data="{
        name: 'Emirates Fashion Week Dubai 2025 - 14th Season Spring Summer 26',
        description: 'Emirates Fashion Week Dubai 2025 celebrates its 14th Season (Spring/Summer 26) on 8–11 November at Skylight Gallery, Arjaan by Rotana, Dubai Media City.',
        startDate: '2025-11-08T00:00:00+04:00',
        endDate: '2025-11-11T23:59:59+04:00',
        location: {
          name: 'Skylight Gallery, Arjaan by Rotana, Dubai Media City'
        }
      }"
    />
    <ClientOnly>
      <HeroSection id="hero-section" key="hero-section" class="mb-[56px] md:mb-[76px]" />
    </ClientOnly>
    <!-- <ClientOnly>
      <CurrentProgramSection class="md:mb-[120px] mb-[76px]" />
    </ClientOnly> -->

    <ClientOnly>
      <template #default>
        <PreviousSeasonsSection id="previous-seasons" key="previous-seasons-wrapper" class="mb-[56px] md:mb-[76px]" />
      </template>
      <template #fallback>
        <div class="mb-[56px] md:mb-[76px]"></div>
      </template>
    </ClientOnly>

    <ClientOnly>
      <MarqueeSection id="marquee" key="marquee-section" :content="sponsors" class="mb-[56px] md:mb-[76px]" />
    </ClientOnly>

    <ClientOnly>
      <NewProgramSection id="spring-summer-2026" key="new-program-section" class="md:mb-[120px] mb-[76px]" />
    </ClientOnly>

    
    <DesignerRunwaySection id="runway" key="designer-runway-section" class="md:mb-[76px] mb-[56px]" />
    
    <ClientOnly>
      <MagazineCarousel id="magazine" key="magazine-carousel" class="md:mb-[76px] mb-[56px]" />
    </ClientOnly>

    <ClientOnly>
      <template #default>
        <ProgramSection id="fall-winter-2025" key="program-section-fall-winter" class="md:mb-[76px] mb-[56px]" />
      </template>
      <template #fallback>
        <div class="md:mb-[76px] mb-[56px]"></div>
      </template>
    </ClientOnly>

    <DesignersSection  id="designers" key="designers-section-component" class="md:mb-[36px] mb-[16px]" />

    <SponsorsSection key="sponsors-section" id="partners-media" class="md:mb-[76px] mb-[56px]" />

    <ClientOnly>
      <StatisticsSection id="statistics" key="statistics-section" class="md:mb-[76px] mb-[56px]" />
    </ClientOnly>

    <EventFeatures id="features-access" key="event-features" class="container mx-auto px-4 md:mb-[76px] mb-[56px]" :data="featuresData.featuresDataPromo" />

    <ClientOnly>
      <template #default>
        <FacesOfEfwSection id="faces-efw" key="faces-efw-component" class="container mx-auto px-4 md:mb-[36px] mb-[16px]"/>
      </template>
      <template #fallback>
        <div class="md:mb-[36px] mb-[16px]"></div>
      </template>
    </ClientOnly>


    <ClientOnly>
      <template #default>
        <ImageCarousel 
          id="economy-dubai"
          key="image-carousel"
          title="We invest in and support the economy of Dubai | UAE"
          class="container mx-auto px-4 md:mb-[76px] mb-[56px]"
        />
      </template>
      <template #fallback>
        <div class="md:mb-[76px] mb-[56px]"></div>
      </template>
    </ClientOnly>

    <ClientOnly>
      <template #default>
        <FaqSectionDynamic id="faq" key="faq-section" class="mb-[56px] md:mb-[76px]" />
      </template>
      <template #fallback>
        <div class="mb-[56px] md:mb-[76px]"></div>
      </template>
    </ClientOnly>
    
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

import { onMounted, nextTick } from 'vue';

// Components
import HeroSection from '@/components/HeroSection.vue';
import HowItWasSection from '~/components/PreviousSeasonsSection.vue';
import CurrentProgramSection from '~/components/CurrentProgramSection.vue';
import NewProgramSection from '~/components/NewProgramSection.vue';
import ProgramSection from '~/components/ProgramSection.vue';
import DesignersSection from '~/components/DesignersSection.vue';
import MagazineCarousel from '~/components/MagazineCarousel.vue';
import DesignerRunwaySection from '~/components/DesignerRunwaySection.vue';
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
  
  // Проверяем и исправляем дубликаты ID
  const checkDuplicateIds = () => {
    const ids = ['faces-efw', 'designers', 'fall-winter-2025', 'previous-seasons', 'features-access', 'economy-dubai', 'faq'];
    ids.forEach((id) => {
      const elements = document.querySelectorAll(`#${id}`);
      if (elements.length > 1) {
        console.warn(`⚠️ Найдено дублирование ID: #${id} (${elements.length} элементов)`);
        // Оставляем только первый элемент, остальные переименовываем
        elements.forEach((el, index) => {
          if (index > 0) {
            el.id = `${id}-duplicate-${index}`;
            console.warn(`  Переименован элемент #${index + 1} в #${el.id}`);
          }
        });
      }
    });
  };
  
  // Проверяем после загрузки всех компонентов
  setTimeout(() => {
    checkDuplicateIds();
  }, 1000);
  
  // Прокрутка к хешу при загрузке страницы
  scrollToHash();
  
  // Слушаем изменения хеша в URL
  window.addEventListener('hashchange', scrollToHash);
  
  console.log('🏠 Главная страница: Компонент загружен');
});
</script>
