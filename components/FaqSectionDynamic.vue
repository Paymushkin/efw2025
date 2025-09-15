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
              v-html="formatAnswer(item.answer)"
            >
            </div>
          </transition>
        </div>
      </div>
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

// Функция для обработки переносов строк в ответах
const formatAnswer = (answer) => {
  if (!answer) return '';
  
  // Заменяем переносы строк на <br> теги
  return answer
    .replace(/\n/g, '<br>')
    .replace(/\r\n/g, '<br>')
    .replace(/\r/g, '<br>');
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
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-9k6uo_l1HnNVUXBC3cmyEgtwb6EJBe7kRnbQ07QKlXLeNMk2QAQoKDUismUx1_DdlQ/exec';

      // Создаем callback функцию
      const callbackName = 'callback_faq_' + Date.now();
      window[callbackName] = (data) => {
        if (data && data.success) {
          // Временно: если FAQ пустой, используем тестовые данные
          let faqData = data.faq;
          if (!faqData || faqData.length === 0) {
            faqData = [
              {
                question: "What is the AI matchmaking tool? How does it work?",
                answer: "The AI matchmaking tool is available on laptops at each exhibitor station. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. Some visitors will approach the station directly, while others will be connected via chat for online introductions and follow-ups."
              },
              {
                question: "Are visitor passes free? How many invites are out? What's the audience profile?",
                answer: "Visitor entry is free. We usually welcome 300-700 guests, depending on the show. For April 15, we expect 300-500 attendees throughout the day. Our audience is diverse and international, mainly beauty- and fashion-conscious individuals from mid- to high-income backgrounds. We do not track nationality at registration."
              },
              {
                question: "Who are the 'Buyers'? What's their ratio to media, influencers, stylists, bloggers?",
                answer: "Buyers include individuals purchasing for themselves and for retail stores. We don't publish an exact ratio, but the crowd includes a mix of media, influencers, stylists, bloggers, and direct buyers."
              },
              {
                question: "What if I don't want a showcase station but still want to engage buyers?",
                answer: "You can attend for free, observe how other beauty service providers present their services, and interact with the audience. Many providers offer special promotions and discounts to visitors."
              },
              {
                question: "What are some example brands in the business showcase corner?",
                answer: "Over 30 brands are confirmed - including designers from the Middle East, CIS, Eastern Europe, and local UAE talents. We also host a wide range of beauty service providers: clinics, plastic surgery, botox, fitness, cosmetology, nails, lashes, brows, hair, and styling."
              }
            ];
          }
          
          faqItems.value = faqData.map(item => ({
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
  return faqItems.value;
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
