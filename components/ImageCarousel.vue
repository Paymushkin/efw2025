<template>
  <div class="image-carousel-container">
    <div class="carousel-header flex justify-between items-center mb-6">
      <h2 class="text-2xl md:text-3xl lg:text-4xl">{{ title }}</h2>
      <div class="navigation-buttons flex items-center gap-3">
        <button 
          @click="swiperRef?.slidePrev()"
          class="carousel-btn p-2 border border-black hover:bg-black hover:text-white transition-colors"
          aria-label="Предыдущий слайд"
        >
          &lt;
        </button>
        <button 
          @click="swiperRef?.slideNext()"
          class="carousel-btn p-2 border border-black hover:bg-black hover:text-white transition-colors"
          aria-label="Следующий слайд"
        >
          &gt;
        </button>
      </div>
    </div>

    <swiper
      :slides-per-view="slidesPerView"
      :space-between="gap"
      :autoplay="autoplay ? { delay: autoplaySpeed, disableOnInteraction: false } : false"
      :pagination="{ 
        clickable: true,
        el: '.swiper-pagination'
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
          slidesPerView: 4,
          spaceBetween: 15
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1920: {
          slidesPerView: 6,
          spaceBetween: gap
        }
      }"
      :modules="modules"
      @swiper="onSwiper"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, index) in props.images.length ? props.images : loadedImages" :key="index">
        <div class="carousel-slide">
          <div class="image-container bg-white shadow-md rounded-lg p-2">
            <img 
              :src="image.src" 
              :alt="image.alt || `Slide ${index + 1}`" 
              loading="lazy"
              class="w-full h-auto object-contain rounded-lg hover:scale-[1.03] transition-transform duration-300"
            />
          </div>
        </div>
      </swiper-slide>
      
      <div class="swiper-pagination mt-6"></div>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperRef = ref(null);
const loadedImages = ref([]);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

onMounted(async () => {
  if (props.images.length === 0) {
    // Если изображения не переданы, загружаем их динамически
    const imageContext = import.meta.glob('@/assets/image/cards/*.png', { eager: false });
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
  }
});

const modules = [Pagination, Autoplay];

const props = defineProps({
  title: {
    type: String,
    default: 'Галерея изображений'
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
</script>

<style scoped>
.carousel-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

:deep(.swiper) {
  padding-bottom: 10px;
}

:deep(.swiper-wrapper) {
  align-items: center;
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.image-container {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.image-container img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
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
</style> 