<template>
  <section class="mb-[50px] md:mb-[80px] xl:mb-[100px]">
    <h2 class="text-xl md:text-4xl mb-[75px]">PHOTO GALLERY</h2>
    
    <!-- Mobile Slider -->
    <div class="md:hidden">
      <div class="relative -mx-4 px-4">
        <div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          <div 
            v-for="(photo, index) in photos" 
            :key="index"
            class="flex-shrink-0 w-[85%] h-64 cursor-pointer snap-center"
            @click="openModal(index)"
          >
            <img 
              :src="photo.url" 
              :alt="`Photo ${index + 1}`"
              class="w-full h-full object-cover rounded-lg"
              loading="lazy"
              @error="handleImageError(index)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Masonry Grid -->
    <div class="hidden md:block">
      <div class="columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        <div 
          v-for="(photo, index) in photos" 
          :key="index"
          class="break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity duration-300"
          @click="openModal(index)"
        >
          <img 
            :src="photo.url" 
            :alt="`Photo ${index + 1}`"
            class="w-full h-auto object-contain"
            loading="lazy"
            @error="handleImageError(index)"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div class="relative max-w-4xl max-h-full">
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
        >
          ×
        </button>
        <img 
          :src="photos[currentPhotoIndex]?.url" 
          :alt="`Photo ${currentPhotoIndex + 1}`"
          class="max-w-full max-h-full object-contain rounded-lg"
        />
        <div class="flex justify-between items-center mt-4 text-white">
          <button 
            @click.stop="previousPhoto"
            :disabled="currentPhotoIndex === 0"
            class="px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span class="text-lg">{{ currentPhotoIndex + 1 }} / {{ photos.length }}</span>
          <button 
            @click.stop="nextPhoto"
            :disabled="currentPhotoIndex === photos.length - 1"
            class="px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isModalOpen = ref(false)
const currentPhotoIndex = ref(0)

// Генерируем массив URL фотографий
const photos = computed(() => {
  const photoUrls = []
  for (let i = 1; i <= 30; i++) {
    photoUrls.push({
      url: `https://storage.yandexcloud.net/videos-meyou/efw2025/photos/photo-${i}.JPG`,
      loaded: false
    })
  }
  return photoUrls
})

const openModal = (index) => {
  currentPhotoIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

const nextPhoto = () => {
  if (currentPhotoIndex.value < photos.value.length - 1) {
    currentPhotoIndex.value++
  }
}

const previousPhoto = () => {
  if (currentPhotoIndex.value > 0) {
    currentPhotoIndex.value--
  }
}

const handleImageError = (index) => {
  console.warn(`Failed to load image: photo-${index + 1}.JPG`)
}

// Обработка клавиш для навигации в модальном окне
const handleKeydown = (event) => {
  if (!isModalOpen.value) return
  
  switch (event.key) {
    case 'Escape':
      closeModal()
      break
    case 'ArrowLeft':
      previousPhoto()
      break
    case 'ArrowRight':
      nextPhoto()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Дополнительные стили для плавных переходов */
.transition-shadow {
  transition: box-shadow 0.3s ease;
}

.transition-colors {
  transition: background-color 0.3s ease;
}

/* Скрытие скроллбара для мобильного слайдера */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Плавная прокрутка */
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
}
</style>
