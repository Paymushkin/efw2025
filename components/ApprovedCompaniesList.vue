<template>
  <div class="approved-companies-list">
    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
    </div>
    
    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-600">Loading error: {{ error }}</p>
    </div>
    
    <div v-else-if="companies.length === 0" class="text-center py-8">
      <p class="text-gray-600">No approved companies yet</p>
    </div>
    
    <div v-else class="space-y-3">
      <h3 class="text-lg font-semibold mb-4">APPROVED COMPANIES ({{ companies.length }})</h3>
      <div class="space-y-3 pr-2">
        <div 
          v-for="(company, index) in companies" 
          :key="index"
          :class="[
            'flex items-center justify-between p-3 rounded-lg border transition-all duration-300',
            isNewCompany(company) 
              ? 'bg-green-50 border-green-200 shadow-md' 
              : 'bg-blue-50 border-blue-200'
          ]"
        >
          <div class="flex items-center gap-3 flex-1">
            <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-medium text-white">
              {{ index + 1 }}
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <div class="font-medium text-gray-900">
                  {{ maskCompanyName(company.companyName) }}{{ company.industry ? ' | ' + company.industry : '' }}
                </div>
                <span 
                  v-if="isNewCompany(company)" 
                  class="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full"
                >
                  NEW
                </span>
                <span class="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                  APPROVED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const companies = ref([])
const loading = ref(true)
const error = ref('')
const newlyAddedCompany = ref(null)
const autoRefreshInterval = ref(null)

// Функция для маскировки названия компании
const maskCompanyName = (name) => {
  if (!name || name.length <= 2) return name
  
  const words = name.split(' ')
  
  if (words.length === 1) {
    const word = words[0]
    if (word.length < 5) {
      return word.substring(0, 2) + '*'.repeat(word.length - 2)
    } else {
      return word.substring(0, 2) + '*'.repeat(word.length - 5) + word.substring(word.length - 3)
    }
  } else {
    const maskedWords = words.map((word, index) => {
      if (index === 0) {
        return word.substring(0, 2) + '*'.repeat(word.length - 2)
      } else if (index === words.length - 1) {
        if (word.length === 3) {
          return word
        } else {
          return '*'.repeat(word.length)
        }
      } else {
        return '*'.repeat(word.length)
      }
    })
    return maskedWords.join(' ')
  }
}

// Функция для форматирования даты
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Функция для проверки, является ли компания новой
const isNewCompany = (company) => {
  if (!company) return false
  const companyId = company.companyName + '_' + company.timestamp
  return companyId === newlyAddedCompany.value
}

// Функция для фильтрации одобренных компаний
const filterApprovedCompanies = (companiesList) => {
  console.log('ApprovedCompaniesList: filtering companies:', companiesList.length)
  console.log('ApprovedCompaniesList: all companies with statuses:', companiesList.map(c => ({ name: c.companyName, status: c.status })))
  
  const approved = companiesList.filter(company => {
    // Показываем только компании со статусом APPROVED
    return company.status === 'APPROVED' || company.status === 'approved' || company.status === 'Approved'
  })
  
  console.log('ApprovedCompaniesList: approved companies:', approved.length)
  console.log('ApprovedCompaniesList: approved companies details:', approved.map(c => ({ name: c.companyName, status: c.status })))
  
  return approved
}

// Функция для загрузки одобренных компаний
const fetchCompanies = async () => {
  try {
    loading.value = true
    error.value = ''

    // Определяем, работаем ли мы локально или на продакшене
    const isLocal = window.location.hostname.includes('localhost') || 
                   window.location.hostname.includes('127.0.0.1') ||
                   window.location.hostname.includes('0.0.0.0')
    
    if (isLocal) {
      // Локально используем API
      try {
        const response = await $fetch('/api/companies-list', {
          query: { _t: Date.now() } // Добавляем timestamp для предотвращения кеширования
        })
        if (response.success) {
          // Фильтруем только одобренные компании
          const approvedCompanies = filterApprovedCompanies(response.companies)
          
          // Сортируем компании по дате (новые сверху)
          const sortedCompanies = approvedCompanies.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp)
          })

          // Если есть подсвеченная компания, сохраняем её позицию
          if (newlyAddedCompany.value) {
            const highlightedIndex = companies.value.findIndex(company => {
              const companyId = company.companyName + '_' + company.timestamp
              return companyId === newlyAddedCompany.value
            })

            if (highlightedIndex !== -1) {
              const highlightedCompany = companies.value.splice(highlightedIndex, 1)[0]
              sortedCompanies.unshift(highlightedCompany)
            }
          }

          companies.value = sortedCompanies
          emit('companies-count-updated', companies.value.length)
        } else {
          error.value = response.error || 'Ошибка загрузки данных'
        }
      } catch (apiError) {
        console.error('API Error:', apiError)
        // Если API не работает, показываем пустой список
        companies.value = []
        emit('companies-count-updated', 0)
        error.value = 'Сервис временно недоступен'
      }
      loading.value = false
    } else {
      // На продакшене (GitHub Pages) используем прямые запросы к Google Sheets
      try {
        const SPREADSHEET_ID = '1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM';
        const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
        
        const response = await fetch(CSV_URL);
        
        if (!response.ok) {
          throw new Error(`CSV export error: ${response.statusText}`);
        }
        
        const csvText = await response.text();
        
        // Парсим CSV правильно (учитывая запятые в кавычках)
        const lines = csvText.split('\n');
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
        
        // Преобразуем в формат компаний
        const companiesFromCSV = rows.map((row, index) => ({
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
        
        // Фильтруем только одобренные компании
        const approvedCompanies = filterApprovedCompanies(companiesFromCSV);
        
        // Сортируем компании по дате (новые сверху)
        const sortedCompanies = approvedCompanies.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp)
        });

        // Если есть подсвеченная компания, сохраняем её позицию
        if (newlyAddedCompany.value) {
          const highlightedIndex = companies.value.findIndex(company => {
            const companyId = company.companyName + '_' + company.timestamp
            return companyId === newlyAddedCompany.value
          });

          if (highlightedIndex !== -1) {
            const highlightedCompany = companies.value.splice(highlightedIndex, 1)[0]
            sortedCompanies.unshift(highlightedCompany)
          }
        }

        companies.value = sortedCompanies;
        emit('companies-count-updated', companies.value.length);
        
        console.log('Approved companies loaded from Google Sheets:', approvedCompanies.length);
        
      } catch (csvError) {
        console.error('CSV fetch error:', csvError);
        error.value = 'Ошибка загрузки данных';
      }
      
      loading.value = false;
    }
  } catch (err) {
    console.error('Error fetching approved companies:', err)
    error.value = 'Ошибка загрузки данных'
    loading.value = false
  }
}

// Функция для автоматического обновления
const autoRefresh = async () => {
  try {
    // Определяем, работаем ли мы локально или на продакшене
    const isLocal = window.location.hostname.includes('localhost') || 
                   window.location.hostname.includes('127.0.0.1') ||
                   window.location.hostname.includes('0.0.0.0')
    
    if (isLocal) {
      // Локально используем API
      try {
        const response = await $fetch('/api/companies-list', {
          query: { _t: Date.now() } // Добавляем timestamp для предотвращения кеширования
        })
        if (response.success) {
          const approvedCompanies = filterApprovedCompanies(response.companies)
          const sortedCompanies = approvedCompanies.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp)
          })
          companies.value = sortedCompanies
          emit('companies-count-updated', companies.value.length)
        }
      } catch (apiError) {
        console.error('API Error in auto refresh:', apiError)
        // Не показываем ошибку при автоматическом обновлении
      }
    } else {
      // На продакшене используем JSONP подход
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxUuh8iEc5YE8k2q5e36DE66OpYPetpEOA0YdpQm0QwRXqqEcBDPcU5xP0RZI71R-bsbA/exec'
      const callbackName = 'callback_approved_auto_' + Date.now()
      
      window[callbackName] = (data) => {
        if (data && data.success) {
          // Используем статусы как есть из таблицы
          const approvedCompanies = filterApprovedCompanies(data.companies)
          const sortedCompanies = approvedCompanies.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp)
          })
          companies.value = sortedCompanies
          emit('companies-count-updated', companies.value.length)
        }
        delete window[callbackName]
        document.head.removeChild(script)
      }
      
      const script = document.createElement('script')
      script.src = `${GOOGLE_SCRIPT_URL}?action=getCompanies&callback=${callbackName}&_t=${Date.now()}`
      document.head.appendChild(script)
    }
  } catch (err) {
    console.error('Error in auto refresh:', err)
  }
}

// Функция для обновления списка (вызывается извне)
const refresh = (newCompanyData = null) => {
  if (newCompanyData) {
    newlyAddedCompany.value = newCompanyData.companyName + '_' + newCompanyData.timestamp
  }
  fetchCompanies()
}

// Экспортируем функции для внешнего использования
defineExpose({ refresh, fetchCompanies })

// Определяем события
const emit = defineEmits(['companies-count-updated'])

// Автоматическое обновление каждые 30 секунд
onMounted(() => {
  fetchCompanies()
  autoRefreshInterval.value = setInterval(autoRefresh, 30000)
})

// Очистка интервала при размонтировании
onUnmounted(() => {
  if (autoRefreshInterval.value) {
    clearInterval(autoRefreshInterval.value)
  }
})

// Следим за изменениями newlyAddedCompany
watch(newlyAddedCompany, (newVal) => {
  if (newVal) {
    // Убираем подсветку через 5 секунд
    setTimeout(() => {
      newlyAddedCompany.value = null
    }, 5000)
  }
})
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
