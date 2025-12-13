import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { F as FaqSectionDynamic } from "./FaqSectionDynamic-Bs1eY5W4.js";
import { _ as _sfc_main$1 } from "./AppSeo-BjG2yXmh.js";
import "vue-router";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=faq-DrXdybsX.js.map
