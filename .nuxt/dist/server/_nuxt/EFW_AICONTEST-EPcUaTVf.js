import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { computed, mergeProps, useSSRContext, ref, watch, nextTick } from "vue";
import { _ as _sfc_main$3 } from "./AppSeo-D3mYHa43.js";
import { F as FacesOfEfwSection } from "./FacesOfEfwSection-kFEAmP4Z.js";
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
const _sfc_main$2 = {
  __name: "WhatsAppButton",
  __ssrInlineRender: true,
  props: {
    phoneNumber: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: "Contact us on WhatsApp"
    }
  },
  setup(__props) {
    const props = __props;
    const whatsappLink = computed(() => {
      if (props.phoneNumber.startsWith("http")) {
        return props.phoneNumber;
      }
      return `https://wa.me/${props.phoneNumber}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: whatsappLink.value,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors bg-[#25D366] text-white hover:bg-[#128C7E] w-fit"
      }, _attrs))}><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> ${ssrInterpolate(__props.text)}</a>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/WhatsAppButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a6f479b3>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        title: "AI Advertising Contest - Emirates Fashion Week Dubai 2025",
        description: "Join the AI Advertising Contest for Emirates Fashion Week Spring/Summer 2025/2026. Create Instagram Reels and Stories using AI tools. Win prizes and contracts!",
        keywords: "AI Advertising Contest, Emirates Fashion Week, Dubai Fashion Event, AI tools, Instagram Reels, Fashion Week 2025"
      }, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8" data-v-a6f479b3><section class="md:mb-[76px] mb-[56px]" data-v-a6f479b3><h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-left" data-v-a6f479b3> Emirates Fashion Week – AI Advertising Contest </h1><div class="max-w-4xl" data-v-a6f479b3><p class="text-sm md:text-base xl:text-lg leading-relaxed text-left" data-v-a6f479b3> We are excited to launch the <strong data-v-a6f479b3>AI Advertising Contest</strong> for the upcoming <strong data-v-a6f479b3>14th Emirates Fashion Week, Spring/Summer 2025/2026</strong>,<br data-v-a6f479b3> taking place <strong data-v-a6f479b3>8–1 1 November 2025 in Dubai</strong>. </p></div></section><section class="md:mb-[76px] mb-[56px]" data-v-a6f479b3><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-a6f479b3>TERMS</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-a6f479b3><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-a6f479b3><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-a6f479b3>Who can participate</h3><p class="text-sm md:text-base xl:text-lg mb-4" data-v-a6f479b3> Anyone, anywhere. Use <strong data-v-a6f479b3>any AI tools</strong> to create <strong data-v-a6f479b3>Instagram Reels/Stories</strong> (video-editing allowed). </p><h4 class="text-sm md:text-base xl:text-lg font-semibold mb-2" data-v-a6f479b3><strong data-v-a6f479b3>Requirements</strong></h4><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-a6f479b3><li data-v-a6f479b3>• <strong data-v-a6f479b3>Format:</strong> 9:16 vertical</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Duration:</strong> any for Reels/Stories</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Must include date &amp; EFW brand:</strong> <strong data-v-a6f479b3>8–11 November 2025, Dubai + Emirates Fashion Week</strong> (<a href="https://storage.yandexcloud.net/videos-meyou/efw2025/ai/DrSugiyama-Regular.ttf" download="DrSugiyama-Regular.ttf" class="text-blue-600 hover:text-blue-800 underline font-semibold" data-v-a6f479b3> Dr Sugiyama </a> preferred)</li></ul></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-a6f479b3><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-a6f479b3>How to submit</h3><ol class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-a6f479b3><li data-v-a6f479b3>1. Post your Reels/Story on your Instagram.</li><li data-v-a6f479b3>2. Tag <a href="https://instagram.com/emirates_fashionweek" target="_blank" class="text-blue-600 hover:text-blue-800 underline" data-v-a6f479b3> @emirates_fashionweek </a> (not a collaboration—just a tag).</li><li data-v-a6f479b3>3. Entries <strong data-v-a6f479b3>accepted only if reposted</strong> by our official account.</li></ol><div class="p-4 bg-yellow-50 border-l-4 border-yellow-400" data-v-a6f479b3><h4 class="text-sm md:text-base xl:text-lg font-semibold text-yellow-800 mb-2" data-v-a6f479b3><strong data-v-a6f479b3>Fake Account Alert</strong></h4><p class="text-sm md:text-base xl:text-lg text-yellow-700" data-v-a6f479b3> We detected a <strong data-v-a6f479b3>fake account</strong> using our name and unclear activity. Tag <strong data-v-a6f479b3>only</strong> the official: <a href="https://instagram.com/emirates_fashionweek" target="_blank" class="text-blue-600 hover:text-blue-800 underline font-semibold" data-v-a6f479b3> @emirates_fashionweek </a> (black logo + blue verified sign). </p></div></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-a6f479b3><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-a6f479b3>Optional</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-a6f479b3><li data-v-a6f479b3>• May use past EFW looks/highlights <a href="https://emiratesfashionweeks.com/gallery" class="text-blue-600 underline" target="_blank" data-v-a6f479b3>Gallery</a> and designers&#39; looks.</li><li data-v-a6f479b3>• May use program note: <strong data-v-a6f479b3>8–9 Nov</strong> Catwalk Runway · <strong data-v-a6f479b3>10–11 Nov</strong> Pop-up Market (Beauty &amp; Wellness).</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Face of EFW:</strong> you may use faces listed in the authorized pool; the list will expand over time.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Reference assets below:</strong> venue/location photos and Faces of EFW images are provided as <strong data-v-a6f479b3>optional</strong> references. <strong data-v-a6f479b3>You do not have to use any or all</strong> of them — your creativity is not restricted.</li></ul></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-a6f479b3><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-a6f479b3>Prizes (Prize Stack)</h3><p class="text-sm md:text-base xl:text-lg mb-3" data-v-a6f479b3>Winners may receive:</p><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-a6f479b3><li data-v-a6f479b3>• <strong data-v-a6f479b3>Contract</strong> for ongoing AI ads with Emirates Fashion Week.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Annual AI-tool fee coverage:</strong> $500 / $200 / $100.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Official recommendation letters</strong> confirming use in EFW media.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Potential paid contracts</strong> with participating designers (up to <strong data-v-a6f479b3>40</strong>) for AI ads of their looks.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Screening</strong> on giant LED screens during Fashion Week.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>LinkedIn-ready badge</strong> confirming participation in the EFW campaign.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Featured website gallery</strong> with credits and links.</li></ul></div><div class="bg-white rounded-2xl p-6 shadow-lg" data-v-a6f479b3><h3 class="text-base md:text-xl xl:text-2xl font-bold mb-4" data-v-a6f479b3>Open Calls (Partners Welcome)</h3><ul class="text-sm md:text-base xl:text-lg space-y-3" data-v-a6f479b3><li data-v-a6f479b3>• <strong data-v-a6f479b3>Brands:</strong> We invite product brands to supply product images/packshots and brand assets for creators to integrate into their AI ads; in return, please contribute additional prizes for creators. (Assets must be cleared for contest-limited use; brand retains IP.)</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>AI Platforms:</strong> We welcome AI-generation companies to provide creator credits/vouchers for participants.</li><li data-v-a6f479b3>• <strong data-v-a6f479b3>Celebrities / Stylists / Designers:</strong> If you&#39;re willing to opt in your likeness, we&#39;ll add you to the authorized Face of EFW pool for use within this contest.</li></ul></div></div></section><section class="md:mb-[76px] mb-[56px]" data-v-a6f479b3><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-a6f479b3>FOOTNOTE / LEGAL</h2><div class="bg-gray-50 rounded-2xl p-6" data-v-a6f479b3><ul class="text-sm md:text-base xl:text-lg space-y-3 text-gray-700" data-v-a6f479b3><li data-v-a6f479b3>• Content must be respectful and lawful; no defamatory, misleading, hateful, political, or privacy-invasive content.</li><li data-v-a6f479b3>• No deepfake &quot;statements&quot; or fabricated claims of endorsement/partnership by individuals or brands.</li><li data-v-a6f479b3>• Face of EFW images may be used only from the authorized pool published on EFW channels; attribution will be provided where applicable.</li><li data-v-a6f479b3>• By submitting, you grant EFW a non-exclusive, revocable license to repost, screen at the event, and feature your work with credit; you retain IP.</li><li data-v-a6f479b3>• The Face of EFW list will expand over time; check updates before publishing.</li></ul></div></section>`);
      _push(ssrRenderComponent(FacesOfEfwSection, null, null, _parent));
      _push(`<section class="md:mb-[76px] mb-[56px]" data-v-a6f479b3>`);
      if (instagramReels.value.length > 0) {
        _push(`<div data-v-a6f479b3><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-a6f479b3>CREATOR SHOWCASES</h2><div class="lg:hidden" data-v-a6f479b3><div class="flex overflow-x-auto hide-scrollbar -mx-4 px-4 gap-2" data-v-a6f479b3><!--[-->`);
        ssrRenderList(instagramReels.value, (reel, index) => {
          _push(`<div class="flex-shrink-0" data-v-a6f479b3><div class="bg-white rounded-2xl h-[500px] flex flex-col" data-v-a6f479b3><div class="flex-1 flex items-center justify-center" data-v-a6f479b3><blockquote class="instagram-media"${ssrRenderAttr("data-instgrm-permalink", reel)} data-instgrm-version="14" style="${ssrRenderStyle({ "background": "#FFF", "border": "0", "border-radius": "12px", "margin": "0", "padding": "0", "width": "100%", "height": "400px" })}" data-v-a6f479b3><div style="${ssrRenderStyle({ "padding": "0", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-a6f479b3><a${ssrRenderAttr("href", reel)} style="${ssrRenderStyle({ "background": "#FFFFFF", "line-height": "0", "padding": "0", "text-align": "center", "text-decoration": "none", "width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" target="_blank" data-v-a6f479b3></a></div></blockquote></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="hidden lg:block relative" data-v-a6f479b3><div class="overflow-hidden" data-v-a6f479b3><div class="flex transition-transform duration-500 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${currentReelIndex.value * (100 / visibleReels.value)})` })}" data-v-a6f479b3><!--[-->`);
        ssrRenderList(instagramReels.value, (reel, index) => {
          _push(`<div class="flex-shrink-0" style="${ssrRenderStyle({ width: `${100 / visibleReels.value}%` })}" data-v-a6f479b3><div class="bg-white rounded-2xl p-4 mx-4 flex flex-col h-[600px]" data-v-a6f479b3><div class="flex-1 flex items-center justify-center" data-v-a6f479b3><blockquote class="instagram-media"${ssrRenderAttr("data-instgrm-permalink", reel)} data-instgrm-version="14" style="${ssrRenderStyle({ "background": "#FFF", "border": "0", "border-radius": "12px", "margin": "0", "padding": "0", "width": "100%", "max-width": "320px", "height": "500px" })}" data-v-a6f479b3><div style="${ssrRenderStyle({ "padding": "0", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-a6f479b3><a${ssrRenderAttr("href", reel)} style="${ssrRenderStyle({ "background": "#FFFFFF", "line-height": "0", "padding": "0", "text-align": "center", "text-decoration": "none", "width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "center" })}" target="_blank" data-v-a6f479b3></a></div></blockquote></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (instagramReels.value.length > visibleReels.value) {
          _push(`<button class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10" data-v-a6f479b3><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a6f479b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-a6f479b3></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        if (instagramReels.value.length > visibleReels.value) {
          _push(`<button class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10" data-v-a6f479b3><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a6f479b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-a6f479b3></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        if (instagramReels.value.length > visibleReels.value) {
          _push(`<div class="flex justify-center mt-6 space-x-2" data-v-a6f479b3><!--[-->`);
          ssrRenderList(totalPages.value, (page, index) => {
            _push(`<button class="${ssrRenderClass([index === currentPage.value ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400", "w-3 h-3 rounded-full transition-all duration-200"])}" data-v-a6f479b3></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="md:mb-[76px] mb-[56px]" data-v-a6f479b3><h2 class="text-2xl md:text-3xl font-bold text-left mb-8" data-v-a6f479b3>OPTIONAL REFERENCE GALLERY</h2><div class="block sm:hidden" data-v-a6f479b3><div class="overflow-x-auto hide-scrollbar -mx-4" data-v-a6f479b3><div class="flex gap-4 px-4 pb-4" data-v-a6f479b3><!--[-->`);
      ssrRenderList(galleryImages.value, (image, index) => {
        _push(`<div class="flex-shrink-0 h-48 overflow-hidden transition-all duration-300 group" data-v-a6f479b3><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `AI Contest Photo ${index + 1}`)} class="h-full w-auto max-w-[80vw] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" data-v-a6f479b3></div>`);
      });
      _push(`<!--]--></div></div></div><div class="hidden sm:block" data-v-a6f479b3><div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4" data-v-a6f479b3><!--[-->`);
      ssrRenderList(galleryImages.value, (image, index) => {
        _push(`<div class="break-inside-avoid" data-v-a6f479b3><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `AI Contest Photo ${index + 1}`)} class="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-v-a6f479b3></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(AiContestFaq, null, null, _parent));
      _push(`</div>`);
      if (selectedImage.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" data-v-a6f479b3><div class="relative max-w-4xl max-h-full" data-v-a6f479b3><button class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75" data-v-a6f479b3> × </button><img${ssrRenderAttr("src", selectedImage.value)} alt="Gallery Image" class="max-w-full max-h-full object-contain rounded-lg" data-v-a6f479b3></div></div>`);
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
const EFW_AICONTEST = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6f479b3"]]);
export {
  EFW_AICONTEST as default
};
//# sourceMappingURL=EFW_AICONTEST-EPcUaTVf.js.map
