<template>
  <div class="container mx-auto px-4 py-8 max-w-7xl">
    <AppSeo
      title="Hot Offers - Emirates Fashion Week Dubai 2025"
      description="Emirates Fashion Week Dubai 2025: Beauty meets business. Showcase stations for beauty service companies and designer pop-up corners. Join us on April 13-15, 2025."
      keywords="Emirates Fashion Week, Dubai Fashion, Beauty Services, Designer Pop-up, Fashion Show 2025, Dubai Events, Beauty Business"
    />
    <!-- Hot Offers Section -->
     <div class="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-[50px] xl:mb-[100px]">
      <h1 class="text-xl md:text-4xl">Hot Offers</h1>
      <p class="text-sm md:text-base max-w-[427px] xl:mr-[178px]">
        Emirates Fashion Week: Beauty meets business
        <br>
        Dates:
        <br><br>
        For the first time ever, Fashion Week features showcase stations for beauty service companies and designer pop-up corners
      </p>
     </div>

    <!-- Showcase Station Section -->
    <section class="mb-16">
      <h2 class="text-xl md:text-4xl xl:mb-[75px] md:mb-[50px] mb-7">Showcase station for company presentation</h2>
      
      <div class="relative -mx-4 md:mx-0 mb-8">
        <div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
          <div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <video 
              class="w-full h-full object-cover"
              muted
              autoplay
              loop
              playsinline
              poster="@/assets/image/offer/stand-1.png"
            >
              <source src="https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <img :src="Image1" alt="Showcase interior" class="w-full h-full object-contain">
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-7 mb-8 items-center">
        <div>
          <ul class="text-sm space-y-2">
            <li>• One of 100 Showcase stations at the Beauty Arena day</li>
            <li>• 50’’ Display for presentations</li>
            <li>• Table and 2 bar chairs </li>
            <li>• + 50 Lead chats per day</li>
            <li>• Operates during fashion show days </li>
            <li>• VIP invitations to all EFW shows on April 13-14</li>
            <li>• Valet parking</li>
          </ul>
        </div>
  <div>
          <h3 class="md:text-2xl md:mb-5 mb-2">Good for:</h3>
          <ul class="text-sm space-y-2">
            <li>• Medical & Aesthetic Clinics – General clinics, plastic surgery, dentistry.   </li>
            <li>• Health & Wellness – Nutritionists, dietitians, medical & wellness tourism.</li>
            <li>• Beauty & Cosmetics – Cosmetic brands, makeup artists, brow & lash services, nail care.</li>
            <li>• Personal Care & Wellness – Cosmetology, massage, salons, spas, barbershops.</li>
            <li>• Fitness & Events – Gyms, wellness studios, wedding makeup & beauty services.</li>
            <li>• Education & Training – Schools and courses for makeup, cosmetology, and nail services.</li>
            <li>• Beauty Tech & Software – CRM, online booking, payment solutions for salons.</li>
            <li>• Salon & Clinic Equipment – Furniture and professional tools for beauty salons & medical clinics.</li>
          </ul>
        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl">Prices</h3>
          <ul class="text-sm">
            <li>• 3300 aed / $900 / 1 day</li>
            <li>• 5000 aed / $1360 /2 days</li>
            <li>• 7000 aed / $1900 /3 days</li>
          </ul>
          <!-- <NuxtLink target="_blank" 
            :to="visitorsRegistration">
            <BaseButton variant="primary">
              <span>WhatsApp</span>
              <span>></span>
            </BaseButton>
          </NuxtLink> -->
      </div>
      </div>

    </section>

    <!-- Corner Section -->
    <section class="mb-16">
      <h2 class="text-xl md:text-4xl md:mb-[75px] mb-7">Corner</h2>
      
      <div class="relative -mx-4 md:mx-0 mb-8">
        <div class="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
          <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <img :src="Image2" alt="Corner view 1" class="w-full h-full object-contain">
          </div>
          <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <video 
              class="w-full h-full object-cover"
              muted
              autoplay
              loop
              playsinline
            >
              <source src="https://storage.yandexcloud.net/videos-meyou/efw2025/2%20Corner%20EFW-vmake.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <img :src="Image4" alt="Corner view 3" class="w-full h-full object-contain">
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-center">
        <div>
          <ul class="text-sm space-y-2">
            <li>• 1.5 m RAIL for collection</li>
            <li>• SHOWCASE STATION:  (50’’ Display station + 2 bar chairs & table</li>
            <li>• + 50 Lead chats per day   </li>
            <li>• Operates during fashion show days  </li>
            <li>• VIP invitations to all EFW shows on April 13-14</li>
            <li>• Valet parking</li>
          </ul>
        </div>
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2">Good for:</h3>
          <ul class="text-sm space-y-2">
            <li>• Designers </li>
            <li>• Accessories Brands</li>
          </ul>
        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl">Prices</h3>
          <ul class="text-sm">
            <li>• 11,000 aed / $3000 / 3 days</li>
          </ul>
          <!-- <NuxtLink target="_blank" 
            :to="visitorsRegistration">
            <BaseButton variant="primary">
              <span>WhatsApp</span>
              <span>></span>
            </BaseButton>
          </NuxtLink> -->
      </div>
      </div>

    </section>

    <!-- Working Time Section -->
    <section class="mb-16">
      <h2 class="text-xl md:text-4xl mb-[75px]">WORKING TIME</h2>

      <!-- First Day -->
      <div class="mb-[50px] md:mb-[80px]">
        <h3 class="text-xl md:text-4xl mb-4 text-medium">First Day of EFW</h3>
        <p class="md:mb-[55px] mb-7">
          13/04/2025 
          <br>
          Sunday, Family fashion day
        </p>
        <div class="relative -mx-4 md:mx-0">
          <div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
            <div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
              <video 
                class="w-full h-full object-cover"
                controls
                muted
                autoplay
                loop
                playsinline
              >
                <source src="https://storage.yandexcloud.net/videos-meyou/efw2025/2%20Corner%20EFW-vmake.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
              <img :src="Image4" alt="First day plan" class="w-full h-full object-contain">
            </div>
          </div>
        </div>
        <ul class="mt-4 space-y-2 text-sm">
          <li>• Open from 16:00</li>
          <li>• Runway shows from 18:00 to 21:00</li>
          <li>• 24 designer corners are available throughout the show hall</li>
        </ul>
      </div>

      <!-- Second Day -->
      <div class="mb-[50px] md:mb-[80px]">
        <h3 class="text-xl md:text-4xl mb-4 text-medium">Second Day of EFW</h3>
        <p class="md:mb-[55px] mb-7">
          14/04/2025
          <br>
          Monday, Fashion day
        </p>
        <div class="relative -mx-4 md:mx-0">
          <div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
            <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
              <img :src="Image5" alt="Second day setup" class="w-full h-full object-contain">
            </div>
            <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
              <img :src="Image6" alt="Second day plan" class="w-full h-full object-contain">
            </div>
          </div>
        </div>
        <ul class="mt-4 text-sm">
          <li>• Open from 16:00</li>
          <li>• Runway shows from 18:00 to 21:00</li>
          <li>• 24 designer corners are available throughout the show hall</li>
        </ul>
      </div>

      <!-- Third Day -->
      <div class="mb-[50px] md:mb-[80px]">
        <h3 class="text-xl md:text-4xl mb-4 text-medium">Third Day of EFW</h3>
        <p class="md:mb-[55px] mb-7">
          15/04/2025
          <br>
          Tuesday, Beauty Showroom day market
        </p>
        <div class="relative -mx-4 md:mx-0">
          <div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
            <div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
              <video 
                class="w-full h-full object-cover"
                controls
                muted
                autoplay
                loop
                playsinline
              >
                <source src="https://storage.yandexcloud.net/videos-meyou/efw2025/beauty%20day%20zoom%20out-wm.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
              <img :src="Image8" alt="Third day plan" class="w-full h-full object-contain">
            </div>
          </div>
        </div>
        <ul class="mt-4 text-sm">
          <li>• Open from 12:00</li>
          <li>• Close 18:00</li>
          <li>• 24 corners and 64 stations present Dubai's newest beauty services and designers</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import Image1 from '@/assets/image/offer/stand-1.png'
import Image2 from '@/assets/image/offer/corner-1.png'
import Image3 from '@/assets/image/offer/corner-3.png'
import Image4 from '@/assets/image/offer/schema-1.png'
import Image5 from '@/assets/image/offer/schema-2.png'
import Image6 from '@/assets/image/offer/schema-3.png'
import Image7 from '@/assets/image/offer/schema-4.png'
import Image8 from '@/assets/image/offer/schema-5.png'

const visitorsRegistration = 'https://wa.me/+971585556065'

// Заменяем useHead на компонент AppSeo
</script>

<style scoped>
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
