import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as usePhotographers, P as PhotographerBlock } from "./usePhotographers-B-XbLtk_.js";
import { u as useHead } from "./v3-DpMGnK-K.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-Bmms7Mh5.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "./BaseButton-BBGwxqcq.js";
import "./InstagramIcon-BBr8lY83.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "./photo-12-1-rQskvVvC.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
const _sfc_main = {
  __name: "gallery-ss-26",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 py-10 md:py-16" }, _attrs))} data-v-23aae193><h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16" data-v-23aae193>14th Season Spring Summer 26</h1>`);
      if (unref(isLoading)) {
        _push(`<div class="flex items-center justify-center py-10 text-gray-500" data-v-23aae193> Loading galleries… </div>`);
      } else if (unref(errorMessage)) {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600" data-v-23aae193><p data-v-23aae193>Не удалось загрузить галерею из Google Sheets.</p><p class="max-w-[480px] text-gray-500" data-v-23aae193>${ssrInterpolate(unref(errorMessage))}</p><p class="text-gray-400" data-v-23aae193>Проверьте доступность таблицы и попробуйте обновить страницу.</p></div>`);
      } else {
        _push(`<div class="photographers-list space-y-12 md:space-y-16" data-v-23aae193><!--[-->`);
        ssrRenderList(unref(photographers), (photographer) => {
          _push(ssrRenderComponent(PhotographerBlock, {
            key: photographer.id ?? photographer.order ?? photographer.name,
            photographer
          }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery-ss-26.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallerySs26 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23aae193"]]);
export {
  gallerySs26 as default
};
//# sourceMappingURL=gallery-ss-26-CuV-Mj8w.js.map
