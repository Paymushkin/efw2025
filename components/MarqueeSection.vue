<template>
  <div class="bg-black w-full overflow-hidden">
    <div class="whitespace-nowrap animate-marquee flex items-center">
      <!-- Если передан массив изображений -->
      <template v-if="Array.isArray(content)">
        <div v-for="(image, index) in content" :key="index" class="inline-block py-4">
          <img 
            :src="image" 
            alt="Marquee Image" 
            class="md:max-h-11 max-h-8 w-auto object-contain mx-20"
          />
        </div>
      </template>
      <!-- Если передан текст -->
      <template v-else>
        <span class="inline-block text-white py-2 px-4">
          {{ content }}
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
// Изменяем props для поддержки как строки, так и массива
const props = defineProps({
  content: {
    type: [String, Array],
    required: true
  }
});
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style> 