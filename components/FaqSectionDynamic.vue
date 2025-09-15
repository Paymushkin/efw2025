<template>
  <section :class="[
    'container mx-auto px-4',
    { 'py-20 md:py-[100px]': !standalone },
    { 'py-[60px] md:py-[120px]': standalone }
  ]">
    <h2 class="text-xl md:text-3xl xl:text-4xl mb-8 md:mb-12">
      <template v-if="standalone">
        Frequently Asked Questions
      </template>
      <template v-else>
        FAQ
      </template>
    </h2>
    
    <!-- Loading state -->
    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-600">Ошибка загрузки FAQ: {{ error }}</p>
    </div>
    
    <!-- FAQ content -->
    <div v-else class="flex flex-col gap-4">
      <div
        v-for="item in displayedItems"
        :key="item.id"
        :id="item.id"
      >
        <div 
          class="border border-black cursor-pointer"
          @click="togglePanel(item.id)"
        >
          <div 
            class="w-full p-4 md:p-6 flex justify-between items-start hover:bg-gray-50"
            :class="{ 'border-b border-black': openPanels[item.id] }"
          >
            <span class="text-base md:text-xl xl:text-2xl pr-8 text-left">{{ item.question }}</span>
            <span 
              class="text-2xl transform transition-transform duration-300 flex-shrink-0"
              :class="{ 'rotate-45': openPanels[item.id] }"
            >+</span>
          </div>

          <transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="transform scale-y-95 -translate-y-1 opacity-0"
            enter-to-class="transform scale-y-100 translate-y-0 opacity-100"
            leave-active-class="transition duration-400 ease-in-out"
            leave-from-class="transform scale-y-100 translate-y-0 opacity-100"
            leave-to-class="transform scale-y-95 -translate-y-1 opacity-0"
          >
            <div 
              v-show="openPanels[item.id]"
              class="p-4 md:p-6 text-sm md:text-base xl:text-lg text-black-70 border-t border-black origin-top"
              v-html="item.answer"
            >
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- View all link -->
    <div v-if="!standalone && faqItems.length > displayLimit" class="mt-8 text-center">
      <NuxtLink 
        to="/faq" 
        class="inline-flex items-center text-sm font-medium text-black hover:text-gray-600 transition-colors"
      >
        View all questions
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  standalone: {
    type: Boolean,
    default: false
  }
});

const route = useRoute();
const initialHash = ref(route.hash.slice(1));
const displayLimit = 5;

const faqItems = ref([]);
const loading = ref(true);
const error = ref('');
const openPanels = ref({});

// Функция для генерации ID из вопроса
const generateId = (question) => {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
};

// Функция для загрузки FAQ из Google Sheets
const fetchFaq = async () => {
  try {
    loading.value = true;
    error.value = '';

    // Определяем, работаем ли мы локально или на продакшене
    const isLocal = window.location.hostname.includes('localhost') ||
                   window.location.hostname.includes('127.0.0.1') ||
                   window.location.hostname.includes('0.0.0.0');

    if (isLocal) {
      // Локально используем API
      try {
        const response = await $fetch('/api/faq');
        if (response.success) {
          faqItems.value = response.faq.map(item => ({
            id: generateId(item.question),
            question: item.question,
            answer: item.answer
          }));
        } else {
          error.value = response.error || 'Ошибка загрузки FAQ';
        }
      } catch (apiError) {
        console.error('API Error:', apiError);
        // Если API не работает, показываем пустой список
        faqItems.value = [];
        error.value = 'Сервис временно недоступен';
      }
      loading.value = false;
    } else {
      // На продакшене используем JSONP подход
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbWqpE_TR7HJoClggVpGBYdUGcssKxWOpbFAa7nZGQp69jrE0hUxLiiCx5nY8T_x70jg/exec';

      // Создаем callback функцию
      const callbackName = 'callback_faq_' + Date.now();
      window[callbackName] = (data) => {
        if (data && data.success) {
          faqItems.value = data.faq.map(item => ({
            id: generateId(item.question),
            question: item.question,
            answer: item.answer
          }));
        } else {
          error.value = data.error || 'Ошибка загрузки FAQ';
        }
        loading.value = false;
        delete window[callbackName];
        document.head.removeChild(script);
      };

      // Создаем script тег для JSONP
      const script = document.createElement('script');
      script.src = `${GOOGLE_SCRIPT_URL}?action=getFaq&callback=${callbackName}`;
      document.head.appendChild(script);
    }
  } catch (err) {
    console.error('Error fetching FAQ:', err);
    error.value = 'Ошибка загрузки FAQ';
    loading.value = false;
  }
};

const displayedItems = computed(() => {
  if (props.standalone) {
    return faqItems.value;
  }
  return faqItems.value.slice(0, displayLimit);
});

const togglePanel = (id) => {
  openPanels.value[id] = !openPanels.value[id];
};

// Открываем панель по хешу в URL
const openPanelByHash = () => {
  if (initialHash.value) {
    openPanels.value[initialHash.value] = true;
  }
};

onMounted(async () => {
  await fetchFaq();
  await nextTick();
  openPanelByHash();
});

// Слушаем изменения хеша
const handleHashChange = () => {
  const newHash = window.location.hash.slice(1);
  if (newHash && newHash !== initialHash.value) {
    // Закрываем все панели
    Object.keys(openPanels.value).forEach(key => {
      openPanels.value[key] = false;
    });
    // Открываем новую панель
    openPanels.value[newHash] = true;
    initialHash.value = newHash;
  }
};

onMounted(() => {
  window.addEventListener('hashchange', handleHashChange);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange);
});
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
