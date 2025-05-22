<template>
  <div 
    id="reportage"
    class="container gallery-iframe-container"
    :class="{ 'with-fog': showFog }"
  >
    <div class="overlay" @click="navigateToGallery"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  showFog: {
    type: Boolean,
    default: true
  },
});

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const updateScript = () => {
  const reportageBlock = document.getElementById('reportage');
  if (!reportageBlock) return;

  // Удаляем только старые iframe и скрипты Meyou
  reportageBlock.querySelectorAll('iframe').forEach(el => el.remove());
  reportageBlock.querySelectorAll('script[data-meyou]').forEach(el => el.remove());

  setTimeout(() => {
    const script = document.createElement('script');
    script.src = 'https://meyou.id/public/meyou_init.js';
    script.id = 'meyou_init';
    script.setAttribute('data-meyou', '1'); // для поиска и удаления
    // Передаём стартовую высоту, чтобы iframe не был 0px
    script.setAttribute('data-height', isMobile.value ? '350px' : '500px');

    const params = isMobile.value 
      ? 'UTM=smi&header&footer&tag&count=6&nobutton&size=100&noclick&pages'
      : 'UTM=smi&header&footer&tag&count=14&nobutton&size=150&noclick&pages';

    script.setAttribute(
      'data-event',
      `https://meyou.id/efw2025/live?${params}`
    );

    reportageBlock.appendChild(script);
  }, 100);

  // Для отладки postMessage
  window.addEventListener('message', (event) => {
    if (typeof event.data === 'string' && event.data.indexOf('meyouHeight') !== -1) {
      // eslint-disable-next-line no-console
      console.log('Получено сообщение от iframe:', event.data);
    }
  }, { once: true });
};

watch(isMobile, () => {
  updateScript();
});

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  window.addEventListener('message', handleMeyouMessage);
  setTimeout(updateScript, 100);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  window.removeEventListener('message', handleMeyouMessage);
});

function handleMeyouMessage(event) {
  if (typeof event.data === 'string' && event.data.indexOf('meyouHeight') !== -1) {
    console.log('Получено сообщение от iframe:', event.data);
  }
}

const navigateToGallery = () => {
  window.location.href = '/gallery';
};
</script>

<style scoped>
.gallery-iframe-container {
  width: 100%;
  overflow: hidden;
  margin-bottom: 2.5rem;
  position: relative;
  min-height: 300px;
}

@media (min-width: 768px) {
  .gallery-iframe-container {
    margin-bottom: 4.75rem;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  cursor: pointer;
  z-index: 1;
}

.gallery-iframe-container.with-fog::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to bottom, 
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.3) 40%,
    rgba(255, 255, 255, 0.6) 60%,
    rgba(255, 255, 255, 0.8) 80%,
    rgba(255, 255, 255, 1) 100%
  );
  pointer-events: none;
  z-index: 2;
}

@media (min-width: 768px) {
  .gallery-iframe-container.with-fog::after {
    height: 100px;
  }
}
</style> 