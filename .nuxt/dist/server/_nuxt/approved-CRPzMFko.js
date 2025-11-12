import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { A as ApprovedCompaniesList } from "./ApprovedCompaniesList-Cx9PN_uy.js";
import { _ as _sfc_main$1 } from "./AppSeo-Bb_QAAbw.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "approved",
  __ssrInlineRender: true,
  setup(__props) {
    const approvedCompaniesListRef = ref(null);
    const approvedCount = ref(0);
    const updateApprovedCount = (count) => {
      approvedCount.value = count;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Approved Companies - Emirates Fashion Week Dubai 2025",
        description: "View the list of approved companies participating in Emirates Fashion Week Dubai 2025. See which beauty and design businesses have been selected.",
        keywords: "Approved companies, Emirates Fashion Week, Dubai Fashion Event, Beauty business, Design business, Selected companies"
      }, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8"><h1 class="text-xl md:text-4xl mb-[75px]">APPROVED COMPANIES</h1><div class="mb-8"><p class="text-sm mb-6"> Companies that have been approved to participate in Emirates Fashion Week Dubai 2025 </p></div><div class="mt-12">`);
      _push(ssrRenderComponent(ApprovedCompaniesList, {
        ref_key: "approvedCompaniesListRef",
        ref: approvedCompaniesListRef,
        onCompaniesCountUpdated: updateApprovedCount
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/approved.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=approved-CRPzMFko.js.map
