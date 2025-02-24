<template>
  <div class="container mx-auto mb-[105px]">
    <h2 class="text-xl md:text-3xl xl:text-4xl mb-8 xl:mb-[75px]">We in Media</h2>
    <div class="grid lg:grid-flow-col grid-cols-2 md:grid-cols-3 xl:grid-cols-9 gap-3 justify-items-center md:justify-items-start">
      <div class="flex justify-center items-center w-full"
        v-for="(sponsor, index) in sponsors" 
        :key="index" 
      >
        <img  
          :src="sponsor" 
          alt="Sponsor Logo" 
        class="w-[150px] max-w-full md:max-w-auto h-auto object-center" 
      />
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from '@/assets/image/sponsors/sd.png'
import image2 from '@/assets/image/sponsors/gwa.png'
import image3 from '@/assets/image/sponsors/lofficiel.png'
import image4 from '@/assets/image/sponsors/megapolis.png'
import image5 from '@/assets/image/sponsors/porterium.png'
import image6 from '@/assets/image/sponsors/tycoon.png'
import image7 from '@/assets/image/sponsors/arabic_journal.png'
import image8 from '@/assets/image/sponsors/dubai_fashion.png'
import image9 from '@/assets/image/sponsors/d_fashion.png'

const sponsors = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
];
</script>

<style scoped>
.sponsors-container {
  text-align: center;
  margin: 40px 0;
}

.sponsors-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.sponsors-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.sponsor-logo {
  max-width: 100px; /* Установите нужный размер */
  height: auto;
}
</style> 