import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as usePhotographers, P as PhotographerBlock } from "./usePhotographers-DW5nyjWs.js";
import { u as useHead } from "./v3-DpMGnK-K.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-Bmms7Mh5.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "./BaseButton-BBGwxqcq.js";
import "./InstagramIcon-BBr8lY83.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
const _sfc_main = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gallery SS 2026 — Emirates Fashion Week Dubai",
      meta: [
        {
          name: "description",
          content: "Spring/Summer 2026 gallery of Emirates Fashion Week Dubai. Browse photo and video highlights from runway shows, designers, and special events."
        },
        {
          name: "keywords",
          content: "Emirates Fashion Week Gallery, SS26 Dubai Fashion Photos, Spring Summer Runway Images, Dubai Fashion Week Media"
        },
        {
          property: "og:title",
          content: "Gallery SS 2026 — Emirates Fashion Week Dubai"
        },
        {
          property: "og:description",
          content: "Spring/Summer 2026 gallery of Emirates Fashion Week Dubai. Browse photo and video highlights from runway shows, designers, and special events."
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
    const { photographers, isLoading, errorMessage } = usePhotographers({
      sheetId: "13bnAmO2lUWaA55k6bOZ-oYH-t9LxRcdXBFkEGMG5MUA",
      initialData: []
    });
    const getAnchorId = (photographer, index = 0) => {
      const base = (photographer?.name || `photographer-${index + 1}`).toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      return base ? `photographer-${base}` : `photographer-${index + 1}`;
    };
    const tocItems = computed(
      () => (photographers.value || []).map((photographer, index) => ({
        id: getAnchorId(photographer, index),
        title: photographer?.name || `Photographer ${index + 1}`
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 py-10 md:py-16" }, _attrs))} data-v-9d0a919b><h1 class="text-3xl md:text-4xl xl:text-5xl mb-6" data-v-9d0a919b>14th Season Spring Summer 26</h1><p class="text-base md:text-lg text-gray-700 mb-6" data-v-9d0a919b> Statistics: Total 13 Photobanks. 10.000+ photo. 135+ TV interviews. 400+ Videos </p>`);
      if (tocItems.value.length) {
        _push(`<nav class="mb-10 md:mb-16 rounded-2xl border border-gray-200 bg-gray-50/80 p-4 md:p-6" data-v-9d0a919b><p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4" data-v-9d0a919b> Contents </p><ul class="flex flex-wrap gap-2" data-v-9d0a919b><!--[-->`);
        ssrRenderList(tocItems.value, (item) => {
          _push(`<li data-v-9d0a919b><a class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:border-black hover:text-black"${ssrRenderAttr("href", `#${item.id}`)} data-v-9d0a919b>${ssrInterpolate(item.title)}</a></li>`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLoading)) {
        _push(`<div class="flex items-center justify-center py-10 text-gray-500" data-v-9d0a919b> Loading galleries… </div>`);
      } else if (unref(errorMessage)) {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600" data-v-9d0a919b><p data-v-9d0a919b>Не удалось загрузить галерею из Google Sheets.</p><p class="max-w-[480px] text-gray-500" data-v-9d0a919b>${ssrInterpolate(unref(errorMessage))}</p><p class="text-gray-400" data-v-9d0a919b>Проверьте доступность таблицы и попробуйте обновить страницу.</p></div>`);
      } else {
        _push(`<div class="photographers-list space-y-12 md:space-y-16" data-v-9d0a919b><!--[-->`);
        ssrRenderList(unref(photographers), (photographer, index) => {
          _push(`<section${ssrRenderAttr("id", getAnchorId(photographer, index))} class="scroll-mt-28" data-v-9d0a919b>`);
          _push(ssrRenderComponent(PhotographerBlock, { photographer }, null, _parent));
          _push(`</section>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d0a919b"]]);
export {
  gallery as default
};
//# sourceMappingURL=gallery-BVVsqp7n.js.map
