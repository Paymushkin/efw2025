<template>
  <footer id="contacts" class="bg-black text-white py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-10 md:gap-[230px] justify-end">
        <!-- Menu Column -->
        <div>
          <h3 class="hidden md:block text-lg font-medium mb-6">Menu</h3>
          <nav class="flex flex-col space-y-3">
            <a
              v-for="link in menuLinks"
              :key="link.id"
              :href="link.href"
              class="text-sm hover:text-gray-300 transition-colors cursor-pointer"
              @click.prevent="scrollToSection(link.href)"
            >
              {{ link.name }}
            </a>
          </nav>
        </div>
        <!-- Contacts Column -->
        <div>
          <h3 class="hidden md:block text-lg font-medium mb-6">Contacts</h3>
          <div class="flex flex-col space-y-3">
            <NuxtLink
              :to="`mailto:${email}`"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              {{ email }}
            </NuxtLink>
            <NuxtLink
              :to="instagram"
              target="_blank"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              INSTAGRAM
            </NuxtLink>
          </div>
        </div>

        <div class="flex md:hidden flex-col items-start gap-4">
          <LogoWhiteIcon />
          <p class="text-sm">{{ hashtag }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoWhiteIcon from './icons/LogoWhiteIcon.vue';
import { email, instagram, hashtag } from '~/constants/texts';

const menuLinks = [
  { name: 'HOW IT WAS', href: '#how-it-was', id: 'how-it-was' },
  { name: 'SCHEDULE', href: '#program', id: 'program' },
  { name: 'DESIGNERS', href: '#designers', id: 'designers' },
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
</script>
