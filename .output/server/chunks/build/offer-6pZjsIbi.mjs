import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as _sfc_main$1 } from './AppSeo-BjG2yXmh.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { computed, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useCompaniesCount } from './useCompaniesCount-BOY74o7o.mjs';
import { _ as _sfc_main$2 } from './WhatsAppButton-DIYmnQXx.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const Image1 = "" + buildAssetsURL("stand-1.CaGLytFP.webp");
const Image2 = "" + buildAssetsURL("corner-1.DlOOUlte.webp");
const Image4 = "" + buildAssetsURL("schema-1.BaiMdGgL.webp");
const Image8 = "" + buildAssetsURL("schema-5.D9HcK2DM.webp");
const _sfc_main = {
  __name: "offer",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const showWhatsApp = computed(() => !!route.query.wp);
    const whatsappNumber = computed(() => route.query.wp || "971529833054");
    const showTrial = computed(() => "tr" in route.query);
    computed(() => "waitlist" in route.query);
    computed(() => "approved" in route.query);
    ref(false);
    ref(null);
    ref(null);
    const { companiesCount } = useCompaniesCount();
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSeo = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c7b65e9c><div class="container mx-auto px-4 py-8 max-w-7xl" data-v-c7b65e9c>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Hot Offers - Emirates Fashion Week Dubai 2025",
        description: "Emirates Fashion Week Dubai 2025: Beauty meets business. Showcase spots for beauty service companies and designer pop-up corners. Join us on April 13-15, 2025.",
        keywords: "Emirates Fashion Week, Dubai Fashion, Beauty Services, Designer Pop-up, Fashion Show 2025, Dubai Events, Beauty Business"
      }, null, _parent));
      _push(`<section class="flex flex-col justify-between gap-5 mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-c7b65e9c><h1 class="text-xl md:text-4xl xl:mb-10" data-v-c7b65e9c>HOT OFFERS</h1><div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:gap-12 gap-7" data-v-c7b65e9c><div data-v-c7b65e9c><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-c7b65e9c>EFW Pop-up Market</h3><p class="text-sm md:text-base xl:text-lg" data-v-c7b65e9c> Two days featuring <b data-v-c7b65e9c>60 Showcase Spots</b> for beauty service companies<br data-v-c7b65e9c>and <b data-v-c7b65e9c>40 Designer Pop-Up Corners</b> with exclusive promotional offers <br data-v-c7b65e9c><br data-v-c7b65e9c><b data-v-c7b65e9c>BEAUTY DAY</b> | 10 November 2025 | Monday <br data-v-c7b65e9c><b data-v-c7b65e9c>WELLNESS DAY</b> | 11 November 2025 | Tuesday </p></div><div data-v-c7b65e9c><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-c7b65e9c>Beauty Day</h3><ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 Beauty &amp; cosmetics brands</li><li data-v-c7b65e9c>\u2022 MUAs, nails, brows &amp; lashes</li><li data-v-c7b65e9c>\u2022 Skincare &amp; dermatology</li><li data-v-c7b65e9c>\u2022 Fragrance &amp; perfumes</li><li data-v-c7b65e9c>\u2022 Health &amp; wellness</li><li data-v-c7b65e9c>\u2022 Fitness &amp; events</li></ul></div><div class="flex flex-col md:gap-4 gap-2" data-v-c7b65e9c><h3 class="md:text-2xl font-bold" data-v-c7b65e9c>Wellness Day</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 Medical &amp; aesthetic clinics</li><li data-v-c7b65e9c>\u2022 Health &amp; wellness tourism, nutrition</li><li data-v-c7b65e9c>\u2022 Oral care &amp; dental aesthetics</li><li data-v-c7b65e9c>\u2022 Spas, massage, gyms &amp; barbers</li><li data-v-c7b65e9c>\u2022 Salon, clinic &amp; tools/equipment suppliers</li><li data-v-c7b65e9c>\u2022 Beauty tech: CRM, booking, payments</li></ul></ul></div></div></section><section class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-c7b65e9c><h2 class="text-xl md:text-4xl xl:mb-[75px] md:mb-[50px] mb-7" data-v-c7b65e9c>SHOWCASE SPOT</h2><div class="relative -mx-4 md:mx-0 mb-8" data-v-c7b65e9c><div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-c7b65e9c><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><video class="w-full h-full object-cover" muted autoplay loop playsinline${ssrRenderAttr("poster", Image1)} data-v-c7b65e9c><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4" type="video/mp4" data-v-c7b65e9c> Your browser does not support the video tag. </video></div><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><img${ssrRenderAttr("src", unref(Image1))} alt="Showcase interior" class="w-full h-full object-contain" data-v-c7b65e9c></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:gap-12 gap-7 mb-8" data-v-c7b65e9c><div data-v-c7b65e9c><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-c7b65e9c>Good for:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 Medical &amp; Aesthetic Clinics \u2013 General clinics, plastic surgery, dentistry. \xA0 </li><li data-v-c7b65e9c>\u2022 Health &amp; Wellness \u2013 Nutritionists, dietitians, medical &amp; wellness tourism.</li><br data-v-c7b65e9c><br data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 Beauty &amp; Cosmetics \u2013 Cosmetic brands, makeup artists, brow &amp; lash services, nail care.</li><li data-v-c7b65e9c>\u2022 Personal Care &amp; Wellness \u2013 Cosmetology, massage, salons, spas, barbershops.</li><br data-v-c7b65e9c><br data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 Fitness &amp; Events \u2013 Gyms, wellness studios, wedding makeup &amp; beauty services.</li><li data-v-c7b65e9c>\u2022 Education &amp; Training \u2013 Schools and courses for makeup, cosmetology, and nail services.</li><br data-v-c7b65e9c><br data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 Beauty Tech &amp; Software \u2013 CRM, online booking, payment solutions for salons.</li><li data-v-c7b65e9c>\u2022 Salon &amp; Clinic Equipment \u2013 Furniture and professional tools for beauty salons &amp; medical clinics.</li></ul></div><div class="border border-gray-300 rounded-lg p-4" data-v-c7b65e9c><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-c7b65e9c>What&#39;s Included:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2 mb-4" data-v-c7b65e9c><li data-v-c7b65e9c><b data-v-c7b65e9c>A)</b> One of the 80 Showcase Spots: <ul class="pl-4 space-y-2 mt-2" data-v-c7b65e9c><li data-v-c7b65e9c>- 8, 9 November (runway days) 20 Spots in the corridors</li><li data-v-c7b65e9c>- 10, 11 November (market days) 20 Spots in the corridors + 60 Spots in the main hall </li></ul></li><br data-v-c7b65e9c><br data-v-c7b65e9c><li class="font-bold" data-v-c7b65e9c>B) 50 lead chats per day from EFW visitors (Our Matchmaking technology)</li><li data-v-c7b65e9c><b data-v-c7b65e9c>C) 50\u201D</b> Display for presentations with a table and 2 bar chairs\xA0</li><br data-v-c7b65e9c><br data-v-c7b65e9c><li data-v-c7b65e9c><b data-v-c7b65e9c>D)</b> VIP invitations to all EFW runway shows on 8\u201311 November 2025</li></ul><br data-v-c7b65e9c><br data-v-c7b65e9c><div class="flex items-start text-sm md:text-base xl:text-lg" data-v-c7b65e9c><svg class="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-c7b65e9c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-v-c7b65e9c></path></svg><div data-v-c7b65e9c><p class="font-medium mb-2" data-v-c7b65e9c><b data-v-c7b65e9c>Laptops are not provided.</b> Each exhibitor must bring their own laptop and connect it to the display via HDMI to showcase their company&#39;s video or presentation.</p></div></div></div><div class="flex flex-col md:gap-4 gap-2" data-v-c7b65e9c><h3 class="md:text-2xl font-bold" data-v-c7b65e9c>Total</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 60 Spots</li></ul><br data-v-c7b65e9c><br data-v-c7b65e9c><h3 class="md:text-2xl font-bold" data-v-c7b65e9c>Prices</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><li data-v-c7b65e9c> Early Birds / any day</li><li data-v-c7b65e9c>\u2022<span class="line-through opacity-50" data-v-c7b65e9c> 3,600 AED / 1,000$ </span></li><li data-v-c7b65e9c>\u2022 3,000 AED / 800$ / per day</li></ul>`);
      if (showWhatsApp.value) {
        _push(ssrRenderComponent(_sfc_main$2, {
          "phone-number": whatsappNumber.value,
          text: "Contact us about Showcase spot"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (showTrial.value) {
        _push(`<div data-v-c7b65e9c><a href="#join-waitlist" class="mt-3 inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors border border-black hover:bg-gray-100 w-fit" data-v-c7b65e9c><span data-v-c7b65e9c>2h Free Trial Spot Waitlist</span><span id="trial-waitlist-count-offer-1" style="${ssrRenderStyle({ "background-color": "rgba(0,0,0,0.2)", "padding": "2px 6px", "border-radius": "12px", "font-weight": "bold" })}" data-v-c7b65e9c>${ssrInterpolate(unref(companiesCount))}</span><span data-v-c7b65e9c>&gt;</span></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-c7b65e9c><h2 class="text-xl md:text-4xl md:mb-[75px] mb-7" data-v-c7b65e9c>POP-UP DESIGNER CORNER</h2><div class="relative -mx-4 md:mx-0 mb-8" data-v-c7b65e9c><div class="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-c7b65e9c><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><img${ssrRenderAttr("src", unref(Image2))} alt="Corner view 1" class="w-full h-full object-contain" data-v-c7b65e9c></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><video class="w-full h-full object-cover" muted autoplay loop playsinline data-v-c7b65e9c><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/2%20Corner%20EFW-vmake.mp4" type="video/mp4" data-v-c7b65e9c> Your browser does not support the video tag. </video></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><img${ssrRenderAttr("src", unref(Image4))} alt="Corner view 3" class="w-full h-full object-contain" data-v-c7b65e9c></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" data-v-c7b65e9c><div data-v-c7b65e9c><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-c7b65e9c>Good for:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 Designers </li><li data-v-c7b65e9c>\u2022 Accessories Brands</li></ul></div><div class="border border-gray-300 rounded-lg p-4" data-v-c7b65e9c><h3 class="md:text-2xl md:mb-5 mb-2 font-bold" data-v-c7b65e9c>What&#39;s Included:</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><li data-v-c7b65e9c><b data-v-c7b65e9c>A)</b> One of 40 Designers Pop-up Corners: <ul class="pl-4 space-y-2 my-2" data-v-c7b65e9c><li data-v-c7b65e9c>- 8, 9 November (runway days) 20 Pop-ups in the corridors</li><li data-v-c7b65e9c>- 10, 11 November (market days) 20 Pop-ups in the corridors + 20 Pop-ups in the main hall</li></ul></li><li data-v-c7b65e9c><b data-v-c7b65e9c>B)</b> 1.5 m RAIL for collection</li><li data-v-c7b65e9c><b data-v-c7b65e9c>C)</b> VIP invitations to all EFW shows on November 8-9 </li></ul></div><div class="flex flex-col md:gap-4 gap-2" data-v-c7b65e9c><h3 class="md:text-2xl font-bold" data-v-c7b65e9c>Total</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><li data-v-c7b65e9c>\u2022 40 POP-UP CORNERS</li></ul><br data-v-c7b65e9c><br data-v-c7b65e9c><h3 class="md:text-2xl font-bold" data-v-c7b65e9c>Prices</h3><ul class="text-sm md:text-base xl:text-lg space-y-2" data-v-c7b65e9c><li data-v-c7b65e9c> Early Birds / any day</li><li data-v-c7b65e9c>\u2022<span class="line-through opacity-50" data-v-c7b65e9c> 2,200 AED / 600$ </span></li><li data-v-c7b65e9c>\u2022 1,800 AED / 500$ / per day</li></ul>`);
      if (showWhatsApp.value) {
        _push(ssrRenderComponent(_sfc_main$2, {
          "phone-number": whatsappNumber.value,
          text: "Contact us about Corner"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (showTrial.value) {
        _push(`<div data-v-c7b65e9c><a href="#join-waitlist" class="mt-3 inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors border border-black hover:bg-gray-100 w-fit" data-v-c7b65e9c><span data-v-c7b65e9c>2h Free Trial Spot Waitlist</span><span id="trial-waitlist-count-offer-2" style="${ssrRenderStyle({ "background-color": "rgba(0,0,0,0.2)", "padding": "2px 6px", "border-radius": "12px", "font-weight": "bold" })}" data-v-c7b65e9c>${ssrInterpolate(unref(companiesCount))}</span><span data-v-c7b65e9c>&gt;</span></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-c7b65e9c><h2 class="text-xl md:text-4xl mb-[75px]" data-v-c7b65e9c>WORKING TIME</h2><div class="mb-[50px] md:mb-[80px]" data-v-c7b65e9c><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-c7b65e9c>1<sup data-v-c7b65e9c>st</sup> Day <br data-v-c7b65e9c> 8 November 2025 | <span class="opacity-50" data-v-c7b65e9c> SATURDAY <br data-v-c7b65e9c>PR\xCAT-\xC0-PORTER WOMEN&#39;S &amp; MEN&#39;S </span></h3><p class="md:mb-[55px] mb-7" data-v-c7b65e9c> COLLECTIONS SS 26 <br data-v-c7b65e9c> 5:00 PM \u2013 10:00 PM (Runway shows day / Corridor) </p><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-c7b65e9c>2<sup data-v-c7b65e9c>nd</sup> Day <br data-v-c7b65e9c> 9 November 2025 | <span class="opacity-50" data-v-c7b65e9c> SUNDAY <br data-v-c7b65e9c>READY-TO-WEAR COLLECTIONS SEASON SS </span></h3><p class="md:mb-[55px] mb-7" data-v-c7b65e9c> 26 &amp; Kid\u2019s collections Pop-Up Market <br data-v-c7b65e9c> 5:00 PM \u2013 10:00 PM (Runway shows day / Corridor) </p><div class="relative -mx-4 md:mx-0" data-v-c7b65e9c><div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-c7b65e9c><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><video class="w-full h-full object-cover" controls muted autoplay loop playsinline data-v-c7b65e9c><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/2%20Corner%20EFW-vmake.mp4" type="video/mp4" data-v-c7b65e9c> Your browser does not support the video tag. </video></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><img${ssrRenderAttr("src", unref(Image4))} alt="First day plan" class="w-full h-full object-contain" data-v-c7b65e9c></div></div></div></div><div data-v-c7b65e9c><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-c7b65e9c>3<sup data-v-c7b65e9c>rd</sup> Day <br data-v-c7b65e9c> 10 November 2025 | <span class="opacity-50" data-v-c7b65e9c> MONDAY <br data-v-c7b65e9c>THE POP-UP MARKET</span></h3><p class="md:mb-[55px] mb-7" data-v-c7b65e9c> 10:00 AM \u2013 6:00 PM (Market day / Main hall) </p><h3 class="text-xl md:text-4xl mb-4 text-medium" data-v-c7b65e9c>4<sup data-v-c7b65e9c>th</sup> Day <br data-v-c7b65e9c> 11 November 2025 | <span class="opacity-50" data-v-c7b65e9c> TUESDAY <br data-v-c7b65e9c>WELLNESS DAY</span></h3><p class="md:mb-[55px] mb-7" data-v-c7b65e9c> 10:00 AM \u2013 6:00 PM (Market day / Main hall) </p><div class="relative -mx-4 md:mx-0" data-v-c7b65e9c><div class="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 snap-x snap-mandatory" data-v-c7b65e9c><div class="relative aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><video class="w-full h-full object-cover" controls muted autoplay loop playsinline data-v-c7b65e9c><source src="https://storage.yandexcloud.net/videos-meyou/efw2025/beauty%20day%20zoom%20out-wm.mp4" type="video/mp4" data-v-c7b65e9c> Your browser does not support the video tag. </video></div><div class="aspect-[907/1030] bg-gray-100 rounded-2xl overflow-hidden min-w-[85%] md:min-w-0 snap-center" data-v-c7b65e9c><img${ssrRenderAttr("src", unref(Image8))} alt="Third day plan" class="w-full h-full object-contain" data-v-c7b65e9c></div></div></div></div></section><section id="slides" class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-c7b65e9c><h2 class="text-xl md:text-4xl mb-[75px]" data-v-c7b65e9c>PRESENTATION</h2><div class="w-full aspect-video" data-v-c7b65e9c><iframe src="https://www.canva.com/design/DAGykrRNjho/8F9GjzAc1t8ZtytdQMS86w/view?embed" width="100%" height="100%" frameborder="0" allowfullscreen class="rounded-lg shadow-lg w-full h-full" data-v-c7b65e9c></iframe></div></section><section id="map" class="mb-[50px] md:mb-[80px] xl:mb-[100px]" data-v-c7b65e9c><h2 class="text-xl md:text-4xl mb-[75px]" data-v-c7b65e9c>LOCATION</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-c7b65e9c><div class="border border-gray-300 rounded-lg p-4" data-v-c7b65e9c><h3 class="text-lg md:text-xl font-bold mb-4" data-v-c7b65e9c>2D View</h3><div class="w-full" data-v-c7b65e9c><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28905.594122284634!2d55.128635593056764!3d25.095115196678794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b0072bb3c61%3A0x3a456f0a9996fc2c!2sSkylight%20Gallery!5e0!3m2!1sru!2sae!4v1757756744547!5m2!1sru!2sae" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-c7b65e9c></iframe></div></div><div class="border border-gray-300 rounded-lg p-4" data-v-c7b65e9c><h3 class="text-lg md:text-xl font-bold mb-4" data-v-c7b65e9c>3D View</h3><div class="w-full" data-v-c7b65e9c><iframe src="https://www.google.com/maps/embed?pb=!4v1757756521377!6m8!1m7!1sFD00YnqiTe4Mfh-iCWTNNA!2m2!1d25.09490902264704!2d55.15351383099734!3f12.933478943500432!4f12.986052488037629!5f0.7820865974627469" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-c7b65e9c></iframe></div></div></div></section>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div id="bottom" data-v-c7b65e9c></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const offer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7b65e9c"]]);

export { offer as default };
//# sourceMappingURL=offer-6pZjsIbi.mjs.map
