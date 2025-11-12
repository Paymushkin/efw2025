import { _ as _sfc_main$1 } from "./AppSeo-Bb_QAAbw.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-DpMGnK-K.js";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
const calendarId = "a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c@group.calendar.google.com";
const _sfc_main = {
  __name: "calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const showButton = ref(false);
    const getCalendarUrl = () => {
      const userAgent = (void 0).userAgent.toLowerCase();
      if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("mac")) {
        return `webcal://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`;
      }
      return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(calendarId)}`;
    };
    getCalendarUrl();
    useHead({
      title: "Emirates Fashion Week Calendar - Subscribe to Events",
      meta: [
        {
          name: "description",
          content: "Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025."
        },
        {
          name: "keywords",
          content: "Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025"
        },
        {
          property: "og:title",
          content: "Emirates Fashion Week Calendar - Subscribe to Events"
        },
        {
          property: "og:description",
          content: "Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025."
        },
        {
          property: "og:image",
          content: "https://emiratesfashionweeks.com/seo-poster.png"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSeo = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black flex items-center justify-center py-8 px-4" }, _attrs))} data-v-cc50a465>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Emirates Fashion Week Calendar - Subscribe to Events",
        description: "Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025.",
        keywords: "Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025"
      }, null, _parent));
      _push(`<div class="text-center max-w-md mx-auto" data-v-cc50a465><div class="mb-6 md:mb-8" data-v-cc50a465><div class="inline-block relative" data-v-cc50a465><div class="w-12 h-12 md:w-16 md:h-16 border-4 border-white rounded-lg flex items-center justify-center" data-v-cc50a465><div class="w-8 h-8 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center" data-v-cc50a465><div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" data-v-cc50a465></div></div></div></div></div><div class="text-white mb-6 md:mb-8" data-v-cc50a465><h1 class="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4" data-v-cc50a465> Emirates Fashion Week Calendar </h1><p class="text-gray-300 text-base md:text-lg mb-2" data-v-cc50a465> Stay updated with all fashion events and shows </p><p class="text-gray-400 text-sm" data-v-cc50a465> Subscribe to get notifications about upcoming events </p></div>`);
      if (showButton.value) {
        _push(`<div class="mb-6" data-v-cc50a465><button class="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base md:text-lg" data-v-cc50a465> Subscribe to Calendar </button></div>`);
      } else {
        _push(`<div class="mb-6" data-v-cc50a465><div class="text-white text-lg font-semibold" data-v-cc50a465> Opening calendar subscription... </div></div>`);
      }
      _push(`<div class="mt-4" data-v-cc50a465><button class="bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 text-sm md:text-base" data-v-cc50a465> Go to Main Page </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc50a465"]]);
export {
  calendar as default
};
//# sourceMappingURL=calendar-DC0NcgWA.js.map
