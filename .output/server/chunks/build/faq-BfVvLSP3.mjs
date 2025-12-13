import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { F as FaqSectionDynamic } from './FaqSectionDynamic-DMCsMXYe.mjs';
import { _ as _sfc_main$1 } from './AppSeo-BjG2yXmh.mjs';
import 'vue-router';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './v3-DpMGnK-K.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqDataForSchema = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "FREQUENTLY ASKED QUESTIONS - Emirates Fashion Week Dubai 2025",
        description: "Frequently Asked Questions about Emirates Fashion Week Dubai 2025. Find answers about visitor passes, buyers, AI matchmaking tool, and more.",
        keywords: "Emirates Fashion Week FAQ, Fashion Week Questions, Dubai Fashion Week, Visitor Passes, AI Matchmaking",
        "schema-type": "faq",
        "faq-data": faqDataForSchema.value
      }, null, _parent));
      _push(ssrRenderComponent(FaqSectionDynamic, { standalone: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faq-BfVvLSP3.mjs.map
