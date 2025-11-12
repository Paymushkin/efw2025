import { reactive, ref, computed, mergeProps, useSSRContext, watch } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useCompaniesCount } from "./useCompaniesCount-BOY74o7o.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
const _sfc_main$1 = {
  __name: "WaitlistForm",
  __ssrInlineRender: true,
  props: {
    isOpen: Boolean
  },
  emits: ["close", "success"],
  setup(__props, { emit: __emit }) {
    const form = reactive({
      companyName: "",
      industry: "",
      customIndustry: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      agreement1: false,
      agreement2: false
    });
    const emailError = ref("");
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    ref(false);
    const successMessage = ref("");
    computed(() => {
      return false;
    });
    computed(() => {
      return false;
    });
    const maskedCompanyName = computed(() => {
      if (!form.companyName.trim()) {
        return "B**** ***n LLC";
      }
      const name = form.companyName.trim();
      const words = name.split(" ");
      return words.map((word) => {
        if (word.length <= 2) {
          return word;
        }
        const firstChar = word[0];
        const lastChar = word[word.length - 1];
        const middleStars = "*".repeat(word.length - 2);
        return firstChar + middleStars + lastChar;
      }).join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" }, _attrs))} data-v-662ad707><div class="bg-white p-6 rounded-lg max-w-md w-full mx-4" data-v-662ad707><div class="flex justify-between items-center mb-6" data-v-662ad707><h3 class="text-xl font-semibold" data-v-662ad707>Join Waitlist</h3><button class="text-gray-500 hover:text-gray-700 text-2xl leading-none" data-v-662ad707> × </button></div>`);
        if (showSuccess.value) {
          _push(`<div class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" data-v-662ad707><p data-v-662ad707>${ssrInterpolate(successMessage.value)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showError.value) {
          _push(`<div class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" data-v-662ad707><p data-v-662ad707>An error occurred while adding you to the waitlist. Please try again later.</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!showSuccess.value) {
          _push(`<form class="space-y-4" data-v-662ad707><div data-v-662ad707><label class="block text-sm font-medium text-gray-700 mb-1" data-v-662ad707>Company Name <span class="text-red-500" data-v-662ad707>*</span></label><input${ssrRenderAttr("value", form.companyName)} type="text" required placeholder="Beauty Salon LLC" class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400" data-v-662ad707><p class="mt-1 text-xs text-gray-500" data-v-662ad707> Your application will be displayed in the waitlist as ${ssrInterpolate(maskedCompanyName.value)} / ${ssrInterpolate(form.industry || "Sector")}</p></div><div data-v-662ad707><label class="block text-sm font-medium text-gray-700 mb-1" data-v-662ad707>Industry / Sector <span class="text-red-500" data-v-662ad707>*</span></label><select class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" data-v-662ad707><option value="" disabled style="${ssrRenderStyle({ "color": "#9ca3af" })}" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "") : ssrLooseEqual(form.industry, "")) ? " selected" : ""}>Select your industry</option><option value="Medical &amp; Aesthetic Clinics" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Medical & Aesthetic Clinics") : ssrLooseEqual(form.industry, "Medical & Aesthetic Clinics")) ? " selected" : ""}>Medical &amp; Aesthetic Clinics</option><option value="Health &amp; Wellness Tourism / Nutrition" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Health & Wellness Tourism / Nutrition") : ssrLooseEqual(form.industry, "Health & Wellness Tourism / Nutrition")) ? " selected" : ""}>Health &amp; Wellness Tourism / Nutrition</option><option value="Beauty &amp; Cosmetics Brands" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Beauty & Cosmetics Brands") : ssrLooseEqual(form.industry, "Beauty & Cosmetics Brands")) ? " selected" : ""}>Beauty &amp; Cosmetics Brands</option><option value="Makeup Artists / Nails / Brows / Lashes" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Makeup Artists / Nails / Brows / Lashes") : ssrLooseEqual(form.industry, "Makeup Artists / Nails / Brows / Lashes")) ? " selected" : ""}>Makeup Artists / Nails / Brows / Lashes</option><option value="Salons, Spas &amp; Massage Studios" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Salons, Spas & Massage Studios") : ssrLooseEqual(form.industry, "Salons, Spas & Massage Studios")) ? " selected" : ""}>Salons, Spas &amp; Massage Studios</option><option value="Barbershops &amp; Grooming Services" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Barbershops & Grooming Services") : ssrLooseEqual(form.industry, "Barbershops & Grooming Services")) ? " selected" : ""}>Barbershops &amp; Grooming Services</option><option value="Gyms &amp; Fitness / Wellness Studios" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Gyms & Fitness / Wellness Studios") : ssrLooseEqual(form.industry, "Gyms & Fitness / Wellness Studios")) ? " selected" : ""}>Gyms &amp; Fitness / Wellness Studios</option><option value="Bridal &amp; Wedding Beauty Services" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Bridal & Wedding Beauty Services") : ssrLooseEqual(form.industry, "Bridal & Wedding Beauty Services")) ? " selected" : ""}>Bridal &amp; Wedding Beauty Services</option><option value="Makeup &amp; Cosmetology Schools / Courses" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Makeup & Cosmetology Schools / Courses") : ssrLooseEqual(form.industry, "Makeup & Cosmetology Schools / Courses")) ? " selected" : ""}>Makeup &amp; Cosmetology Schools / Courses</option><option value="Beauty Tech (CRM, Booking, Payments)" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Beauty Tech (CRM, Booking, Payments)") : ssrLooseEqual(form.industry, "Beauty Tech (CRM, Booking, Payments)")) ? " selected" : ""}>Beauty Tech (CRM, Booking, Payments)</option><option value="Salon &amp; Clinic Equipment Suppliers" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "Salon & Clinic Equipment Suppliers") : ssrLooseEqual(form.industry, "Salon & Clinic Equipment Suppliers")) ? " selected" : ""}>Salon &amp; Clinic Equipment Suppliers</option><option value="other" data-v-662ad707${ssrIncludeBooleanAttr(Array.isArray(form.industry) ? ssrLooseContain(form.industry, "other") : ssrLooseEqual(form.industry, "other")) ? " selected" : ""}>Other</option></select></div>`);
          if (form.industry === "other") {
            _push(`<div data-v-662ad707><label class="block text-sm font-medium text-gray-700 mb-1" data-v-662ad707>Specify Industry</label><input${ssrRenderAttr("value", form.customIndustry)} type="text" required placeholder="Specify your industry" class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400" data-v-662ad707></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-662ad707><label class="block text-sm font-medium text-gray-700 mb-1" data-v-662ad707>Email <span class="text-red-500" data-v-662ad707>*</span></label><input${ssrRenderAttr("value", form.email)} type="email" placeholder="mail@company.com" class="${ssrRenderClass([
            "w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400",
            emailError.value ? "border-red-500" : "border-gray-300"
          ])}" data-v-662ad707>`);
          if (emailError.value) {
            _push(`<p class="mt-1 text-sm text-red-500" data-v-662ad707>${ssrInterpolate(emailError.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div data-v-662ad707><label class="block text-sm font-medium text-gray-700 mb-1" data-v-662ad707>Whatsapp/Phone</label><input${ssrRenderAttr("value", form.phone)} type="tel" placeholder="+971000000000" class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400" data-v-662ad707></div><div data-v-662ad707><label class="block text-sm font-medium text-gray-700 mb-1" data-v-662ad707>Referral Source &amp; Comments to Organizers</label><textarea rows="3" class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400" placeholder="How did you hear about us? Any additional comments..." data-v-662ad707>${ssrInterpolate(form.message)}</textarea></div><div class="space-y-3" data-v-662ad707><label class="flex items-start gap-3 cursor-pointer" data-v-662ad707><input${ssrIncludeBooleanAttr(Array.isArray(form.agreement1) ? ssrLooseContain(form.agreement1, null) : form.agreement1) ? " checked" : ""} type="checkbox" required class="mt-1 w-4 h-4 text-black bg-black border-black rounded focus:ring-black focus:ring-2" data-v-662ad707><span class="text-sm text-gray-700" data-v-662ad707><span class="text-red-500" data-v-662ad707>*</span> I understand that trial spots are limited and subsidized. Placement on the waitlist does not guarantee participation, and allocation will depend on availability. </span></label><label class="flex items-start gap-3 cursor-pointer" data-v-662ad707><input${ssrIncludeBooleanAttr(Array.isArray(form.agreement2) ? ssrLooseContain(form.agreement2, null) : form.agreement2) ? " checked" : ""} type="checkbox" required class="mt-1 w-4 h-4 text-black bg-black border-black rounded focus:ring-black focus:ring-2" data-v-662ad707><span class="text-sm text-gray-700" data-v-662ad707><span class="text-red-500" data-v-662ad707>*</span> I agree that the EFW team may use my contact details to notify me about updates and opportunities. </span></label></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value || !form.companyName.trim() || !form.industry || !form.agreement1 || !form.agreement2) ? " disabled" : ""} class="w-full bg-black text-white py-2 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-400" data-v-662ad707>${ssrInterpolate(isSubmitting.value ? "Adding to Waitlist..." : "Join")}</button></form>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WaitlistForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WaitlistForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-662ad707"]]);
const _sfc_main = {
  __name: "CompaniesList",
  __ssrInlineRender: true,
  emits: ["companies-count-updated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const companies = ref([]);
    const loading = ref(true);
    const error = ref("");
    const newlyAddedCompany = ref(null);
    ref(null);
    const { updateCompaniesCount } = useCompaniesCount();
    const maskCompanyName = (name) => {
      if (!name || name.length <= 2) return name;
      const words = name.split(" ");
      if (words.length === 1) {
        const word = words[0];
        if (word.length < 5) {
          return word.substring(0, 2) + "*".repeat(word.length - 2);
        } else {
          return word.substring(0, 2) + "*".repeat(word.length - 5) + word.substring(word.length - 3);
        }
      } else {
        const maskedWords = words.map((word, index) => {
          if (index === 0) {
            return word.substring(0, 2) + "*".repeat(word.length - 2);
          } else if (index === words.length - 1) {
            if (word.length === 3) {
              return word;
            } else {
              return "*".repeat(word.length);
            }
          } else {
            return "*".repeat(word.length);
          }
        });
        return maskedWords.join(" ");
      }
    };
    const isNewCompany = (company) => {
      if (!newlyAddedCompany.value) return false;
      const companyId = company.companyName + "_" + company.timestamp;
      return companyId === newlyAddedCompany.value;
    };
    const getStatusLabelStyle = (status) => {
      const normalizedStatus = (status || "WAITLIST").toUpperCase();
      switch (normalizedStatus) {
        case "GARANTEED":
        case "GUARANTEED":
          return {
            class: "px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full",
            text: "GARANTEED"
          };
        case "RECOMMENDED":
        case "RECOMENDED":
        // Учитываем опечатку в данных
        case "RECOMМENDED":
          return {
            class: "px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full",
            text: "RECOMMENDED"
          };
        case "WAITLIST":
        default:
          return {
            class: "px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full",
            text: "WAITLIST"
          };
      }
    };
    const filterWaitlistCompanies = (companiesList) => {
      const filteredCompanies = companiesList.filter((company) => {
        return !company.status || company.status === "" || company.status === "WAITLIST" || company.status === "waitlist" || company.status === "GARANTEED" || company.status === "guaranteed" || company.status === "RECOMMENDED" || company.status === "recommended" || company.status === "RECOMENDED" || // Учитываем опечатку в данных
        company.status === "recomended" || company.status === "RECOMМENDED" || // Учитываем кириллическую М
        company.status === "recomмended";
      });
      return filteredCompanies;
    };
    const fetchCompanies = async () => {
      try {
        loading.value = true;
        error.value = "";
        const isLocal = (void 0).location.hostname.includes("localhost") || (void 0).location.hostname.includes("127.0.0.1") || (void 0).location.hostname.includes("0.0.0.0");
        if (isLocal) {
          try {
            const response = await $fetch("/api/companies-list", {
              query: { _t: Date.now() }
              // Добавляем timestamp для предотвращения кеширования
            });
            if (response.success) {
              const waitlistCompanies = filterWaitlistCompanies(response.companies);
              const sortedCompanies = waitlistCompanies.sort((a, b) => {
                return new Date(b.timestamp) - new Date(a.timestamp);
              });
              if (newlyAddedCompany.value) {
                const highlightedIndex = companies.value.findIndex((company) => {
                  const companyId = company.companyName + "_" + company.timestamp;
                  return companyId === newlyAddedCompany.value;
                });
                if (highlightedIndex !== -1) {
                  const highlightedCompany = companies.value.splice(highlightedIndex, 1)[0];
                  sortedCompanies.unshift(highlightedCompany);
                }
              }
              companies.value = sortedCompanies;
              emit("companies-count-updated", companies.value.length);
              updateCompaniesCount(companies.value.length);
            } else {
              error.value = response.error || "Ошибка загрузки данных";
            }
          } catch (apiError) {
            console.error("API Error:", apiError);
            companies.value = [];
            emit("companies-count-updated", 0);
            updateCompaniesCount(0);
            error.value = "Сервис временно недоступен";
          }
          loading.value = false;
        } else {
          try {
            const SPREADSHEET_ID = "1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM";
            const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
            const response = await fetch(CSV_URL);
            if (!response.ok) {
              throw new Error(`CSV export error: ${response.statusText}`);
            }
            const csvText = await response.text();
            const lines = csvText.split("\n");
            const rows = lines.filter((line) => line.trim()).map((line) => {
              const values = [];
              let current = "";
              let inQuotes = false;
              for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '"') {
                  inQuotes = !inQuotes;
                } else if (char === "," && !inQuotes) {
                  values.push(current.trim());
                  current = "";
                } else {
                  current += char;
                }
              }
              values.push(current.trim());
              return values;
            });
            const companiesFromCSV = rows.map((row, index) => ({
              timestamp: row[0] || "",
              companyName: row[1] || "",
              industry: row[2] || "",
              name: row[3] || "",
              email: row[4] || "",
              phone: row[5] || "",
              message: row[6] || "",
              agreement1: row[7] || "",
              agreement2: row[8] || "",
              ipAddress: row[9] || "",
              userAgent: row[10] || "",
              status: row[11] || "WAITLIST"
            })).filter((company) => company.companyName);
            const waitlistCompanies = filterWaitlistCompanies(companiesFromCSV);
            const sortedCompanies = waitlistCompanies.sort((a, b) => {
              return new Date(b.timestamp) - new Date(a.timestamp);
            });
            if (newlyAddedCompany.value) {
              const highlightedIndex = companies.value.findIndex((company) => {
                const companyId = company.companyName + "_" + company.timestamp;
                return companyId === newlyAddedCompany.value;
              });
              if (highlightedIndex !== -1) {
                const highlightedCompany = companies.value.splice(highlightedIndex, 1)[0];
                sortedCompanies.unshift(highlightedCompany);
              }
            }
            companies.value = sortedCompanies;
            console.log("CompaniesList: Обновляем счетчик компаний:", companies.value.length);
            emit("companies-count-updated", companies.value.length);
            updateCompaniesCount(companies.value.length);
            console.log("Companies loaded from Google Sheets:", companiesFromCSV.length);
          } catch (csvError) {
            console.error("CSV fetch error:", csvError);
            const testCompanies = [
              {
                companyName: "Test Company 1",
                industry: "Fashion",
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                status: "waitlist"
              },
              {
                companyName: "Test Company 2",
                industry: "Beauty",
                timestamp: new Date(Date.now() - 864e5).toISOString(),
                status: "waitlist"
              }
            ];
            companies.value = testCompanies;
            emit("companies-count-updated", testCompanies.length);
            updateCompaniesCount(testCompanies.length);
          }
          loading.value = false;
        }
      } catch (err) {
        console.error("Error fetching companies:", err);
        error.value = "Ошибка загрузки данных";
        loading.value = false;
      }
    };
    const refresh = async (newCompanyData = null) => {
      if (newCompanyData) {
        const companyId = newCompanyData.companyName + "_" + newCompanyData.timestamp;
        newlyAddedCompany.value = companyId;
        companies.value.unshift(newCompanyData);
      }
      await fetchCompanies();
    };
    __expose({
      refresh,
      fetchCompanies
    });
    const emit = __emit;
    watch(companies, (newCompanies) => {
      emit("companies-count-updated", newCompanies.length);
      updateCompaniesCount(newCompanies.length);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "companies-list" }, _attrs))} data-v-d209f230>`);
      if (loading.value) {
        _push(`<div class="text-center py-8" data-v-d209f230><div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black" data-v-d209f230></div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-8" data-v-d209f230><p class="text-red-600" data-v-d209f230>Loading error: ${ssrInterpolate(error.value)}</p></div>`);
      } else if (companies.value.length === 0) {
        _push(`<div class="text-center py-8" data-v-d209f230><p class="text-gray-600" data-v-d209f230>No registered companies yet</p></div>`);
      } else {
        _push(`<div class="space-y-3" data-v-d209f230><h3 class="text-lg font-semibold mb-4" data-v-d209f230>COMPANIES APPLICATIONS (${ssrInterpolate(companies.value.length)})</h3><div class="space-y-3 pr-2" data-v-d209f230><!--[-->`);
        ssrRenderList(companies.value, (company, index) => {
          _push(`<div class="${ssrRenderClass([
            "flex items-center justify-between p-3 rounded-lg border transition-all duration-300",
            isNewCompany(company) ? "bg-green-50 border-green-200 shadow-md" : "bg-gray-50 border-gray-200"
          ])}" data-v-d209f230><div class="flex items-center gap-3 flex-1" data-v-d209f230><div class="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600" data-v-d209f230>${ssrInterpolate(index + 1)}</div><div class="flex-1" data-v-d209f230><div class="flex items-center gap-2" data-v-d209f230><div class="font-medium text-gray-900" data-v-d209f230>${ssrInterpolate(maskCompanyName(company.companyName))}${ssrInterpolate(company.industry ? " | " + company.industry : "")}</div>`);
          if (isNewCompany(company)) {
            _push(`<span class="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full" data-v-d209f230> NEW </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="${ssrRenderClass(getStatusLabelStyle(company.status).class)}" data-v-d209f230>${ssrInterpolate(getStatusLabelStyle(company.status).text)}</span></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompaniesList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CompaniesList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d209f230"]]);
const Image9 = "" + __buildAssetsURL("trial.DE43NbE_.webp");
const Image11 = "" + __buildAssetsURL("trial_compare.CSoTNs-R.webp");
export {
  CompaniesList as C,
  Image9 as I,
  WaitlistForm as W,
  Image11 as a
};
//# sourceMappingURL=trial_compare-B5oJUD3U.js.map
