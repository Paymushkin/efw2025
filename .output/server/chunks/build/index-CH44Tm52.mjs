import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ref, mergeProps, unref, computed, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { M as Marquee, L as LogoIcon, _ as _sfc_main$8 } from './BaseButton-rihQUCkq.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BJjwR1_u.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$7 = {
  __name: "FacesSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faces",
        class: "relative flex flex-col min-h-screen overflow-hidden"
      }, _attrs))} data-v-91fd4a68><div class="container mx-auto xl:mb-[76px] md:mb-8 mb-[36px]" data-v-91fd4a68><h2 class="text-xl md:text-3xl xl:text-4xl" data-v-91fd4a68>Faces of Fashion Week</h2></div><div class="relative flex flex-col min-h-screen overflow-hidden" data-v-91fd4a68><video autoplay loop muted playsinline webkit-playsinline preload="auto" class="absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-multiply" data-v-91fd4a68><source src="https://storage.yandexcloud.net/videos-meyou/bg-video-2.mp4" type="video/mp4" data-v-91fd4a68> \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043E. </video><div class="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10" data-v-91fd4a68></div><div class="relative z-20 mt-auto" data-v-91fd4a68><div class="flex flex-col ite w-[645px] max-w-full" data-v-91fd4a68><div class="bg-white py-8 p-8 md:text-right" data-v-91fd4a68>`);
      _push(ssrRenderComponent(LogoIcon, { class: "md:ml-auto h-8" }, null, _parent));
      _push(`</div><div class="bg-black text-white p-8 md:text-right" data-v-91fd4a68><span class="text-xl text-white" data-v-91fd4a68>#JOINDUBAI</span></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FacesSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-91fd4a68"]]);
const _sfc_main$6 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(void 0 < 768);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-h-screen overflow-hidden" }, _attrs))} data-v-3d386cba><video autoplay loop muted playsinline webkit-playsinline preload="auto" class="absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-multiply" data-v-3d386cba><source src="https://storage.yandexcloud.net/videos-meyou/bg-video.mp4" type="video/mp4" data-v-3d386cba> \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043E. </video><div class="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10" data-v-3d386cba></div><div class="container flex flex-col grow mx-auto px-4 py-10 relative z-20" data-v-3d386cba><h1 class="hidden md:block xl:text-5xl text-4xl font-light max-w-3xl mb-10 text-white" data-v-3d386cba> Emirates Fashion Week: Beauty meets business </h1><div id="reportage" class="grow mb-10" data-v-3d386cba></div></div><div class="relative z-20" data-v-3d386cba><div class="flex flex-col w-[645px] max-w-full" data-v-3d386cba><div class="bg-white py-8 p-8 md:text-right" data-v-3d386cba>`);
      _push(ssrRenderComponent(LogoIcon, { class: "md:ml-auto h-8" }, null, _parent));
      _push(`</div><div class="bg-black text-white p-8 md:text-right" data-v-3d386cba><span class="text-xl text-white" data-v-3d386cba>#JOINDUBAI</span></div></div>`);
      _push(ssrRenderComponent(Marquee, { content: "text text text text text text text" }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-3d386cba"]]);
const image1$1 = "" + buildAssetsURL("item-1.BYv-nZvw.png");
const image2$1 = "" + buildAssetsURL("item-2.DhNlCd4k.png");
const image3$1 = "" + buildAssetsURL("item-3.DUi5ZtQt.png");
const _sfc_main$5 = {
  __name: "HowItWasSection",
  __ssrInlineRender: true,
  setup(__props) {
    const tabs = [
      { year: "2020", season: "Spring", images: [image1$1, image2$1, image3$1] },
      { year: "2021", season: "Summer", images: [image3$1, image2$1, image1$1] },
      { year: "2022", season: "Autumn", images: [image2$1, image1$1, image3$1] },
      { year: "2023", season: "Winter", images: [image2$1, image3$1, image1$1] },
      { year: "2024", season: "Spring", images: [image1$1, image2$1, image3$1] }
    ];
    const currentTab = ref(0);
    const currentImages = computed(() => tabs[currentTab.value].images);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "how-it-was",
        class: "container mx-auto"
      }, _attrs))} data-v-8192b098><h2 class="text-xl md:text-3xl xl:text-4xl mb-4 xl:mb-8 md:mb-6" data-v-8192b098>How it was</h2><div class="overflow-x-auto hide-scrollbar -mr-4 md:mr-0" data-v-8192b098><div class="flex gap-8 mb-6 md:mb-8 xl:mb-10 whitespace-nowrap pb-4 md:pb-0 pr-4 md:pr-0" data-v-8192b098><!--[-->`);
      ssrRenderList(tabs, (tab, index) => {
        _push(`<button class="${ssrRenderClass([{
          "text-black": currentTab.value === index,
          "text-black-16": currentTab.value !== index
        }, "flex flex-col items-start md:gap-2 gap-1 hover:text-black flex-shrink-0"])}" data-v-8192b098><span class="text-xl xl:text-4xl md:text-3xl transition-colors duration-300" data-v-8192b098>${ssrInterpolate(tab.year)}</span><span class="transition-colors duration-300" data-v-8192b098>${ssrInterpolate(tab.season)}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto hide-scrollbar -mr-4 md:mr-0" data-v-8192b098><!--[-->`);
      ssrRenderList(currentImages.value, (image, index) => {
        _push(`<div class="overflow-hidden rounded-lg shadow-lg flex-shrink-0 w-[280px] md:w-auto" data-v-8192b098><img${ssrRenderAttr("src", image)} alt="" class="w-full h-auto" data-v-8192b098></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWasSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HowItWasSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8192b098"]]);
const _imports_0 = "" + buildAssetsURL("all-station.DNsblFpW.png");
const Station1 = "" + buildAssetsURL("station-1.BdsEmBdo.png");
const Station2 = "" + buildAssetsURL("station-2.Dt9k1Ho7.png");
const Station3 = "" + buildAssetsURL("station-3.CRkv30o-.png");
const _sfc_main$4 = {
  __name: "ProgramSection",
  __ssrInlineRender: true,
  setup(__props) {
    const eventTypes = {
      sponsorStation: {
        type: "sponsorStation"
      },
      bigSponsorStation: {
        type: "bigSponsorStation",
        title: "Stations for sponsors",
        description: "AI-powered business stations designed for seamless networking, lead generation, and interactive presentations. Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.",
        images: [
          { src: Station1, caption: "Station 1", subcaption: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0446\u0435\u043D\u0430" },
          { src: Station2, caption: "Station 1", subcaption: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0446\u0435\u043D\u0430" },
          { src: Station3, caption: "Station 1", subcaption: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0446\u0435\u043D\u0430" }
        ],
        buttonText: "More information >"
      }
    };
    const tabs = [
      {
        title: "Prelaunch",
        date: "11/04/2025",
        events: [
          {
            type: "event",
            time: "10:00 \u2013 20:00",
            description: "\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0430 \u0446\u0435\u043B\u044B\u0439 \u0434\u0435\u043D\u044C",
            details: "\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"
          },
          { type: "event", time: "10:10 \u2013 11:40", description: "Designer", details: "Country" },
          { ...eventTypes.sponsorStation },
          {
            type: "event",
            time: "10:00 \u2013 20:00",
            description: "\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0430 \u0446\u0435\u043B\u044B\u0439 \u0434\u0435\u043D\u044C",
            details: "\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"
          }
        ]
      },
      { title: "KidsDay", date: "11/04/2025", events: [] },
      { title: "WomenDay", date: "11/04/2025", events: [] },
      { title: "BeautyDay", date: "11/04/2025", events: [
        {
          type: "event",
          time: "10:00 \u2013 20:00",
          description: "\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0430 \u0446\u0435\u043B\u044B\u0439 \u0434\u0435\u043D\u044C",
          details: "\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"
        },
        { ...eventTypes.bigSponsorStation }
      ] },
      { title: "BeautyAwards", date: "11/04/2025", events: [] },
      { title: "AfterDay", date: "11/04/2025", events: [] }
    ];
    const currentTab = ref(0);
    const currentProgram = computed(() => tabs[currentTab.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "program",
        class: "container mx-auto"
      }, _attrs))} data-v-d07613a5><div class="flex flex-col md:flex-row justify-between md:items-center gap-8 md:mb-[113px] mb-8 max-w-[1200px]" data-v-d07613a5><h2 class="text-xl md:text-3xl xl:text-4xl" data-v-d07613a5>Program</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "_blank",
        class: "hover:opacity-80 transition-opacity duration-300",
        to: "https://docs.google.com/forms/d/11I7bcoDEzErBszt2UfZqf04LAjljlpkBhdRTD6CrC7g/edit?fbclid=PAZXh0bgNhZW0CMTEAAabTXlVnA-8uMswE4mM1iOQkULaorR2fFi9eZsVZlgEe1jMJH0Kb7OcDJJk_aem_LIewtA-gbtt6seDB3ZE4pw"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, { variant: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-d07613a5${_scopeId2}>Buy a ticket</span><span data-v-d07613a5${_scopeId2}>&gt;</span>`);
                } else {
                  return [
                    createVNode("span", null, "Buy a ticket"),
                    createVNode("span", null, ">")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, { variant: "primary" }, {
                default: withCtx(() => [
                  createVNode("span", null, "Buy a ticket"),
                  createVNode("span", null, ">")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="overflow-x-auto hide-scrollbar -mr-4 md:mr-0" data-v-d07613a5><div class="flex gap-8 mb-8 md:mb-10 whitespace-nowrap pb-4 md:pb-0 pr-4 md:pr-0" data-v-d07613a5><!--[-->`);
      ssrRenderList(tabs, (tab, index) => {
        _push(`<button class="${ssrRenderClass([{
          "text-black": currentTab.value === index,
          "text-black-16": currentTab.value !== index
        }, "flex flex-col items-start gap-2 hover:text-black flex-shrink-0"])}" data-v-d07613a5><span class="text-2xl 2xl:text-4xl md:text-3xl transition-colors duration-300" data-v-d07613a5>${ssrInterpolate(tab.title)}</span><span class="transition-colors duration-300" data-v-d07613a5>${ssrInterpolate(tab.date)}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col gap-6" data-v-d07613a5><!--[-->`);
      ssrRenderList(currentProgram.value.events, (event, index) => {
        _push(`<div data-v-d07613a5>`);
        if (event.type === "sponsorStation") {
          _push(`<div class="grid md:grid-cols-3 grid-cols-1 md:border-t items-center border-[#EFF5F6]" data-v-d07613a5><h3 class="2xl:text-4xl md:text-2xl text-xl md:pl-10 md:pr-5 md:pt-[60px] md:pb-10 pt-5 pb-8" data-v-d07613a5>Stations for sponsors</h3><div class="grow max-w-[600px]" data-v-d07613a5><img${ssrRenderAttr("src", _imports_0)} alt="stations" data-v-d07613a5></div><div class="flex flex-col items-start md:gap-10 gap-5 md:pl-10 md:pr-5 md:pt-[60px] md:pb-10 pt-3 pb-5" data-v-d07613a5><p class="2xl:text-base text-sm" data-v-d07613a5>AI-powered business stations designed for seamless networking, lead generation, and interactive presentations.<br data-v-d07613a5> Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.</p>`);
          _push(ssrRenderComponent(_sfc_main$8, { variant: "primary" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`More information &gt;`);
              } else {
                return [
                  createTextVNode("More information >")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        } else if (event.type === "bigSponsorStation") {
          _push(`<div class="container mx-auto md:my-10 my-5" data-v-d07613a5><div class="flex flex-col gap-11" data-v-d07613a5><div class="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-6 gap-4" data-v-d07613a5><h3 class="2xl:text-4xl xl:text-3xl text-xl text-center md:text-left" data-v-d07613a5>${ssrInterpolate(event.title)}</h3><div class="flex flex-col items-start md:gap-9 gap-5 max-w-[415px]" data-v-d07613a5><p class="text-lg" data-v-d07613a5>${ssrInterpolate(event.description)}</p>`);
          _push(ssrRenderComponent(_sfc_main$8, { variant: "primary" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(event.buttonText)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(event.buttonText), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div><div class="overflow-x-auto hide-scrollbar -mr-4 md:mr-0" data-v-d07613a5><div class="flex md:grid md:grid-cols-3 gap-6 pb-4 md:pb-0 pr-4 md:pr-0" data-v-d07613a5><!--[-->`);
          ssrRenderList(event.images, (image, idx) => {
            _push(`<div class="flex flex-col gap-4 flex-shrink-0 w-[280px] md:w-auto" data-v-d07613a5><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.caption)} class="w-full" data-v-d07613a5><div class="flex flex-col" data-v-d07613a5><span class="xl:text-xl text-lg" data-v-d07613a5>${ssrInterpolate(image.caption)}</span><span class="text-gray-500" data-v-d07613a5>${ssrInterpolate(image.subcaption)}</span></div></div>`);
          });
          _push(`<!--]--></div></div></div></div>`);
        } else {
          _push(`<div class="grid md:grid-cols-3 grid-cols-2 items-center md:items-start gap-5 border border-black 2xl:px-7 md:px-5 px-4 py-3 2xl:py-[60px] md:py-10" data-v-d07613a5><h4 class="text-sm 2xl:text-2xl md:text-xl" data-v-d07613a5>${ssrInterpolate(event.time)}</h4><div class="hidden md:block grow" data-v-d07613a5></div><div class="flex flex-col md:gap-4 gap-2" data-v-d07613a5><p class="text-sm 2xl:text-2xl md:text-xl" data-v-d07613a5>${ssrInterpolate(event.description)}</p><p class="text-sm 2xl:text-xl md:text-base text-black-16" data-v-d07613a5>${ssrInterpolate(event.details)}</p></div></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgramSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProgramSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d07613a5"]]);
const _sfc_main$3 = {
  __name: "DesignersSection",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Autoplay, Pagination, Navigation];
    const designers = ref([
      {
        name: "John Doe",
        category: "Evening Wear",
        image: image1$1
      },
      {
        name: "Jane Smith",
        category: "Casual Wear",
        image: image2$1
      },
      {
        name: "Alex Johnson",
        category: "Haute Couture",
        image: image3$1
      },
      {
        name: "Maria Garcia",
        category: "Street Style",
        image: image1$1
      },
      {
        name: "David Lee",
        category: "Minimalist",
        image: image2$1
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "designers",
        class: "container mx-auto"
      }, _attrs))} data-v-3ce78944><div class="flex justify-between items-center mb-8 xl:mb-[75px]" data-v-3ce78944><h2 class="text-xl md:text-3xl xl:text-4xl" data-v-3ce78944>Featured Designers</h2><div class="flex relative items-center gap-4 xl:translate-y-20 translate-y-3" data-v-3ce78944><div class="swiper-button-prev !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl" data-v-3ce78944></div><div class="swiper-button-next !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl" data-v-3ce78944></div></div></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules,
        "slides-per-view": 1,
        "space-between": 20,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        },
        pagination: {
          clickable: true,
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(designers.value, (designer, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative" data-v-3ce78944${_scopeId2}><img${ssrRenderAttr("src", designer.image)} alt="" class="w-full h-auto rounded-lg" data-v-3ce78944${_scopeId2}><div class="mt-4" data-v-3ce78944${_scopeId2}><h3 class="lg:text-xl 2xl:text-2xl text-lg" data-v-3ce78944${_scopeId2}>${ssrInterpolate(designer.name)}</h3><p class="text-gray-500 text-sm md:text-base" data-v-3ce78944${_scopeId2}>${ssrInterpolate(designer.category)}</p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative" }, [
                        createVNode("img", {
                          src: designer.image,
                          alt: "",
                          class: "w-full h-auto rounded-lg"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("h3", { class: "lg:text-xl 2xl:text-2xl text-lg" }, toDisplayString(designer.name), 1),
                          createVNode("p", { class: "text-gray-500 text-sm md:text-base" }, toDisplayString(designer.category), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="swiper-pagination !bottom-[-30px]" data-v-3ce78944${_scopeId}></div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(designers.value, (designer, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative" }, [
                      createVNode("img", {
                        src: designer.image,
                        alt: "",
                        class: "w-full h-auto rounded-lg"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("h3", { class: "lg:text-xl 2xl:text-2xl text-lg" }, toDisplayString(designer.name), 1),
                        createVNode("p", { class: "text-gray-500 text-sm md:text-base" }, toDisplayString(designer.category), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              createVNode("div", { class: "swiper-pagination !bottom-[-30px]" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignersSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DesignersSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3ce78944"]]);
const image1 = "" + buildAssetsURL("sd.D5lyUph-.png");
const image2 = "" + buildAssetsURL("gwa.DtbJ40T6.png");
const image3 = "" + buildAssetsURL("lofficiel.Bp50yyWL.png");
const image4 = "" + buildAssetsURL("megapolis.DWJds73l.png");
const image5 = "" + buildAssetsURL("porterium.CPrBxLgO.png");
const image6 = "" + buildAssetsURL("tycoon.DGl1qBQP.png");
const image7 = "" + buildAssetsURL("arabic_journal.BzYf4ZA-.png");
const image8 = "" + buildAssetsURL("dubai_fashion.Cjotfm3P.png");
const image9 = "" + buildAssetsURL("d_fashion.wJvVAhVf.png");
const _sfc_main$2 = {
  __name: "SponsorsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sponsors = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mb-[105px]" }, _attrs))} data-v-5908ac29><h2 class="text-xl md:text-3xl xl:text-4xl mb-8 xl:mb-[75px]" data-v-5908ac29>We in Media</h2><div class="grid lg:grid-flow-col grid-cols-2 md:grid-cols-3 xl:grid-cols-9 gap-3 justify-items-center md:justify-items-start" data-v-5908ac29><!--[-->`);
      ssrRenderList(sponsors, (sponsor, index) => {
        _push(`<div class="flex justify-center items-center w-full" data-v-5908ac29><img${ssrRenderAttr("src", sponsor)} alt="Sponsor Logo" class="w-[150px] max-w-full md:max-w-auto h-auto object-center" data-v-5908ac29></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SponsorsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SponsorsSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5908ac29"]]);
function useNumberAnimation(initialValue = "0") {
  const displayNumber = ref(initialValue);
  const animateNumber = (startValue, endValue) => {
    const obj = { value: parseInt(startValue) };
    gsap.to(obj, {
      value: parseInt(endValue),
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        displayNumber.value = Math.round(obj.value).toString();
      }
    });
  };
  return {
    displayNumber,
    animateNumber
  };
}
const _sfc_main$1 = {
  __name: "StatisticsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const statistics = [
      { startNumber: "1000", endNumber: "5000", label: "Models" },
      { startNumber: "0", endNumber: "5000", label: "Models" },
      { startNumber: "2000", endNumber: "5000", label: "Models" }
    ];
    const displayNumbers = statistics.map(
      (stat) => useNumberAnimation(stat.startNumber)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "bg-black text-white 2xl:py-16 xl:py-12 py-8"
      }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(statistics, (stat, index) => {
        _push(`<div class="text-left"><h2 class="text-3xl xl:text-5xl 2xl:text-6xl font-light mb-2">${ssrInterpolate(unref(displayNumbers)[index].displayNumber)}</h2><p class="text-white text-base xl:text-xl 2xl:text-2xl">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatisticsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const sponsor4 = "" + buildAssetsURL("sponsor-logo.BsKeR_GS.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sponsors = [sponsor4, sponsor4, sponsor4, sponsor4];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FacesSection = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSection, { class: "mb-[56px] md:mb-[76px]" }, null, _parent));
      _push(ssrRenderComponent(HowItWasSection, { class: "mb-[56px] md:mb-[76px]" }, null, _parent));
      _push(ssrRenderComponent(ProgramSection, { class: "md:mb-[56px] mb-[36px]" }, null, _parent));
      _push(ssrRenderComponent(Marquee, {
        content: sponsors,
        class: "mb-[56px] md:mb-[76px]"
      }, null, _parent));
      _push(ssrRenderComponent(DesignersSection, { class: "md:mb-[76px] mb-[56px]" }, null, _parent));
      _push(ssrRenderComponent(SponsorsSection, { class: "md:mb-[76px] mb-[56px]" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "md:mb-[76px] mb-[56px]" }, null, _parent));
      _push(ssrRenderComponent(_component_FacesSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CH44Tm52.mjs.map
