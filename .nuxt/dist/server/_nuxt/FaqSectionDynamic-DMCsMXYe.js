import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "FaqSectionDynamic",
  __ssrInlineRender: true,
  props: {
    standalone: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    const route = useRoute();
    ref(route.hash.slice(1));
    const faqItems = ref([]);
    const loading = ref(false);
    const error = ref("");
    const fallbackFaqItems = [
      {
        id: "ai-matchmaking",
        question: "What is the AI matchmaking tool? How does it work?",
        answer: "The AI matchmaking tool is available on laptops at each exhibitor station. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. Some visitors will approach the station directly, while others will be connected via chat for online introductions and follow-ups."
      },
      {
        id: "visitor-passes",
        question: "Are visitor passes free? How many invites are out? What's the audience profile?",
        answer: "Visitor entry is free. We usually welcome 300–700 guests, depending on the show. For April 15, we expect 300–500 attendees throughout the day. Our audience is diverse and international, mainly beauty- and fashion-conscious individuals from mid- to high-income backgrounds. We do not track nationality at registration."
      },
      {
        id: "buyers",
        question: "Who are the 'Buyers'? What's their ratio to media, influencers, stylists, bloggers?",
        answer: "Buyers include individuals purchasing for themselves and for retail stores. We don't publish an exact ratio, but the crowd includes a mix of media, influencers, stylists, bloggers, and direct buyers."
      },
      {
        id: "no-showcase",
        question: "What if I don't want a showcase station but still want to engage buyers?",
        answer: "You can attend for free, observe how other beauty service providers present their services, and interact with the audience. Many providers offer special promotions and discounts to visitors."
      },
      {
        id: "example-brands",
        question: "What are some example brands in the business showcase corner?",
        answer: "Over 30 brands are confirmed — including designers from the Middle East, CIS, Eastern Europe, and local UAE talents. We also host a wide range of beauty service providers: clinics, plastic surgery, botox, fitness, cosmetology, nails, lashes, brows, hair, and styling."
      }
    ];
    const fetchFAQ = async () => {
      try {
        loading.value = true;
        error.value = "";
        const isLocal = (void 0).location.hostname.includes("localhost") || (void 0).location.hostname.includes("127.0.0.1") || (void 0).location.hostname.includes("0.0.0.0");
        if (isLocal) {
          try {
            const response = await $fetch("/api/faq", {
              query: { _t: Date.now() }
              // Добавляем timestamp для предотвращения кеширования
            });
            if (response.success) {
              faqItems.value = response.faq || [];
            } else {
              error.value = response.error || "Ошибка загрузки данных";
            }
          } catch (apiError) {
            console.error("API error:", apiError);
            faqItems.value = fallbackFaqItems;
          }
        } else {
          try {
            const SPREADSHEET_ID = "1z3JLJVzDADNCa6oSq3R701xLB8K5yyuCFlPZpSMXa1s";
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
            const faqItemsFromCSV = rows.map((row, index) => ({
              id: `faq-${index + 1}`,
              question: row[0] || "",
              answer: row[1] || "",
              order: row[2] || index + 1
            })).filter((item) => item.question && item.answer);
            faqItems.value = faqItemsFromCSV;
            console.log("FAQ items loaded from Google Sheets:", faqItemsFromCSV.length);
          } catch (csvError) {
            console.error("CSV fetch error:", csvError);
            faqItems.value = fallbackFaqItems;
          }
        }
      } catch (err) {
        console.error("Error fetching FAQ:", err);
        error.value = "Ошибка загрузки данных";
        faqItems.value = fallbackFaqItems;
      } finally {
        loading.value = false;
      }
    };
    const displayedItems = computed(() => {
      return faqItems.value;
    });
    const openPanels = ref({});
    const handleRefresh = () => {
      fetchFAQ();
    };
    __expose({
      refresh: handleRefresh
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [
          "container mx-auto px-4",
          { "py-20 md:py-[100px]": !__props.standalone },
          { "py-[60px] md:py-[120px]": __props.standalone }
        ]
      }, _attrs))} data-v-c321f93c><h2 data-nosnippet class="text-xl md:text-3xl xl:text-4xl mb-8 md:mb-12" data-v-c321f93c>`);
      if (__props.standalone) {
        _push(`<a href="#faq" class="hover:opacity-80 transition-opacity" data-v-c321f93c>Frequently Asked Questions</a>`);
      } else {
        _push(`<a href="#faq" class="hover:opacity-80 transition-opacity" data-v-c321f93c>FREQUENTLY ASKED QUESTIONS</a>`);
      }
      _push(`</h2>`);
      if (loading.value) {
        _push(`<div class="flex justify-center items-center py-8" data-v-c321f93c><div class="text-gray-500" data-v-c321f93c>Loading Frequently Asked Questions...</div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-8" data-v-c321f93c><div class="text-red-500 mb-4" data-v-c321f93c>Error loading Frequently Asked Questions: ${ssrInterpolate(error.value)}</div><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" data-v-c321f93c> Retry </button></div>`);
      } else {
        _push(`<div class="flex flex-col gap-4" data-v-c321f93c><!--[-->`);
        ssrRenderList(displayedItems.value, (item) => {
          _push(`<div${ssrRenderAttr("id", item.id)} data-v-c321f93c><div class="border border-black cursor-pointer" data-v-c321f93c><div class="${ssrRenderClass([{ "border-b border-black": openPanels.value[item.id] }, "w-full p-4 md:p-6 flex justify-between items-start hover:bg-gray-50"])}" data-v-c321f93c><span class="text-base md:text-xl xl:text-2xl pr-8 text-left" data-v-c321f93c>${ssrInterpolate(item.question)}</span><span class="${ssrRenderClass([{ "rotate-45": openPanels.value[item.id] }, "text-2xl transform transition-transform duration-300 flex-shrink-0"])}" data-v-c321f93c>+</span></div><div style="${ssrRenderStyle(openPanels.value[item.id] ? null : { display: "none" })}" class="p-4 md:p-6 text-sm md:text-base xl:text-lg text-black-70 border-t border-black origin-top" data-v-c321f93c>${ssrInterpolate(item.answer)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqSectionDynamic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqSectionDynamic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c321f93c"]]);
export {
  FaqSectionDynamic as F
};
//# sourceMappingURL=FaqSectionDynamic-DMCsMXYe.js.map
