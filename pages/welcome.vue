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
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="py-2 px-3 text-left text-sm md:text-lg font-medium text-gray-500">Date & Time</th>
                    <th class="py-2 px-3 text-left text-sm md:text-lg font-medium text-gray-500">Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-100">
                    <td class="py-2 px-3 text-sm md:text-lg font-medium">8 NOV | SAT 6–10PM</td>
                    <td class="py-2 px-3 text-sm md:text-lg text-gray-600">PRÊT-À-PORTER WOMEN'S<br>& MEN'S COLLECTIONS SS 26</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-2 px-3 text-sm md:text-lg font-medium">9 NOV | SUN 6–10PM</td>
                    <td class="py-2 px-3 text-sm md:text-lg text-gray-600">READY-TO-WEAR COLLECTIONS<br>& Kid's collections Pop-Up Market</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-2 px-3 text-sm md:text-lg font-medium">10 NOV | MON 10AM–6PM</td>
                    <td class="py-2 px-3 text-sm md:text-lg text-gray-600">POP-UP MARKET & BEAUTY SERVICES
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-3 text-sm md:text-lg font-medium">11 NOV | TUE 10AM–6PM</td>
                    <td class="py-2 px-3 text-sm md:text-lg text-gray-600">POP-UP MARKET & WELLNESS SERVICES</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Random barcode (cached in localStorage) -->
            <div class="mt-4 mb-6">
              <div class="flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-2">
                <p class="text-sm md:text-base text-gray-600 md:ml-2 text-center md:text-left">
                  This page is your final invitation. No emails, tickets, or confirmations will follow.
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
          
          <!-- Desktop version with QR code and address -->
          <div class="hidden md:flex gap-4 items-center">
            <div class="bg-white inline-block max-w-[160px] flex-shrink-0">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://meyou.id/efwss26%23guests" 
                  alt="QR code for event platform" 
                  class="mb-1 w-full"
                />
              </div>
            <p class="text-sm md:text-base text-gray-600 mb-4">
              If you want VIP seats, please scan this QR code with the phone you'll bring to the event. A quick sign-in and a short note about yourself will serve as your VIP seat request, helping us seat you close to the right people.
            </p>
          </div>
          
          <!-- Mobile and Desktop version with button -->
          <div class="flex justify-center">
            <BaseButton variant="primary" @click="openRegistrationModal">
              <span>Confirm & Add to Calendar</span>
            </BaseButton>
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
      class="bg-white rounded-lg p-6 max-w-sm w-full text-center"
      @click.stop
    >
      <h3 class="text-lg font-semibold mb-4">Share this invitation</h3>
      <div class="mb-4">
        <img 
          :src="qrCodeUrl" 
          alt="QR Code for invitation" 
          class="mx-auto w-48 h-48"
        />
      </div>
      
      <!-- Create new inviter form -->
      <div class="mb-4 p-4 bg-gray-50 rounded-lg">
        <label class="block text-sm font-medium text-gray-700 mb-2 text-left">
          Authorized to invite
        </label>
        <div class="flex gap-2 mb-3">
          <input 
            v-model="newInviterName"
            type="text"
            placeholder="Marina Krapivina"
            class="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="handleNameInput"
          />
          <button 
            @click="createNewInviter"
            class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
            :disabled="!newInviterName.trim()"
          >
            OK
          </button>
        </div>
      </div>
      
      <p class="text-sm text-gray-600 mb-4">
        Scan this QR code to share your invitation
      </p>
      <button 
        @click="closeQRModal"
        class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
      >
        Close
      </button>
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
      <h3 class="text-lg font-semibold mb-4">Confirm Your Attendance</h3>
      
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
            Company
          </label>
          <input 
            v-model="registrationForm.company"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your company name"
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
        <p class="text-gray-600 mb-6">Your Google Calendar reminder is on its way to your email</p>
      </div>
      
      <div class="mb-6 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-600 mb-3">
          Optional: Share a few words about your usefulness, and we'll do our best to place you with matching VIPs
        </p>
        <button 
          @click="requestReservedSeat"
          class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Request Reserved Seat
        </button>
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

// QR Modal state
const showQRModal = ref(false);
const newInviterName = ref('Marina Krapivina');

// Registration Modal state
const showRegistrationModal = ref(false);
const showConfirmationModal = ref(false);
const isSubmitting = ref(false);
const registrationForm = ref({
  name: '',
  company: '',
  email: ''
});
const qrCodeUrl = computed(() => {
  const currentUrl = window.location.href;
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
});

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
};

const closeQRModal = () => {
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
      timestamp: new Date().toISOString(),
      source: 'EFW Registration'
    };

    // Send directly to Google Apps Script using GET with parameters (like working companies script)
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzRMPq2FoydiAHKLPpiiGfML6kC9L3PfjObeZ4Pe1S_PryjkoXcJ3NSCk5leq3H--Yx/exec';
    
    // Convert data to URL parameters
    const params = new URLSearchParams({
      action: 'submit',
      name: data.name,
      company: data.company,
      email: data.email,
      inviter: data.inviter,
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
  
  // Close modal and redirect to new URL
  showQRModal.value = false;
  
  // Redirect to new URL
  setTimeout(() => {
    window.location.href = newUrl;
  }, 100);
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