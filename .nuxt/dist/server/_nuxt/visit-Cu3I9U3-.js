import { _ as _sfc_main$1 } from "./AppSeo-D3mYHa43.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-DpMGnK-K.js";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
const _sfc_main = {
  __name: "visit",
  __ssrInlineRender: true,
  setup(__props) {
    const progress = ref(0);
    useHead({
      title: "Visit Emirates Fashion Week - Register Now",
      meta: [
        {
          name: "description",
          content: "Register to visit Emirates Fashion Week Dubai 2025. Get your invitation and join us for an unforgettable fashion experience."
        },
        {
          name: "keywords",
          content: "Emirates Fashion Week, Dubai Fashion, Fashion Show 2025, Visit EFW, Fashion Registration"
        },
        {
          property: "og:title",
          content: "Visit Emirates Fashion Week - Register Now"
        },
        {
          property: "og:description",
          content: "Register to visit Emirates Fashion Week Dubai 2025. Get your invitation and join us for an unforgettable fashion experience."
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black flex items-center justify-center" }, _attrs))} data-v-4bd53b5c>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Visit Emirates Fashion Week - Register Now",
        description: "Register to visit Emirates Fashion Week Dubai 2025. Get your invitation and join us for an unforgettable fashion experience.",
        keywords: "Emirates Fashion Week, Dubai Fashion, Fashion Show 2025, Visit EFW, Fashion Registration"
      }, null, _parent));
      _push(`<div class="text-center" data-v-4bd53b5c><div class="mb-8" data-v-4bd53b5c><div class="inline-block relative" data-v-4bd53b5c><div class="w-16 h-16 border-4 border-gray-300 border-t-white rounded-full animate-spin" data-v-4bd53b5c></div><div class="absolute top-2 left-2 w-12 h-12 border-4 border-gray-400 border-t-gray-100 rounded-full animate-spin" style="${ssrRenderStyle({ "animation-duration": "1s", "animation-direction": "reverse" })}" data-v-4bd53b5c></div><div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" data-v-4bd53b5c></div></div></div><div class="text-white" data-v-4bd53b5c><h1 class="text-2xl md:text-3xl font-bold mb-4 animate-pulse" data-v-4bd53b5c> Redirecting to Emirates Fashion Week </h1><p class="text-gray-300 text-lg animate-bounce" data-v-4bd53b5c> Please wait while we prepare your invitation form... </p></div><div class="mt-8 w-64 mx-auto" data-v-4bd53b5c><div class="bg-gray-700 rounded-full h-2 overflow-hidden" data-v-4bd53b5c><div class="bg-white h-full rounded-full transition-all duration-2000 ease-linear" style="${ssrRenderStyle({ width: progress.value + "%" })}" data-v-4bd53b5c></div></div></div><div class="mt-4 text-white text-sm" data-v-4bd53b5c>${ssrInterpolate(Math.round(progress.value))}% </div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/visit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4bd53b5c"]]);
export {
  visit as default
};
//# sourceMappingURL=visit-Cu3I9U3-.js.map
