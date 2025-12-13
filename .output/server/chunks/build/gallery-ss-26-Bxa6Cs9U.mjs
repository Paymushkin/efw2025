import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './AppSeo-BjG2yXmh.mjs';
import { u as usePhotographers, P as PhotographerBlock } from './usePhotographers-DFXChNEl.mjs';
import { u as useHead } from './v3-DpMGnK-K.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'vue-router';
import './nuxt-link-Bmms7Mh5.mjs';
import './BaseButton-W8SaqIZj.mjs';
import './InstagramIcon-BfogBQdu.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "gallery-ss-26",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gallery SS 2026 \u2014 Emirates Fashion Week Dubai",
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
          content: "Gallery SS 2026 \u2014 Emirates Fashion Week Dubai"
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
      const base = ((photographer == null ? void 0 : photographer.name) || `photographer-${index + 1}`).toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      return base ? `photographer-${base}` : `photographer-${index + 1}`;
    };
    const tocItems = computed(
      () => (photographers.value || []).map((photographer, index) => ({
        id: getAnchorId(photographer, index),
        title: (photographer == null ? void 0 : photographer.name) || `Photographer ${index + 1}`
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 py-10 md:py-16" }, _attrs))} data-v-3c567750>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Gallery SS26 - 14th Season Spring Summer 26 | Emirates Fashion Week",
        description: "Browse the photo galleries from Emirates Fashion Week 14th Season Spring Summer 26. Featuring collections from top designers, runway shows, and behind-the-scenes moments.",
        keywords: "Emirates Fashion Week Gallery SS26, Spring Summer 26 Photos, Runway Photos, Designer Collections, Dubai Fashion Week",
        "schema-type": "collection"
      }, null, _parent));
      _push(`<h1 class="text-3xl md:text-4xl xl:text-5xl mb-6" data-v-3c567750>14th Season Spring Summer 26</h1><p class="text-base md:text-lg text-gray-700 mb-6" data-v-3c567750> Statistics: Total 13 Photobanks. 10.000+ photo. 135+ TV interviews. 400+ Videos </p>`);
      if (tocItems.value.length) {
        _push(`<nav class="mb-10 md:mb-16 rounded-2xl border border-gray-200 bg-gray-50/80 p-4 md:p-6" data-v-3c567750><p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4" data-v-3c567750> Contents </p><ul class="flex flex-wrap gap-2" data-v-3c567750><!--[-->`);
        ssrRenderList(tocItems.value, (item) => {
          _push(`<li data-v-3c567750><a class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:border-black hover:text-black"${ssrRenderAttr("href", `#${item.id}`)} data-v-3c567750>${ssrInterpolate(item.title)}</a></li>`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLoading)) {
        _push(`<div class="flex items-center justify-center py-10 text-gray-500" data-v-3c567750> Loading galleries\u2026 </div>`);
      } else if (unref(errorMessage)) {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600" data-v-3c567750><p data-v-3c567750>\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0433\u0430\u043B\u0435\u0440\u0435\u044E \u0438\u0437 Google Sheets.</p><p class="max-w-[480px] text-gray-500" data-v-3c567750>${ssrInterpolate(unref(errorMessage))}</p><p class="text-gray-400" data-v-3c567750>\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.</p></div>`);
      } else {
        _push(`<div class="photographers-list space-y-12 md:space-y-16" data-v-3c567750><!--[-->`);
        ssrRenderList(unref(photographers), (photographer, index) => {
          _push(`<section${ssrRenderAttr("id", getAnchorId(photographer, index))} class="scroll-mt-28" data-v-3c567750>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery-ss-26.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallerySs26 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c567750"]]);

export { gallerySs26 as default };
//# sourceMappingURL=gallery-ss-26-Bxa6Cs9U.mjs.map
