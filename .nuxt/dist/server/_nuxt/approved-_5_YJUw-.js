import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { ref, watch, mergeProps, useSSRContext } from "vue";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$2 } from "./AppSeo-LOFxIM8N.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {
  __name: "ApprovedCompaniesList",
  __ssrInlineRender: true,
  emits: ["companies-count-updated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const companies = ref([]);
    const loading = ref(true);
    const error = ref("");
    const newlyAddedCompany = ref(null);
    ref(null);
    const maskCompanyName = (name) => {
      if (!name || name.length <= 2) return name;
      const words = name.split(" ");
      if (words.length === 1) {
        const word = words[0];
        if (word.length < 5) {
          const maskLength = Math.max(0, word.length - 2);
          return word.substring(0, 2) + "*".repeat(maskLength);
        } else {
          const maskLength = Math.max(0, word.length - 5);
          return word.substring(0, 2) + "*".repeat(maskLength) + word.substring(word.length - 3);
        }
      } else {
        const maskedWords = words.map((word, index) => {
          if (index === 0) {
            const maskLength = Math.max(0, word.length - 2);
            return word.substring(0, 2) + "*".repeat(maskLength);
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
      if (!company) return false;
      const companyId = company.companyName + "_" + company.timestamp;
      return companyId === newlyAddedCompany.value;
    };
    const filterApprovedCompanies = (companiesList) => {
      const approved = companiesList.filter((company) => {
        return company.status === "APPROVED" || company.status === "approved" || company.status === "Approved";
      });
      return approved;
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
              const approvedCompanies = filterApprovedCompanies(response.companies);
              const sortedCompanies = approvedCompanies.sort((a, b) => {
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
            } else {
              error.value = response.error || "Ошибка загрузки данных";
            }
          } catch (apiError) {
            console.error("API Error:", apiError);
            companies.value = [];
            emit("companies-count-updated", 0);
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
            const approvedCompanies = filterApprovedCompanies(companiesFromCSV);
            const sortedCompanies = approvedCompanies.sort((a, b) => {
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
            console.log("Approved companies loaded from Google Sheets:", approvedCompanies.length);
          } catch (csvError) {
            console.error("CSV fetch error:", csvError);
            error.value = "Ошибка загрузки данных";
          }
          loading.value = false;
        }
      } catch (err) {
        console.error("Error fetching approved companies:", err);
        error.value = "Ошибка загрузки данных";
        loading.value = false;
      }
    };
    const refresh = (newCompanyData = null) => {
      if (newCompanyData) {
        newlyAddedCompany.value = newCompanyData.companyName + "_" + newCompanyData.timestamp;
      }
      fetchCompanies();
    };
    __expose({ refresh, fetchCompanies });
    const emit = __emit;
    watch(newlyAddedCompany, (newVal) => {
      if (newVal) {
        setTimeout(() => {
          newlyAddedCompany.value = null;
        }, 5e3);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "approved-companies-list" }, _attrs))} data-v-24ef27cd>`);
      if (loading.value) {
        _push(`<div class="text-center py-8" data-v-24ef27cd><div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black" data-v-24ef27cd></div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-8" data-v-24ef27cd><p class="text-red-600" data-v-24ef27cd>Loading error: ${ssrInterpolate(error.value)}</p></div>`);
      } else if (companies.value.length === 0) {
        _push(`<div class="text-center py-8" data-v-24ef27cd><p class="text-gray-600" data-v-24ef27cd>No approved companies yet</p></div>`);
      } else {
        _push(`<div class="space-y-3" data-v-24ef27cd><h3 class="text-lg font-semibold mb-4" data-v-24ef27cd>APPROVED COMPANIES (${ssrInterpolate(companies.value.length)})</h3><div class="space-y-3 pr-2" data-v-24ef27cd><!--[-->`);
        ssrRenderList(companies.value, (company, index) => {
          _push(`<div class="${ssrRenderClass([
            "flex items-center justify-between p-3 rounded-lg border transition-all duration-300",
            isNewCompany(company) ? "bg-green-50 border-green-200 shadow-md" : "bg-blue-50 border-blue-200"
          ])}" data-v-24ef27cd><div class="flex items-center gap-3 flex-1" data-v-24ef27cd><div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-medium text-white" data-v-24ef27cd>${ssrInterpolate(index + 1)}</div><div class="flex-1" data-v-24ef27cd><div class="flex items-center gap-2" data-v-24ef27cd><div class="font-medium text-gray-900" data-v-24ef27cd>${ssrInterpolate(maskCompanyName(company.companyName))}${ssrInterpolate(company.industry ? " | " + company.industry : "")}</div>`);
          if (isNewCompany(company)) {
            _push(`<span class="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full" data-v-24ef27cd> NEW </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full" data-v-24ef27cd> APPROVED </span></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ApprovedCompaniesList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ApprovedCompaniesList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24ef27cd"]]);
const _sfc_main = {
  __name: "approved",
  __ssrInlineRender: true,
  setup(__props) {
    const approvedCompaniesListRef = ref(null);
    const approvedCount = ref(0);
    const updateApprovedCount = (count) => {
      approvedCount.value = count;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Approved Companies - Emirates Fashion Week Dubai 2025",
        description: "View the list of approved companies participating in Emirates Fashion Week Dubai 2025. See which beauty and design businesses have been selected.",
        keywords: "Approved companies, Emirates Fashion Week, Dubai Fashion Event, Beauty business, Design business, Selected companies"
      }, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8"><h1 class="text-xl md:text-4xl mb-[75px]">APPROVED COMPANIES</h1><div class="mb-8"><p class="text-sm mb-6"> Companies that have been approved to participate in Emirates Fashion Week Dubai 2025 </p></div><div class="mt-12">`);
      _push(ssrRenderComponent(ApprovedCompaniesList, {
        ref_key: "approvedCompaniesListRef",
        ref: approvedCompaniesListRef,
        onCompaniesCountUpdated: updateApprovedCount
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/approved.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=approved-_5_YJUw-.js.map
