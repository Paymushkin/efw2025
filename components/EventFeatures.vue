<template>
  <section 
    class="md:mb-[100px] mb-12 flex flex-col" 
    v-if="data"
  >
    <!-- Заголовок с настраиваемым цветом фона -->
    <div v-if="data.title" class="mb-8 md:10 lg:mb-12">
      <div class="md:flex md:items-center">
        <h2 class="text-2xl md:text-3xl lg:text-4xl">{{ data.title || '' }}</h2>
        <a
          v-if="data.subtitle" 
          :id="data.id || ''"
          class="text-white mt-2 md:mt-0 md:ml-2 px-2 py-1 md:px-4 md:py-1 text-xl md:text-2xl lg:text-3xl block md:inline-block" 
          :style="{ backgroundColor: data.subtitleBgColor || '#6c757d' }"
          :href="data.id ? `#${data.id}` : '' "
        >
          {{ data.subtitle }}
        </a>
      </div>
    </div>

    <!-- Список дней с горизонтальным скроллом -->
    <div 
      class="overflow-x-auto custom-scrollbar mb-[20px] md:mb-[25px] lg:mb-[34px]"
    >
      <div class="flex md:gap-10 gap-5 whitespace-nowrap pb-4">
        <div 
          v-for="(day, index) in data.days || []" 
          :key="index"
          class="flex flex-col items-start gap-1 flex-shrink-0"
          :class="{ 'opacity-50': !day.highlighted }"
        >
          <h3 
            class="text-lg md:text-xl lg:text-3xl 2xl:text-4xl transition-colors duration-300"
            :class="{ 'text-black': day.highlighted, 'text-gray-400': !day.highlighted }"
          >
            {{ day.title }}
          </h3>
          <span class="text-xs md:text-sm lg:text-base">{{ day.date }}</span>
        </div>
      </div>
    </div>


    <BaseButton 
      v-if="data.buttonText && !data.buttonLink" 
      @click="showContactForm = true" 
      id="participate-button" 
      variant="primary" 
      class="mb-[30px] md:mb-[40px] lg:mb-[50px] ml-auto text-sm md:text-base"
    >
      <span>{{ data.buttonText }}</span>
      <span>></span>
    </BaseButton>

    <NuxtLink 
      v-if="data.buttonText && data.buttonLink" 
      :to="data.buttonLink"
      class="inline-block mb-[30px] md:mb-[40px] lg:mb-[50px] ml-auto align-end"
    >
      <BaseButton 
        variant="primary" 
        class="text-sm md:text-base"
      >
        <span>{{ data.buttonText }}</span>
        <span>></span>
      </BaseButton>
    </NuxtLink>

    <!-- Карточки -->
    <div class="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div 
        v-for="(card, index) in data.cards || []" 
        :key="index"
        class="border border-black rounded-lg overflow-hidden"
      >
        <div class="h-[300px] md:h-[360px] lg:h-[460px] overflow-hidden">
          <img 
            v-if="card.type !== 'video'"
            :src="card.image" 
            :alt="card.title"
            loading="lazy"
            class="w-full h-full object-cover"
          />
          <video
            v-else-if="card.type === 'video'"
            :src="card.video"
            :poster="card.poster"
            class="w-full h-full object-cover"
            :class="{ 'loaded': isVideoLoaded[index] }"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            @loadeddata="handleVideoLoad($event, index)"
            @error="handleVideoError"
            ref="videoRef"
          ></video>
        </div>
        <div class="p-5 md:p-7 lg:p-10">
          <h4 class="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3 lg:mb-4">{{ card.title }}</h4>
          <p class="text-base md:text-lg mb-2 md:mb-3 lg:mb-4">{{ card.subtitle }}</p>
          <p class="text-sm md:text-base">{{ card.description }}</p>
        </div>
      </div>
    </div>

    <!-- Мобильные карточки с горизонтальным скроллом -->
    <div class="md:hidden overflow-x-auto custom-scrollbar card-container -mx-5 px-5">
      <div class="flex gap-5 pb-4">
        <div 
          v-for="(card, index) in data.cards || []" 
          :key="index"
          class="border border-black rounded-lg overflow-hidden flex-shrink-0 w-[85vw] max-w-[360px] card-item"
        >
          <div class="h-[260px] overflow-hidden">
            <img 
              v-if="card.type !== 'video'"
              :src="card.image" 
              :alt="card.title"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <video
              v-else-if="card.type === 'video'"
              :src="card.video"
              :poster="card.poster"
              class="w-full h-full object-cover"
              controls
              preload="metadata"
            ></video>
          </div>
          <div class="p-5">
            <h4 class="text-xl font-medium mb-2">{{ card.title }}</h4>
            <p class="text-base mb-3">{{ card.subtitle }}</p>
            <p class="text-sm">{{ card.description }}</p>
          </div>
        </div>
        <div class="flex-shrink-0 w-5"></div>
      </div>
    </div>
    
    <ContactForm :is-open="showContactForm" @close="showContactForm = false" />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ContactForm from './ContactForm.vue';

const showContactForm = ref(false);

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      title: '',
      subtitle: '',
      subtitleBgColor: '#6c757d',
      days: [],
      cards: [],
      buttonText: '',
      buttonLink: ''
    })
  }
});

const videoRefs = ref([]);
const isVideoLoaded = ref({});

const handleVideoLoad = (event, index) => {
  const video = event.target;
  isVideoLoaded.value[index] = true;
  video.play().catch(error => {
    console.log('Autoplay failed:', error);
    document.addEventListener('click', () => {
      video.play().catch(console.error);
    }, { once: true });
  });
};

const handleVideoError = (event) => {
  console.error('Video loading error:', event);
  const video = event.target;
  // Пробуем перезагрузить видео
  video.load();
};

onMounted(() => {
  // Предзагрузка видео
  if (videoRefs.value) {
    videoRefs.value.forEach(video => {
      if (video) {
        video.load();
      }
    });
  }
});

onUnmounted(() => {
  // Очистка при размонтировании
  if (videoRefs.value) {
    videoRefs.value.forEach(video => {
      if (video) {
        video.pause();
        video.src = '';
      }
    });
  }
});
</script>

<style>
.custom-scrollbar {
  scrollbar-width: none; /* Для Firefox */
  -ms-overflow-style: none; /* Для IE и Edge */
}

.custom-scrollbar::-webkit-scrollbar {
  display: none; /* Для Chrome, Safari и Opera */
}

@media (max-width: 768px) {
  .card-container {
    scroll-snap-type: x mandatory;
    scroll-padding: 1.25rem;
  }
  
  .card-item {
    scroll-snap-align: start;
  }
}

/* Обновляем стили для плавной загрузки видео */
video {
  opacity: 1; /* Меняем начальную прозрачность на 1 */
}

video.loaded {
  opacity: 1;
}
</style> 