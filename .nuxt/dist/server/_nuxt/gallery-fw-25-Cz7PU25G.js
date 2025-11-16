import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "gallery-fw-25",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gallery FW 2025 — Emirates Fashion Week Dubai",
      meta: [
        {
          name: "description",
          content: "Autumn/Winter 2025 gallery of Emirates Fashion Week Dubai. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments."
        },
        {
          name: "keywords",
          content: "Emirates Fashion Week Gallery FW25, Dubai Fashion Photos, Fashion Show Gallery, Runway Photos Dubai, Fashion Week Images"
        },
        {
          property: "og:title",
          content: "Gallery FW 2025 — Emirates Fashion Week Dubai"
        },
        {
          property: "og:description",
          content: "Autumn/Winter 2025 gallery of Emirates Fashion Week Dubai. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments."
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
    const { photographers, isLoading, errorMessage } = usePhotographers();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 py-10 md:py-16" }, _attrs))} data-v-24b3fade><h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16" data-v-24b3fade>13th Season Fall Winter 25</h1>`);
      if (unref(isLoading)) {
        _push(`<div class="flex items-center justify-center py-10 text-gray-500" data-v-24b3fade> Loading galleries… </div>`);
      } else if (unref(errorMessage)) {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600" data-v-24b3fade><p data-v-24b3fade>Не удалось загрузить галерею из Google Sheets.</p><p class="max-w-[480px] text-gray-500" data-v-24b3fade>${ssrInterpolate(unref(errorMessage))}</p><p class="text-gray-400" data-v-24b3fade>Проверьте доступность таблицы и попробуйте обновить страницу.</p></div>`);
      } else {
        _push(`<div class="photographers-list space-y-12 md:space-y-16" data-v-24b3fade><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery-fw-25.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const galleryFw25 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24b3fade"]]);
export {
  galleryFw25 as default
};
//# sourceMappingURL=gallery-fw-25-Cz7PU25G.js.map
