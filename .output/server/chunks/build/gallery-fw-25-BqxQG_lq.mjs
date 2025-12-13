import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as usePhotographers, P as PhotographerBlock } from './usePhotographers-DFXChNEl.mjs';
import { _ as _sfc_main$1 } from './AppSeo-BjG2yXmh.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './nuxt-link-Bmms7Mh5.mjs';
import './server.mjs';
import 'vue-router';
import './BaseButton-W8SaqIZj.mjs';
import './InstagramIcon-BfogBQdu.mjs';
import './v3-DpMGnK-K.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "gallery-fw-25",
  __ssrInlineRender: true,
  setup(__props) {
    const { photographers, isLoading, errorMessage } = usePhotographers();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 py-10 md:py-16" }, _attrs))} data-v-ce359d2c>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Gallery FW 2025 \u2014 Emirates Fashion Week Dubai",
        description: "Autumn/Winter 2025 gallery of Emirates Fashion Week Dubai. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments.",
        keywords: "Emirates Fashion Week Gallery FW25, Dubai Fashion Photos, Fashion Show Gallery, Runway Photos Dubai, Fashion Week Images",
        "schema-type": "collection"
      }, null, _parent));
      _push(`<h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16" data-v-ce359d2c>13th Season Fall Winter 25</h1>`);
      if (unref(isLoading)) {
        _push(`<div class="flex items-center justify-center py-10 text-gray-500" data-v-ce359d2c> Loading galleries\u2026 </div>`);
      } else if (unref(errorMessage)) {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600" data-v-ce359d2c><p data-v-ce359d2c>\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0433\u0430\u043B\u0435\u0440\u0435\u044E \u0438\u0437 Google Sheets.</p><p class="max-w-[480px] text-gray-500" data-v-ce359d2c>${ssrInterpolate(unref(errorMessage))}</p><p class="text-gray-400" data-v-ce359d2c>\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.</p></div>`);
      } else {
        _push(`<div class="photographers-list space-y-12 md:space-y-16" data-v-ce359d2c><!--[-->`);
        ssrRenderList(unref(photographers), (photographer) => {
          var _a, _b;
          _push(ssrRenderComponent(PhotographerBlock, {
            key: (_b = (_a = photographer.id) != null ? _a : photographer.order) != null ? _b : photographer.name,
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
const galleryFw25 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce359d2c"]]);

export { galleryFw25 as default };
//# sourceMappingURL=gallery-fw-25-BqxQG_lq.mjs.map
