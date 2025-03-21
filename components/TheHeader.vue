<template>
  <header class="w-full">
    <!-- Announcement bar -->
    <Marquee class="hidden md:block" :content="marqueeText1" :is-static="true" />

    <!-- Navigation -->
    <nav class="bg-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          <!-- Left side: Logo and Hashtag -->
          <div class="flex items-center 2xl:gap-12 gap-6">
            <button 
              class="md:hidden text-black"
              @click="isMenuOpen = !isMenuOpen"
            >
              <MenuIcon v-if="!isMenuOpen" class="w-8 h-8" />
              <XIcon v-else class="w-8 h-8" />
            </button>
            
            <NuxtLink to="/" class="flex-shrink-0">
              <LogoBlack class="h-5 2xl:h-8 w-[165px] 2xl:w-[254px]" />
            </NuxtLink>

            <NuxtLink :to="hashtag[1]" class="text-black 2xl:text-xl lg:text-base sm:text-sm">{{ hashtag[0] }}</NuxtLink>
          </div>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center 2xl:gap-8 gap-4">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="link.href"
              class="text-black hover:text-gray-600 transition-colors cursor-pointer 2xl:text-base lg:text-sm text-xs"
              @click.prevent="scrollToSection(link.href)"
            >
              {{ link.name }}
            </a>
          </div>

          <!-- Desktop Actions -->
          <div class="hidden xl:flex items-center 2xl:gap-5 gap-3">
            <div class="relative">
                <BaseButton variant="secondary"  @click="toggleParticipateMenu" class="w-full justify-between">
                  <span>Participate</span>
                  <span>></span>
                </BaseButton>

              <!-- Выпадающий список -->
              <div v-if="isParticipateOpen" class="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                <NuxtLink :to="designerRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Designer
                </NuxtLink>

                <NuxtLink :to="modelRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Model
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Buyer
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Stylist
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors"> 
                  Photo / Video
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Media
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors"> 
                  Influencer 
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors"> 
                  Other
                </NuxtLink>

                <NuxtLink to="/station" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Partners
                </NuxtLink>
              </div>
            </div>
            
            <NuxtLink target="_blank" 
              :to="visitorsRegistration">
              <BaseButton variant="primary">
                <span>Visit</span>
                <span>></span>
              </BaseButton>
            </NuxtLink>

            <NuxtLink 
              :to="instagram"
              target="_blank"
              class="text-black/80 hover:text-black transition-colors"
            >
              <InstagramIcon />
            </NuxtLink>
            <NuxtLink 
              :to="youtube"
              target="_blank"
              class="text-black/80 hover:text-black transition-colors"
            >
            <YoutubeIcon />
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div 
      v-if="isMenuOpen"
      class="fixed left-0 top-[62px] w-full h-full bg-white z-50 md:hidden"
    >
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col items-start gap-11">
          <div class="flex flex-col gap-4">
          <!-- Navigation Links -->
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            class="text-lg font-light text-black"
            @click="handleMobileNavClick(link.href)"
          >
            {{ link.name }}
          </a>
        </div>

          <!-- Actions -->
          <div class="flex flex-col gap-4">
            <NuxtLink target="_blank" 
              to="https://docs.google.com/forms/d/11I7bcoDEzErBszt2UfZqf04LAjljlpkBhdRTD6CrC7g/edit">
              <NuxtLink target="_blank" 
                :to="visitorsRegistration">
                <BaseButton variant="primary" class="w-full justify-between">
                  <span>Visit</span>
                  <span>></span>
                </BaseButton>
              </NuxtLink>
            </NuxtLink>

            <div class="relative">
              <BaseButton @click="toggleParticipateMenu" id="participate-button" variant="secondary" class="w-full justify-between">
                <span>Participate</span>
                <span>></span>
            </BaseButton>

              <div v-if="isParticipateOpen" class="absolute top-full mt-2 right-0 bg-white max-h-[270px] overflow-y-auto shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                <NuxtLink  :to="designerRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Designer
                </NuxtLink>

                <NuxtLink :to="modelRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Model
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Buyer
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Stylist
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors"> 
                  Photo / Video
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Media
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors"> 
                  Influencer 
                </NuxtLink>

                <NuxtLink :to="visitorsRegistration" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors"> 
                  Other
                </NuxtLink>

                <NuxtLink to="/station" target="_blank" class="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  Partners
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted } from 'vue';
import LogoBlack from '@/components/icons/LogoBlack.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import XIcon from '@/components/icons/XIcon.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import Marquee from '@/components/MarqueeSection.vue';
import { marqueeText1 } from '~/constants/texts';
import { hashtag, instagram, youtube, designerRegistration, visitorsRegistration, modelRegistration } from '~/constants/texts';

const isMenuOpen = ref(false);
const isLinksMenuOpen = ref(false);
const isParticipateOpen = ref(false);
const navLinks = [
  { name: 'CALENDAR', href: '#program', id: 'program' },
  { name: 'DESIGNERS', href: '#designers', id: 'designer' },
  { name: 'FACES', href: '#faces', id: 'faces' },
  { name: 'HOW IT WAS', href: '#how-it-was', id: 'how-it-was' },
  { name: 'CONTACTS', href: '#contacts', id: 'contacts' }
];

const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Функция для переключения скролла
const toggleScroll = (disable) => {
  if (disable) {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none'; // Для мобильных устройств
  } else {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }
};

// Следим за изменением состояния меню
watch(isMenuOpen, (newValue) => {
  toggleScroll(newValue);
});

// Очищаем стили при размонтировании компонента
onUnmounted(() => {
  toggleScroll(false);
});

// Обработчик клика по пункту меню
const handleMobileNavClick = (href) => {
  isLinksMenuOpen.value = false; // Это автоматически включит скролл обратно
  scrollToSection(href);
};

// Закрываем меню при клике вне его
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.relative')) {
      isLinksMenuOpen.value = false;
    }
  });
});

const toggleParticipateMenu = () => {
  isParticipateOpen.value = !isParticipateOpen.value;
};

// Закрываем при клике вне
const closeOnClickOutside = (event) => {
  if (!event.target.closest('.relative') && !event.target.closest('#participate-button')) {
    isParticipateOpen.value = false;
  }
};

// Закрываем при скролле
const closeOnScroll = () => {
  isParticipateOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', closeOnClickOutside);
  window.addEventListener('scroll', closeOnScroll);
});

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside);
  window.removeEventListener('scroll', closeOnScroll);
});
</script>

<style>
/* Стили для TheHeader.vue */
</style>
