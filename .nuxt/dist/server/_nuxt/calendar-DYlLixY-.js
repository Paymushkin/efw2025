import { _ as _sfc_main$1 } from "./AppSeo-D3mYHa43.js";
import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
    const isIOSDevice = ref(false);
    const getCalendarUrl = () => {
      return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(calendarId)}`;
    };
    const calendarUrl = computed(() => getCalendarUrl());
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
          content: "https://www.emiratesfashionweek.com/seo-poster.png"
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black flex items-center justify-center px-4 py-8" }, _attrs))} data-v-b7e5fbef>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Emirates Fashion Week Calendar - Subscribe to Events",
        description: "Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025.",
        keywords: "Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025"
      }, null, _parent));
      _push(`<div class="text-center max-w-md w-full" data-v-b7e5fbef><div class="mb-6 md:mb-8" data-v-b7e5fbef><div class="inline-block relative" data-v-b7e5fbef><div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center" data-v-b7e5fbef><svg class="w-10 h-10 md:w-12 md:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b7e5fbef><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-b7e5fbef></path></svg></div></div></div><div class="text-white mb-8" data-v-b7e5fbef><h1 class="text-2xl md:text-3xl font-bold mb-3" data-v-b7e5fbef> Subscribe to Emirates Fashion Week Calendar </h1><p class="text-gray-300 text-base md:text-lg mb-2" data-v-b7e5fbef> Stay updated with all fashion events and shows </p><p class="text-gray-400 text-sm" data-v-b7e5fbef> Subscribe to automatically sync all events to your calendar </p></div>`);
      if (showButton.value) {
        _push(`<div class="space-y-4" data-v-b7e5fbef><a${ssrRenderAttr("href", calendarUrl.value)} class="block w-full bg-white hover:bg-gray-100 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl" data-v-b7e5fbef> 📅 Subscribe to Calendar </a><a href="/" class="block w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 border border-gray-600" data-v-b7e5fbef> 🏠 Go to Main Page </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-8 text-gray-400 text-xs md:text-sm space-y-2" data-v-b7e5fbef>`);
      if (isIOSDevice.value) {
        _push(`<p data-v-b7e5fbef> 📱 For iOS/macOS: Calendar app will open automatically </p>`);
      } else {
        _push(`<p data-v-b7e5fbef> 🌐 For Android/Desktop: Google Calendar will open </p>`);
      }
      _push(`<p class="text-gray-500" data-v-b7e5fbef> Events will automatically sync to your calendar </p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b7e5fbef"]]);
export {
  calendar as default
};
//# sourceMappingURL=calendar-DYlLixY-.js.map
