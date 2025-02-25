<template>
  <header class="w-full">
    <!-- Announcement bar -->
    <Marquee class="hidden md:block" content="announcement announcement announcement announcement announcement" />

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
              <LogoIcon class="h-5 2xl:h-8 w-[165px] 2xl:w-[254px]" />
            </NuxtLink>

            <span class="text-black 2xl:text-xl lg:text-base sm:text-sm">#JOINDUBAI</span>
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
          <div class="hidden xl:flex items-center 2xl:gap-10 gap-6">
            <NuxtLink target="_blank" 
              to="https://docs.google.com/forms/d/11I7bcoDEzErBszt2UfZqf04LAjljlpkBhdRTD6CrC7g/edit">
              <BaseButton variant="primary">
                <span>Visit</span>
                <span>></span>
              </BaseButton>
            </NuxtLink>
            <BaseButton variant="secondary">
              <span>Participate</span>
              <span>></span>
            </BaseButton>
            <a
              href="https://www.instagram.com/emirates_fashionweek"
              target="_blank"
              class="text-black/80 hover:text-black transition-colors"
            >
              <InstagramIcon />
            </a>
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
              <BaseButton variant="primary" class="w-full">
                <span>Buy a ticket</span>
                <span>></span>
              </BaseButton>
            </NuxtLink>
            <BaseButton variant="secondary" class="w-full">
              <span>For sponsors</span>
              <span>></span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import MenuIcon from '@/components/icons/MenuIcon';
import XIcon from '@/components/icons/XIcon.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import Marquee from '@/components/MarqueeSection.vue';

const isMenuOpen = ref(false);

const navLinks = [
  { name: 'HOW IT WAS', href: '#how-it-was', id: 'how-it-was' },
  { name: 'SCHEDULE', href: '#program', id: 'program' },
  { name: 'DESIGNERS', href: '#designers', id: 'designer' },
  { name: 'FACES', href: '#faces', id: 'faces' },
  { name: 'CONTACTS', href: '#contacts', id: 'contacts' },
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
  isMenuOpen.value = false; // Это автоматически включит скролл обратно
  scrollToSection(href);
};
</script>

<style>
/* Стили для TheHeader.vue */
</style>
