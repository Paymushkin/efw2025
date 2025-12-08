import { _ as _sfc_main$1 } from "./AppSeo-LOFxIM8N.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
const _sfc_main = {
  __name: "EFW_AWARDS_2025_april",
  __ssrInlineRender: true,
  setup(__props) {
    const isVideoVisible = ref({});
    ref([]);
    const groupedContent = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSeo = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))} data-v-3b6feb9d>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Emirates Fashion Week Awards Fall Winter 2025 | April 15, 2025",
        description: "Celebrating the winners of Emirates Fashion Week Awards Fall Winter 2025. Discover the talented designers, brands, and industry leaders who received recognition on April 15, 2025.",
        keywords: ["Emirates Fashion Week Awards", "Fashion Awards 2025", "Dubai Fashion Awards", "Fashion Winners", "Design Awards"]
      }, null, _parent));
      _push(`<section class="bg-cover bg-center bg-no-repeat py-20 hero-bg" data-v-3b6feb9d><div class="container mx-auto px-4" data-v-3b6feb9d><div class="max-w-4xl mx-auto text-center" data-v-3b6feb9d><h1 class="text-5xl md:text-6xl font-bold mb-6 text-white" data-v-3b6feb9d>Emirates Fashion Week Awards</h1><p class="text-xl md:text-2xl text-gray-200 mb-4" data-v-3b6feb9d>Fall Winter 2025</p><p class="text-lg text-gray-300" data-v-3b6feb9d>April 15, 2025</p></div></div></section><section class="py-20" data-v-3b6feb9d><div class="container mx-auto px-4" data-v-3b6feb9d><div class="text-center mb-16" data-v-3b6feb9d><h2 class="text-4xl md:text-5xl font-bold mb-6" data-v-3b6feb9d>Award Winners</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-3b6feb9d> Celebrating excellence in fashion, design, and innovation across the industry. </p></div><!--[-->`);
      ssrRenderList(groupedContent.value, (group, groupIndex) => {
        _push(`<div class="mb-16" data-v-3b6feb9d>`);
        if (group.type === "winners") {
          _push(`<div data-v-3b6feb9d><div class="hidden md:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8" data-v-3b6feb9d><!--[-->`);
          ssrRenderList(group.data, (winner, index) => {
            _push(`<div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative p-6" data-v-3b6feb9d><div class="absolute top-4 right-4" data-v-3b6feb9d><div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg" data-v-3b6feb9d><svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-3b6feb9d><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4945 0.7045C14.6865 0.5965 13.535 0.5 11.9995 0.5C10.4645 0.5 9.3135 0.5965 8.5055 0.7045L8.5555 0.8195C8.6725 1.0845 8.846 1.473 9.072 1.961C9.68511 3.28262 10.3325 4.58806 11.0135 5.876L11.0835 6.0075C11.6945 5.99713 12.3055 5.99713 12.9165 6.0075L12.9865 5.876C13.6675 4.58806 14.3149 3.28262 14.928 1.961C15.1212 1.54421 15.3103 1.12535 15.4945 0.7045ZM1.9175 8.122C1.6495 7.731 1.59 7.235 1.79 6.805C3.425 3.294 7 1 7 1C7 1 8.6665 4.974 11.3275 9.53C10.1777 9.63328 9.06726 10.0006 8.08267 10.6033C7.09808 11.2061 6.26592 12.028 5.651 13.005C4.3267 11.4401 3.08034 9.81038 1.9175 8.122ZM18.349 13.0055C19.6733 11.4404 20.9192 9.81055 22.082 8.122C22.35 7.731 22.4095 7.235 22.2095 6.805C20.575 3.294 16.9995 1 16.9995 1C16.9995 1 15.3335 4.974 12.6725 9.53C13.8222 9.63336 14.9326 10.0007 15.9171 10.6034C16.9016 11.2062 17.7336 12.028 18.3485 13.005M12 10.75C8.548 10.75 5.75 13.548 5.75 17C5.75 20.452 8.548 23.25 12 23.25C15.452 23.25 18.25 20.452 18.25 17C18.25 13.548 15.452 10.75 12 10.75ZM12.555 13.82L13.31 15.276L14.92 15.593C15.0284 15.6144 15.1291 15.664 15.2121 15.737C15.295 15.81 15.3571 15.9036 15.392 16.0084C15.427 16.1132 15.4336 16.2253 15.4111 16.3335C15.3886 16.4416 15.3378 16.5419 15.264 16.624L14.12 17.8965L14.3295 19.594C14.3434 19.7062 14.3266 19.82 14.2809 19.9234C14.2352 20.0268 14.1624 20.1159 14.0701 20.1812C13.9778 20.2464 13.8695 20.2854 13.7568 20.294C13.6441 20.3026 13.5311 20.2805 13.43 20.23L12 19.516L10.57 20.23C10.4689 20.2805 10.3559 20.3026 10.2432 20.294C10.1305 20.2854 10.0222 20.2464 9.92993 20.1812C9.83763 20.1159 9.76476 20.0268 9.71907 19.9234C9.67339 19.82 9.6566 19.7062 9.6705 19.594L9.88 17.8965L8.736 16.624C8.66217 16.5419 8.61142 16.4416 8.58893 16.3335C8.56644 16.2253 8.57301 16.1132 8.60797 16.0084C8.64293 15.9036 8.70503 15.81 8.78794 15.737C8.87086 15.664 8.97163 15.6144 9.08 15.593L10.69 15.276L11.445 13.8195C11.4977 13.7178 11.5773 13.6325 11.6752 13.5729C11.7731 13.5134 11.8854 13.4819 12 13.4819C12.1146 13.4819 12.2269 13.5134 12.3248 13.5729C12.4227 13.6325 12.5023 13.7183 12.555 13.82Z" fill="currentColor" data-v-3b6feb9d></path></svg></div></div><div data-v-3b6feb9d><h3 class="text-xl font-bold mb-2" data-v-3b6feb9d>${ssrInterpolate(winner.name)}</h3><p class="text-lg font-semibold text-blue-600 mb-2" data-v-3b6feb9d>${ssrInterpolate(winner.category)}</p><p class="text-sm text-gray-500 mb-4" data-v-3b6feb9d>${ssrInterpolate(winner.company)}</p><div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block" data-v-3b6feb9d> Emirates Fashion Week Awards Fall Winter 2025 </div></div></div>`);
          });
          _push(`<!--]--></div><div class="md:hidden overflow-x-auto custom-scrollbar card-container -mx-4 px-4" data-v-3b6feb9d><div class="flex gap-5 pb-4" data-v-3b6feb9d><!--[-->`);
          ssrRenderList(group.data, (winner, index) => {
            _push(`<div class="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-[85vw] max-w-[360px] card-item relative p-4" data-v-3b6feb9d><div class="absolute top-3 right-3" data-v-3b6feb9d><div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg" data-v-3b6feb9d><svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-3b6feb9d><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4945 0.7045C14.6865 0.5965 13.535 0.5 11.9995 0.5C10.4645 0.5 9.3135 0.5965 8.5055 0.7045L8.5555 0.8195C8.6725 1.0845 8.846 1.473 9.072 1.961C9.68511 3.28262 10.3325 4.58806 11.0135 5.876L11.0835 6.0075C11.6945 5.99713 12.3055 5.99713 12.9165 6.0075L12.9865 5.876C13.6675 4.58806 14.3149 3.28262 14.928 1.961C15.1212 1.54421 15.3103 1.12535 15.4945 0.7045ZM1.9175 8.122C1.6495 7.731 1.59 7.235 1.79 6.805C3.425 3.294 7 1 7 1C7 1 8.6665 4.974 11.3275 9.53C10.1777 9.63328 9.06726 10.0006 8.08267 10.6033C7.09808 11.2061 6.26592 12.028 5.651 13.005C4.3267 11.4401 3.08034 9.81038 1.9175 8.122ZM18.349 13.0055C19.6733 11.4404 20.9192 9.81055 22.082 8.122C22.35 7.731 22.4095 7.235 22.2095 6.805C20.575 3.294 16.9995 1 16.9995 1C16.9995 1 15.3335 4.974 12.6725 9.53C13.8222 9.63336 14.9326 10.0007 15.9171 10.6034C16.9016 11.2062 17.7336 12.028 18.3485 13.005M12 10.75C8.548 10.75 5.75 13.548 5.75 17C5.75 20.452 8.548 23.25 12 23.25C15.452 23.25 18.25 20.452 18.25 17C18.25 13.548 15.452 10.75 12 10.75ZM12.555 13.82L13.31 15.276L14.92 15.593C15.0284 15.6144 15.1291 15.664 15.2121 15.737C15.295 15.81 15.3571 15.9036 15.392 16.0084C15.427 16.1132 15.4336 16.2253 15.4111 16.3335C15.3886 16.4416 15.3378 16.5419 15.264 16.624L14.12 17.8965L14.3295 19.594C14.3434 19.7062 14.3266 19.82 14.2809 19.9234C14.2352 20.0268 14.1624 20.1159 14.0701 20.1812C13.9778 20.2464 13.8695 20.2854 13.7568 20.294C13.6441 20.3026 13.5311 20.2805 13.43 20.23L12 19.516L10.57 20.23C10.4689 20.2805 10.3559 20.3026 10.2432 20.294C10.1305 20.2854 10.0222 20.2464 9.92993 20.1812C9.83763 20.1159 9.76476 20.0268 9.71907 19.9234C9.67339 19.82 9.6566 19.7062 9.6705 19.594L9.88 17.8965L8.736 16.624C8.66217 16.5419 8.61142 16.4416 8.58893 16.3335C8.56644 16.2253 8.57301 16.1132 8.60797 16.0084C8.64293 15.9036 8.70503 15.81 8.78794 15.737C8.87086 15.664 8.97163 15.6144 9.08 15.593L10.69 15.276L11.445 13.8195C11.4977 13.7178 11.5773 13.6325 11.6752 13.5729C11.7731 13.5134 11.8854 13.4819 12 13.4819C12.1146 13.4819 12.2269 13.5134 12.3248 13.5729C12.4227 13.6325 12.5023 13.7183 12.555 13.82Z" fill="currentColor" data-v-3b6feb9d></path></svg></div></div><div data-v-3b6feb9d><h3 class="text-lg font-bold mb-2" data-v-3b6feb9d>${ssrInterpolate(winner.name)}</h3><p class="text-base font-semibold text-blue-600 mb-2" data-v-3b6feb9d>${ssrInterpolate(winner.category)}</p><p class="text-sm text-gray-500 mb-3" data-v-3b6feb9d>${ssrInterpolate(winner.company)}</p><div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-semibold inline-block" data-v-3b6feb9d> Emirates Fashion Week Awards Fall Winter 2025 </div></div></div>`);
          });
          _push(`<!--]--><div class="flex-shrink-0 w-5" data-v-3b6feb9d></div></div></div></div>`);
        } else if (group.type === "videos") {
          _push(`<div data-v-3b6feb9d><div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-v-3b6feb9d><!--[-->`);
          ssrRenderList(group.data, (interview, index) => {
            _push(`<div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-v-3b6feb9d><div class="aspect-video relative" data-v-3b6feb9d><video${ssrRenderAttr("src", interview.video)} class="w-full h-full object-cover" muted loop playsinline${ssrRenderAttr("preload", isVideoVisible.value[group.startIndex + index] ? "metadata" : "none")} controls${ssrRenderAttr("data-index", group.startIndex + index)} data-v-3b6feb9d> Your browser does not support the video tag. </video></div></div>`);
          });
          _push(`<!--]--></div><div class="md:hidden overflow-x-auto custom-scrollbar card-container -mx-4 px-4" data-v-3b6feb9d><div class="flex gap-5 pb-4" data-v-3b6feb9d><!--[-->`);
          ssrRenderList(group.data, (interview, index) => {
            _push(`<div class="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-[85vw] max-w-[360px] card-item" data-v-3b6feb9d><div class="aspect-video relative" data-v-3b6feb9d><video${ssrRenderAttr("src", interview.video)} class="w-full h-full object-cover" muted loop playsinline${ssrRenderAttr("preload", isVideoVisible.value[group.startIndex + index] ? "metadata" : "none")} controls${ssrRenderAttr("data-index", group.startIndex + index)} data-v-3b6feb9d> Your browser does not support the video tag. </video></div></div>`);
          });
          _push(`<!--]--><div class="flex-shrink-0 w-5" data-v-3b6feb9d></div></div></div><div class="text-center mt-8" data-v-3b6feb9d><a href="https://disk.yandex.ru/d/th-0hjIjKyPuag/TV%20Lobby/3%20Awards" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors" data-v-3b6feb9d> All TV Interviews </a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/EFW_AWARDS_2025_april.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EFW_AWARDS_2025_april = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b6feb9d"]]);
export {
  EFW_AWARDS_2025_april as default
};
//# sourceMappingURL=EFW_AWARDS_2025_april-D-XPDxPr.js.map
