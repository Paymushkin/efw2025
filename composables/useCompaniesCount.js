import { ref, readonly } from 'vue'

// Глобальное состояние для счетчика компаний
const companiesCount = ref(0)

export const useCompaniesCount = () => {
  const updateCompaniesCount = (count) => {
    companiesCount.value = count
  }

  const getCompaniesCount = () => {
    return companiesCount.value
  }

  return {
    companiesCount: readonly(companiesCount),
    updateCompaniesCount,
    getCompaniesCount
  }
}
