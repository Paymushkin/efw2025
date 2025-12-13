import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const FAQ_DATA = [
  {
    id: "faq-1",
    question: "Entry. Are visitor passes free? How do I get an invitation?",
    answer: "Yes, admission is free, but entry is by invitation only. Invitations can be requested via the VISIT button on our website. Our priority is to welcome buyers (Buyers consist of those purchasing for retail stores as well as for personal use) and fashion/personal stylists, followed by influencers and media representatives. We also invite VIP consumers interested in exclusive designer collections.",
    order: 1
  },
  {
    id: "faq-2",
    question: "Audience. What's the audience profile? How many invites are out?",
    answer: "As of October 15, 2025, there are 928 registrations for the event. For November 8 and 9, we expect 500+ daily attendees. The audience is diverse, with a majority from beauty, fashion, and creative industries\u2014including influencers (32.8%), fashion stylists (25.6%), bloggers (19.6%), media representatives (16.4%), buyers (37.7%), and others (7.7%). Participants range from industry professionals to fashion-conscious individuals across the Middle East, CIS, Eastern Europe, and UAE.",
    order: 2
  },
  {
    id: "faq-3",
    question: "Market. What is a popup market / popup corner / spot? When does it take place?",
    answer: "The popup market is a special daytime event held after the main fashion shows (November 10\u201311, Monday and Tuesday). It features 40 designer collections presented on the runway during the show days, which can be explored, tried on, and purchased. In addition, there are 60 showcase spots for beauty service providers\u2014including nails, hair, skincare, cosmetology, fitness, wellness, clinics, dental studios, salons, and more.",
    order: 3
  },
  {
    id: "faq-4",
    question: "Beauty Services. What are some example brands in the business showcase corner?",
    answer: "Over 30 brands are confirmed \u2014 including designers from the Middle East, CIS, Eastern Europe, and local UAE talents. We also host a wide range of beauty service providers: clinics, plastic surgery, botox, fitness, cosmetology, nails, lashes, brows, hair, and styling.",
    order: 4
  },
  {
    id: "faq-5",
    question: "Dates. 8-9 November: Runways vs 10-11 November: Pop-up & Beauty Market",
    answer: "On November 8\u20139 we'll have the evening runway shows \u2014 so the audience will be much larger, but they'll be mainly focused on watching the shows continuously. There will be less time and space for visitors to stop by the pop-ups in the corridors. On November 10\u201311, however, the audience will have the entire day (10 AM \u2013 6 PM) to explore all the stands calmly \u2014 to touch the clothes, discover brands, and interact with designers and beauty services. So: 8\u20139 November: bigger audience, but you'll be competing for attention with the entertainment and runway program. 10\u201311 November: smaller but more attentive audience, fully dedicated to visiting the market. Also, on November 8\u20139 we'll feature only about 10\u201315 brands in the corridors to avoid blocking guest flow, while on November 10\u201311 we expect around 60 beauty services and 20\u201340 fashion corners in the main market area.",
    order: 5
  },
  {
    id: "faq-6",
    question: "Fakes Policy",
    answer: "We've identified fraudulent accounts and websites impersonating Emirates Fashion Week. These fake profiles attempt to mislead designers and the public by copying our name and visuals. Please note that our only official pages are @emirates_fashionweek on Instagram (black logo with blue verified badge) and our website www.emiratesfashionweeks.com. We never request payments via links or personal messages. If you see suspicious activity, report it immediately and verify any event information through our authentic channels. Your safety and trust matter \u2014 always follow and tag only our verified accounts for official updates and participation details.",
    order: 6
  },
  {
    id: "faq-7",
    question: "LeadGen. What is the AI matchmaking tool? How does it work?",
    answer: "The AI matchmaking tool is available on laptops at each exhibitor spots. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. Some visitors will approach the station directly, while others will be connected via chat for online introductions and follow-ups.",
    order: 7
  }
];
const _sfc_main = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "FaqSectionDynamic",
  __ssrInlineRender: true,
  props: {
    standalone: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: void 0
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const route = useRoute();
    ref(route.hash.slice(1));
    const faqItems = ref([]);
    const loading = ref(false);
    const error = ref("");
    const isClient = ref(false);
    const sectionRef = ref(null);
    const staticFaqItems = FAQ_DATA;
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
              error.value = response.error || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445";
            }
          } catch (apiError) {
            console.error("API error:", apiError);
            faqItems.value = staticFaqItems;
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
            faqItems.value = staticFaqItems;
          }
        }
      } catch (err) {
        console.error("Error fetching FAQ:", err);
        error.value = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445";
        faqItems.value = staticFaqItems;
      } finally {
        loading.value = false;
      }
    };
    const displayedItems = computed(() => {
      if (!isClient.value) {
        return staticFaqItems;
      }
      return faqItems.value.length > 0 ? faqItems.value : staticFaqItems;
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
        ref_key: "sectionRef",
        ref: sectionRef,
        id: props.id,
        class: [
          "container mx-auto px-4",
          { "py-20 md:py-[100px]": !__props.standalone },
          { "py-[60px] md:py-[120px]": __props.standalone }
        ]
      }, _attrs))} data-v-7c68ed91><h2 class="text-xl md:text-3xl xl:text-4xl mb-8 md:mb-12" data-v-7c68ed91>`);
      if (__props.standalone) {
        _push(`<a href="#faq" class="hover:opacity-80 transition-opacity" data-v-7c68ed91>Frequently Asked Questions</a>`);
      } else {
        _push(`<a href="#faq" class="hover:opacity-80 transition-opacity" data-v-7c68ed91>FREQUENTLY ASKED QUESTIONS</a>`);
      }
      _push(`</h2>`);
      if (loading.value) {
        _push(`<div class="flex justify-center items-center py-8" data-v-7c68ed91><div class="text-gray-500" data-v-7c68ed91>Loading Frequently Asked Questions...</div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-8" data-v-7c68ed91><div class="text-red-500 mb-4" data-v-7c68ed91>Error loading Frequently Asked Questions: ${ssrInterpolate(error.value)}</div><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" data-v-7c68ed91> Retry </button></div>`);
      } else {
        _push(`<div class="flex flex-col gap-4" data-v-7c68ed91><!--[-->`);
        ssrRenderList(displayedItems.value, (item) => {
          _push(`<div${ssrRenderAttr("id", item.id)} data-v-7c68ed91><div class="border border-black cursor-pointer" data-v-7c68ed91><div class="${ssrRenderClass([{ "border-b border-black": openPanels.value[item.id] }, "w-full p-4 md:p-6 flex justify-between items-start hover:bg-gray-50"])}" data-v-7c68ed91><span class="text-base md:text-xl xl:text-2xl pr-8 text-left" data-v-7c68ed91>${ssrInterpolate(item.question)}</span><span class="${ssrRenderClass([{ "rotate-45": openPanels.value[item.id] }, "text-2xl transform transition-transform duration-300 flex-shrink-0"])}" data-v-7c68ed91>+</span></div><div style="${ssrRenderStyle(openPanels.value[item.id] ? null : { display: "none" })}" class="p-4 md:p-6 text-sm md:text-base xl:text-lg text-black-70 border-t border-black origin-top" data-v-7c68ed91>${ssrInterpolate(item.answer)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqSectionDynamic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqSectionDynamic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c68ed91"]]);

export { FaqSectionDynamic as F };
//# sourceMappingURL=FaqSectionDynamic-Bs1eY5W4.mjs.map
