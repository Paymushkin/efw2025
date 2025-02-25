<template>
  <footer id="contacts" class="bg-black text-white py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-10 md:gap-[230px] justify-end">
        <!-- Menu Column -->
        <div>
          <h3 class="hidden md:block text-lg font-medium mb-6">Menu</h3>
          <nav class="flex flex-col space-y-3">
            <NuxtLink
              v-for="link in menuLinks"
              :key="link.path"
              :to="link.path"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>
        </div>
        <!-- Contacts Column -->
        <div>
          <h3 class="hidden md:block text-lg font-medium mb-6">Contacts</h3>
          <div class="flex flex-col space-y-3">
            <NuxtLink
              to="tel:+97199999999"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              +971 999 999 9999
            </NuxtLink>
            <NuxtLink
              to="mailto:info@emiratesfashionweek.com"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              INFO@EMIRATESFASHIONWEEK.COM
            </NuxtLink>
            <NuxtLink
              to="https://www.instagram.com/emirates_fashionweek"
              target="_blank"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              INSTAGRAM
            </NuxtLink>
          </div>
        </div>

        <div class="flex flex-col items-start gap-4">
          <LogoWhiteIcon />
          <p class="text-sm">#JOINDUBAI</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoWhiteIcon from './icons/LogoWhiteIcon.vue';
const menuLinks = [
  { name: 'HOW IT WAS', path: '/how-it-was' },
  { name: 'SCHEDULE', path: '/program' },
  { name: 'DESIGNERS', path: '/designers' },
  { name: 'FACES', path: '/faces' },
  { name: 'FOR SPONSORS', path: '/sponsors' },
  { name: 'TICKETS', path: '/tickets' },
];
</script>
