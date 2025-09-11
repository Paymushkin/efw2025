<template>
  <div>
    <div class="container mx-auto px-4 py-8 max-w-7xl">
    <AppSeo
      title="Hot Offers - Emirates Fashion Week Dubai 2025"
      description="Emirates Fashion Week Dubai 2025: Beauty meets business. Showcase spots for beauty service companies and designer pop-up corners. Join us on April 13-15, 2025."
      keywords="Emirates Fashion Week, Dubai Fashion, Beauty Services, Designer Pop-up, Fashion Show 2025, Dubai Events, Beauty Business"
    />
    <!-- Hot Offers Section -->
     <div class="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-[50px] xl:mb-[100px]">
      <h1 class="text-xl md:text-4xl">Hot Offers</h1>
      <p class="text-sm md:text-base max-w-[427px] xl:mr-[178px]">
        Emirates Fashion Week: Beauty meets business
        <br>
        Dates: 10–11 November 2025
        <br><br>
        2 DAYS
        <br>
        BEAUTY DAY  10 NOVEMBER 2025 MONDAY
        <br>
        WELLNESS DAY  11 NOVEMBER 2025 TUESDAY  
        <br>
        <br><br>
        For the first time ever, Fashion Week features showcase spots for beauty service companies and designer pop-up corners
      </p>
     </div>

    <!-- Showcase spot Section -->
    <section class="mb-16">
      <h2 class="text-xl md:text-4xl xl:mb-[75px] md:mb-[50px] mb-7">Showcase spot</h2>
      
      <div class="relative -mx-4 md:mx-0 mb-8">
        <div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
          <div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <video 
              class="w-full h-full object-cover"
              muted
              autoplay
              loop
              playsinline
              poster="@/assets/image/offer/stand-1.webp"
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

      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-7 mb-8">
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Good for:</h3>
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
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">What’s Included:</h3>
          <ul class="text-sm space-y-2 mb-4">
            <li>• One of the 80 Showcase Spots:
              <ul class="pl-4 space-y-2 mt-2">
                <li>- 8, 9 November (runway days) 20 Spots in the corridors</li>
                <li>- 10, 11 November (market days)  20 Spots in the corridors + 60 Spots in the main hall </li>
              </ul>
            </li>
            <li class="font-bold">• 50 lead chats per day from EFW visitors (Our Matchmaking technology)</li>
            <li>• <b>50”</b>  Display for presentations with a table and 2 bar chairs </li>
            <li>• VIP invitations to all EFW runway shows on 8–11 November 2025</li>
            <li>• Operates during fashion show days </li>
          </ul>
          <div class="flex items-start text-sm">
              <svg class="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p class="font-medium mb-2"><b>Laptops are not provided.</b> Each exhibitor must bring their own laptop and connect it to the display via HDMI to showcase their company's video or presentation.</p>
              </div>
            </div>
        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Prices</h3>
          <ul class="text-sm space-y-2">
            <li> Early Birds / any day</li>
            <li>•<span class="line-through opacity-50"> 3,600 AED / 1,000$ </span> </li>
            <li>• 3,000 AED / 800$ / per day</li>
          </ul>
          <WhatsAppButton 
            v-if="showWhatsApp"
            :phone-number="whatsappNumber"
            text="Contact us about Showcase spot"
          />
      </div>
      </div>

    </section>

    <!-- Corner Section -->
    <section class="mb-16">
      <h2 class="text-xl md:text-4xl md:mb-[75px] mb-7">Popup Corners</h2>
      
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Good for:</h3>
          <ul class="text-sm space-y-2">
            <li>• Designers </li>
            <li>• Accessories Brands</li>
          </ul>
        </div>
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">What’s Included:</h3>
          <ul class="text-sm space-y-2">
            <li>• One of 40 Designers Pop-up Corners:
              <ul class="pl-4 space-y-2 mt-2">
                <li>- 8, 9 November (runway days) 20 Pop-ups in the corridors</li>
                <li>- 10, 11 November (market days)  20 Pop-ups in the corridors + 20 Pop-ups in the main hall</li>
              </ul>
            </li>
            <li>• 1.5 m RAIL for collection</li>
            <li>• VIP invitations to all EFW shows on November 8-9 </li>
          </ul>
        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Prices</h3>
          <ul class="text-sm">
            <li>• 11,000 aed / $3000 / 3 days</li>
          </ul>
          <WhatsAppButton 
            v-if="showWhatsApp"
            :phone-number="whatsappNumber"
            text="Contact us about Corner"
          />
      </div>
      </div>

    </section>

    <!-- Trial Section -->
    <section v-if="showTrial" class="mb-16">
      <h2 class="text-xl md:text-4xl md:mb-[75px] mb-7">Trial</h2>
      
      <div class="relative -mx-4 md:mx-0 mb-8">
        <div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
          <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <img :src="Image1" alt="Trial showcase" class="w-full h-full object-contain">
          </div>
          <div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
            <img :src="Image2" alt="Trial setup" class="w-full h-full object-contain">
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Good for:</h3>
          <ul class="text-sm space-y-2">
            <li>• New businesses testing the market</li>
            <li>• Startups looking for exposure</li>
            <li>• Companies wanting to try before committing</li>
          </ul>
        </div>
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">What's Included:</h3>
          <ul class="text-sm space-y-2">
            <li>• 1 day trial access</li>
            <li>• Basic showcase spot</li>
            <li>• 25 lead chats from EFW visitors</li>
            <li>• Access to networking events</li>
          </ul>
        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Prices</h3>
          <ul class="text-sm">
            <li>• 1,500 AED / $400 / per day</li>
          </ul>
          <WhatsAppButton 
            v-if="showWhatsApp"
            :phone-number="whatsappNumber"
            text="Contact us about Trial"
          />
        </div>
      </div>
    </section>

    <!-- Working Time Section -->
    <section class="mb-16">
      <h2 class="text-xl md:text-4xl mb-[75px]">WORKING TIME</h2>

      <!-- First Day -->
      <div class="mb-[50px] md:mb-[80px]">
        <h3 class="text-xl md:text-4xl mb-4 text-medium">1<sup>st</sup> Day
          <br>
          8 November 2025 | <span class="opacity-50"> SATURDAY <br>PRÊT-À-PORTER WOMEN'S & MEN'S </span></h3>
        <p class="md:mb-[55px] mb-7">
          COLLECTIONS SS 26
          <br>
          5:00 PM – 10:00 PM (Runway shows day / Corridor)

        </p>
        <h3 class="text-xl md:text-4xl mb-4 text-medium">2<sup>nd</sup> Day
          <br>
          9 November 2025 | <span class="opacity-50"> SUNDAY <br>READY-TO-WEAR COLLECTIONS SEASON SS </span></h3>
        <p class="md:mb-[55px] mb-7">
          26 & Kid’s collections Pop-Up Market
          <br>
          5:00 PM – 10:00 PM (Runway shows day / Corridor)
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
        <!-- <ul class="mt-4 space-y-2 text-sm">
          <li>• Open from 16:00</li>
          <li>• Runway shows from 18:00 to 21:00</li>
          <li>• 24 designer corners are available throughout the show hall</li>
        </ul> -->
      </div>

      <!-- Second Day -->
      <!-- <div class="mb-[50px] md:mb-[80px]">
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
      </div> -->

      <!-- Third Day -->
      <div class="mb-[50px] md:mb-[80px]">
        <h3 class="text-xl md:text-4xl mb-4 text-medium">3<sup>rd</sup> Day
          <br>
          10 November 2025 | <span class="opacity-50"> MONDAY <br>THE POP-UP MARKET</span></h3>
        <p class="md:mb-[55px] mb-7">
          10:00 AM – 6:00 PM (Market day / Main hall)

        </p>
        <h3 class="text-xl md:text-4xl mb-4 text-medium">4<sup>th</sup> Day
          <br>
          11 November 2025 | <span class="opacity-50"> TUESDAY <br>WELLNESS DAY</span></h3>
        <p class="md:mb-[55px] mb-7">
          10:00 AM – 6:00 PM (Market day / Main hall)

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
        <!-- <ul class="mt-4 text-sm">
          <li>• Open from 12:00</li>
          <li>• Close 18:00</li>
          <li>• 24 corners and 64 spots present Dubai's newest beauty services and designers</li>
        </ul> -->
      </div>
    </section>

    <!-- Important Notice -->
    <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-16">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <p class="font-medium text-amber-800 mb-2">Laptops are not provided.</p>
          <p class="text-amber-700">Each exhibitor must bring their own laptop and connect it to the display via HDMI to showcase their company's video or presentation.</p>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <FaqSection class="mb-[56px] md:mb-[76px]" />

     <div v-if="showTrial">
       <h2 class="text-xl md:text-4xl mb-[75px]">TRIAL SHOWCASE SPOTS</h2>
       
       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
         <div class="bg-gray-100 rounded-2xl overflow-hidden">
           <img :src="Image9" alt="Trial showcase spots" class="w-full h-auto object-cover">
         </div>
         
         <div class="flex flex-col justify-center">
           <p class="text-sm mb-6">
             A limited number of 10–20 Showcase Spots (2-hour sessions) will be allocated to waitlist applicants.
             Each selected participant will also receive 20 lead chats with EFW Market visitors.
             These trial spots are not free handouts — they are subsidized by Dubai Culture and Emirates Fashion Week as a goodwill initiative to support SMEs in Dubai's beauty and design industries.
           </p>
           
           <ul class="text-sm space-y-2 mb-6">
             <li>• Any waitlist participant may purchase their spot at any time during Fashion Week, which will override the free allocation for others.</li>
             <li>• You can always secure a guaranteed full-day or multi-day spot — just as 60+ companies already have, at the standard rates shown above.</li>
             <li>• From the full waitlist, up to 80 participants will be selected for 2-hour trial slots, provided these spots remain unpurchased.</li>
           </ul>
           
           <div class="flex flex-col items-end gap-3">
             <p class="text-sm text-gray-600">
               {{ applicationsCount }} applications submitted
             </p>
             <BaseButton
               variant="primary"
               @click="showWaitlistForm = true">
               <span>JOIN WAITLIST</span>
               <span>></span>
             </BaseButton>
           </div>
         </div>
       </div>
     </div>
   </div>

   <!-- Waitlist Form Modal -->
    <WaitlistForm 
      :is-open="showWaitlistForm" 
      @close="showWaitlistForm = false"
      @success="fetchApplicationsCount"
    />
   </div>
 </template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'
import FaqSection from '@/components/FaqSection.vue'
import WaitlistForm from '@/components/WaitlistForm.vue'
import Image1 from '@/assets/image/offer/stand-1.webp'
import Image2 from '@/assets/image/offer/corner-1.webp'
import Image3 from '@/assets/image/offer/corner-3.webp'
import Image4 from '@/assets/image/offer/schema-1.webp'
import Image5 from '@/assets/image/offer/schema-2.webp'
import Image6 from '@/assets/image/offer/schema-3.webp'
import Image7 from '@/assets/image/offer/schema-4.webp'
import Image8 from '@/assets/image/offer/schema-5.webp'
import Image9 from '@/assets/image/offer/trial.webp'

const route = useRoute()
const showWhatsApp = computed(() => !!route.query.wp)
const whatsappNumber = computed(() => route.query.wp || '971529833054')
const showTrial = computed(() => 'tr' in route.query)
const showWaitlistForm = ref(false)
const applicationsCount = ref(0)

// Получаем количество заявок
const fetchApplicationsCount = async () => {
  try {
    // Определяем, работаем ли мы локально или на продакшене
    const isLocal = window.location.hostname.includes('localhost') || 
                   window.location.hostname.includes('127.0.0.1') ||
                   window.location.hostname.includes('0.0.0.0');
    
    if (isLocal) {
      const response = await $fetch('/api/waitlist-count')
      if (response.success) {
        applicationsCount.value = response.count
      }
    } else {
      // На продакшене используем JSONP подход
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz2BIaFAqI7D93wH2nCaZyYhPOwb75-kiqk5RF0EJNURx3leLW8G8hzXBxASzt1gT2hLA/exec';
      
      // Создаем callback функцию
      const callbackName = 'callback_' + Date.now();
      window[callbackName] = (data) => {
        if (data && data.success) {
          applicationsCount.value = data.count;
        }
        delete window[callbackName];
        document.head.removeChild(script);
      };
      
      // Создаем script тег для JSONP
      const script = document.createElement('script');
      script.src = `${GOOGLE_SCRIPT_URL}?action=getCount&callback=${callbackName}`;
      document.head.appendChild(script);
    }
  } catch (error) {
    console.error('Error fetching applications count:', error)
  }
}

// Загружаем количество заявок при монтировании компонента
onMounted(() => {
  fetchApplicationsCount()
})

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
