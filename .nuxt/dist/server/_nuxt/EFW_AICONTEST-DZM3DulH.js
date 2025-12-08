import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { computed, ref, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext, watch, nextTick } from "vue";
import { _ as _sfc_main$4 } from "./AppSeo-LOFxIM8N.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$3 } from "./WhatsAppButton-DIYmnQXx.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
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
const localFacesData = [
  {
    name: "Olga Khayrullova",
    title: "Personal Fashion Stylist",
    subtitle: "Recognized by EFW SS26 Season",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-3.png",
    icon: true,
    order: 1,
    links: [
      { text: "Olga Gallery 1", url: "https://disk.yandex.ru/d/H1mkiuK2ZGnGtg" },
      { text: "Olga Gallery 2", url: "https://disk.yandex.ru/d/OyDVLRK3xh4XGA" },
      { text: "Olga Gallery 3", url: "https://disk.yandex.ru/d/i8UrwKqzfvP87Q" },
      { text: "Olga Gallery 4", url: "https://disk.yandex.ru/d/xcI2edSjve_VcQ" }
    ]
  },
  {
    name: "Khalimova Liza",
    title: "Designer",
    subtitle: "Recognized by EFW SS26 Season",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-2.png",
    icon: true,
    order: 2,
    links: [
      { text: "Liza Gallery", url: "https://disk.yandex.ru/a/O-Yaq82vmplm-g" }
    ]
  },
  {
    name: "Olga Baltrukevica",
    title: "Model",
    subtitle: "Recognized by EFW SS26 Season",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-1.png",
    icon: true,
    order: 3,
    links: [
      { text: "Olga Gallery", url: "https://failiem.lv/u/trcyc4awyu" }
    ]
  },
  {
    name: "Ekaterina Potanina",
    title: "Influencer",
    subtitle: "Recognized by EFW SS26 Season",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-4.png",
    icon: false,
    order: 4,
    links: [
      { text: "Instagram", url: "https://www.instagram.com/potanina_ea/" }
    ]
  },
  {
    name: "Katerina Melikhova",
    title: "Guest",
    subtitle: "Recognized by EFW SS26 Season",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-5.png",
    icon: false,
    order: 5,
    links: [
      { text: "Instagram", url: "https://www.instagram.com/katya_katerinina?igsh=YTZ5MnBodnN2dm5v" }
    ]
  }
];
const facesData = ref([...localFacesData]);
const isLoading = ref(false);
const isDataUpdated = ref(false);
const lastFetchTime = ref(null);
const GOOGLE_SHEETS_URL = "https://docs.google.com/spreadsheets/d/1lK7QQ8McYRzsVlQ7I-xs_BLL0eVRhgKm6oVov8JJswE/gviz/tq?tqx=out:json&gid=0";
const transformFacesData = (rawData) => {
  return rawData.filter((row) => row.name && row.image_url).map((row) => {
    const links = [];
    for (let i = 1; i <= 4; i++) {
      const textKey = `link_text_${i}`;
      const urlKey = `link_url_${i}`;
      if (row[textKey] && row[urlKey]) {
        links.push({
          text: row[textKey],
          url: row[urlKey]
        });
      }
    }
    return {
      name: row.name,
      title: row.title || "",
      subtitle: row.subtitle || "",
      image: row.image_url,
      icon: row.icon === "TRUE" || row.icon === true,
      order: parseInt(row.order) || 999,
      // Порядковый номер, по умолчанию 999
      links
    };
  }).sort((a, b) => a.order - b.order);
};
const fetchFaces = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
  try {
    console.log("🔄 Загружаем данные лиц из Google Sheets...");
    const response = await fetch(GOOGLE_SHEETS_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const jsonText = text.replace(/^[^{]*/, "").replace(/[^}]*$/, "");
    const data = JSON.parse(jsonText);
    if (!data.table || !data.table.rows) {
      throw new Error("Неверный формат данных из Google Sheets");
    }
    const headers = data.table.cols.map((col) => col.label);
    const rows = data.table.rows.map((row) => {
      const rowData = {};
      row.c.forEach((cell, index) => {
        rowData[headers[index]] = cell ? cell.v : "";
      });
      return rowData;
    });
    console.log("📊 Получены данные из Google Sheets:", rows);
    const transformedData = transformFacesData(rows);
    if (transformedData.length > 0) {
      facesData.value = transformedData;
      isDataUpdated.value = true;
      lastFetchTime.value = Date.now();
      console.log("✅ Данные лиц успешно обновлены из Google Sheets:", transformedData);
    } else {
      console.warn("⚠️ Нет данных для обновления из Google Sheets");
    }
  } catch (error) {
    console.error("❌ Ошибка загрузки данных лиц из Google Sheets:", error);
  } finally {
    isLoading.value = false;
  }
};
const useFaces = () => {
  return {
    facesData: computed(() => facesData.value),
    isLoading: computed(() => isLoading.value),
    isDataUpdated: computed(() => isDataUpdated.value),
    lastFetchTime: computed(() => lastFetchTime.value),
    fetchFaces
  };
};
const _sfc_main$2 = {
  __name: "FacesOfEfwSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { facesData: facesData2 } = useFaces();
    const swiperInstance = ref(null);
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };
    const onSlideChange = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "md:mb-[76px] mb-[56px]" }, _attrs))} data-v-cacaec87><div class="flex justify-between items-center mb-8 xl:mb-[75px]" data-v-cacaec87><h2 id="faces-of-efw" data-nosnippet class="text-xl md:text-3xl xl:text-4xl md:text-left w-full text-center" data-v-cacaec87>Faces of Emirates Fashion Week</h2><div class="flex items-center gap-4" data-v-cacaec87><button class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center" data-v-cacaec87><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-cacaec87><path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cacaec87></path></svg></button><button class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center" data-v-cacaec87><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-cacaec87><path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cacaec87></path></svg></button></div></div><div class="overflow-x-auto hide-scrollbar md:px-0" data-v-cacaec87>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Navigation), unref(Pagination), unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 16,
        navigation: false,
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false
        },
        pagination: false,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        onSwiper,
        onSlideChange,
        class: "relative pb-12 px-4 md:px-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(facesData2), (person, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-white rounded-2xl h-full relative overflow-hidden" data-v-cacaec87${_scopeId2}><img${ssrRenderAttr("src", person.image)}${ssrRenderAttr("alt", person.name)} class="w-full aspect-[4/5] rounded-lg object-cover"${ssrRenderAttr("loading", index === 0 ? "eager" : "lazy")} data-v-cacaec87${_scopeId2}>`);
                    if (person.icon) {
                      _push3(`<div class="icon-ribbon" data-v-cacaec87${_scopeId2}><span class="icon-ribbon__content" data-v-cacaec87${_scopeId2}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-v-cacaec87${_scopeId2}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-cacaec87${_scopeId2}></path></svg> ICON of EFW </span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="p-4" data-v-cacaec87${_scopeId2}><h3 class="text-lg font-semibold mb-1 text-center" data-v-cacaec87${_scopeId2}>${ssrInterpolate(person.name)}</h3>`);
                    if (person.title) {
                      _push3(`<div class="text-sm text-gray-800 text-center" data-v-cacaec87${_scopeId2}>${ssrInterpolate(person.title)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (person.subtitle) {
                      _push3(`<div class="text-xs text-gray-500 text-center mb-4" data-v-cacaec87${_scopeId2}>${ssrInterpolate(person.subtitle)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="flex flex-wrap gap-1 md:gap-2 justify-center" data-v-cacaec87${_scopeId2}><!--[-->`);
                    ssrRenderList(person.links, (link, linkIndex) => {
                      _push3(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="text-xs md:text-sm text-blue-600 hover:text-blue-800 underline" data-v-cacaec87${_scopeId2}>${ssrInterpolate(link.text)}</a>`);
                    });
                    _push3(`<!--]--></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-white rounded-2xl h-full relative overflow-hidden" }, [
                        createVNode("img", {
                          src: person.image,
                          alt: person.name,
                          class: "w-full aspect-[4/5] rounded-lg object-cover",
                          loading: index === 0 ? "eager" : "lazy"
                        }, null, 8, ["src", "alt", "loading"]),
                        person.icon ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "icon-ribbon"
                        }, [
                          createVNode("span", { class: "icon-ribbon__content" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4",
                              fill: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                            ])),
                            createTextVNode(" ICON of EFW ")
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "p-4" }, [
                          createVNode("h3", { class: "text-lg font-semibold mb-1 text-center" }, toDisplayString(person.name), 1),
                          person.title ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm text-gray-800 text-center"
                          }, toDisplayString(person.title), 1)) : createCommentVNode("", true),
                          person.subtitle ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-xs text-gray-500 text-center mb-4"
                          }, toDisplayString(person.subtitle), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "flex flex-wrap gap-1 md:gap-2 justify-center" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(person.links, (link, linkIndex) => {
                              return openBlock(), createBlock("a", {
                                key: linkIndex,
                                href: link.url,
                                target: "_blank",
                                class: "text-xs md:text-sm text-blue-600 hover:text-blue-800 underline"
                              }, toDisplayString(link.text), 9, ["href"]);
                            }), 128))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(facesData2), (person, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-white rounded-2xl h-full relative overflow-hidden" }, [
                      createVNode("img", {
                        src: person.image,
                        alt: person.name,
                        class: "w-full aspect-[4/5] rounded-lg object-cover",
                        loading: index === 0 ? "eager" : "lazy"
                      }, null, 8, ["src", "alt", "loading"]),
                      person.icon ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "icon-ribbon"
                      }, [
                        createVNode("span", { class: "icon-ribbon__content" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                          ])),
                          createTextVNode(" ICON of EFW ")
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "p-4" }, [
                        createVNode("h3", { class: "text-lg font-semibold mb-1 text-center" }, toDisplayString(person.name), 1),
                        person.title ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-800 text-center"
                        }, toDisplayString(person.title), 1)) : createCommentVNode("", true),
                        person.subtitle ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-xs text-gray-500 text-center mb-4"
                        }, toDisplayString(person.subtitle), 1)) : createCommentVNode("", true),
                        createVNode("div", { class: "flex flex-wrap gap-1 md:gap-2 justify-center" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(person.links, (link, linkIndex) => {
                            return openBlock(), createBlock("a", {
                              key: linkIndex,
                              href: link.url,
                              target: "_blank",
                              class: "text-xs md:text-sm text-blue-600 hover:text-blue-800 underline"
                            }, toDisplayString(link.text), 9, ["href"]);
                          }), 128))
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FacesOfEfwSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FacesOfEfwSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cacaec87"]]);
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
        _push(ssrRenderComponent(_sfc_main$3, {
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
      _push(ssrRenderComponent(_sfc_main$4, {
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
//# sourceMappingURL=EFW_AICONTEST-DZM3DulH.js.map
