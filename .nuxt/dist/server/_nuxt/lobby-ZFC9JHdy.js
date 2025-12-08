import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _sfc_main$1 } from "./AppSeo-LOFxIM8N.js";
import { _ as _sfc_main$2 } from "./WhatsAppButton-DIYmnQXx.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
const whatsappNumber = "https://wa.me/message/2F4O6ZT7YH5RG1";
const _sfc_main = {
  __name: "lobby",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    ref(null);
    const quickSteps = ref([
      {
        key: "checkin",
        title: "1. Check-in",
        completed: true
      },
      {
        key: "wall",
        title: "2. Go to Press Wall",
        subtitle: "Take your ready-to-share photo. Tag @emirates_fashionweek.",
        completed: false,
        details: [
          {
            label: "All Visitors ready-to-share photos — here",
            url: "https://meyou.id/efwss26/live"
          }
        ]
      }
    ]);
    const openQuickSteps = ref({ wall: true });
    const personaSections = ref([
      {
        id: "local-beauty-service",
        title: "Local Beauty Service? > Special Offer",
        key: "persona-local-beauty-service",
        completed: false,
        items: [
          "Last Showcase Stand (Mon 10 Nov or Tue 11 Nov — 1000 AED/day).",
          "Bring a laptop with PPT/PDF presentation.",
          "Female EFW audience (hundreds).",
          "40 designer pop-ups + 40 local beauty services.",
          'Details: <a class="lobby-link" data-step="persona-local-beauty-service" href="https://emiratesfashionweeks.com/offer?wp=971585753302&tr" target="_blank" rel="noopener">Special offer</a>.',
          'Ask team on <a class="lobby-link" data-step="persona-local-beauty-service" href="https://wa.me/message/2F4O6ZT7YH5RG1" target="_blank" rel="noopener">WhatsApp</a>.'
        ]
      },
      {
        id: "stylist-buyer",
        title: "Stylist / Buyer? > Join EFW PRO Fashion",
        key: "persona-stylist-buyer",
        completed: false,
        items: [
          "Join EFW PRO Fashion program.",
          'Contact <a class="lobby-link" data-step="persona-stylist-buyer" href="https://www.instagram.com/potanina_ea" target="_blank" rel="noopener">Kate (RU)</a> or <a class="lobby-link" data-step="persona-stylist-buyer" href="https://www.instagram.com/valeriya_lioci" target="_blank" rel="noopener">Valery (EN)</a>.'
        ]
      },
      {
        id: "influencer",
        title: "Influencer? > Go to TV interview",
        key: "persona-influencer",
        completed: false,
        items: [
          "5k+ followers? Go to TV interview.",
          'Tag <a class="lobby-link" data-step="persona-influencer" href="https://www.instagram.com/emirates_fashionweek" target="_blank" rel="noopener">@emirates_fashionweek</a>'
        ]
      },
      {
        id: "media",
        title: "Media?",
        key: "persona-media",
        completed: false,
        items: [
          'PRO runway photos available next day on <a class="lobby-link" data-step="persona-media" href="https://emiratesfashionweek.com/gallery-ss-26" target="_blank" rel="noopener">emiratesfashionweek.com/gallery-ss-26</a>.'
        ]
      }
    ]);
    computed(
      () => personaSections.value.every((section) => section.completed)
    );
    const personaGroupClasses = computed(() => {
      if (personaSections.value.some((section) => section.completed)) {
        return "border-emerald-500 text-emerald-500 bg-emerald-500/5";
      }
      return "border-[#d5dbe8] text-[#d5dbe8] bg-white";
    });
    const personaOpenStates = ref({});
    const personaGroupOpen = ref(false);
    const marketOpen = ref(false);
    const magazineOpen = ref(false);
    const marketAccess = ref({
      key: "market-access",
      title: "4. Beauty Market Access",
      subtitle: "Mon 10 Nov or Tue 11 Nov",
      completed: false,
      items: [
        'Mon <strong>10 Nov</strong> 10:00–20:00 — Arjaan (<a class="lobby-link" data-step="market-access" href="https://maps.app.goo.gl/2hTYTS7m3Sef7b2f6" target="_blank" rel="noopener">here</a>)',
        'Tue <strong>11 Nov</strong> 10:00–20:00 — Arjaan (<a class="lobby-link" data-step="market-access" href="https://maps.app.goo.gl/2hTYTS7m3Sef7b2f6" target="_blank" rel="noopener">here</a>)',
        "40 designer pop-ups + 40 beauty services (nails, hair, facecare, body, dental, clinics, cosmetology)."
      ]
    });
    const magazineInfo = ref({
      key: "magazine",
      title: "5. Special — Get your printed copy of Emirates Fashion Week Magazine",
      completed: false,
      items: [
        'New Magazine is available on <a class="lobby-link" data-step="magazine" href="https://magazine.emiratesfashionweek.com" target="_blank" rel="noopener">magazine.emiratesfashionweek.com</a>.'
      ]
    });
    ref(null);
    const checkClasses = (isCompleted) => isCompleted ? "border-emerald-500 text-emerald-500 bg-emerald-500/5" : "border-[#d5dbe8] text-[#d5dbe8] bg-white";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f4f7ff] to-[#e9f7f5] py-10 md:py-16 lg:bg-transparent" }, _attrs))} data-v-314b6578>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "EFW Lobby Guide — Emirates Fashion Week",
        description: "Quick guide for Emirates Fashion Week lobby guests: registration, press wall, media resources, and special offers for beauty services, stylists, influencers, and media partners.",
        keywords: "Emirates Fashion Week Lobby, EFW Quick Guide, Beauty Market Access, Dubai Fashion Media, Emirates Fashion Week Contacts"
      }, null, _parent));
      _push(`<div class="container relative z-10" data-v-314b6578><div class="mx-auto w-full max-w-[440px] rounded-[22px] border border-[#ecf1f8] bg-gradient-to-b from-white to-[#fbfdff] shadow-[0_8px_30px_rgba(16,24,40,0.10)]" data-v-314b6578><div class="mx-auto mt-3 h-1 w-10 rounded-full bg-[#d9e2ef]" data-v-314b6578></div><div class="flex flex-col" data-v-314b6578><!--[-->`);
      ssrRenderList(quickSteps.value, (step, index) => {
        _push(`<!--[-->`);
        if (step.details && step.details.length) {
          _push(`<details${ssrIncludeBooleanAttr(openQuickSteps.value[step.key]) ? " open" : ""} class="group border-t border-[#e6ebf3] px-[18px] first:border-t-0" data-v-314b6578><summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none" data-v-314b6578><span class="${ssrRenderClass(["mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors", checkClasses(step.completed)])}" data-v-314b6578><svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-314b6578><path d="M4 8.5 7 11.5 12 5.5" data-v-314b6578></path></svg></span><div class="flex flex-col gap-1" data-v-314b6578><span class="text-base font-semibold text-[#0f1824]" data-v-314b6578>${ssrInterpolate(step.title)}</span>`);
          if (step.subtitle) {
            _push(`<span class="text-sm text-[#5b6b7f]" data-v-314b6578>${ssrInterpolate(step.subtitle)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]" data-v-314b6578><span class="group-open:hidden" data-v-314b6578>+</span><span class="hidden group-open:inline" data-v-314b6578>–</span></span></summary><div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]" data-v-314b6578><p data-v-314b6578><!--[-->`);
          ssrRenderList(step.details, (detail, detailIndex) => {
            _push(`<a${ssrRenderAttr("href", detail.url)} class="lobby-link" target="_blank" rel="noopener"${ssrRenderAttr("data-step", step.key)} data-v-314b6578>${ssrInterpolate(detail.label)}</a>`);
          });
          _push(`<!--]--></p></div></details>`);
        } else {
          _push(`<div class="flex items-center gap-3 border-t border-[#e6ebf3] px-[18px] py-[18px] first:border-t-0" data-v-314b6578><span class="${ssrRenderClass(["mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors", checkClasses(step.completed)])}" data-v-314b6578><svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-314b6578><path d="M4 8.5 7 11.5 12 5.5" data-v-314b6578></path></svg></span><div class="flex flex-col gap-1" data-v-314b6578><span class="text-base font-semibold text-[#0f1824]" data-v-314b6578>${ssrInterpolate(step.title)}</span>`);
          if (step.subtitle) {
            _push(`<span class="text-sm text-[#5b6b7f]" data-v-314b6578>${ssrInterpolate(step.subtitle)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><details class="group border-t border-[#e6ebf3]" data-v-314b6578><summary class="px-[18px] py-[18px] text-lg font-bold text-[#0f1824] list-none flex items-center gap-3" data-v-314b6578><span class="${ssrRenderClass(["mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors", personaGroupClasses.value])}" data-v-314b6578><svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-314b6578><path d="M4 8.5 7 11.5 12 5.5" data-v-314b6578></path></svg></span><span data-v-314b6578>3. IF YOU’RE</span><span class="ml-auto flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]" data-v-314b6578>`);
      if (personaGroupOpen.value) {
        _push(`<span data-v-314b6578>–</span>`);
      } else {
        _push(`<span data-v-314b6578>+</span>`);
      }
      _push(`</span></summary><div class="border-t border-[#e6ebf3] bg-white" data-v-314b6578><!--[-->`);
      ssrRenderList(personaSections.value, (section) => {
        _push(`<details class="group px-[18px] border-t border-[#e6ebf3]" data-v-314b6578><summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none" data-v-314b6578><span class="${ssrRenderClass(["mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors", checkClasses(section.completed)])}" data-v-314b6578><svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-314b6578><path d="M4 8.5 7 11.5 12 5.5" data-v-314b6578></path></svg></span><div class="flex flex-col gap-1" data-v-314b6578><span class="text-base font-semibold text-[#0f1824]" data-v-314b6578>${ssrInterpolate(section.title)}</span>`);
        if (section.subtitle) {
          _push(`<span class="text-sm text-[#5b6b7f]" data-v-314b6578>${ssrInterpolate(section.subtitle)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]" data-v-314b6578>`);
        if (personaOpenStates.value[section.id]) {
          _push(`<span data-v-314b6578>–</span>`);
        } else {
          _push(`<span data-v-314b6578>+</span>`);
        }
        _push(`</span></summary><div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]" data-v-314b6578><ul class="list-disc space-y-3 pl-4" data-v-314b6578><!--[-->`);
        ssrRenderList(section.items, (item, itemIndex) => {
          _push(`<li data-v-314b6578><span data-v-314b6578>${item ?? ""}</span></li>`);
        });
        _push(`<!--]--></ul></div></details>`);
      });
      _push(`<!--]--></div></details><details class="group border-t border-[#e6ebf3] px-[18px]" data-v-314b6578><summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none" data-v-314b6578><span class="${ssrRenderClass(["mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors", checkClasses(marketAccess.value.completed)])}" data-v-314b6578><svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-314b6578><path d="M4 8.5 7 11.5 12 5.5" data-v-314b6578></path></svg></span><div class="flex flex-col gap-1" data-v-314b6578><span class="text-base font-semibold text-[#0f1824]" data-v-314b6578>${ssrInterpolate(marketAccess.value.title)}</span>`);
      if (marketAccess.value.subtitle) {
        _push(`<span class="text-sm text-[#5b6b7f]" data-v-314b6578>${ssrInterpolate(marketAccess.value.subtitle)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]" data-v-314b6578>`);
      if (marketOpen.value) {
        _push(`<span data-v-314b6578>–</span>`);
      } else {
        _push(`<span data-v-314b6578>+</span>`);
      }
      _push(`</span></summary><div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]" data-v-314b6578><ul class="list-disc space-y-3 pl-4" data-v-314b6578><!--[-->`);
      ssrRenderList(marketAccess.value.items, (item, itemIndex) => {
        _push(`<li data-v-314b6578><span data-v-314b6578>${item ?? ""}</span></li>`);
      });
      _push(`<!--]--></ul></div></details><details class="group border-t border-[#e6ebf3] px-[18px]" data-v-314b6578><summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none" data-v-314b6578><span class="${ssrRenderClass(["mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors", checkClasses(magazineInfo.value.completed)])}" data-v-314b6578><svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-314b6578><path d="M4 8.5 7 11.5 12 5.5" data-v-314b6578></path></svg></span><div class="flex flex-col gap-1" data-v-314b6578><span class="text-base font-semibold text-[#0f1824]" data-v-314b6578>${ssrInterpolate(magazineInfo.value.title)}</span>`);
      if (magazineInfo.value.subtitle) {
        _push(`<span class="text-sm text-[#5b6b7f]" data-v-314b6578>${ssrInterpolate(magazineInfo.value.subtitle)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]" data-v-314b6578>`);
      if (magazineOpen.value) {
        _push(`<span data-v-314b6578>–</span>`);
      } else {
        _push(`<span data-v-314b6578>+</span>`);
      }
      _push(`</span></summary><div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]" data-v-314b6578><ul class="list-disc space-y-3 pl-4" data-v-314b6578><!--[-->`);
      ssrRenderList(magazineInfo.value.items, (item, itemIndex) => {
        _push(`<li data-v-314b6578><span data-v-314b6578>${item ?? ""}</span></li>`);
      });
      _push(`<!--]--></ul></div></details><div class="flex border-t border-[#e6ebf3] px-[18px] py-[18px]" data-v-314b6578>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        "phone-number": whatsappNumber,
        text: "Ask team — WhatsApp"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lobby.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lobby = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-314b6578"]]);
export {
  lobby as default
};
//# sourceMappingURL=lobby-ZFC9JHdy.js.map
