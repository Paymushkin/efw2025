<template>
  <section ref="sectionRef" :id="props.id" class="image-carousel-container">
    <div class="carousel-header flex justify-between items-center mb-6">
      <h2 class="text-2xl md:text-3xl lg:text-4xl">{{ title }}</h2>
      <div class="hidden md:flex relative items-center gap-4">
        <div 
          @click="swiperRef?.slidePrev()"
          class="swiper-button-prev !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl cursor-pointer"
        ></div>
        <div 
          @click="swiperRef?.slideNext()"
          class="swiper-button-next !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl cursor-pointer"
        ></div>
      </div>
    </div>

    <!-- SSR-compatible fallback for SEO -->
    <div v-if="!isClient" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
      <div 
        v-for="(image, index) in staticImages" 
        :key="`static-${index}`"
        class="image-card"
      >
        <div class="aspect-[3/4] relative overflow-hidden rounded-lg">
          <img 
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Client-only Swiper for interactive experience -->
    <ClientOnly>
      <div class="relative">
        <swiper
          :key="`swiper-${displayImages.length}`"
          :modules="modules"
          :slides-per-view="slidesPerView"
          :space-between="gap"
          :pagination="{ 
            clickable: true,
            el: '.swiper-pagination'
          }"
          :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            enabled: false
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }"
          :autoplay="autoplay ? { delay: autoplaySpeed, disableOnInteraction: false } : false"
          @swiper="onSwiper"
          class="mySwiper"
        >
          <swiper-slide v-for="(image, index) in displayImages" :key="`image-${getImageUrl(image)}-${index}`">
            <div class="carousel-slide">
              <div class="image-container">
                <a 
                  :href="getImageUrl(image)"
                  data-fancybox="gallery"
                  :data-caption="getImageAlt(image, index)"
                  class="gallery-item"
                >
                  <img 
                    :src="getImageUrl(image)"
                    :alt="getImageAlt(image, index)"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    :loading="index === 0 ? 'eager' : 'lazy'"
                  />
                </a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination mt-6"></div>
      </div>
    </ClientOnly>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

defineOptions({
  inheritAttrs: false
});

const swiperRef = ref(null);
const sectionRef = ref(null);
const loadedImages = ref([]);
const isClient = ref(false);

// Статические изображения для SSR (используем пути напрямую)
const staticImages = [
  { src: '/assets/image/cards/item-13.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Dubai Business' },
  { src: '/assets/image/cards/item-14.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Economic Growth' },
  { src: '/assets/image/cards/item-15.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Fashion Industry' },
  { src: '/assets/image/cards/item-16.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Trade Relations' },
  { src: '/assets/image/cards/item-17.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Innovation' },
  { src: '/assets/image/cards/item-18.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Development' },
  { src: '/assets/image/cards/item-19.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Investment' },
  { src: '/assets/image/cards/item-20.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Global Trade' },
  { src: '/assets/image/cards/item-21.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Business Hub' },
  { src: '/assets/image/cards/item-22.webp', alt: 'Emirates Fashion Week supporting Dubai economy - Economic Partnership' }
];

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

// Функции для обработки URL и alt текста изображений
const getImageUrl = (image) => {
  if (typeof image === 'string') return image;
  if (image && image.src) return image.src;
  return '';
};

const getImageAlt = (image, index) => {
  if (typeof image === 'string') return `Slide ${index + 1}`;
  if (image && image.alt) return image.alt;
  return `Slide ${index + 1}`;
};

// Функция для загрузки скриптов
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Функция для загрузки стилей
const loadStyle = (href) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

onMounted(async () => {
  isClient.value = true;
  
  // Явно устанавливаем ID на корневой элемент
  if (process.client && props.id && sectionRef.value) {
    sectionRef.value.id = props.id;
  }
  
  try {
    // Загружаем jQuery и Fancybox
    await loadScript('https://code.jquery.com/jquery-3.7.1.min.js');
    await loadStyle('https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css');
    await loadScript('https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js');

    // Инициализируем Fancybox после загрузки всех скриптов
    window.jQuery('[data-fancybox="gallery"]').fancybox({
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "close"
      ],
      animationEffect: "fade",
      transitionEffect: "fade",
      preventCaptionOverlap: true,
      loop: true,
      infobar: true,
      touch: {
        vertical: true
      },
      mobile: {
        clickContent: function(current, event) {
          return current.type === "image" ? "toggleControls" : false;
        },
        clickSlide: function(current, event) {
          return current.type === "image" ? "toggleControls" : "close";
        },
      },
      wheel: false
    });

    // Загрузка изображений, если они не переданы
    if (props.images.length === 0) {
      const imageContext = import.meta.glob('@/assets/image/cards/*.webp', { eager: false });
      const entries = Object.entries(imageContext);
      
      for (const [path, importFn] of entries) {
        try {
          const module = await importFn();
          const fileName = path.split('/').pop().split('.')[0];
          loadedImages.value.push({
            src: module.default,
            alt: fileName
          });
        } catch (error) {
          console.error(`Ошибка при загрузке изображения ${path}:`, error);
        }
      }
      
      // Обновляем Swiper после загрузки изображений
      await nextTick();
      if (swiperRef.value) {
        swiperRef.value.update();
        swiperRef.value.slideTo(0, 0);
      }
    }
  } catch (error) {
    console.error('Ошибка при инициализации Fancybox:', error);
  }
});

onUnmounted(() => {
  if (window.jQuery && window.jQuery.fancybox) {
    window.jQuery.fancybox.destroy();
  }
});

const modules = [Pagination, Autoplay];

const props = defineProps({
  title: {
    type: String,
    default: 'Галерея изображений'
  },
  id: {
    type: String,
    default: undefined
  },
  images: {
    type: Array,
    default: () => []  // Возвращаем пустой массив по умолчанию
  },
  slidesPerView: {
    type: Number,
    default: 3
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  autoplaySpeed: {
    type: Number,
    default: 5000 // 5 секунд
  },
  gap: {
    type: Number,
    default: 16 // Расстояние между слайдами в пикселях
  }
});

// Вычисляемое свойство для отображения изображений
const displayImages = computed(() => {
  if (props.images.length > 0) {
    return props.images;
  }
  // На клиенте используем загруженные изображения, на сервере - статические
  if (isClient.value && loadedImages.value.length > 0) {
    return loadedImages.value;
  }
  return staticImages;
});

// Отслеживаем изменения изображений и обновляем Swiper
watch(displayImages, async (newImages) => {
  if (isClient.value && swiperRef.value && newImages.length > 0) {
    await nextTick();
    swiperRef.value.update();
  }
}, { immediate: false });
</script>

<style scoped>
/* Стили для SSR grid-сетки */
.image-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Удаляем старые стили для кнопок */
:deep(.swiper) {
  padding-bottom: 10px;
}

:deep(.swiper-wrapper) {
  align-items: center;
}

/* Стили для стрелок навигации */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  position: static;
  margin: 0;
  width: 40px;
  height: 40px;
  color: black;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  opacity: 0.7;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 24px;
    height: 24px;
  }
  
  :deep(.swiper-button-prev::after),
  :deep(.swiper-button-next::after) {
    font-size: 16px;
  }
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.image-container a {
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: zoom-in;
}

.image-container img:hover {
  transform: scale(1.02);
}

/* Стили для пагинации Swiper */
:deep(.swiper-pagination) {
  position: relative;
  bottom: 0;
  margin-top: 16px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #ccc;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #000;
}

/* Стили для интеграции с Fancybox */
.gallery-item {
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
  text-decoration: none;
}

.carousel-slide img {
  transition: transform 0.3s ease;
}

.carousel-slide:hover img {
  transform: scale(1.02);
}

/* Обновляем стили для Fancybox */
:deep(.fancybox-button) {
  background: rgba(30, 30, 30, 0.6);
}

:deep(.fancybox-button:hover) {
  background: rgba(0, 0, 0, 0.8);
}
</style> 