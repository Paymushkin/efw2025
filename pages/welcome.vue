<template>
  <div>
    <div class="container mx-auto px-4 py-4 md:py-6">
    <div class="max-w-6xl mx-auto">
      <section class="md:mb-[76px] mb-[56px]">
        <div class="flex flex-col md:flex-row gap-6 md:gap-8">
        <!-- Left column: Welcome, Program, and QR code -->
        <div class="text-center md:text-left flex-1">
          <h1 class="text-xl md:text-3xl xl:text-4xl mb-3 md:mb-4">
            Your Emirates Fashion Week invitation by
            <span 
              class="inline-block px-2 py-0.5 rounded-md bg-black text-white cursor-pointer select-none"
              @touchstart.passive="handleTouchStart"
              @touchend="handleTouchEnd"
              @dblclick="handleDoubleClick"
              @mousedown="handleMouseDown"
              @mouseup="handleMouseUp"
              @mouseleave="handleMouseLeave"
            >{{ guestName }}*</span>
          </h1>
          
          <!-- Финальное приглашение -->
          <p class="text-sm md:text-base text-gray-600 italic mb-4 md:mb-6">
            (*PRO/Premium tier, authorized to invite)
          </p>
          
          <!-- Event Program - Desktop version -->
          <div class="mb-4 md:mb-6 ">
            <!-- <h2 class="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              Join us for three remarkable days of style, beauty, and meaningful connections:
            </h2> -->
            
            <div class="overflow-x-auto">
              <table class="min-w-full mb-3">
                <!-- <thead>
                  <tr class="border-b border-gray-200">
                    <th class="py-2 px-3 text-left text-sm md:text-lg font-medium text-gray-500">Date & Time</th>
                    <th class="py-2 px-3 text-left text-sm md:text-lg font-medium text-gray-500">Event</th>
                  </tr>
                </thead> -->
                <tbody>
                  <!-- Day 8 (8 NOV) -->
                  <tr v-if="visibleDays.includes(8)" class="border-b border-gray-100">
                    <td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left">
                       <a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NWNpMTI0dnZ2bWhiNmtmZ3YzNWx1Yml2dXAgYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com">8 NOV | SAT</a>
                      <br>6–10PM</td>
                    <td class="py-2 pr-2 text-sm md:text-base xl:text-lg text-gray-600">PRÊT-À-PORTER WOMEN'S<br>& MEN'S COLLECTIONS SS 26</td>
                  </tr>
                  
                  <!-- Day 9 (9 NOV) -->
                  <tr v-if="visibleDays.includes(9)" class="border-b border-gray-100">
                    <td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left">
                       <a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N25sY3ExZXVtYjczNW12bmR0ZnR0cGd0OXAgYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com">9 NOV | SUN</a>
                      <br>6–10PM</td>
                    <td class="py-2 pr-2 text-sm md:text-base xl:text-lg text-gray-600">READY-TO-WEAR COLLECTIONS<br>& Kid's collections Pop-Up Market</td>
                  </tr>
                  
                  <!-- Day 10 (10 NOV) -->
                  <tr v-if="visibleDays.includes(10)" class="border-b border-gray-100">
                    <td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left">
                       <a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NTFzdXBkMjQzamhzanR0cjRiajdhb2J2Z3AgYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com">10 NOV | MON</a>
                      <br>10AM–6PM</td>
                    <td class="py-2 pr-2 text-sm md:text-lg text-gray-600">FASHION & BEAUTY SERVICES<br>POP-UP MARKET
                    </td>
                  </tr>
                  
                  <!-- Day 11 (11 NOV) -->
                  <tr v-if="visibleDays.includes(11)">
                    <td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left">
                       <a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MG5qMjc3aXFtczQ2MmgyZWhlaGJ0dTNzMzggYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com">11 NOV | TUE</a>
                      <br>10AM–6PM</td>
                    <td class="py-2 pr-2 text-sm md:text-base xl:text-lg text-gray-600">FASHION & WELLNESS SERVICES<br>POP-UP MARKET</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Join Button -->
            <div class="flex justify-center mb-6">
              <button 
                @click="openRegistrationModal"
                class="flex items-center gap-2 rounded-3xl transition-all duration-700 bg-black text-white hover:bg-black/90 hover:scale-105 active:scale-95 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium shadow-lg hover:shadow-xl animate-pulse"
                style="animation-duration: 3s;"
              >
                <span>Join & Add to Calendar</span>
              </button>
            </div>
            
            <!-- Random barcode (cached in localStorage) -->
            <div class="mt-4 mb-6">
              <div class="flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-2">
                <p class="text-sm md:text-base text-gray-600 md:ml-2 text-center md:text-left">
                  Admit: You +1. This page is your final invitation. No emails, tickets, or confirmations will follow.
                </p>
                <svg
                  v-if="barcodeBits.length"
                  :width="(barWidth * barcodeBits.length)"
                  :height="barHeight"
                  role="img"
                  aria-label="Access barcode"
                  class="w-full md:max-w-[260px]"
                >
                  <rect :width="(barWidth * barcodeBits.length)" :height="barHeight" fill="#ffffff" />
                  <rect
                    v-for="(bit, idx) in barcodeBits"
                    :key="idx"
                    :x="idx * barWidth"
                    y="0"
                    :width="bit === 1 ? Math.max(1, barWidth - 0.5) : 0"
                    :height="bit === 1 ? barHeight : 0"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p class="mt-2 text-center md:text-left text-xs text-gray-500 select-all">
                Code: {{ barcodeValue }}
              </p>
            </div>

            <!-- <p class="text-sm md:text-base text-gray-600 mb-3 md:hidden">
              A quick sign-in and a short note about yourself will serve as your VIP seat request, helping us seat you close to the right people.
            </p> -->
          </div>

          
        </div>

        
        
        <!-- Right column: Image with program overlay on mobile -->
        <div class="flex flex-col items-center justify-center relative flex-shrink-0">
          <div class="w-full max-w-md mx-auto rounded-lg shadow-md overflow-hidden relative">
            <img 
              :src="Image1" 
              alt="Emirates Fashion Week 2025" 
              class="w-full md:h-auto md:max-h-unset max-h-[65vh] h-[65vh] object-cover md:max-w-md hidden lg:block"
            />
            
          </div>
          
        </div>
      </div>
      </section>

          <!-- Отдельный блок с локацией -->
          <section class="md:mb-[76px] mb-[56px]">
               <h2 class="text-2xl md:text-3xl font-bold uppercase text-left mb-8">Location</h2>
              <p class="text-sm md:text-base text-gray-600 mb-4">Skylight Gallery. Arjaan by Rotana. Dubai Media City</p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.1534268127045!2d55.15329961837267!3d25.095293069615156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b44056573e7%3A0xc77c77051f31ecc!2sArjaan%20by%20Rotana%20Dubai!5e1!3m2!1sru!2sae!4v1757573179410!5m2!1sru!2sae" 
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="rounded-lg"
              ></iframe>
          </section>
      
      <!-- Detailed Fashion Show Program -->
      <div class="mt-8 md:mt-12">
        <h2 class="text-2xl md:text-3xl font-bold uppercase text-left mb-4 md:mb-6">Fashion Show</h2>
        
        <!-- Desktop version of detailed program -->
        <div class="hidden md:block">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- November 8 -->
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-base font-medium text-gray-800 mb-3">November 8, 2025</h3>
              
              <div class="space-y-3">
                <div>
                  <h4 class="text-base md:text-lg font-medium text-gray-700">Doors open 6PM</h4>
                  <ul class="mt-1 space-y-1">
                    <li v-for="designer in day8Designers" :key="designer" class="text-sm text-gray-600">
                      {{ designer }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- November 9 -->
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-base font-medium text-gray-800 mb-3">November 9, 2025</h3>
              
              <div class="space-y-3">
                <div>
                  <h4 class="text-base md:text-lg font-medium text-gray-700">Doors open 6PM</h4>
                    <ul class="mt-1 space-y-1">
                      <li v-for="designer in day9Designers" :key="designer" class="text-sm text-gray-600">
                        {{ designer }}
                      </li>
                    </ul>
                    <p class="text-sm text-gray-700 font-semibold mt-2">FASHION SHOW BY TOP FASHION STYLISTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile version of detailed program -->
        <div class="md:hidden">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="hidden md:block text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 text-left">Fashion Show</h3>
            
            <div class="space-y-4">
              <!-- November 8 -->
              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-2">November 8, 2025</h4>
                
                <div class="space-y-3">
                  <div>
                    <h5 class="text-sm font-medium text-gray-600">Doors open 6PM</h5>
                    <ul class="mt-1 space-y-1">
                      <li v-for="designer in day8Designers" :key="designer" class="text-xs text-gray-600">
                        {{ designer }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <!-- November 9 -->
              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-2">November 9, 2025</h4>
                
                <div class="space-y-3">
                  <div>
                    <h5 class="text-sm font-medium text-gray-600">Doors open 6PM</h5>
                    <ul class="mt-1 space-y-1">
                      <li v-for="designer in day9Designers" :key="designer" class="text-xs text-gray-600">
                        {{ designer }}
                      </li>
                    </ul>
                    <p class="text-xs text-gray-700 font-semibold mt-2">FASHION SHOW BY TOP FASHION STYLISTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <!-- QR Code Modal -->
  <div 
    v-if="showQRModal" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click="closeQRModal"
  >
    <div 
      class="bg-white rounded-lg p-6 max-w-sm w-full text-center relative"
      @click.stop
    >
      <!-- Close button (X) in top right corner -->
      <button 
        @click="closeQRModal"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-xl"
        title="Close"
      >
        ×
      </button>
      <!-- Emirates Fashion Week -->
      <h2 class="text-xl mb-2">Emirates Fashion Week</h2>
      
      <!-- Your Exclusive invitation -->
      <h3 class="text-xl mb-2">Your Exclusive invitation</h3>
      
      <!-- Scan for Details & Confirm -->
      <p class="text-xl font-bold text-gray-800 mb-4">Scan for Details & Confirm</p>
      
      <!-- QR Code -->
      <div class="mb-6">
        <img 
          :src="qrCodeUrl" 
          alt="QR Code for invitation" 
          class="mx-auto w-48 h-48"
        />
      </div>
      
      <!-- 8-11 November 2025 -->
      <p class="text-sm font-medium text-gray-800 mb-4">8-11 November 2025</p>
      
      <!-- Authorized to invite -->
      <div class="mb-4 p-4 bg-gray-50 rounded-lg">
        <label class="block text-sm font-medium text-gray-700 mb-2 text-left">
          Authorized to invite
        </label>
        <div class="flex gap-2">
          <input 
            v-model="newInviterName"
            type="text"
            placeholder="Marina Krapivina"
            class="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="handleNameInput"
          />
          <button 
            @click="createNewInviter"
            class="px-2 py-2 text-gray-400 hover:text-gray-600 transition-colors text-lg"
            :disabled="!newInviterName.trim()"
            title="Add"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Registration Modal -->
  <div 
    v-if="showRegistrationModal" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click="closeRegistrationModal"
  >
    <div 
      class="bg-white rounded-lg p-6 max-w-md w-full"
      @click.stop
    >
      <h3 class="text-lg font-semibold mb-4">Join the Guest List</h3>
      
      <form @submit.prevent="submitRegistration" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Name*
          </label>
          <input 
            v-model="registrationForm.name"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Profession or Brand
          </label>
          <input 
            v-model="registrationForm.company"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Stylist, Buyer or Company…"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Email (for Calendar reminder)*
          </label>
          <input 
            v-model="registrationForm.email"
            type="email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div class="flex gap-3 pt-4">
          <button 
            type="button"
            @click="closeRegistrationModal"
            class="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            :disabled="!registrationForm.name || !registrationForm.email || isSubmitting"
            class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span>{{ isSubmitting ? 'Sending...' : 'OK' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Confirmation Modal -->
  <div 
    v-if="showConfirmationModal" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click="closeConfirmationModal"
  >
    <div 
      class="bg-white rounded-lg p-6 max-w-md w-full text-center"
      @click.stop
    >
      <div class="mb-4">
        <svg class="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">You're officially on the Guest List!</h3>
        <!-- <p class="text-gray-600 mb-6">Your Google Calendar reminder is on its way to your email</p> -->
      </div>
      
      <div class="mb-6 p-4 rounded-lg">
        <p class="text-sm text-gray-600 mb-6">
          Optional: Share a few words about your usefulness, and we'll do our best to place you with matching VIPs
        </p>
        
        <!-- Desktop: Show QR Code -->
        <div v-if="isDesktop" class="text-center">
          <div class="flex justify-center mb">
            <img 
              :src="eventQRCodeUrl" 
              alt="Event QR Code" 
              class="w-32 h-32"
            />
          </div>
        </div>
        
        <!-- Mobile: Show Button -->
        <div v-else class="text-center">
          <button 
            @click="requestReservedSeat"
            class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Request Reserved Seat
          </button>
        </div>
      </div>
      
      <button 
        @click="closeConfirmationModal"
        class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
      >
        Close
      </button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { definePageMeta, useRoute, computed, ref, onMounted, watch } from '#imports';
import BaseButton from '@/components/ui/BaseButton.vue';
import Image1 from '@/assets/image/welcome/1.webp';
import { useDesigners } from '~/composables/useDesigners';

definePageMeta({
  name: 'welcome',
  layout: 'default'
});

// Get guest name from URL parameter
const route = useRoute();
const guestName = computed(() => {
  const name = route.query.by || 'Guest';
  // Replace + with spaces for display
  return name.replace(/\+/g, ' ');
});

// Parse days parameter from URL
const visibleDays = computed(() => {
  const daysParam = route.query.days;
  
  if (!daysParam) {
    // If no days parameter, show all days (8, 9, 10, 11)
    return [8, 9, 10, 11];
  }
  
  // Parse days parameter (e.g., "8 9 10" or "8 10 11" - browser converts + to spaces)
  const days = daysParam.toString().split(' ').map(day => parseInt(day.trim())).filter(day => !isNaN(day));
  
  // If parsing failed or no valid days, show all days
  if (days.length === 0) {
    return [8, 9, 10, 11];
  }
  
  // Return parsed days
  return days;
});

// QR Modal state
const showQRModal = ref(false);
const newInviterName = ref('Marina Krapivina');
const hasUpdatedQR = ref(false); // Track if QR was updated via OK button

// Desktop detection
const isDesktop = ref(false);

// Event QR Code URL
const eventQRCodeUrl = computed(() => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://meyou.id/efwss26')}`;
});

// Registration Modal state
const showRegistrationModal = ref(false);
const showConfirmationModal = ref(false);
const isSubmitting = ref(false);
const registrationForm = ref({
  name: '',
  company: '',
  email: ''
});
const qrCodeUrl = ref(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}`);

// Long press handlers
let touchStartTime = 0;
let mouseDownTime = 0;
const LONG_PRESS_DURATION = 800; // 800ms for long press

const handleTouchStart = () => {
  touchStartTime = Date.now();
};

const handleTouchEnd = () => {
  const touchDuration = Date.now() - touchStartTime;
  if (touchDuration >= LONG_PRESS_DURATION) {
    openQRModal();
  }
};

const handleDoubleClick = () => {
  openQRModal();
};

const handleMouseDown = () => {
  mouseDownTime = Date.now();
};

const handleMouseUp = () => {
  const mouseDuration = Date.now() - mouseDownTime;
  if (mouseDuration >= LONG_PRESS_DURATION) {
    openQRModal();
  }
};

const handleMouseLeave = () => {
  mouseDownTime = 0;
};

const openQRModal = () => {
  showQRModal.value = true;
  hasUpdatedQR.value = false; // Reset flag when opening modal
};

const closeQRModal = () => {
  // Only update URL and H1 if QR was updated via OK button
  if (hasUpdatedQR.value && newInviterName.value.trim()) {
    // Format the name: replace spaces with + for URL
    const formattedName = newInviterName.value.trim().replace(/\s+/g, '+');
    
    // Create new URL with the inviter name
    const baseUrl = window.location.origin + window.location.pathname;
    const newUrl = `${baseUrl}?by=${formattedName}`;
    
    // Update URL without page reload
    window.history.pushState({}, '', newUrl);
    
    // Force route update to trigger guestName computed property
    window.location.hash = 'updated';
    setTimeout(() => {
      window.location.hash = '';
    }, 10);
  }
  
  showQRModal.value = false;
};

// Registration modal handlers
const openRegistrationModal = () => {
  showRegistrationModal.value = true;
};

const closeRegistrationModal = () => {
  showRegistrationModal.value = false;
  // Reset form and submitting state
  registrationForm.value = {
    name: '',
    company: '',
    email: ''
  };
  isSubmitting.value = false;
};

const closeConfirmationModal = () => {
  showConfirmationModal.value = false;
};

// Submit registration
const submitRegistration = async () => {
  // Prevent multiple submissions
  if (isSubmitting.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Prepare data for Google Sheets
    const data = {
      name: registrationForm.value.name,
      company: registrationForm.value.company || '',
      email: registrationForm.value.email,
      inviter: guestName.value,
      barcode: barcodeValue.value, // Add barcode number from localStorage
      timestamp: new Date().toISOString(),
      source: 'EFW Registration'
    };

    // Send directly to Google Apps Script using GET with parameters (like working companies script)
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx775kpyP4fh_-e5IfVR4Yq1pdUPyI5v_BRKrx3E724INB9TOylkmSQ4moj9sVEWDMnGA/exec';
    
    // Convert data to URL parameters
    const params = new URLSearchParams({
      action: 'submit',
      name: data.name,
      company: data.company,
      email: data.email,
      inviter: data.inviter,
      barcode: data.barcode,
      timestamp: data.timestamp,
      source: data.source
    });
    
    // Send request to Google Apps Script
    console.log('Sending registration data:', data);
    console.log('URL:', `${GOOGLE_APPS_SCRIPT_URL}?${params}`);
    
    try {
      const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?${params}`, {
        method: 'GET',
        mode: 'cors' // Try CORS first
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Google Apps Script response:', result);
        
        if (result.success) {
          console.log('✅ Registration successful:', result.message);
        } else {
          console.error('❌ Registration failed:', result.error);
        }
      } else {
        console.error('❌ HTTP error:', response.status, response.statusText);
      }
    } catch (corsError) {
      console.log('CORS error, trying no-cors mode...');
      
      // Fallback to no-cors mode
      await fetch(`${GOOGLE_APPS_SCRIPT_URL}?${params}`, {
        method: 'GET',
        mode: 'no-cors'
      });
      
      console.log('Registration data sent (no-cors mode)');
    }

    // Close registration modal and show confirmation
    showRegistrationModal.value = false;
    showConfirmationModal.value = true;

  } catch (error) {
    console.error('Registration failed:', error);
    // Still show confirmation even if API fails
    showRegistrationModal.value = false;
    showConfirmationModal.value = true;
  } finally {
    // Always reset submitting state
    isSubmitting.value = false;
  }
};

// Request reserved seat
const requestReservedSeat = () => {
  // Redirect to мию
  window.open('https://meyou.id/event/efwss26', '_blank');
};

// Handle name input - allow all input including spaces
const handleNameInput = (event) => {
  newInviterName.value = event.target.value;
};

// Create new inviter
const createNewInviter = () => {
  if (!newInviterName.value.trim()) return;
  
  // Format the name: replace spaces with + for URL (but don't double encode)
  const formattedName = newInviterName.value.trim().replace(/\s+/g, '+');
  
  // Create new URL with the inviter name
  const baseUrl = window.location.origin + window.location.pathname;
  const newUrl = `${baseUrl}?by=${formattedName}`;
  
  // Update QR code URL
  qrCodeUrl.value = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(newUrl)}`;
  
  // Mark that QR was updated
  hasUpdatedQR.value = true;
  
  // Keep the input field value (don't clear it)
};


// Используем composable для работы с дизайнерами
const { fetchDesigners, designers, isDataUpdated } = useDesigners();

// Реактивные данные для дизайнеров
const day8Designers = ref([]);
const day9Designers = ref([]);

// -----------------------------
// Barcode (рандомный, с кэшем в localStorage)
// -----------------------------
const BARCODE_STORAGE_KEY = 'efw_barcode_value';
const barcodeValue = ref('');
const barcodeBits = ref([]);
const barWidth = 3; // px
const barHeight = 30; // px (уменьшено для более тонкого штрих-кода)

const generateBarcodeValue = () => {
  const now = Date.now();
  const rand = Math.floor(Math.random() * 1e6);
  return `${now}-${rand}`;
};

const encodeToBits = (value) => {
  const bits = [];
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    for (let b = 7; b >= 0; b--) {
      bits.push((code >> b) & 1);
    }
    bits.push(0); // разделитель
  }
  return bits.slice(0, 200);
};

// Функция для получения подтвержденных дизайнеров без маски
const getConfirmedDesigners = (day) => {
  const dayDesigners = designers.value[day] || [];
  return dayDesigners
    .filter(designer => designer.confirmed)
    .filter(designer => !['NOURA COUTURE', 'POLINA TROPILLO'].includes((designer.name || '').toUpperCase()))
    .map(designer => {
      const country = designer.country || '';
      // Проверяем, что country не является числом (день месяца)
      const isValidCountry = country && isNaN(Number(country)) && country !== '8' && country !== '9';
      return isValidCountry ? `${designer.name} - ${country}` : designer.name;
    });
};

// Обновляем списки дизайнеров при изменении данных
watch(designers, () => {
  day8Designers.value = getConfirmedDesigners('8');
  day9Designers.value = getConfirmedDesigners('9');
  console.log('📅 Дизайнеры 8 ноября:', day8Designers.value);
  console.log('📅 Дизайнеры 9 ноября:', day9Designers.value);
}, { immediate: true });

// Загружаем данные дизайнеров при монтировании компонента (только один раз)
onMounted(async () => {
  console.log('🚀 Welcome: Компонент смонтирован');
  console.log('📋 Welcome: Локальные данные уже доступны');
  
  // Определяем десктопную версию
  isDesktop.value = window.innerWidth >= 1024; // lg breakpoint
  
  // Пытаемся обновить данные из Google Sheets (только если еще не обновлены)
  if (!isDataUpdated.value) {
    console.log('🔄 Welcome: Пытаемся обновить данные из Google Sheets...');
    try {
      await fetchDesigners();
      console.log('✅ Welcome: Данные обновлены из Google Sheets');
    } catch (error) {
      console.log('📋 Welcome: Используем локальные данные (Google Sheets недоступен)');
    }
  } else {
    console.log('📋 Welcome: Данные уже обновлены, используем кэш');
  }

  // Инициализация штрих-кода с кэшем
  try {
    const stored = localStorage.getItem(BARCODE_STORAGE_KEY);
    const value = stored || generateBarcodeValue();
    if (!stored) {
      localStorage.setItem(BARCODE_STORAGE_KEY, value);
    }
    barcodeValue.value = value;
    barcodeBits.value = encodeToBits(value);
  } catch (e) {
    const value = generateBarcodeValue();
    barcodeValue.value = value;
    barcodeBits.value = encodeToBits(value);
  }
});
</script> 