import { computed, ref, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { _ as _export_sfc } from "../server.mjs";
const localFacesData = [
  {
    name: "Olga Khayrullova",
    title: "Model & Influencer",
    subtitle: "Fashion Icon",
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
    title: "Fashion Model",
    subtitle: "EFW Ambassador",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-2.png",
    icon: true,
    order: 2,
    links: [
      { text: "Liza Gallery", url: "https://disk.yandex.ru/a/O-Yaq82vmplm-g" }
    ]
  },
  {
    name: "Olga Baltrukevica",
    title: "International Model",
    subtitle: "Beauty Expert",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-1.png",
    icon: true,
    order: 3,
    links: [
      { text: "Olga Gallery", url: "https://failiem.lv/u/trcyc4awyu" }
    ]
  },
  {
    name: "Ekaterina Potanina",
    title: "",
    subtitle: "",
    image: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-4.png",
    icon: false,
    order: 4,
    links: [
      { text: "Instagram", url: "https://www.instagram.com/potanina_ea/" }
    ]
  },
  {
    name: "Katerina Melikhova",
    title: "",
    subtitle: "",
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
const _sfc_main = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "md:mb-[76px] mb-[56px]" }, _attrs))} data-v-dc2f6a3a><div class="flex justify-between items-center mb-8 xl:mb-[75px]" data-v-dc2f6a3a><h2 id="faces-of-efw" data-nosnippet class="text-xl md:text-3xl xl:text-4xl md:text-left w-full text-center" data-v-dc2f6a3a>Faces of Emirates Fashion Week</h2><div class="flex items-center gap-4" data-v-dc2f6a3a><button class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center" data-v-dc2f6a3a><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-dc2f6a3a><path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-dc2f6a3a></path></svg></button><button class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center" data-v-dc2f6a3a><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-dc2f6a3a><path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-dc2f6a3a></path></svg></button></div></div><div class="overflow-x-auto hide-scrollbar md:px-0" data-v-dc2f6a3a>`);
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
                    _push3(`<div class="bg-white rounded-2xl h-full relative overflow-hidden" data-v-dc2f6a3a${_scopeId2}><img${ssrRenderAttr("src", person.image)}${ssrRenderAttr("alt", person.name)} class="w-full aspect-[4/5] rounded-lg object-cover"${ssrRenderAttr("loading", index === 0 ? "eager" : "lazy")} data-v-dc2f6a3a${_scopeId2}>`);
                    if (person.icon) {
                      _push3(`<div class="icon-ribbon" data-v-dc2f6a3a${_scopeId2}><span class="icon-ribbon__content" data-v-dc2f6a3a${_scopeId2}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-v-dc2f6a3a${_scopeId2}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-dc2f6a3a${_scopeId2}></path></svg> ICON of EFW </span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="p-4" data-v-dc2f6a3a${_scopeId2}><h3 class="text-lg font-semibold text-center" data-v-dc2f6a3a${_scopeId2}>${ssrInterpolate(person.name)}</h3>`);
                    if (person.title) {
                      _push3(`<div class="text-sm text-gray-800 text-center" data-v-dc2f6a3a${_scopeId2}>${ssrInterpolate(person.title)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (person.subtitle) {
                      _push3(`<div class="text-xs text-gray-500 text-center mb-4" data-v-dc2f6a3a${_scopeId2}>${ssrInterpolate(person.subtitle)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass([{ "mt-4": !person.title && !person.subtitle }, "flex flex-wrap gap-1 md:gap-2 justify-center"])}" data-v-dc2f6a3a${_scopeId2}><!--[-->`);
                    ssrRenderList(person.links, (link, linkIndex) => {
                      _push3(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="text-xs md:text-sm text-blue-600 hover:text-blue-800 underline" data-v-dc2f6a3a${_scopeId2}>${ssrInterpolate(link.text)}</a>`);
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
                          createVNode("h3", { class: "text-lg font-semibold text-center" }, toDisplayString(person.name), 1),
                          person.title ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm text-gray-800 text-center"
                          }, toDisplayString(person.title), 1)) : createCommentVNode("", true),
                          person.subtitle ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-xs text-gray-500 text-center mb-4"
                          }, toDisplayString(person.subtitle), 1)) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["flex flex-wrap gap-1 md:gap-2 justify-center", { "mt-4": !person.title && !person.subtitle }]
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(person.links, (link, linkIndex) => {
                              return openBlock(), createBlock("a", {
                                key: linkIndex,
                                href: link.url,
                                target: "_blank",
                                class: "text-xs md:text-sm text-blue-600 hover:text-blue-800 underline"
                              }, toDisplayString(link.text), 9, ["href"]);
                            }), 128))
                          ], 2)
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
                        createVNode("h3", { class: "text-lg font-semibold text-center" }, toDisplayString(person.name), 1),
                        person.title ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-800 text-center"
                        }, toDisplayString(person.title), 1)) : createCommentVNode("", true),
                        person.subtitle ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-xs text-gray-500 text-center mb-4"
                        }, toDisplayString(person.subtitle), 1)) : createCommentVNode("", true),
                        createVNode("div", {
                          class: ["flex flex-wrap gap-1 md:gap-2 justify-center", { "mt-4": !person.title && !person.subtitle }]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(person.links, (link, linkIndex) => {
                            return openBlock(), createBlock("a", {
                              key: linkIndex,
                              href: link.url,
                              target: "_blank",
                              class: "text-xs md:text-sm text-blue-600 hover:text-blue-800 underline"
                            }, toDisplayString(link.text), 9, ["href"]);
                          }), 128))
                        ], 2)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FacesOfEfwSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FacesOfEfwSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc2f6a3a"]]);
export {
  FacesOfEfwSection as F
};
//# sourceMappingURL=FacesOfEfwSection-kFEAmP4Z.js.map
