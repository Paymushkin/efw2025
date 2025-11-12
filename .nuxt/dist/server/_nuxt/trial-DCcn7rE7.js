import { ref, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useCompaniesCount } from "./useCompaniesCount-BOY74o7o.js";
import { _ as _sfc_main$2 } from "./BaseButton-BBGwxqcq.js";
import { I as Image9, a as Image11, C as CompaniesList, W as WaitlistForm } from "./trial_compare-B5oJUD3U.js";
import { _ as _sfc_main$1 } from "./AppSeo-Bb_QAAbw.js";
import { F as FaqSectionDynamic } from "./FaqSectionDynamic-y7bg5agB.js";
import { s as station2 } from "./station-2-Dn8AZ31q.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "trial",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const showWaitlistForm = ref(false);
    const companiesListRef = ref(null);
    const { companiesCount, updateCompaniesCount: updateGlobalCount } = useCompaniesCount();
    const updateCompaniesCount = (count) => {
      updateGlobalCount(count);
    };
    const handleWaitlistSuccess = async (newCompanyData) => {
      if (companiesListRef.value) {
        companiesListRef.value.refresh(newCompanyData);
      }
      companiesCount.value += 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Trial Showcase Spots - Emirates Fashion Week Dubai 2025",
        description: "Get a 2-hour free trial showcase spot at Emirates Fashion Week Dubai 2025. Limited spots available for beauty and design businesses. Join the waitlist now!",
        keywords: "Trial showcase spots, Free trial, Emirates Fashion Week, Dubai Fashion Event, Beauty business, Design business, Waitlist"
      }, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8"><h1 class="text-xl md:text-4xl mb-[75px]">TRIAL SHOWCASE SPOTS</h1><div class="space-y-6 mb-8"><div class="flex flex-col md:flex-row gap-6"><div class="rounded-2xl overflow-hidden md:w-1/2"><img${ssrRenderAttr("src", unref(Image9))} alt="Trial showcase spots" class="w-full object-contain"></div><div class="md:w-1/2"><p class="text-base md:text-xl xl:text-2xl mb-6"> Trial Showcase Spots — How it Works </p><ul class="text-sm md:text-base xl:text-lg space-y-2 mb-6"><li>• Each day offers 20 Showcase Spots, divided into 4 sessions of 2 hours each — that&#39;s 80 trial slots per day.</li><li>• Each selected participant also receives 10 lead chats with EFW Market visitors.</li><li>• Allocation is not automatic. From the waitlist, participants are chosen at the organizers&#39; discretion, to ensure a balanced mix of services for our audience.</li><li>• These trial spots are subsidized by Dubai Departments and Emirates Fashion Week as a goodwill initiative to support SMEs in Dubai&#39;s beauty and design industries.</li><li>• Important: if all 60 full-day paid spots are taken, the 20 trial spots may also be sold, which reduces the chances for waitlist applicants.</li><li>• You can always skip the waitlist and secure a guaranteed full-day spot (3,000 AED) — just as 60+ companies already have</li></ul></div></div><div class="flex flex-col md:flex-row gap-6"><div class="rounded-2xl overflow-hidden"><img${ssrRenderAttr("src", unref(station2))} alt="Trial showcase spots" class="object-contain"></div><div class="rounded-2xl overflow-hidden"><img${ssrRenderAttr("src", unref(Image11))} alt="Trial showcase spots" class="object-contain"></div></div></div><p class="text-sm md:text-base xl:text-lg text-gray-600 mt-2 text-center"> competition with other waitlist companies; trial slots reduced if full-day spots are purchased </p><div class="flex flex-col items-end gap-3 mb-8">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "join-waitlist",
        variant: "primary",
        onClick: ($event) => showWaitlistForm.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Join Waitlist</span><span${_scopeId}>&gt;</span>`);
          } else {
            return [
              createVNode("span", null, "Join Waitlist"),
              createVNode("span", null, ">")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-12">`);
      _push(ssrRenderComponent(CompaniesList, {
        ref_key: "companiesListRef",
        ref: companiesListRef,
        onCompaniesCountUpdated: updateCompaniesCount
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(FaqSectionDynamic, { standalone: true }, null, _parent));
      _push(ssrRenderComponent(WaitlistForm, {
        "is-open": showWaitlistForm.value,
        onClose: ($event) => showWaitlistForm.value = false,
        onSuccess: handleWaitlistSuccess
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=trial-DCcn7rE7.js.map
