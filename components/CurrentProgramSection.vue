<template>
  <div id="fall-winter-2026" class="container mx-auto">
    <div class="flex justify-between md:items-center gap-8 md:mb-[50px] mb-4 max-w-[1200px]">
      <h2 class="text-xl md:text-3xl xl:text-4xl scroll-mt-[120px] md:scroll-mt-[100px]">
        <a href="#fall-winter-2026" class="hover:opacity-80 transition-opacity">15<sup class="">th</sup> Fall Winter 2026</a>
      </h2>
      <NuxtLink 
        target="_blank"
        class="hover:opacity-80 transition-opacity duration-300"
        to="https://docs.google.com/forms/d/11I7bcoDEzErBszt2UfZqf04LAjljlpkBhdRTD6CrC7g/edit?fbclid=PAZXh0bgNhZW0CMTEAAabTXlVnA-8uMswE4mM1iOQkULaorR2fFi9eZsVZlgEe1jMJH0Kb7OcDJJk_aem_LIewtA-gbtt6seDB3ZE4pw">
        <BaseButton variant="primary">
          <span>Visit</span>
          <span>></span>
        </BaseButton>
      </NuxtLink>
    </div>

    <!-- Mobile Tabs -->
    <div class="md:hidden mb-4 sticky top-0 z-10 bg-white">
      <div class="flex w-full border-b border-gray-200">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click.stop="selectTab(index)"
          class="flex flex-col items-center justify-center flex-1 px-2 py-3 border-r border-gray-300 last:border-r-0 transition-colors duration-300"
          :class="{
            'bg-black text-white': currentTab === index,
            'bg-white text-black hover:bg-gray-50': currentTab !== index,
          }"
        >
          <span class="text-sm font-medium">{{ tab.mobileDate?.split(' ')[0] || '1' }}</span>
          <span class="text-xs opacity-75">{{ tab.mobileDate?.split(' ')[1] || 'Nov' }}</span>
        </button>
      </div>
    </div>

    <!-- Desktop Tabs -->
    <div 
      class="hidden md:block overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing w-full" 
      ref="tabsContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startDragTouch"
      @touchmove="onDragTouch"
      @touchend="stopDrag"
    >
      <div class="flex md:gap-10 gap-8 mb-4 md:mb-10 whitespace-nowrap pb-4 md:pb-0 pl-4 md:pl-0 md:pr-[50vw]">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click.stop="selectTab(index)"
          class="flex flex-col items-start gap-2 hover:text-black flex-shrink-0"
          :class="{
            'text-black': currentTab === index,
            'text-black-20': currentTab !== index,
          }"
        >
          <span v-html="tab.title" class="text-xl 2xl:text-4xl md:text-3xl transition-colors duration-300"></span>
          <span class="transition-colors duration-300">
            {{ tab.date }}
          </span>
        </button>
      </div>
    </div>

    <div class="flex flex-col md:gap-6 gap-5">
      <div
        v-for="(event, index) in updatedProgram?.events || []"
        :key="index"
      >
        <template v-if="event.type === 'sponsorStation'">
          <SponsorStation 
            :video-url="event.videoUrl" 
            :title="event.title"
            :description="event.description"
            :button-text="event.buttonText"
            :button-link="event.buttonLink"
          />
        </template>

        <template v-else-if="event.type === 'bigSponsorStation'">
          <BigSponsorStation 
            :title="event.title"
            :description="event.description"
            :button-text="event.buttonText"
            :images="event.images"
          />
        </template>

        <template v-else>
          <ProgramEvent
            :time="event.time"
            :place="event.place"
            :description="event.description"
            :details="event.details"
            :button-text="event.buttonText"
            :button-link="event.buttonLink"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import SponsorStation from '~/components/program/SponsorStation.vue';
import BigSponsorStation from '~/components/program/BigSponsorStation.vue';
import ProgramEvent from '~/components/program/ProgramEvent.vue';
import { CURRENT_PROGRAM_TABS } from '~/constants/currentProgram';
import { useDesigners } from '~/composables/useDesigners';

// Статические данные дизайнеров из 14th Spring Summer 2026
const PREVIOUS_14TH_DESIGNERS = {
  '8': [
    { name: 'NOURA COUTURE', country: 'UAE' },
    { name: 'ANNET', country: 'RUSSIA' },
    { name: 'LESNIKOVA DRESSES', country: 'RUSSIA' },
    { name: 'SOLANA COUTURE', country: 'USA' },
    { name: 'LORA COUTURE', country: 'AZERBAIJAN' },
    { name: 'ETNO FRESH', country: 'RUSSIA' },
    { name: 'BELIZE', country: 'GERMANY' },
    { name: 'MOONSOUL', country: 'KIRGHIZIAN' },
    { name: 'OLECIA ARKHIPOVA', country: 'RUSSIA' },
    { name: 'MARIANNE MOORE', country: '' },
    { name: 'IGARNITUR', country: 'POLAND' },
    { name: 'HERBELIN', country: 'POLAND' },
    { name: 'DEVU', country: 'POLAND' }
  ],
  '9': [
    { name: 'ALEXANDRA AMA CABINET', country: 'RUSSIA' },
    { name: 'ARNI FASHION', country: 'USA/INDIAN' },
    { name: 'RUBASHKA', country: 'RUSSIA' },
    { name: 'SNIM', country: 'KAZAKHSTAN' },
    { name: 'KIBOVSKAYA', country: 'RUSSIA' },
    { name: 'FYOR', country: 'UAE' },
    { name: 'POLINA TROPILLO', country: 'RUSSIA' },
    { name: 'OLGA BOGDANOVA', country: 'RUSSIA' },
    { name: 'ELENA ROMANOVA', country: 'RUSSIA' }
  ]
};

const currentTab = ref(1);
const tabs = CURRENT_PROGRAM_TABS;
const tabsContainer = ref(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let hasMoved = false;

// Используем composable для работы с дизайнерами
const { fetchDesigners, getDesignersByDay, designers, isDataUpdated } = useDesigners();

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Храним перемешанные массивы дизайнеров для каждого дня
const shuffledDayDesigners = ref({});

// Загружаем данные дизайнеров при монтировании компонента
onMounted(async () => {
  // Пытаемся обновить данные из Google Sheets (только если еще не обновлены)
  if (!isDataUpdated.value) {
    try {
      await fetchDesigners();
    } catch (error) {
      // Используем статические данные из 14th Spring Summer 2026
      console.log('Используем статические данные из 14th Spring Summer 2026');
    }
  }
  
  // Инициализируем перемешанные массивы дизайнеров для всех дней
  // Используем данные из Google Sheets для дней 8 и 9, если они есть, иначе используем статические данные
  Object.keys(PREVIOUS_14TH_DESIGNERS).forEach(day => {
    const dayDesignersFromSheets = getDesignersByDay(day);
    // Используем данные из Google Sheets, если они есть для этого дня, иначе используем статические данные
    const dayDesigners = dayDesignersFromSheets.length > 0 
      ? dayDesignersFromSheets 
      : (PREVIOUS_14TH_DESIGNERS[day] || []);
    shuffledDayDesigners.value[day] = dayDesigners.length > 0 ? shuffleArray(dayDesigners) : [];
  });
});

// Отслеживаем изменения в данных дизайнеров
watch(designers, () => {
  // Перемешиваем дизайнеров при изменении данных
  // Используем данные из Google Sheets для дней 8 и 9, если они есть, иначе используем статические данные
  Object.keys(PREVIOUS_14TH_DESIGNERS).forEach(day => {
    const dayDesignersFromSheets = getDesignersByDay(day);
    // Используем данные из Google Sheets, если они есть для этого дня, иначе используем статические данные
    const dayDesigners = dayDesignersFromSheets.length > 0 
      ? dayDesignersFromSheets 
      : (PREVIOUS_14TH_DESIGNERS[day] || []);
    shuffledDayDesigners.value[day] = dayDesigners.length > 0 ? shuffleArray(dayDesigners) : [];
  });
}, { deep: true });

// Computed свойство для программы с динамическими событиями дизайнеров
const updatedProgram = computed(() => {
  const baseProgram = CURRENT_PROGRAM_TABS[currentTab.value];
  if (!baseProgram || !baseProgram.events) {
    return baseProgram;
  }

  // Создаем новый массив events с добавленными событиями для дизайнеров
  const eventsWithDesigners = [];
  
  for (let i = 0; i < baseProgram.events.length; i++) {
    const event = baseProgram.events[i];
    eventsWithDesigners.push(event);
    
    // Проверяем, есть ли дизайнеры для этого времени
    // Поддерживаем форматы: "8 November", "9 November", "TBD" и т.д.
    if (event.type === 'event' && event.time) {
      // Извлекаем день из времени (формат: "8 November" -> "8", "9 November" -> "9")
      const timeMatch = event.time.match(/^(\d+)\s+/);
      if (timeMatch) {
        const day = timeMatch[1];
        const dayDesigners = shuffledDayDesigners.value[day] || [];
        
        if (dayDesigners.length > 0) {
          dayDesigners.forEach(designer => {
            const country = designer.country || '';
            eventsWithDesigners.push({
              type: 'event',
              time: event.time,
              place: event.place || '',
              description: `${designer.name}${country ? ` /${country}/` : ''}`
            });
          });
        }
      }
    }
  }
  
  return {
    ...baseProgram,
    events: eventsWithDesigners
  };
});

const startDrag = (e) => {
  // Проверяем, что клик не на кнопке таба
  if (e.target.closest('button')) {
    return;
  }
  isDragging = true;
  hasMoved = false;
  const slider = tabsContainer.value;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const startDragTouch = (e) => {
  // Проверяем, что клик не на кнопке таба
  if (e.target.closest('button')) {
    return;
  }
  isDragging = true;
  hasMoved = false;
  const slider = tabsContainer.value;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const onDrag = (e) => {
  if (!isDragging) return;
  const slider = tabsContainer.value;
  const x = e.pageX - slider.offsetLeft;
  const walk = Math.abs(x - startX);
  
  // Если движение больше 5px, считаем это перетаскиванием
  if (walk > 5) {
    hasMoved = true;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (x - startX);
  }
};

const onDragTouch = (e) => {
  if (!isDragging) return;
  const slider = tabsContainer.value;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = Math.abs(x - startX);
  
  // Если движение больше 5px, считаем это перетаскиванием
  if (walk > 5) {
    hasMoved = true;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (x - startX);
  }
};

const stopDrag = () => {
  isDragging = false;
  hasMoved = false;
};

const selectTab = (index) => {
  // Если было перетаскивание, не обрабатываем клик
  if (isDragging && hasMoved) {
    return;
  }
  currentTab.value = index;
};
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}

.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}

/* Кастомный скроллбар */
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Для Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
}

.custom-scrollbar {
  -webkit-user-select: none;
  user-select: none;
}
</style>

