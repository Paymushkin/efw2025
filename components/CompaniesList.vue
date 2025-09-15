<template>
  <div class="companies-list">
    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
    </div>
    
    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-600">Ошибка загрузки: {{ error }}</p>
    </div>
    
    <div v-else-if="companies.length === 0" class="text-center py-8">
      <p class="text-gray-600">Пока нет зарегистрированных компаний</p>
    </div>
    
    <div v-else class="space-y-3">
      <h3 class="text-lg font-semibold mb-4">WAITLIST APPLICATIONS SUBMITTED ({{ companies.length }})</h3>
      <div class="space-y-3 pr-2">
        <div 
          v-for="(company, index) in companies" 
          :key="index"
          :class="[
            'flex items-center justify-between p-3 rounded-lg border transition-all duration-300',
            isNewCompany(company) 
              ? 'bg-green-50 border-green-200 shadow-md' 
              : 'bg-gray-50 border-gray-200'
          ]"
        >
          <div class="flex items-center gap-3 flex-1">
            <div class="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
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
                <span class="px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full">
                  WAITLIST
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
    // Если только одно слово - показываем первые 2 и последние 3
    const word = words[0]
    if (word.length < 5) {
      return word.substring(0, 2) + '*'.repeat(word.length - 2)
    } else {
      return word.substring(0, 2) + '*'.repeat(word.length - 5) + word.substring(word.length - 3)
    }
  } else {
    // Если несколько слов
    const maskedWords = words.map((word, index) => {
      if (index === 0) {
        // Первое слово - только первые 2 буквы
        return word.substring(0, 2) + '*'.repeat(word.length - 2)
      } else if (index === words.length - 1) {
        // Последнее слово - показываем только если ровно 3 буквы
        if (word.length === 3) {
          return word
        } else {
          return '*'.repeat(word.length)
        }
      } else {
        // Средние слова - полностью скрыты
        return '*'.repeat(word.length)
      }
    })
    
    return maskedWords.join(' ')
  }
}

// Функция для форматирования даты
const formatDate = (timestamp) => {
  if (!timestamp) return ''
  
  try {
    const date = new Date(timestamp)
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch (e) {
    return timestamp
  }
}

// Функция для определения новой компании
const isNewCompany = (company) => {
  if (!newlyAddedCompany.value) return false
  const companyId = company.companyName + '_' + company.timestamp
  return companyId === newlyAddedCompany.value
}

// Функция для фильтрации waitlist компаний
const filterWaitlistCompanies = (companiesList) => {
  return companiesList.filter(company => {
    // Показываем компании без статуса или со статусом waitlist
    return !company.status || 
           company.status === 'waitlist' || 
           company.status === 'Waitlist' ||
           company.status === ''
  })
}

// Функция для загрузки списка компаний
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
        const response = await $fetch('/api/companies-list')
        if (response.success) {
          // Фильтруем только waitlist компании
          const waitlistCompanies = filterWaitlistCompanies(response.companies)
          
          // Сортируем компании по дате (новые сверху)
          const sortedCompanies = waitlistCompanies.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp)
          })
          
          // Если есть подсвеченная компания, сохраняем её позицию
          if (newlyAddedCompany.value) {
            // Находим подсвеченную компанию в текущем списке
            const highlightedIndex = companies.value.findIndex(company => {
              const companyId = company.companyName + '_' + company.timestamp
              return companyId === newlyAddedCompany.value
            })
            
            if (highlightedIndex !== -1) {
              // Удаляем подсвеченную компанию из текущего списка
              const highlightedCompany = companies.value.splice(highlightedIndex, 1)[0]
              // Добавляем её в начало обновленного списка
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
      // На продакшене используем JSONP подход
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbWqpE_TR7HJoClggVpGBYdUGcssKxWOpbFAa7nZGQp69jrE0hUxLiiCx5nY8T_x70jg/exec'
      
      // Создаем callback функцию
      const callbackName = 'callback_companies_' + Date.now()
      window[callbackName] = (data) => {
        if (data && data.success) {
          // Фильтруем только waitlist компании
          const waitlistCompanies = filterWaitlistCompanies(data.companies)
          
          // Сортируем компании по дате (новые сверху)
          const sortedCompanies = waitlistCompanies.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp)
          })
          
          // Если есть подсвеченная компания, сохраняем её позицию
          if (newlyAddedCompany.value) {
            // Находим подсвеченную компанию в текущем списке
            const highlightedIndex = companies.value.findIndex(company => {
              const companyId = company.companyName + '_' + company.timestamp
              return companyId === newlyAddedCompany.value
            })
            
            if (highlightedIndex !== -1) {
              // Удаляем подсвеченную компанию из текущего списка
              const highlightedCompany = companies.value.splice(highlightedIndex, 1)[0]
              // Добавляем её в начало обновленного списка
              sortedCompanies.unshift(highlightedCompany)
            }
          }
          
          companies.value = sortedCompanies
          emit('companies-count-updated', companies.value.length)
        } else {
          error.value = data.error || 'Ошибка загрузки данных'
        }
        loading.value = false
        delete window[callbackName]
        document.head.removeChild(script)
      }
      
      // Создаем script тег для JSONP
      const script = document.createElement('script')
      script.src = `${GOOGLE_SCRIPT_URL}?action=getCompanies&callback=${callbackName}`
      document.head.appendChild(script)
    }
  } catch (err) {
    console.error('Error fetching companies:', err)
    error.value = 'Ошибка загрузки данных'
    loading.value = false
  }
}

// Функция для автоматического обновления (без подсветки и лоадера)
const autoRefresh = async () => {
  try {
    // Используем только JSONP подход (работает везде)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbWqpE_TR7HJoClggVpGBYdUGcssKxWOpbFAa7nZGQp69jrE0hUxLiiCx5nY8T_x70jg/exec'
    
    // Создаем callback функцию
    const callbackName = 'callback_companies_auto_' + Date.now()
    window[callbackName] = (data) => {
      if (data && data.success) {
        // Фильтруем только waitlist компании
        const waitlistCompanies = filterWaitlistCompanies(data.companies)
        
        // Сортируем компании по дате (новые сверху)
        const sortedCompanies = waitlistCompanies.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp)
        })
        
        // Если есть подсвеченная компания, сохраняем её позицию
        if (newlyAddedCompany.value) {
          // Находим подсвеченную компанию в текущем списке
          const highlightedIndex = companies.value.findIndex(company => {
            const companyId = company.companyName + '_' + company.timestamp
            return companyId === newlyAddedCompany.value
          })
          
          if (highlightedIndex !== -1) {
            // Удаляем подсвеченную компанию из текущего списка
            const highlightedCompany = companies.value.splice(highlightedIndex, 1)[0]
            // Добавляем её в начало обновленного списка
            sortedCompanies.unshift(highlightedCompany)
          }
        }
        
        companies.value = sortedCompanies
        emit('companies-count-updated', companies.value.length)
      }
      delete window[callbackName]
      document.head.removeChild(script)
    }
    
    // Создаем script тег для JSONP
    const script = document.createElement('script')
    script.src = `${GOOGLE_SCRIPT_URL}?action=getCompanies&callback=${callbackName}`
    document.head.appendChild(script)
  } catch (error) {
    console.error('Error during auto refresh:', error)
    // Не показываем ошибку пользователю при автоматическом обновлении
  }
}

// Функция для обновления списка с подсветкой новой компании
const refresh = async (newCompanyData = null) => {
  // Если передана информация о новой компании, добавляем её сразу в начало списка
  if (newCompanyData) {
    const companyId = newCompanyData.companyName + '_' + newCompanyData.timestamp
    newlyAddedCompany.value = companyId
    
    // Добавляем новую компанию в начало списка
    companies.value.unshift(newCompanyData)
    
    // Подсветка остается до перезагрузки страницы
  }
  
  // Затем обновляем весь список из Google Sheets
  await fetchCompanies()
}

// Экспортируем функции для внешнего использования
defineExpose({
  refresh,
  fetchCompanies
})

// Эмитим событие при изменении количества компаний
const emit = defineEmits(['companies-count-updated'])

// Следим за изменением количества компаний
watch(companies, (newCompanies) => {
  emit('companies-count-updated', newCompanies.length)
}, { immediate: true })

onMounted(() => {
  fetchCompanies()
  
  // Запускаем автоматическое обновление каждую минуту
  autoRefreshInterval.value = setInterval(() => {
    autoRefresh()
  }, 60000) // 60 секунд = 1 минута
})

onUnmounted(() => {
  // Очищаем интервал при размонтировании компонента
  if (autoRefreshInterval.value) {
    clearInterval(autoRefreshInterval.value)
  }
})
</script>

<style scoped>
.companies-list {
  max-width: 100%;
}

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

/* Кастомный скроллбар */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Для Firefox */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}
</style>
