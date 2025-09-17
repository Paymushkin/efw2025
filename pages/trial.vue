<template>
  <div>
    <AppSeo
      title="Trial Showcase Spots - Emirates Fashion Week Dubai 2025"
      description="Get a 2-hour free trial showcase spot at Emirates Fashion Week Dubai 2025. Limited spots available for beauty and design businesses. Join the waitlist now!"
      keywords="Trial showcase spots, Free trial, Emirates Fashion Week, Dubai Fashion Event, Beauty business, Design business, Waitlist"
    />

    <!-- Trial Showcase Spots Section -->
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-xl md:text-4xl mb-[75px]">TRIAL SHOWCASE SPOTS</h1>
      
      <div class="space-y-6 mb-8">
        <!-- Первое фото и текст на одной строке -->
        <div class="flex flex-col md:flex-row gap-6">
          <div class="rounded-2xl overflow-hidden md:w-1/2">
            <img :src="Image9" alt="Trial showcase spots" class="w-full object-contain">
          </div>
          <div class="md:w-1/2">
            <p class="text-base md:text-xl xl:text-2xl mb-6">
              Trial Showcase Spots — How it Works
            </p>
            
            <ul class="text-sm md:text-base xl:text-lg space-y-2 mb-6">
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
      
      <p class="text-sm md:text-base xl:text-lg text-gray-600 mt-2 text-center">
        competition with other waitlist companies; trial slots reduced if full-day spots are purchased
      </p>
      
      <div class="flex flex-col items-end gap-3 mb-8">
        <BaseButton
          id="join-waitlist"
          variant="primary"
          @click="showWaitlistForm = true">
          <span>Join Waitlist</span>
          <span>></span>
        </BaseButton>
      </div>
      
      <!-- Companies List -->
      <div class="mt-12">
        <CompaniesList ref="companiesListRef" @companies-count-updated="updateCompaniesCount" />
      </div>
    </div>

    <!-- Waitlist Form Modal -->
    <WaitlistForm
      :is-open="showWaitlistForm" 
      @close="showWaitlistForm = false"
      @success="handleWaitlistSuccess"
    />
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCompaniesCount } from '~/composables/useCompaniesCount'
import BaseButton from '@/components/ui/BaseButton.vue'
import WaitlistForm from '@/components/WaitlistForm.vue'
import CompaniesList from '@/components/CompaniesList.vue'
import AppSeo from '@/components/AppSeo.vue'
import Image9 from '@/assets/image/offer/trial.webp'
import Image10 from '@/assets/image/stations/station-2.webp'
import Image11 from '@/assets/image/offer/trial_compare.webp'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const showWaitlistForm = ref(false)
const companiesListRef = ref(null)
const { companiesCount, updateCompaniesCount: updateGlobalCount } = useCompaniesCount()

// Функция для обновления счетчика компаний
const updateCompaniesCount = (count) => {
  updateGlobalCount(count)
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
</script>
