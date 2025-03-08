<template>
  <section id="faces" class="relative flex flex-col min-h-screen overflow-hidden">
    <div class="container mx-auto xl:mb-[76px] md:mb-8 mb-[36px]">
      <h2 class="text-xl md:text-3xl xl:text-4xl">Faces of Fashion Week</h2>
    </div>
    <div class="relative flex flex-col min-h-screen overflow-hidden">
      <video
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      preload="auto"
      ref="videoRef"
      class="absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-multiply"
    >
      <source
        src="https://storage.yandexcloud.net/videos-meyou/bg-video-2.mp4"
        type="video/mp4"
      />
      Ваш браузер не поддерживает видео.
    </video>
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"
    ></div>


    <!-- Новый блок -->
    <div class="relative z-20 mt-auto">
      <div class="flex flex-col ite w-[645px] max-w-full">
        <div class="bg-white py-8 p-8 md:text-right">
          <LogoIcon class="md:ml-auto h-8" />
        </div>
        <div class="bg-black text-white p-8 md:text-right">
          <NuxtLink :to="hashtag[1]" class="text-xl text-white">{{ hashtag[0] }}</NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import LogoIcon from '~/components/icons/LogoIcon.vue';
import { hashtag } from '~/constants/texts';

const videoRef = ref(null);

onMounted(() => {
  // Принудительный запуск видео для iOS
  if (videoRef.value) {
    videoRef.value.play().catch(error => {
      console.log('Autoplay failed:', error);
    });
  }
});

</script>

<style scoped>
/* Убедитесь, что видео не перекрывает текст */
h1 {
  position: relative;
  z-index: 20;
}
</style>
