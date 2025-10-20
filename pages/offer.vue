<template>
  <div>
    <div class="container mx-auto px-4 py-8 max-w-7xl">
    <AppSeo
      title="Hot Offers - Emirates Fashion Week Dubai 2025"
      description="Emirates Fashion Week Dubai 2025: Beauty meets business. Showcase spots for beauty service companies and designer pop-up corners. Join us on April 13-15, 2025."
      keywords="Emirates Fashion Week, Dubai Fashion, Beauty Services, Designer Pop-up, Fashion Show 2025, Dubai Events, Beauty Business"
    />
    <!-- Hot Offers Section -->
     <section class="flex flex-col justify-between gap-5 mb-[50px] md:mb-[80px] xl:mb-[100px]">
      <h1 class="text-xl md:text-4xl xl:mb-10">HOT OFFERS</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:gap-12 gap-7">
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">EFW Pop-up Market</h3>
          <p class="text-sm md:text-base xl:text-lg">
            Two days featuring <b>60 Showcase Spots</b> for beauty service companies<br>and <b>40 Designer Pop-Up Corners</b> with exclusive promotional offers
            <br><br>
            <b>BEAUTY DAY</b> | 10 November 2025 | Monday
            <br>
            <b>WELLNESS DAY</b> | 11 November 2025 | Tuesday
          </p>
        </div>
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Beauty Day</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4">
            <li>• Beauty & cosmetics brands</li>
            <li>• MUAs, nails, brows & lashes</li>
            <li>• Skincare & dermatology</li>
            <li>• Fragrance & perfumes</li>
            <li>• Health & wellness</li>
            <li>• Fitness & events</li>
          </ul>

        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl font-bold">Wellness Day</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4">
            <li>• Medical & aesthetic clinics</li>
            <li>• Health & wellness tourism, nutrition</li>
            <li>• Oral care & dental aesthetics</li>
            <li>• Spas, massage, gyms & barbers</li>
            <li>• Salon, clinic & tools/equipment suppliers</li>
            <li>• Beauty tech: CRM, booking, payments</li>
          </ul>
          </ul>

      </div>
      </div>
     </section>

    <!-- Showcase spot Section -->
    <section class="mb-[50px] md:mb-[80px] xl:mb-[100px]">
      <h2 class="text-xl md:text-4xl xl:mb-[75px] md:mb-[50px] mb-7">SHOWCASE SPOT</h2>
      
      <ClientOnly>
        <div class="relative -mx-4 md:mx-0 mb-8">
          <div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory">
            <div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center">
              <video 
                class="w-full h-full object-cover"
                muted
                autoplay
                loop
                playsinline
                :poster="Image1"
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
      </ClientOnly>

      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:gap-12 gap-7 mb-8">
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Good for:</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <li>• Medical & Aesthetic Clinics – General clinics, plastic surgery, dentistry.   </li>
            <li>• Health & Wellness – Nutritionists, dietitians, medical & wellness tourism.</li>
            <br><br>
            <li>• Beauty & Cosmetics – Cosmetic brands, makeup artists, brow & lash services, nail care.</li>
            <li>• Personal Care & Wellness – Cosmetology, massage, salons, spas, barbershops.</li>
            <br><br></br>
            <li>• Fitness & Events – Gyms, wellness studios, wedding makeup & beauty services.</li>
            <li>• Education & Training – Schools and courses for makeup, cosmetology, and nail services.</li>
            <br><br>
            <li>• Beauty Tech & Software – CRM, online booking, payment solutions for salons.</li>
            <li>• Salon & Clinic Equipment – Furniture and professional tools for beauty salons & medical clinics.</li>
          </ul>
        </div>
        <div class="border border-gray-300 rounded-lg p-4">
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">What's Included:</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4">
            <li><b>A)</b> One of the 80 Showcase Spots:
              <ul class="pl-4 space-y-2 mt-2">
                <li>- 8, 9 November (runway days) 20 Spots in the corridors</li>
                <li>- 10, 11 November (market days)  20 Spots in the corridors + 60 Spots in the main hall </li>
              </ul>
            </li>
            <br><br>
            <li class="font-bold">B) 50 lead chats per day from EFW visitors (Our Matchmaking technology)</li>
            <li><b>C) 50”</b>  Display for presentations with a table and 2 bar chairs </li>
            <br><br>
            <li><b>D)</b> VIP invitations to all EFW runway shows on 8–11 November 2025</li>
          </ul>
          <br><br>
          <div class="flex items-start text-sm md:text-base xl:text-lg">
              <svg class="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p class="font-medium mb-2"><b>Laptops are not provided.</b> Each exhibitor must bring their own laptop and connect it to the display via HDMI to showcase their company's video or presentation.</p>
              </div>
            </div>
        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl font-bold">Total</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <li>• 60 Spots</li>
          </ul>
          <br><br>
          <h3 class="md:text-2xl font-bold">Prices</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <li> Early Birds / any day</li>
            <li>•<span class="line-through opacity-50"> 3,600 AED / 1,000$ </span> </li>
            <li>• 3,000 AED / 800$ / per day</li>
          </ul>
          <ClientOnly>
            <WhatsAppButton 
              v-if="showWhatsApp"
              :phone-number="whatsappNumber"
              text="Contact us about Showcase spot"
            />
            <div v-if="showTrial">
              <a 
                href="#join-waitlist"
                class="mt-3 inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors border border-black hover:bg-gray-100 w-fit"
              >
                <span>2h Free Trial Spot Waitlist</span>
                <span id="trial-waitlist-count-offer-1" style="background-color: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">{{ companiesCount }}</span>
                <span>></span>
              </a>
            </div>
          </ClientOnly>
      </div>
      </div>

    </section>

    <!-- Corner Section -->
    <section class="mb-[50px] md:mb-[80px] xl:mb-[100px]">
      <h2 class="text-xl md:text-4xl md:mb-[75px] mb-7">POP-UP DESIGNER CORNER</h2>
      
      <ClientOnly>
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
      </ClientOnly>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">Good for:</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <li>• Designers </li>
            <li>• Accessories Brands</li>
          </ul>
        </div>
        <div class="border border-gray-300 rounded-lg p-4">
          <h3 class="md:text-2xl md:mb-5 mb-2 font-bold">What's Included:</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <li><b>A)</b> One of 40 Designers Pop-up Corners:
              <ul class="pl-4 space-y-2 my-2">
                <li>- 8, 9 November (runway days) 20 Pop-ups in the corridors</li>
                <li>- 10, 11 November (market days)  20 Pop-ups in the corridors + 20 Pop-ups in the main hall</li>
              </ul>
            </li>
            <li><b>B)</b> 1.5 m RAIL for collection</li>
            <li><b>C)</b> VIP invitations to all EFW shows on November 8-9 </li>
          </ul>
        </div>
        <div class="flex flex-col md:gap-4 gap-2">
          <h3 class="md:text-2xl font-bold">Total</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <li>• 40 POP-UP CORNERS</li>
          </ul>
          <br><br>
          <h3 class="md:text-2xl font-bold">Prices</h3>
          <ul class="text-sm md:text-base xl:text-lg space-y-2">
            <li> Early Birds / any day</li>
            <li>•<span class="line-through opacity-50"> 2,200 AED / 600$ </span> </li>
            <li>• 1,800 AED / 500$ / per day</li>
          </ul>
          <ClientOnly>
            <WhatsAppButton 
              v-if="showWhatsApp"
              :phone-number="whatsappNumber"
              text="Contact us about Corner"
            />
            <div v-if="showTrial">
              <a 
                href="#join-waitlist"
                class="mt-3 inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors border border-black hover:bg-gray-100 w-fit"
              >
                <span>2h Free Trial Spot Waitlist</span>
                <span id="trial-waitlist-count-offer-2" style="background-color: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">{{ companiesCount }}</span>
                <span>></span>
              </a>
            </div>
          </ClientOnly>
      </div>
      </div>

    </section>


    <!-- Working Time Section -->
    <section class="mb-[50px] md:mb-[80px] xl:mb-[100px]">
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
      <div>
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
    <!-- <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-16">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <p class="font-medium text-amber-800 mb-2">Laptops are not provided.</p>
          <p class="text-amber-700">Each exhibitor must bring their own laptop and connect it to the display via HDMI to showcase their company's video or presentation.</p>
        </div>
      </div>
    </div> -->

      <section id="slides" class="mb-[50px] md:mb-[80px] xl:mb-[100px]">
        <h2 class="text-xl md:text-4xl mb-[75px]">PRESENTATION</h2>
        <div class="w-full aspect-video">
          <iframe 
            src="https://www.canva.com/design/DAGykrRNjho/8F9GjzAc1t8ZtytdQMS86w/view?embed"
            width="100%" 
            height="100%" 
            frameborder="0" 
            allowfullscreen
            class="rounded-lg shadow-lg w-full h-full"
          ></iframe>
        </div>
      </section>

      <section id="map" class="mb-[50px] md:mb-[80px] xl:mb-[100px]">
        <h2 class="text-xl md:text-4xl mb-[75px]">LOCATION</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 2D Map -->
        <div class="border border-gray-300 rounded-lg p-4">
          <h3 class="text-lg md:text-xl font-bold mb-4">2D View</h3>
          <div class="w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28905.594122284634!2d55.128635593056764!3d25.095115196678794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b0072bb3c61%3A0x3a456f0a9996fc2c!2sSkylight%20Gallery!5e0!3m2!1sru!2sae!4v1757756744547!5m2!1sru!2sae" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <!-- 3D Map -->
        <div class="border border-gray-300 rounded-lg p-4">
          <h3 class="text-lg md:text-xl font-bold mb-4">3D View</h3>
          <div class="w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1757756521377!6m8!1m7!1sFD00YnqiTe4Mfh-iCWTNNA!2m2!1d25.09490902264704!2d55.15351383099734!3f12.933478943500432!4f12.986052488037629!5f0.7820865974627469" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      </section>

      <ClientOnly>
        <PhotoGallery />
      </ClientOnly>

      <!-- FAQ Section -->
      <div class="mt-12">
        <ClientOnly>
          <FaqSectionDynamic :standalone="false" />
        </ClientOnly>
      </div>

     <ClientOnly>
       <div v-if="showTrial" class="mb-[50px] md:mb-[80px] xl:mb-[100px]">
       <h2 class="text-xl md:text-4xl mb-[75px]">TRIAL SHOWCASE SPOTS</h2>
       
       <div class="space-y-6 mb-8">
         <!-- Первое фото и текст на одной строке -->
         <div class="flex flex-col md:flex-row gap-6">
           <div class="rounded-2xl overflow-hidden md:w-1/2">
             <img :src="Image9" alt="Trial showcase spots" class="w-full object-contain">
           </div>
           <div class="md:w-1/2">
             <p class="text-sm mb-6">
               Trial Showcase Spots — How it Works
             </p>
             
             <ul class="text-sm space-y-2 mb-6">
              <li>• Each day offers 20 Showcase Spots, divided into 4 sessions of 2 hours each — that's 80 trial slots per day.</li>
              <li>• Each selected participant also receives 10 lead chats with EFW Market visitors.</li>
              <li>• Allocation is not automatic. From the waitlist, participants are chosen at the organizers' discretion, to ensure a balanced mix of services for our audience.</li>
              <li>• These trial spots are subsidized by Dubai Departments and Emirates Fashion Week as a goodwill initiative to support SMEs in Dubai's beauty and design industries.</li>
              <li>• Important: if all 60 full-day paid spots are taken, the 20 trial spots may also be sold, which reduces the chances for waitlist applicants.</li>
              <li>• You can always skip the waitlist and secure a guaranteed full-day spot (3,000 AED) — just as 60+ companies already have</li>
             </ul>
           </div>
         </div>
         
         <!-- Второе и третье фото в ряд -->
         <div class="flex flex-col md:flex-row gap-6">
           <div class="rounded-2xl overflow-hidden">
             <img :src="Image10" alt="Trial showcase spots" class="object-contain">
           </div>

           <div class="rounded-2xl overflow-hidden">
             <img :src="Image11" alt="Trial showcase spots" class="object-contain">
           </div>
         </div>
       </div>
       
       <p class="text-sm text-gray-600 mt-2 text-center">
         competition with other waitlist companies; trial slots reduced if full-day spots are purchased
       </p>
       
       <div class="flex flex-col items-end gap-3 mb-8 mt-6">
         <BaseButton
           id="join-waitlist"
           variant="primary"
           @click="showWaitlistForm = true">
           <!-- <span>2h Free Trial Spot Waitlist</span> -->
           <span>Join Waitlist</span>
           <span>></span>
         </BaseButton>
       </div>
       
       <!-- Companies List -->
       <div class="mt-12">
         <ClientOnly>
           <CompaniesList ref="companiesListRef" @companies-count-updated="updateCompaniesCount" />
         </ClientOnly>
       </div>

      <!-- Approved Companies List -->
      <ClientOnly>
        <div v-if="showApproved" class="mt-12">
          <ApprovedCompaniesList ref="approvedCompaniesListRef" @companies-count-updated="updateApprovedCount" />
        </div>
      </ClientOnly>

    </div>
    </ClientOnly>

     
   </div>

   <!-- Waitlist Form Modal -->
    <ClientOnly>
      <WaitlistForm
        :is-open="showWaitlistForm" 
        @close="showWaitlistForm = false"
        @success="handleWaitlistSuccess"
      />
    </ClientOnly>

    <ClientOnly>
      <GalleryIframe :show-fog="false" />
    </ClientOnly>
    
    <!-- Bottom anchor for scrolling -->
    <div id="bottom"></div>
   </div>
 </template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCompaniesCount } from '~/composables/useCompaniesCount'
import BaseButton from '@/components/ui/BaseButton.vue'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'
import FaqSection from '@/components/FaqSection.vue'
import FaqSectionDynamic from '@/components/FaqSectionDynamic.vue'
import WaitlistForm from '@/components/WaitlistForm.vue'
import CompaniesList from '@/components/CompaniesList.vue'
import ApprovedCompaniesList from '@/components/ApprovedCompaniesList.vue'
import PhotoGallery from '@/components/PhotoGallery.vue'
import GalleryIframe from '@/components/GalleryIframe.vue'
import Image1 from '@/assets/image/offer/stand-1.webp'
import Image2 from '@/assets/image/offer/corner-1.webp'
import Image3 from '@/assets/image/offer/corner-3.webp'
import Image4 from '@/assets/image/offer/schema-1.webp'
import Image5 from '@/assets/image/offer/schema-2.webp'
import Image6 from '@/assets/image/offer/schema-3.webp'
import Image7 from '@/assets/image/offer/schema-4.webp'
import Image8 from '@/assets/image/offer/schema-5.webp'
import Image9 from '@/assets/image/offer/trial.webp'
import Image10 from '@/assets/image/stations/station-2.webp'
import Image11 from '@/assets/image/offer/trial_compare.webp'

const route = useRoute()
const showWhatsApp = computed(() => !!route.query.wp)
const whatsappNumber = computed(() => route.query.wp || '971529833054')
const showTrial = computed(() => 'tr' in route.query)
const showWaitlist = computed(() => 'waitlist' in route.query)
const showApproved = computed(() => 'approved' in route.query)
const showWaitlistForm = ref(false)
const companiesListRef = ref(null)
const approvedCompaniesListRef = ref(null)
const { companiesCount, updateCompaniesCount: updateGlobalCount } = useCompaniesCount()
const approvedCount = ref(0)


// Функция для обновления счетчика компаний
const updateCompaniesCount = (count) => {
  updateGlobalCount(count)
  
  if (process.client) {
    // Обновляем счетчики в программе на главной странице
    const trialCountElement1 = document.getElementById('trial-waitlist-count-1')
    if (trialCountElement1) {
      trialCountElement1.textContent = count
    }
    
    const trialCountElement2 = document.getElementById('trial-waitlist-count-2')
    if (trialCountElement2) {
      trialCountElement2.textContent = count
    }
    
    // Обновляем счетчики на странице offer
    const trialCountOffer1 = document.getElementById('trial-waitlist-count-offer-1')
    if (trialCountOffer1) {
      trialCountOffer1.textContent = count
    }
    
    const trialCountOffer2 = document.getElementById('trial-waitlist-count-offer-2')
    if (trialCountOffer2) {
      trialCountOffer2.textContent = count
    }
  }
}

// Функция для обновления счетчика одобренных компаний
const updateApprovedCount = (count) => {
  approvedCount.value = count
}


// Функция для обработки успешной отправки формы
const handleWaitlistSuccess = async (newCompanyData) => {
  // Обновляем список компаний с подсветкой новой компании
  if (companiesListRef.value) {
    companiesListRef.value.refresh(newCompanyData)
  }
  // Увеличиваем счетчик
  companiesCount.value += 1
}

// Функция для скролла до конца страницы
const scrollToBottom = () => {
  // Множественные попытки скролла с увеличивающейся задержкой
  const scrollAttempts = [500, 1000, 2000, 3000]
  
  scrollAttempts.forEach((delay, index) => {
    setTimeout(() => {
      console.log(`Scroll attempt ${index + 1} after ${delay}ms`)
      
      // Простой и надежный способ
      if (process.client) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
        
        // Дополнительная попытка через 100ms
        setTimeout(() => {
          if (process.client) {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }, delay)
  })
}

// Автоматический скролл при наличии параметра waitlist
onMounted(async () => {
  if (process.client && showWaitlist.value) {
    // Сразу начинаем скролл
    scrollToBottom()
  }
  
  // Принудительно загружаем данные компаний для обновления счетчика
  if (companiesListRef.value) {
    await companiesListRef.value.fetchCompanies()
  }
  
  // Дополнительная проверка через 2 секунды
  setTimeout(async () => {
    try {
      const SPREADSHEET_ID = '1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM';
      const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
      
      const response = await fetch(CSV_URL);
      if (response.ok) {
        const csvText = await response.text();
        const lines = csvText.split('\n');
        
        // Парсим CSV правильно (учитывая запятые в кавычках)
        const rows = lines.filter(line => line.trim()).map(line => {
          const values = [];
          let current = '';
          let inQuotes = false;
          
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              values.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          
          values.push(current.trim());
          return values;
        });
        
        // Преобразуем в формат компаний и фильтруем только waitlist
        const companiesFromCSV = rows.slice(1).map((row, index) => ({
          timestamp: row[0] || '',
          companyName: row[1] || '',
          industry: row[2] || '',
          name: row[3] || '',
          email: row[4] || '',
          phone: row[5] || '',
          message: row[6] || '',
          agreement1: row[7] || '',
          agreement2: row[8] || '',
          ipAddress: row[9] || '',
          userAgent: row[10] || '',
          status: row[11] || 'WAITLIST'
        })).filter(company => company.companyName);
        
        // Фильтруем компании (WAITLIST, GARANTEED, RECOMMENDED)
        const filteredCompanies = companiesFromCSV.filter(company => {
          return !company.status || 
                 company.status === '' ||
                 company.status === 'WAITLIST' ||
                 company.status === 'waitlist' ||
                 company.status === 'GARANTEED' ||
                 company.status === 'guaranteed' ||
                 company.status === 'RECOMMENDED' ||
                 company.status === 'recommended'
        });
        
        
        // Обновляем счетчик
        updateCompaniesCount(filteredCompanies.length);
      }
    } catch (error) {
      console.error('Offer page: Ошибка загрузки данных:', error);
    }
  }, 2000);
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
