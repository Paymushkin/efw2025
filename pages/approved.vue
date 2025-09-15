<template>
  <div>
    <AppSeo
      title="Approved Companies - Emirates Fashion Week Dubai 2025"
      description="View the list of approved companies participating in Emirates Fashion Week Dubai 2025. See which beauty and design businesses have been selected."
      keywords="Approved companies, Emirates Fashion Week, Dubai Fashion Event, Beauty business, Design business, Selected companies"
    />

    <!-- Approved Companies Section -->
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-xl md:text-4xl mb-[75px]">APPROVED COMPANIES</h1>
      
      <div class="mb-8">
        <p class="text-sm mb-6">
          Companies that have been approved to participate in Emirates Fashion Week Dubai 2025
        </p>
      </div>
      
      <!-- Approved Companies List -->
      <div class="mt-12">
        <ApprovedCompaniesList ref="approvedCompaniesListRef" @companies-count-updated="updateApprovedCount" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ApprovedCompaniesList from '@/components/ApprovedCompaniesList.vue'
import AppSeo from '@/components/AppSeo.vue'

definePageMeta({
  layout: 'default'
})

const approvedCompaniesListRef = ref(null)
const approvedCount = ref(0)

// Функция для обновления счетчика одобренных компаний
const updateApprovedCount = (count) => {
  approvedCount.value = count
}
</script>
