<template>
  <section class="container mx-auto px-4 md:px-5 py-10 md:py-16">
    <h2 class="text-3xl md:text-4xl xl:text-5xl mb-6 md:mb-8 font-bold">
      Designer Runways 14th season
    </h2>

    <div v-if="loading" class="flex items-center justify-center py-10 text-gray-500">
      Loading runways...
    </div>

    <div v-else-if="errorMessage" class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600">
      <p>Не удалось загрузить данные из Google Sheets.</p>
      <p class="max-w-[480px] text-gray-500">{{ errorMessage }}</p>
    </div>

    <div v-else-if="shuffledRunways.length === 0" class="text-center py-10 text-gray-500">
      Нет данных для отображения
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="(group, index) in shuffledRunways"
        :key="`${group.date}_${group.name}_${index}`"
        class="border border-gray-200 rounded-lg overflow-hidden"
      >
        <!-- Аккордеон заголовок -->
        <button
          @click="toggleAccordion(index)"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
        >
          <span class="font-semibold text-lg">
            {{ formatDate(group.date) }} {{ group.name }}
          </span>
          <svg
            class="w-5 h-5 transition-transform"
            :class="{ 'rotate-180': openAccordions.includes(index) }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Аккордеон контент -->
        <div
          v-show="openAccordions.includes(index)"
          :data-accordion-index="index"
          class="px-6 pt-6 pb-6 bg-white"
          style="padding-right: 0;"
        >
          <div class="overflow-x-auto hide-scrollbar pr-6">
            <div class="flex gap-5" style="min-width: max-content;">
              <template v-for="(item, itemIndex) in group.items" :key="`item_${item.date}_${item.name}_${itemIndex}`">
                <!-- YouTube Video -->
                <div
                  v-if="item.youtubeLink && extractYouTubeId(item.youtubeLink)"
                  :key="`youtube_${item.date}_${item.name}_${itemIndex}`"
                  class="flex-shrink-0 relative"
                  style="width: 225px;"
                >
                  <div class="flex items-center justify-center" style="aspect-ratio: 9/16; max-height: 400px; width: 225px;">
                    <component
                      :is="'lite-youtube'"
                      :videoid="extractYouTubeId(item.youtubeLink)"
                      :data-video-id="`${group.date}_${group.name}_${itemIndex}`"
                      params="modestbranding=1&rel=0&autoplay=1&mute=1"
                      class="w-full h-full rounded-lg overflow-hidden"
                      :style="`background-image: url('https://i.ytimg.com/vi/${extractYouTubeId(item.youtubeLink)}/hqdefault.jpg');`"
                    ></component>
                  </div>
                </div>

                <!-- Article Link (сразу после YouTube) -->
                <div
                  v-if="item.articleLink"
                  :key="`article_${item.date}_${item.name}_${itemIndex}`"
                  class="flex-shrink-0"
                  style="width: 225px;"
                >
                  <div class="flex items-center justify-center flex-col relative" style="aspect-ratio: 9/16; max-height: 400px; width: 225px; overflow: hidden;">
                    <a
                      :href="item.articleLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block w-full h-full rounded-lg relative group"
                      style="overflow: visible;"
                    >
                      <div class="w-full h-full rounded-lg overflow-hidden">
                        <img
                          v-if="item.photoArticleLink"
                          :src="item.photoArticleLink"
                          :alt="item.articleTitle || `${item.name} - Article`"
                          class="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <!-- Диагональный лейбл -->
                        <div class="absolute bg-black text-white text-xs font-semibold px-10 py-2 whitespace-nowrap" style="transform: rotate(-45deg); transform-origin: center; left: -30px; top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">
                          ARTICLE
                        </div>
                      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 v-if="item.articleTitle" class="font-semibold text-lg mb-2 line-clamp-2">
                          {{ item.articleTitle }}
                        </h3>
                        <p class="inline-flex items-center gap-1 text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                          <span>Read</span>
                          <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Photo Links (до 3 фото) -->
                <template v-for="(photoLink, photoIndex) in item.photoLinks" :key="`photo_${item.date}_${item.name}_${itemIndex}_${photoIndex}`">
                  <div
                    class="flex-shrink-0"
                    style="width: 225px;"
                  >
                    <div class="flex items-center justify-center" style="aspect-ratio: 9/16; max-height: 400px; width: 225px;">
                      <img
                        :src="photoLink"
                        :alt="`${item.name} - Photo ${photoIndex + 1}`"
                        class="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </template>

                <!-- Photo Article Link -->
                <div
                  v-if="item.photoArticleLink && !item.articleLink"
                  :key="`photoArticle_${item.date}_${item.name}_${itemIndex}`"
                  class="flex-shrink-0"
                  style="width: 225px;"
                >
                  <div class="flex items-center justify-center" style="aspect-ratio: 9/16; max-height: 400px; width: 225px;">
                    <img
                      :src="item.photoArticleLink"
                      :alt="`${item.name} - Article Photo`"
                      class="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
// Импортируем стили для lite-youtube-embed
import 'lite-youtube-embed/src/lite-yt-embed.css';
import { useDesignerRunways } from '~/composables/useDesignerRunways';

const { runways, loading, error, fetchRunways, extractYouTubeId } = useDesignerRunways();
const errorMessage = computed(() => error.value);
const openAccordions = ref([0]); // Первый блок открыт по умолчанию
const shuffledRunways = ref([]);

// Глобальный менеджер для управления одним активным видео
const videoManager = {
  currentIframe: null,
  currentElement: null,
  
  // Останавливает текущее видео
  stopCurrent() {
    if (this.currentIframe && this.currentIframe.contentWindow) {
      try {
        const stopCommand = JSON.stringify({
          event: 'command',
          func: 'stopVideo',
          args: ''
        });
        const pauseCommand = JSON.stringify({
          event: 'command',
          func: 'pauseVideo',
          args: ''
        });
        this.currentIframe.contentWindow.postMessage(stopCommand, '*');
        this.currentIframe.contentWindow.postMessage(pauseCommand, '*');
      } catch (e) {
        // Игнорируем ошибки
      }
    }
    this.currentIframe = null;
    this.currentElement = null;
  },
  
  // Устанавливает новое активное видео
  setActive(element, iframe) {
    // Останавливаем предыдущее
    this.stopCurrent();
    
    // Устанавливаем новое
    this.currentElement = element;
    this.currentIframe = iframe;
  }
};

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Функция для перемешивания внутри каждого дня, сохраняя порядок дат
const shuffleByDate = (groups) => {
  // Группируем по дате
  const groupsByDate = new Map();
  
  groups.forEach((group) => {
    const date = group.date;
    if (!groupsByDate.has(date)) {
      groupsByDate.set(date, []);
    }
    groupsByDate.get(date).push(group);
  });
  
  // Извлекаем даты и сортируем их (по числу дня)
  const sortedDates = Array.from(groupsByDate.keys()).sort((a, b) => {
    // Парсим дату: "08.11.2025" -> [8, 11, 2025]
    const partsA = a.split('.').map(Number);
    const partsB = b.split('.').map(Number);
    
    // Сравниваем: год, месяц, день
    if (partsA[2] !== partsB[2]) return partsA[2] - partsB[2]; // Год
    if (partsA[1] !== partsB[1]) return partsA[1] - partsB[1]; // Месяц
    return partsA[0] - partsB[0]; // День
  });
  
  // Перемешиваем группы внутри каждой даты и объединяем
  const result = [];
  sortedDates.forEach((date) => {
    const groupsForDate = groupsByDate.get(date);
    const shuffledGroups = shuffleArray(groupsForDate);
    result.push(...shuffledGroups);
  });
  
  return result;
};

// Функция для форматирования даты
const formatDate = (dateStr) => {
  if (!dateStr) return '';
  // Формат: 08.11.2025 -> 8.11.2025
  const parts = dateStr.split('.');
  if (parts.length === 3) {
    return `${parseInt(parts[0])}.${parseInt(parts[1])}.${parts[2]}`;
  }
  return dateStr;
};

// Функция для поиска iframe в lite-youtube элементе
const findYouTubeIframe = (element) => {
  let iframe = null;
  
  // Пытаемся найти iframe в shadow DOM
  if (element.shadowRoot) {
    iframe = element.shadowRoot.querySelector('iframe');
  }
  
  // Если не нашли в shadow DOM, ищем напрямую
  if (!iframe) {
    iframe = element.querySelector('iframe');
  }
  
  return iframe;
};



// Функция для управления воспроизведением видео
const controlVideos = (groupIndex, shouldPlay) => {
  if (typeof window === 'undefined') return;
  
  nextTick(() => {
    setTimeout(() => {
      // Ищем аккордеон по индексу
      const accordionContent = document.querySelector(`[data-accordion-index="${groupIndex}"]`);
      if (!accordionContent) {
        return;
      }
      
      // Проверяем, виден ли аккордеон
      const isVisible = accordionContent.offsetParent !== null || 
                       accordionContent.style.display !== 'none' ||
                       !accordionContent.classList.contains('hidden');
      
      const youtubeElements = accordionContent.querySelectorAll('lite-youtube');
      
      if (shouldPlay && isVisible) {
        // Воспроизводим только первое видео в аккордеоне
        const firstElement = youtubeElements[0];
        if (firstElement) {
          try {
            // Останавливаем предыдущее видео через менеджер
            videoManager.stopCurrent();
            
            // Проверяем, есть ли уже iframe
            let iframe = findYouTubeIframe(firstElement);
            
            if (iframe && iframe.contentWindow) {
              // Iframe есть и готов, просто воспроизводим
              videoManager.setActive(firstElement, iframe);
              
              // Отправляем команду playVideo несколько раз для надежности
              const playCommand = JSON.stringify({
                event: 'command',
                func: 'playVideo',
                args: ''
              });
              
              iframe.contentWindow.postMessage(playCommand, '*');
              
              setTimeout(() => {
                if (iframe && iframe.contentWindow) {
                  iframe.contentWindow.postMessage(playCommand, '*');
                }
              }, 200);
              
              setTimeout(() => {
                if (iframe && iframe.contentWindow) {
                  iframe.contentWindow.postMessage(playCommand, '*');
                }
              }, 500);
            } else if (!iframe) {
              // Если iframe нет, активируем lite-youtube
              const button = firstElement.shadowRoot?.querySelector('button') || firstElement.querySelector('button');
              if (button) {
                button.click();
                
                // Ждем создания iframe и затем управляем воспроизведением
                setTimeout(() => {
                  iframe = findYouTubeIframe(firstElement);
                  if (iframe && iframe.contentWindow) {
                    // Устанавливаем как активное
                    videoManager.setActive(firstElement, iframe);
                    
                    // Воспроизводим
                    const playCommand = JSON.stringify({
                      event: 'command',
                      func: 'playVideo',
                      args: ''
                    });
                    
                    iframe.contentWindow.postMessage(playCommand, '*');
                    
                    setTimeout(() => {
                      if (iframe && iframe.contentWindow) {
                        iframe.contentWindow.postMessage(playCommand, '*');
                      }
                    }, 300);
                  }
                }, 500);
              }
            }
          } catch (error) {
            // Игнорируем ошибки
          }
        }
      } else if (!shouldPlay) {
        // Останавливаем все видео в этом аккордеоне
        youtubeElements.forEach((element) => {
          const iframe = findYouTubeIframe(element);
          if (iframe && iframe === videoManager.currentIframe) {
            videoManager.stopCurrent();
          }
        });
      }
    }, 300);
  });
};

// Функция для остановки всех видео в закрытых аккордеонах
const stopVideosInClosedAccordions = () => {
  if (typeof window === 'undefined') return;
  
  // Находим все аккордеоны
  const allAccordions = document.querySelectorAll('[data-accordion-index]');
  
  allAccordions.forEach((accordion) => {
    const accordionIndex = parseInt(accordion.getAttribute('data-accordion-index'), 10);
    const isOpen = openAccordions.value.includes(accordionIndex);
    
    // Если аккордеон закрыт, останавливаем все видео в нем
    if (!isOpen) {
      // Ищем все iframe'ы напрямую в аккордеоне
      const allIframes = accordion.querySelectorAll('iframe');
      
      allIframes.forEach((iframe) => {
        if (iframe.src && iframe.src.includes('youtube.com') && iframe.contentWindow) {
          try {
            const stopCommand = JSON.stringify({
              event: 'command',
              func: 'stopVideo',
              args: ''
            });
            const pauseCommand = JSON.stringify({
              event: 'command',
              func: 'pauseVideo',
              args: ''
            });
            iframe.contentWindow.postMessage(stopCommand, '*');
            iframe.contentWindow.postMessage(pauseCommand, '*');
          } catch (e) {
            // Игнорируем ошибки
          }
        }
      });
      
      // Также ищем через lite-youtube элементы
      const youtubeElements = accordion.querySelectorAll('lite-youtube');
      
      youtubeElements.forEach((element) => {
        const iframe = findYouTubeIframe(element);
        if (iframe && iframe.contentWindow) {
          try {
            const stopCommand = JSON.stringify({
              event: 'command',
              func: 'stopVideo',
              args: ''
            });
            const pauseCommand = JSON.stringify({
              event: 'command',
              func: 'pauseVideo',
              args: ''
            });
            
            // Отправляем команды много раз для надежности
            const sendStopCommands = () => {
              if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(stopCommand, '*');
                iframe.contentWindow.postMessage(pauseCommand, '*');
              }
            };
            
            // Немедленная отправка
            sendStopCommands();
            
            // Повторные отправки с задержками
            setTimeout(sendStopCommands, 50);
            setTimeout(sendStopCommands, 100);
            setTimeout(sendStopCommands, 200);
            setTimeout(sendStopCommands, 300);
            setTimeout(sendStopCommands, 500);
            setTimeout(sendStopCommands, 800);
            setTimeout(sendStopCommands, 1000);
            
            // Если это было текущее активное видео, очищаем менеджер
            if (iframe === videoManager.currentIframe) {
              videoManager.stopCurrent();
            }
          } catch (e) {
            // Игнорируем ошибки
          }
        }
      });
    }
  });
};

// Функция для переключения аккордеона
const toggleAccordion = (index) => {
  const currentIndex = openAccordions.value.indexOf(index);
  
  // Останавливаем текущее активное видео
  videoManager.stopCurrent();
  
  if (currentIndex > -1) {
    // Закрываем текущий - останавливаем все видео в нем
    openAccordions.value.splice(currentIndex, 1);
    setTimeout(() => {
      stopVideosInClosedAccordions();
    }, 100);
  } else {
    // Закрываем все остальные и открываем текущий
    // Сначала останавливаем все видео в закрытых аккордеонах
    stopVideosInClosedAccordions();
    
    openAccordions.value = [index];
    
    // Воспроизводим видео в открытом аккордеоне
    setTimeout(() => {
      controlVideos(index, true);
    }, 500);
  }
};

// Отслеживаем изменения в данных и перемешиваем их
watch(runways, (newRunways) => {
  if (newRunways && newRunways.length > 0) {
    shuffledRunways.value = shuffleByDate(newRunways);
    // Обновляем observer для новых элементов
    nextTick(() => {
      setTimeout(() => {
        setupVideoObserver();
      }, 500);
    });
  }
}, { immediate: true, deep: true });

// Отслеживаем изменения в открытых аккордеонах
watch(openAccordions, (newValue) => {
  // Останавливаем все видео в закрытых аккордеонах
  setTimeout(() => {
    stopVideosInClosedAccordions();
  }, 100);
  
  // Останавливаем текущее активное видео
  videoManager.stopCurrent();
  
  // Воспроизводим видео только в открытых аккордеонах
  if (newValue && newValue.length > 0) {
    setTimeout(() => {
      // Воспроизводим только первый открытый аккордеон
      controlVideos(newValue[0], true);
    }, 500);
  }
}, { deep: true });

// IntersectionObserver для автоматической паузы видео при скрытии
let videoObserver = null;

const setupVideoObserver = () => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return;
  
  // Удаляем предыдущий observer, если есть
  if (videoObserver) {
    videoObserver.disconnect();
  }
  
  videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        // Элемент скрыт - ставим видео на паузу
        const youtubeElement = entry.target.closest('lite-youtube') || entry.target.querySelector('lite-youtube');
        if (youtubeElement) {
          const iframe = findYouTubeIframe(youtubeElement);
          if (iframe && iframe.contentWindow) {
            const stopCommand = JSON.stringify({
              event: 'command',
              func: 'stopVideo',
              args: ''
            });
            iframe.contentWindow.postMessage(stopCommand, '*');
          }
        }
      }
    });
  }, {
    threshold: 0.1 // Считаем скрытым, если видно менее 10%
  });
  
  // Наблюдаем за всеми lite-youtube элементами
  nextTick(() => {
    setTimeout(() => {
      const allYoutubeElements = document.querySelectorAll('lite-youtube');
      allYoutubeElements.forEach((element) => {
        videoObserver.observe(element);
      });
    }, 500);
  });
};

// Глобальный обработчик кликов на lite-youtube элементы
const handleYoutubeClick = (e) => {
  const liteEl = e.target.closest('lite-youtube');
  if (!liteEl) return;
  
  // Проверяем, находится ли элемент в открытом аккордеоне
  const accordionContent = liteEl.closest('[data-accordion-index]');
  if (!accordionContent) return;
  
  const accordionIndex = parseInt(accordionContent.getAttribute('data-accordion-index'), 10);
  
  // Если аккордеон закрыт, не обрабатываем клик
  if (!openAccordions.value.includes(accordionIndex)) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  
  // Останавливаем предыдущее видео
  videoManager.stopCurrent();
  
  // Ждем создания iframe и устанавливаем как активное
  setTimeout(() => {
    const iframe = findYouTubeIframe(liteEl);
    if (iframe) {
      videoManager.setActive(liteEl, iframe);
    }
  }, 500);
};

onMounted(async () => {
  await fetchRunways();
  
  // Регистрируем веб-компонент lite-youtube, если он еще не зарегистрирован
  if (typeof window !== 'undefined' && !customElements.get('lite-youtube')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.0/src/lite-yt-embed.js';
    script.defer = true;
    document.head.appendChild(script);
  }
  
  // Добавляем глобальный обработчик кликов на все lite-youtube элементы
  if (typeof window !== 'undefined') {
    document.addEventListener('click', handleYoutubeClick, true);
  }
  
  // Настраиваем observer для видео
  setupVideoObserver();
  
  // Воспроизводим видео в первом открытом блоке после загрузки данных
  nextTick(() => {
    setTimeout(() => {
      if (openAccordions.value.includes(0)) {
        controlVideos(0, true);
      }
    }, 1000); // Задержка для загрузки lite-youtube
  });
});

// Очищаем observer при размонтировании
onUnmounted(() => {
  if (videoObserver) {
    videoObserver.disconnect();
    videoObserver = null;
  }
  
  // Удаляем глобальный обработчик кликов
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', handleYoutubeClick, true);
  }
  
  // Останавливаем все видео при размонтировании
  videoManager.stopCurrent();
  stopVideosInClosedAccordions();
});
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

