import { readonly, ref } from "vue";
const companiesCount = ref(0);
const trialWaitlistCount = ref(0);
const useCompaniesCount = () => {
  const updateCompaniesCount = (count) => {
    companiesCount.value = count;
  };
  const updateTrialWaitlistCount = (count) => {
    trialWaitlistCount.value = count;
  };
  const getCompaniesCount = () => {
    return companiesCount.value;
  };
  const getTrialWaitlistCount = () => {
    return trialWaitlistCount.value;
  };
  return {
    companiesCount: readonly(companiesCount),
    trialWaitlistCount: readonly(trialWaitlistCount),
    updateCompaniesCount,
    updateTrialWaitlistCount,
    getCompaniesCount,
    getTrialWaitlistCount
  };
};
export {
  useCompaniesCount as u
};
//# sourceMappingURL=useCompaniesCount-BOY74o7o.js.map
