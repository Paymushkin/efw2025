import { _ as _sfc_main$2 } from "./AppSeo-Bb_QAAbw.js";
import { ref, computed, mergeProps, useSSRContext, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useCompaniesCount } from "./useCompaniesCount-BOY74o7o.js";
import { _ as _sfc_main$4 } from "./BaseButton-BBGwxqcq.js";
import { _ as _sfc_main$3 } from "./WhatsAppButton-DIYmnQXx.js";
import { F as FaqSectionDynamic } from "./FaqSectionDynamic-y7bg5agB.js";
import { I as Image9, a as Image11, C as CompaniesList, W as WaitlistForm } from "./trial_compare-B5oJUD3U.js";
import { A as ApprovedCompaniesList } from "./ApprovedCompaniesList-Cx9PN_uy.js";
import { _ as _export_sfc } from "../server.mjs";
import { G as GalleryIframe } from "./GalleryIframe-BBxmZOiV.js";
import { s as station2 } from "./station-2-Dn8AZ31q.js";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
const Image1 = "" + __buildAssetsURL("stand-1.CaGLytFP.webp");
const _sfc_main$1 = {
  __name: "PhotoGallery",
  __ssrInlineRender: true,
  setup(__props) {
    const isModalOpen = ref(false);
    const currentPhotoIndex = ref(0);
    const photos = computed(() => {
      const photoUrls = [];
      for (let i = 1; i <= 30; i++) {
        photoUrls.push({
          url: `https://storage.yandexcloud.net/videos-meyou/efw2025/photos/photo-${i}.JPG`,
          loaded: false
        });
      }
      return photoUrls;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mb-[50px] md:mb-[80px] xl:mb-[100px]" }, _attrs))} data-v-23509f6a><h2 class="text-xl md:text-4xl mb-[75px]" data-v-23509f6a>PHOTO GALLERY</h2><div class="md:hidden" data-v-23509f6a><div class="relative -mx-4 px-4" data-v-23509f6a><div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" data-v-23509f6a><!--[-->`);
      ssrRenderList(photos.value, (photo, index) => {
        _push(`<div class="flex-shrink-0 w-[85%] h-64 cursor-pointer snap-center" data-v-23509f6a><img${ssrRenderAttr("src", photo.url)}${ssrRenderAttr("alt", `Photo ${index + 1}`)} class="w-full h-full object-cover rounded-lg" loading="lazy" data-v-23509f6a></div>`);
      });
      _push(`<!--]--></div></div></div><div class="hidden md:block" data-v-23509f6a><div class="columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4" data-v-23509f6a><!--[-->`);
      ssrRenderList(photos.value, (photo, index) => {
        _push(`<div class="break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity duration-300" data-v-23509f6a><img${ssrRenderAttr("src", photo.url)}${ssrRenderAttr("alt", `Photo ${index + 1}`)} class="w-full h-auto object-contain" loading="lazy" data-v-23509f6a></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (isModalOpen.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" data-v-23509f6a><div class="relative max-w-4xl max-h-full" data-v-23509f6a><button class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors" data-v-23509f6a> × </button><img${ssrRenderAttr("src", photos.value[currentPhotoIndex.value]?.url)}${ssrRenderAttr("alt", `Photo ${currentPhotoIndex.value + 1}`)} class="max-w-full max-h-full object-contain rounded-lg" data-v-23509f6a><div class="flex justify-between items-center mt-4 text-white" data-v-23509f6a><button${ssrIncludeBooleanAttr(currentPhotoIndex.value === 0) ? " disabled" : ""} class="px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" data-v-23509f6a> Previous </button><span class="text-lg" data-v-23509f6a>${ssrInterpolate(currentPhotoIndex.value + 1)} / ${ssrInterpolate(photos.value.length)}</span><button${ssrIncludeBooleanAttr(currentPhotoIndex.value === photos.value.length - 1) ? " disabled" : ""} class="px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" data-v-23509f6a> Next </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhotoGallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PhotoGallery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23509f6a"]]);
const Image2 = "" + __buildAssetsURL("corner-1.DlOOUlte.webp");
const Image4 = "" + __buildAssetsURL("schema-1.BaiMdGgL.webp");
const Image8 = "" + __buildAssetsURL("schema-5.D9HcK2DM.webp");
const _sfc_main = {
  __name: "offer",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const showWhatsApp = computed(() => !!route.query.wp);
    const whatsappNumber = computed(() => route.query.wp || "971529833054");
    const showTrial = computed(() => "tr" in route.query);
    computed(() => "waitlist" in route.query);
    const showApproved = computed(() => "approved" in route.query);
    const showWaitlistForm = ref(false);
    const companiesListRef = ref(null);
    const approvedCompaniesListRef = ref(null);
    const { companiesCount, updateCompaniesCount: updateGlobalCount } = useCompaniesCount();
    const approvedCount = ref(0);
    const updateCompaniesCount = (count) => {
      updateGlobalCount(count);
      const trialCountElement1 = (void 0).getElementById("trial-waitlist-count-1");
      if (trialCountElement1) {
        trialCountElement1.textContent = count;
      }
      const trialCountElement2 = (void 0).getElementById("trial-waitlist-count-2");
      if (trialCountElement2) {
        trialCountElement2.textContent = count;
      }
      const trialCountOffer1 = (void 0).getElementById("trial-waitlist-count-offer-1");
      if (trialCountOffer1) {
        trialCountOffer1.textContent = count;
      }
      const trialCountOffer2 = (void 0).getElementById("trial-waitlist-count-offer-2");
      if (trialCountOffer2) {
        trialCountOffer2.textContent = count;
      }
    };
    const updateApprovedCount = (count) => {
      approvedCount.value = count;
    };
    const handleWaitlistSuccess = async (newCompanyData) => {
      if (companiesListRef.value) {
        companiesListRef.value.refresh(newCompanyData);
      }
      companiesCount.value += 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSeo = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-49ede910><div class="container mx-auto px-4 py-8 max-w-7xl" data-v-49ede910>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Hot Offers - Emirates Fashion Week Dubai 2025",
        description: "Emirates Fashion Week Dubai 2025: Beauty meets business. Showcase spots for beauty service companies and designer pop-up corners. Join us on April 13-15, 2025.",
        keywords: "Emirates Fashion Week, Dubai Fashion, Beauty Services, Designer Pop-up, Fashion Show 2025, Dubai Events, Beauty Business"
      }, null, _parent));
      _push(`<section class="flex flex-col justify-between gap-5 mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-49ede910><h1 class="text-xl md:text-4xl xl:mb-10" data-v-49ede910>HOT OFFERS</h1><div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:gap-12 gap-7" data-v-49ede910><div data-v-49ede910><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-49ede910>EFW Pop-up Market</h3><p class="text-sm md:text-base xl:text-lg" data-v-49ede910> Two days featuring <b data-v-49ede910>60 Showcase Spots</b> for beauty service companies<br data-v-49ede910>and <b data-v-49ede910>40 Designer Pop-Up Corners</b> with exclusive promotional offers <br data-v-49ede910><br data-v-49ede910><b data-v-49ede910>BEAUTY DAY</b> | 10 November 2025 | Monday <br data-v-49ede910><b data-v-49ede910>WELLNESS DAY</b> | 11 November 2025 | Tuesday </p></div><div data-v-49ede910><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-49ede910>Beauty Day</h3><ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-49ede910><li data-v-49ede910>• Beauty &amp; cosmetics brands</li><li data-v-49ede910>• MUAs, nails, brows &amp; lashes</li><li data-v-49ede910>• Skincare &amp; dermatology</li><li data-v-49ede910>• Fragrance &amp; perfumes</li><li data-v-49ede910>• Health &amp; wellness</li><li data-v-49ede910>• Fitness &amp; events</li></ul></div><div class="flex flex-col md:gap-4 gap-2" data-v-49ede910><h3 class="md:text-2xl font-bold" data-v-49ede910>Wellness Day</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-49ede910><li data-v-49ede910>• Medical &amp; aesthetic clinics</li><li data-v-49ede910>• Health &amp; wellness tourism, nutrition</li><li data-v-49ede910>• Oral care &amp; dental aesthetics</li><li data-v-49ede910>• Spas, massage, gyms &amp; barbers</li><li data-v-49ede910>• Salon, clinic &amp; tools/equipment suppliers</li><li data-v-49ede910>• Beauty tech: CRM, booking, payments</li></ul></ul></div></div></section><section class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-49ede910><h2 class="text-xl md:text-4xl xl:mb-[75px] md:mb-[50px] mb-7" data-v-49ede910>SHOWCASE SPOT</h2><div class="relative -mx-4 md:mx-0 mb-8" data-v-49ede910><div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-49ede910><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><video class="w-full h-full object-cover" muted autoplay loop playsinline${ssrRenderAttr("poster", Image1)} data-v-49ede910><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4" type="video/mp4" data-v-49ede910> Your browser does not support the video tag. </video></div><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><img${ssrRenderAttr("src", unref(Image1))} alt="Showcase interior" class="w-full h-full object-contain" data-v-49ede910></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:gap-12 gap-7 mb-8" data-v-49ede910><div data-v-49ede910><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-49ede910>Good for:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><li data-v-49ede910>• Medical &amp; Aesthetic Clinics – General clinics, plastic surgery, dentistry.   </li><li data-v-49ede910>• Health &amp; Wellness – Nutritionists, dietitians, medical &amp; wellness tourism.</li><br data-v-49ede910><br data-v-49ede910><li data-v-49ede910>• Beauty &amp; Cosmetics – Cosmetic brands, makeup artists, brow &amp; lash services, nail care.</li><li data-v-49ede910>• Personal Care &amp; Wellness – Cosmetology, massage, salons, spas, barbershops.</li><br data-v-49ede910><br data-v-49ede910><li data-v-49ede910>• Fitness &amp; Events – Gyms, wellness studios, wedding makeup &amp; beauty services.</li><li data-v-49ede910>• Education &amp; Training – Schools and courses for makeup, cosmetology, and nail services.</li><br data-v-49ede910><br data-v-49ede910><li data-v-49ede910>• Beauty Tech &amp; Software – CRM, online booking, payment solutions for salons.</li><li data-v-49ede910>• Salon &amp; Clinic Equipment – Furniture and professional tools for beauty salons &amp; medical clinics.</li></ul></div><div class="border border-gray-300 rounded-lg p-4" data-v-49ede910><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-49ede910>What&#39;s Included:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-49ede910><li data-v-49ede910><b data-v-49ede910>A)</b> One of the 80 Showcase Spots: <ul class="pl-4 space-y-2 mt-2" data-v-49ede910><li data-v-49ede910>- 8, 9 November (runway days) 20 Spots in the corridors</li><li data-v-49ede910>- 10, 11 November (market days) 20 Spots in the corridors + 60 Spots in the main hall </li></ul></li><br data-v-49ede910><br data-v-49ede910><li class="font-bold" data-v-49ede910>B) 50 lead chats per day from EFW visitors (Our Matchmaking technology)</li><li data-v-49ede910><b data-v-49ede910>C) 50”</b> Display for presentations with a table and 2 bar chairs </li><br data-v-49ede910><br data-v-49ede910><li data-v-49ede910><b data-v-49ede910>D)</b> VIP invitations to all EFW runway shows on 8–11 November 2025</li></ul><br data-v-49ede910><br data-v-49ede910><div class="flex items-start text-sm md:text-base xl:text-lg" data-v-49ede910><svg class="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-49ede910><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-v-49ede910></path></svg><div data-v-49ede910><p class="font-medium mb-2" data-v-49ede910><b data-v-49ede910>Laptops are not provided.</b> Each exhibitor must bring their own laptop and connect it to the display via HDMI to showcase their company&#39;s video or presentation.</p></div></div></div><div class="flex flex-col md:gap-4 gap-2" data-v-49ede910><h3 class="md:text-2xl font-bold" data-v-49ede910>Total</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><li data-v-49ede910>• 60 Spots</li></ul><br data-v-49ede910><br data-v-49ede910><h3 class="md:text-2xl font-bold" data-v-49ede910>Prices</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><li data-v-49ede910> Early Birds / any day</li><li data-v-49ede910>•<span class="line-through opacity-50" data-v-49ede910> 3,600 AED / 1,000$ </span></li><li data-v-49ede910>• 3,000 AED / 800$ / per day</li></ul>`);
      if (showWhatsApp.value) {
        _push(ssrRenderComponent(_sfc_main$3, {
          "phone-number": whatsappNumber.value,
          text: "Contact us about Showcase spot"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (showTrial.value) {
        _push(`<div data-v-49ede910><a href="#join-waitlist" class="mt-3 inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors border border-black hover:bg-gray-100 w-fit" data-v-49ede910><span data-v-49ede910>2h Free Trial Spot Waitlist</span><span id="trial-waitlist-count-offer-1" style="${ssrRenderStyle({ "background-color": "rgba(0,0,0,0.2)", "padding": "2px 6px", "border-radius": "12px", "font-weight": "bold" })}" data-v-49ede910>${ssrInterpolate(unref(companiesCount))}</span><span data-v-49ede910>&gt;</span></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-49ede910><h2 class="text-xl md:text-4xl md:mb-[75px] mb-7" data-v-49ede910>POP-UP DESIGNER CORNER</h2><div class="relative -mx-4 md:mx-0 mb-8" data-v-49ede910><div class="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-49ede910><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><img${ssrRenderAttr("src", unref(Image2))} alt="Corner view 1" class="w-full h-full object-contain" data-v-49ede910></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><video class="w-full h-full object-cover" muted autoplay loop playsinline data-v-49ede910><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/2%20Corner%20EFW-vmake.mp4" type="video/mp4" data-v-49ede910> Your browser does not support the video tag. </video></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><img${ssrRenderAttr("src", unref(Image4))} alt="Corner view 3" class="w-full h-full object-contain" data-v-49ede910></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" data-v-49ede910><div data-v-49ede910><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-49ede910>Good for:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><li data-v-49ede910>• Designers </li><li data-v-49ede910>• Accessories Brands</li></ul></div><div class="border border-gray-300 rounded-lg p-4" data-v-49ede910><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-49ede910>What&#39;s Included:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><li data-v-49ede910><b data-v-49ede910>A)</b> One of 40 Designers Pop-up Corners: <ul class="pl-4 space-y-2 my-2" data-v-49ede910><li data-v-49ede910>- 8, 9 November (runway days) 20 Pop-ups in the corridors</li><li data-v-49ede910>- 10, 11 November (market days) 20 Pop-ups in the corridors + 20 Pop-ups in the main hall</li></ul></li><li data-v-49ede910><b data-v-49ede910>B)</b> 1.5 m RAIL for collection</li><li data-v-49ede910><b data-v-49ede910>C)</b> VIP invitations to all EFW shows on November 8-9 </li></ul></div><div class="flex flex-col md:gap-4 gap-2" data-v-49ede910><h3 class="md:text-2xl font-bold" data-v-49ede910>Total</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><li data-v-49ede910>• 40 POP-UP CORNERS</li></ul><br data-v-49ede910><br data-v-49ede910><h3 class="md:text-2xl font-bold" data-v-49ede910>Prices</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-49ede910><li data-v-49ede910> Early Birds / any day</li><li data-v-49ede910>•<span class="line-through opacity-50" data-v-49ede910> 2,200 AED / 600$ </span></li><li data-v-49ede910>• 1,800 AED / 500$ / per day</li></ul>`);
      if (showWhatsApp.value) {
        _push(ssrRenderComponent(_sfc_main$3, {
          "phone-number": whatsappNumber.value,
          text: "Contact us about Corner"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (showTrial.value) {
        _push(`<div data-v-49ede910><a href="#join-waitlist" class="mt-3 inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors border border-black hover:bg-gray-100 w-fit" data-v-49ede910><span data-v-49ede910>2h Free Trial Spot Waitlist</span><span id="trial-waitlist-count-offer-2" style="${ssrRenderStyle({ "background-color": "rgba(0,0,0,0.2)", "padding": "2px 6px", "border-radius": "12px", "font-weight": "bold" })}" data-v-49ede910>${ssrInterpolate(unref(companiesCount))}</span><span data-v-49ede910>&gt;</span></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-49ede910><h2 class="text-xl md:text-4xl mb-[75px]" data-v-49ede910>WORKING TIME</h2><div class="mb-[50px] md:mb-[80px]" data-v-49ede910><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-49ede910>1<sup data-v-49ede910>st</sup> Day <br data-v-49ede910> 8 November 2025 | <span class="opacity-50" data-v-49ede910> SATURDAY <br data-v-49ede910>PRÊT-À-PORTER WOMEN&#39;S &amp; MEN&#39;S </span></h3><p class="md:mb-[55px] mb-7" data-v-49ede910> COLLECTIONS SS 26 <br data-v-49ede910> 5:00 PM – 10:00 PM (Runway shows day / Corridor) </p><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-49ede910>2<sup data-v-49ede910>nd</sup> Day <br data-v-49ede910> 9 November 2025 | <span class="opacity-50" data-v-49ede910> SUNDAY <br data-v-49ede910>READY-TO-WEAR COLLECTIONS SEASON SS </span></h3><p class="md:mb-[55px] mb-7" data-v-49ede910> 26 &amp; Kid’s collections Pop-Up Market <br data-v-49ede910> 5:00 PM – 10:00 PM (Runway shows day / Corridor) </p><div class="relative -mx-4 md:mx-0" data-v-49ede910><div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-49ede910><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><video class="w-full h-full object-cover" controls muted autoplay loop playsinline data-v-49ede910><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/2%20Corner%20EFW-vmake.mp4" type="video/mp4" data-v-49ede910> Your browser does not support the video tag. </video></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><img${ssrRenderAttr("src", unref(Image4))} alt="First day plan" class="w-full h-full object-contain" data-v-49ede910></div></div></div></div><div data-v-49ede910><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-49ede910>3<sup data-v-49ede910>rd</sup> Day <br data-v-49ede910> 10 November 2025 | <span class="opacity-50" data-v-49ede910> MONDAY <br data-v-49ede910>THE POP-UP MARKET</span></h3><p class="md:mb-[55px] mb-7" data-v-49ede910> 10:00 AM – 6:00 PM (Market day / Main hall) </p><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-49ede910>4<sup data-v-49ede910>th</sup> Day <br data-v-49ede910> 11 November 2025 | <span class="opacity-50" data-v-49ede910> TUESDAY <br data-v-49ede910>WELLNESS DAY</span></h3><p class="md:mb-[55px] mb-7" data-v-49ede910> 10:00 AM – 6:00 PM (Market day / Main hall) </p><div class="relative -mx-4 md:mx-0" data-v-49ede910><div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-49ede910><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><video class="w-full h-full object-cover" controls muted autoplay loop playsinline data-v-49ede910><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/beauty%20day%20zoom%20out-wm.mp4" type="video/mp4" data-v-49ede910> Your browser does not support the video tag. </video></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-49ede910><img${ssrRenderAttr("src", unref(Image8))} alt="Third day plan" class="w-full h-full object-contain" data-v-49ede910></div></div></div></div></section><section id="slides" class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-49ede910><h2 class="text-xl md:text-4xl mb-[75px]" data-v-49ede910>PRESENTATION</h2><div class="w-full aspect-video" data-v-49ede910><iframe src="https://www.canva.com/design/DAGykrRNjho/8F9GjzAc1t8ZtytdQMS86w/view?embed" width="100%" height="100%" frameborder="0" allowfullscreen class="rounded-lg shadow-lg w-full h-full" data-v-49ede910></iframe></div></section><section id="map" class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-49ede910><h2 class="text-xl md:text-4xl mb-[75px]" data-v-49ede910>LOCATION</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-49ede910><div class="border border-gray-300 rounded-lg p-4" data-v-49ede910><h3 class="text-lg md:text-xl font-bold mb-4" data-v-49ede910>2D View</h3><div class="w-full" data-v-49ede910><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28905.594122284634!2d55.128635593056764!3d25.095115196678794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b0072bb3c61%3A0x3a456f0a9996fc2c!2sSkylight%20Gallery!5e0!3m2!1sru!2sae!4v1757756744547!5m2!1sru!2sae" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-49ede910></iframe></div></div><div class="border border-gray-300 rounded-lg p-4" data-v-49ede910><h3 class="text-lg md:text-xl font-bold mb-4" data-v-49ede910>3D View</h3><div class="w-full" data-v-49ede910><iframe src="https://www.google.com/maps/embed?pb=!4v1757756521377!6m8!1m7!1sFD00YnqiTe4Mfh-iCWTNNA!2m2!1d25.09490902264704!2d55.15351383099734!3f12.933478943500432!4f12.986052488037629!5f0.7820865974627469" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-49ede910></iframe></div></div></div></section>`);
      _push(ssrRenderComponent(PhotoGallery, null, null, _parent));
      _push(`<div class="mt-12" data-v-49ede910>`);
      _push(ssrRenderComponent(FaqSectionDynamic, { standalone: false }, null, _parent));
      _push(`</div>`);
      if (showTrial.value) {
        _push(`<div class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-49ede910><h2 class="text-xl md:text-4xl mb-[75px]" data-v-49ede910>TRIAL SHOWCASE SPOTS</h2><div class="space-y-6 mb-8" data-v-49ede910><div class="flex flex-col md:flex-row gap-6" data-v-49ede910><div class="rounded-2xl overflow-hidden md:w-1/2" data-v-49ede910><img${ssrRenderAttr("src", unref(Image9))} alt="Trial showcase spots" class="w-full object-contain" data-v-49ede910></div><div class="md:w-1/2" data-v-49ede910><p class="text-sm mb-6" data-v-49ede910> Trial Showcase Spots — How it Works </p><ul class="text-sm space-y-2 mb-6" data-v-49ede910><li data-v-49ede910>• Each day offers 20 Showcase Spots, divided into 4 sessions of 2 hours each — that&#39;s 80 trial slots per day.</li><li data-v-49ede910>• Each selected participant also receives 10 lead chats with EFW Market visitors.</li><li data-v-49ede910>• Allocation is not automatic. From the waitlist, participants are chosen at the organizers&#39; discretion, to ensure a balanced mix of services for our audience.</li><li data-v-49ede910>• These trial spots are subsidized by Dubai Departments and Emirates Fashion Week as a goodwill initiative to support SMEs in Dubai&#39;s beauty and design industries.</li><li data-v-49ede910>• Important: if all 60 full-day paid spots are taken, the 20 trial spots may also be sold, which reduces the chances for waitlist applicants.</li><li data-v-49ede910>• You can always skip the waitlist and secure a guaranteed full-day spot (3,000 AED) — just as 60+ companies already have</li></ul></div></div><div class="flex flex-col md:flex-row gap-6" data-v-49ede910><div class="rounded-2xl overflow-hidden" data-v-49ede910><img${ssrRenderAttr("src", unref(station2))} alt="Trial showcase spots" class="object-contain" data-v-49ede910></div><div class="rounded-2xl overflow-hidden" data-v-49ede910><img${ssrRenderAttr("src", unref(Image11))} alt="Trial showcase spots" class="object-contain" data-v-49ede910></div></div></div><p class="text-sm text-gray-600 mt-2 text-center" data-v-49ede910> competition with other waitlist companies; trial slots reduced if full-day spots are purchased </p><div class="flex flex-col items-end gap-3 mb-8 mt-6" data-v-49ede910>`);
        _push(ssrRenderComponent(_sfc_main$4, {
          id: "join-waitlist",
          variant: "primary",
          onClick: ($event) => showWaitlistForm.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-49ede910${_scopeId}>Join Waitlist</span><span data-v-49ede910${_scopeId}>&gt;</span>`);
            } else {
              return [
                createVNode("span", null, "Join Waitlist"),
                createVNode("span", null, ">")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-12" data-v-49ede910>`);
        _push(ssrRenderComponent(CompaniesList, {
          ref_key: "companiesListRef",
          ref: companiesListRef,
          onCompaniesCountUpdated: updateCompaniesCount
        }, null, _parent));
        _push(`</div>`);
        if (showApproved.value) {
          _push(`<div class="mt-12" data-v-49ede910>`);
          _push(ssrRenderComponent(ApprovedCompaniesList, {
            ref_key: "approvedCompaniesListRef",
            ref: approvedCompaniesListRef,
            onCompaniesCountUpdated: updateApprovedCount
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(WaitlistForm, {
        "is-open": showWaitlistForm.value,
        onClose: ($event) => showWaitlistForm.value = false,
        onSuccess: handleWaitlistSuccess
      }, null, _parent));
      _push(ssrRenderComponent(GalleryIframe, { "show-fog": false }, null, _parent));
      _push(`<div id="bottom" data-v-49ede910></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const offer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49ede910"]]);
export {
  offer as default
};
//# sourceMappingURL=offer-D7Q0x97c.js.map
