<template>
  <div class="min-h-screen bg-white">
    <AppSeo
      title="FREQUENTLY ASKED QUESTIONS - Emirates Fashion Week Dubai 2025"
      description="Frequently Asked Questions about Emirates Fashion Week Dubai 2025. Find answers about visitor passes, buyers, AI matchmaking tool, and more."
      keywords="Emirates Fashion Week FAQ, Fashion Week Questions, Dubai Fashion Week, Visitor Passes, AI Matchmaking"
      schema-type="faq"
      :faq-data="faqDataForSchema"
    />
    <FaqSectionDynamic :standalone="true" />
  </div>
</template>

<script setup>
import FaqSectionDynamic from '~/components/FaqSectionDynamic.vue';
import AppSeo from '@/components/AppSeo.vue';
import { ref, onMounted } from 'vue';

// Данные для микроразметки FAQ
const faqDataForSchema = ref([]);

// Загружаем FAQ данные для микроразметки
onMounted(async () => {
  try {
    const isLocal = window.location.hostname.includes('localhost') || 
                   window.location.hostname.includes('127.0.0.1') ||
                   window.location.hostname.includes('0.0.0.0');
    
    if (isLocal) {
      const response = await $fetch('/api/faq');
      if (response.success && response.faq) {
        faqDataForSchema.value = response.faq.map(item => ({
          question: item.question,
          answer: item.answer
        }));
      }
    } else {
      // На продакшене используем Google Sheets напрямую
      const SPREADSHEET_ID = '1z3JLJVzDADNCa6oSq3R701xLB8K5yyuCFlPZpSMXa1s';
      const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
      const response = await fetch(CSV_URL);
      const csvText = await response.text();
      const lines = csvText.split('\n').filter(line => line.trim());
      const rows = lines.map(line => {
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
      faqDataForSchema.value = rows
        .filter(row => row[0] && row[1])
        .map(row => ({
          question: row[0],
          answer: row[1]
        }));
    }
  } catch (error) {
    console.error('Error loading FAQ for schema:', error);
  }
});
</script> 