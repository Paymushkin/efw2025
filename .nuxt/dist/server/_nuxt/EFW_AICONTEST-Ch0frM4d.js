import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { ref, mergeProps, useSSRContext, computed, watch, nextTick } from "vue";
import { _ as _sfc_main$3 } from "./AppSeo-Bb_QAAbw.js";
import { F as FacesOfEfwSection } from "./FacesOfEfwSection-CijpARBF.js";
import { _ as _sfc_main$2 } from "./WhatsAppButton-DIYmnQXx.js";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "swiper/vue";
import "swiper/modules";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$1 = {
  __name: "AiContestFaq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqData = ref([]);
    const openFaqs = ref([]);
    const loading = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      if (!loading.value && !error.value && faqData.value.length > 0) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "md:mb-[76px] mb-[56px]" }, _attrs))} data-v-ac31c2b4><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-ac31c2b4>FREQUENTLY ASKED QUESTIONS</h2><div class="flex flex-col gap-4" data-v-ac31c2b4><!--[-->`);
        ssrRenderList(faqData.value, (faq, index) => {
          _push(`<div data-v-ac31c2b4><div class="border border-black cursor-pointer" data-v-ac31c2b4><div class="${ssrRenderClass([{ "border-b border-black": openFaqs.value.includes(index) }, "w-full p-4 md:p-6 flex justify-between items-start hover:bg-gray-50"])}" data-v-ac31c2b4><span class="text-base md:text-xl xl:text-2xl pr-8 text-left" data-v-ac31c2b4>${ssrInterpolate(faq.question)}</span><span class="${ssrRenderClass([{ "rotate-45": openFaqs.value.includes(index) }, "text-2xl transform transition-transform duration-300 flex-shrink-0"])}" data-v-ac31c2b4>+</span></div><div style="${ssrRenderStyle(openFaqs.value.includes(index) ? null : { display: "none" })}" class="p-4 md:p-6 text-sm md:text-base xl:text-lg text-black-70 border-t border-black origin-top whitespace-pre-line" data-v-ac31c2b4>${faq.answer ?? ""}</div></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-8 text-center" data-v-ac31c2b4>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          "phone-number": "https://wa.me/message/2F4O6ZT7YH5RG1",
          text: "Ask questions on WhatsApp"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AiContestFaq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AiContestFaq = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ac31c2b4"]]);
const _sfc_main = {
  __name: "EFW_AICONTEST",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryImages = ref([]);
    const selectedImage = ref(null);
    const instagramReels = ref([]);
    const currentReelIndex = ref(0);
    const visibleReels = ref(1);
    const currentPage = ref(0);
    const autoPlayInterval = ref(null);
    for (let i = 1; i <= 19; i++) {
      galleryImages.value.push(`https://storage.yandexcloud.net/videos-meyou/efw2025/ai/photo-ai-${i}.png`);
    }
    const totalPages = computed(() => {
      return Math.ceil(instagramReels.value.length / visibleReels.value);
    });
    const startAutoPlay = () => {
      if (instagramReels.value.length > visibleReels.value) {
        autoPlayInterval.value = setInterval();
      }
    };
    watch(instagramReels, async (newReels) => {
      if (newReels.length > 0) {
        await nextTick();
        setTimeout(() => {
          if ((void 0).instgrm && (void 0).instgrm.Embeds) {
            console.log("Processing Instagram embeds after data change...");
            (void 0).instgrm.Embeds.process();
          }
        }, 100);
        startAutoPlay();
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6b75023d>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        title: "AI Advertising Contest - Emirates Fashion Week Dubai 2025",
        description: "Join the AI Advertising Contest for Emirates Fashion Week Spring/Summer 2025/2026. Create Instagram Reels and Stories using AI tools. Win prizes and contracts!",
        keywords: "AI Advertising Contest, Emirates Fashion Week, Dubai Fashion Event, AI tools, Instagram Reels, Fashion Week 2025"
      }, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8" data-v-6b75023d><section class="md:mb-[76px] mb-[56px]" data-v-6b75023d><h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-left" data-v-6b75023d> Emirates Fashion Week – AI Advertising Contest </h1><div class="max-w-4xl" data-v-6b75023d><p class="text-sm md:text-base xl:text-lg leading-relaxed text-left" data-v-6b75023d> We are excited to launch the <strong data-v-6b75023d>AI Advertising Contest</strong> for the upcoming <strong data-v-6b75023d>14th Emirates Fashion Week, Spring/Summer 2025/2026</strong>,<br data-v-6b75023d> taking place <strong data-v-6b75023d>8–1 1 November 2025 in Dubai</strong>. </p></div></section><section class="md:mb-[76px] mb-[56px]" data-v-6b75023d><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-6b75023d>TERMS</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-6b75023d><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-6b75023d><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-6b75023d>Who can participate</h3><p class="text-sm md:text-base xl:text-lg mb-4" data-v-6b75023d> Anyone, anywhere. Use <strong data-v-6b75023d>any AI tools</strong> to create <strong data-v-6b75023d>Instagram Reels/Stories</strong> (video-editing allowed). </p><h4 class="text-sm md:text-base xl:text-lg font-semibold mb-2" data-v-6b75023d><strong data-v-6b75023d>Requirements</strong></h4><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-6b75023d><li data-v-6b75023d>• <strong data-v-6b75023d>Format:</strong> 9:16 vertical</li><li data-v-6b75023d>• <strong data-v-6b75023d>Duration:</strong> any for Reels/Stories</li><li data-v-6b75023d>• <strong data-v-6b75023d>Must include date &amp; EFW brand:</strong> <strong data-v-6b75023d>8–11 November 2025, Dubai + Emirates Fashion Week</strong> (<a href="https://storage.yandexcloud.net/videos-meyou/efw2025/ai/DrSugiyama-Regular.ttf" download="DrSugiyama-Regular.ttf" class="text-blue-600 hover:text-blue-800 underline font-semibold" data-v-6b75023d> Dr Sugiyama </a> preferred)</li></ul></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-6b75023d><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-6b75023d>How to submit</h3><ol class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-6b75023d><li data-v-6b75023d>1. Post your Reels/Story on your Instagram.</li><li data-v-6b75023d>2. Tag <a href="https://instagram.com/emirates_fashionweek" target="_blank" class="text-blue-600 hover:text-blue-800 underline" data-v-6b75023d> @emirates_fashionweek </a> (not a collaboration—just a tag).</li><li data-v-6b75023d>3. Entries <strong data-v-6b75023d>accepted only if reposted</strong> by our official account.</li></ol><div class="p-4 bg-yellow-50 border-l-4 border-yellow-400" data-v-6b75023d><h4 class="text-sm md:text-base xl:text-lg font-semibold text-yellow-800 mb-2" data-v-6b75023d><strong data-v-6b75023d>Fake Account Alert</strong></h4><p class="text-sm md:text-base xl:text-lg text-yellow-700" data-v-6b75023d> We detected a <strong data-v-6b75023d>fake account</strong> using our name and unclear activity. Tag <strong data-v-6b75023d>only</strong> the official: <a href="https://instagram.com/emirates_fashionweek" target="_blank" class="text-blue-600 hover:text-blue-800 underline font-semibold" data-v-6b75023d> @emirates_fashionweek </a> (black logo + blue verified sign). </p></div></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-6b75023d><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-6b75023d>Optional</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-6b75023d><li data-v-6b75023d>• May use past EFW looks/highlights <a href="https://emiratesfashionweeks.com/gallery-ss-26" class="text-blue-600 underline" target="_blank" data-v-6b75023d>Gallery</a> and designers&#39; looks.</li><li data-v-6b75023d>• May use program note: <strong data-v-6b75023d>8–9 Nov</strong> Catwalk Runway · <strong data-v-6b75023d>10–11 Nov</strong> Pop-up Market (Beauty &amp; Wellness).</li><li data-v-6b75023d>• <strong data-v-6b75023d>Face of EFW:</strong> you may use faces listed in the authorized pool; the list will expand over time.</li><li data-v-6b75023d>• <strong data-v-6b75023d>Reference assets below:</strong> venue/location photos and Faces of EFW images are provided as <strong data-v-6b75023d>optional</strong> references. <strong data-v-6b75023d>You do not have to use any or all</strong> of them — your creativity is not restricted.</li></ul></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-6b75023d><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-6b75023d>Prizes (Prize Stack)</h3><p class="text-sm md:text-base xl:text-lg mb-3" data-v-6b75023d>Winners may receive:</p><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-6b75023d><li data-v-6b75023d>• <strong data-v-6b75023d>Contract</strong> for ongoing AI ads with Emirates Fashion Week.</li><li data-v-6b75023d>• <strong data-v-6b75023d>Annual AI-tool fee coverage:</strong> $500 / $200 / $100.</li><li data-v-6b75023d>• <strong data-v-6b75023d>Official recommendation letters</strong> confirming use in EFW media.</li><li data-v-6b75023d>• <strong data-v-6b75023d>Potential paid contracts</strong> with participating designers (up to <strong data-v-6b75023d>40</strong>) for AI ads of their looks.</li><li data-v-6b75023d>• <strong data-v-6b75023d>Screening</strong> on giant LED screens during Fashion Week.</li><li data-v-6b75023d>• <strong data-v-6b75023d>LinkedIn-ready badge</strong> confirming participation in the EFW campaign.</li><li data-v-6b75023d>• <strong data-v-6b75023d>Featured website gallery</strong> with credits and links.</li></ul></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-6b75023d><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-6b75023d>Open Calls (Partners Welcome)</h3><ul class="text-sm md:text-base xl:text-lg space-y-3" data-v-6b75023d><li data-v-6b75023d>• <strong data-v-6b75023d>Brands:</strong> We invite product brands to supply product images/packshots and brand assets for creators to integrate into their AI ads; in return, please contribute additional prizes for creators. (Assets must be cleared for contest-limited use; brand retains IP.)</li><li data-v-6b75023d>• <strong data-v-6b75023d>AI Platforms:</strong> We welcome AI-generation companies to provide creator credits/vouchers for participants.</li><li data-v-6b75023d>• <strong data-v-6b75023d>Celebrities / Stylists / Designers:</strong> If you&#39;re willing to opt in your likeness, we&#39;ll add you to the authorized Face of EFW pool for use within this contest.</li></ul></div></div></section><section class="md:mb-[76px] mb-[56px]" data-v-6b75023d><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-6b75023d>FOOTNOTE / LEGAL</h2><div class="bg-gray-50 rounded-2xl p-6" data-v-6b75023d><ul class="text-sm md:text-base xl:text-lg space-y-3 text-gray-700" data-v-6b75023d><li data-v-6b75023d>• Content must be respectful and lawful; no defamatory, misleading, hateful, political, or privacy-invasive content.</li><li data-v-6b75023d>• No deepfake &quot;statements&quot; or fabricated claims of endorsement/partnership by individuals or brands.</li><li data-v-6b75023d>• Face of EFW images may be used only from the authorized pool published on EFW channels; attribution will be provided where applicable.</li><li data-v-6b75023d>• By submitting, you grant EFW a non-exclusive, revocable license to repost, screen at the event, and feature your work with credit; you retain IP.</li><li data-v-6b75023d>• The Face of EFW list will expand over time; check updates before publishing.</li></ul></div></section>`);
      _push(ssrRenderComponent(FacesOfEfwSection, null, null, _parent));
      _push(`<section class="md:mb-[76px] mb-[56px]" data-v-6b75023d>`);
      if (instagramReels.value.length > 0) {
        _push(`<div data-v-6b75023d><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-6b75023d>CREATOR SHOWCASES</h2><div class="lg:hidden" data-v-6b75023d><div class="flex overflow-x-auto hide-scrollbar -mx-4 px-4 gap-2" data-v-6b75023d><!--[-->`);
        ssrRenderList(instagramReels.value, (reel, index) => {
          _push(`<div class="flex-shrink-0" data-v-6b75023d><div class="bg-white rounded-2xl h-[500px] flex flex-col" data-v-6b75023d><div class="flex-1 flex items-center justify-center" data-v-6b75023d><blockquote class="instagram-media"${ssrRenderAttr("data-instgrm-permalink", reel)} data-instgrm-version="14" style="${ssrRenderStyle({ "background": "#FFF", "border": "0", "border-radius": "12px", "margin": "0", "padding": "0", "width": "100%", "height": "400px" })}" data-v-6b75023d><div style="${ssrRenderStyle({ "padding": "0", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-6b75023d><a${ssrRenderAttr("href", reel)} style="${ssrRenderStyle({ "background": "#FFFFFF", "line-height": "0", "padding": "0", "text-align": "center", "text-decoration": "none", "width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" target="_blank" data-v-6b75023d></a></div></blockquote></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="hidden lg:block relative" data-v-6b75023d><div class="overflow-hidden" data-v-6b75023d><div class="flex transition-transform duration-500 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${currentReelIndex.value * (100 / visibleReels.value)})` })}" data-v-6b75023d><!--[-->`);
        ssrRenderList(instagramReels.value, (reel, index) => {
          _push(`<div class="flex-shrink-0" style="${ssrRenderStyle({ width: `${100 / visibleReels.value}%` })}" data-v-6b75023d><div class="bg-white rounded-2xl p-4 mx-4 flex flex-col h-[600px]" data-v-6b75023d><div class="flex-1 flex items-center justify-center" data-v-6b75023d><blockquote class="instagram-media"${ssrRenderAttr("data-instgrm-permalink", reel)} data-instgrm-version="14" style="${ssrRenderStyle({ "background": "#FFF", "border": "0", "border-radius": "12px", "margin": "0", "padding": "0", "width": "100%", "max-width": "320px", "height": "500px" })}" data-v-6b75023d><div style="${ssrRenderStyle({ "padding": "0", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-6b75023d><a${ssrRenderAttr("href", reel)} style="${ssrRenderStyle({ "background": "#FFFFFF", "line-height": "0", "padding": "0", "text-align": "center", "text-decoration": "none", "width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" target="_blank" data-v-6b75023d></a></div></blockquote></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (instagramReels.value.length > visibleReels.value) {
          _push(`<button class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10" data-v-6b75023d><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6b75023d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-6b75023d></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        if (instagramReels.value.length > visibleReels.value) {
          _push(`<button class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10" data-v-6b75023d><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6b75023d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-6b75023d></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        if (instagramReels.value.length > visibleReels.value) {
          _push(`<div class="flex justify-center mt-6 space-x-2" data-v-6b75023d><!--[-->`);
          ssrRenderList(totalPages.value, (page, index) => {
            _push(`<button class="${ssrRenderClass([index === currentPage.value ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400", "w-3 h-3 rounded-full transition-all duration-200"])}" data-v-6b75023d></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="md:mb-[76px] mb-[56px]" data-v-6b75023d><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-6b75023d>OPTIONAL REFERENCE GALLERY</h2><div class="block sm:hidden" data-v-6b75023d><div class="overflow-x-auto hide-scrollbar -mx-4" data-v-6b75023d><div class="flex gap-4 px-4 pb-4" data-v-6b75023d><!--[-->`);
      ssrRenderList(galleryImages.value, (image, index) => {
        _push(`<div class="flex-shrink-0 h-48 overflow-hidden transition-all duration-300 group" data-v-6b75023d><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `AI Contest Photo ${index + 1}`)} class="h-full w-auto max-w-[80vw] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" data-v-6b75023d></div>`);
      });
      _push(`<!--]--></div></div></div><div class="hidden sm:block" data-v-6b75023d><div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4" data-v-6b75023d><!--[-->`);
      ssrRenderList(galleryImages.value, (image, index) => {
        _push(`<div class="break-inside-avoid" data-v-6b75023d><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `AI Contest Photo ${index + 1}`)} class="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-v-6b75023d></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(AiContestFaq, null, null, _parent));
      _push(`</div>`);
      if (selectedImage.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" data-v-6b75023d><div class="relative max-w-4xl max-h-full" data-v-6b75023d><button class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75" data-v-6b75023d> × </button><img${ssrRenderAttr("src", selectedImage.value)} alt="Gallery Image" class="max-w-full max-h-full object-contain rounded-lg" data-v-6b75023d></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/EFW_AICONTEST.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EFW_AICONTEST = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b75023d"]]);
export {
  EFW_AICONTEST as default
};
//# sourceMappingURL=EFW_AICONTEST-Ch0frM4d.js.map
