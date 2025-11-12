import { _ as _export_sfc, e as __nuxt_component_1 } from "../server.mjs";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bmms7Mh5.js";
import { p as photo19, a as photo22, b as photo34 } from "./photo-12-1-rQskvVvC.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import gsap from "gsap";
import { _ as _sfc_main$5, F as FEATURES_DATA } from "./featuresData-C_24UN53.js";
import { _ as _sfc_main$4 } from "./AppSeo-D3mYHa43.js";
import { F as FacesOfEfwSection } from "./FacesOfEfwSection-kFEAmP4Z.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "./BaseButton-BBGwxqcq.js";
import "./ContactForm-C78zF6fE.js";
import "./useVideoVisibility-ajKG2x9w.js";
import "./4-2-AH5FmIKA.js";
import "./texts-CvqgDMCX.js";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "swiper/vue";
import "swiper/modules";
const image1$1 = "" + __buildAssetsURL("1.D7rNB5FW.webp");
const image2$1 = "" + __buildAssetsURL("2.DB2yUsgO.webp");
const image3$1 = "" + __buildAssetsURL("3.BmYBa8O3.webp");
const image4$1 = "" + __buildAssetsURL("1.CR8Uhang.webp");
const image5$1 = "" + __buildAssetsURL("2.DBXCX7gN.webp");
const image6$1 = "" + __buildAssetsURL("3.CU6aBDxL.webp");
const image7$1 = "" + __buildAssetsURL("1.C3Vc-v1U.webp");
const image8$1 = "" + __buildAssetsURL("2.BtNtYX3-.webp");
const image9$1 = "" + __buildAssetsURL("3.BxMrLIss.webp");
const image10$1 = "" + __buildAssetsURL("1.CFyclrN1.webp");
const image11$1 = "" + __buildAssetsURL("2.B_jol5Ct.webp");
const image12$1 = "" + __buildAssetsURL("3.B29fnJMf.webp");
const image13$1 = "" + __buildAssetsURL("1.C2rSgzKT.webp");
const image14$1 = "" + __buildAssetsURL("2.DFm-gnE3.webp");
const image15$1 = "" + __buildAssetsURL("3.Wci4b8jN.webp");
const image16 = "" + __buildAssetsURL("1.Ca2knP-i.webp");
const image17 = "" + __buildAssetsURL("2.CZCR_xeX.webp");
const image18 = "" + __buildAssetsURL("3.B_WhYiTx.webp");
const image19 = "" + __buildAssetsURL("1.BU2xAAEx.webp");
const image20 = "" + __buildAssetsURL("2.DoaHh2K1.webp");
const image21 = "" + __buildAssetsURL("3.DV-37hsf.webp");
const image22 = "" + __buildAssetsURL("1.BoIVfBEq.webp");
const image23 = "" + __buildAssetsURL("2.Cm_2R9oN.webp");
const image24 = "" + __buildAssetsURL("3.C_SRdHCP.webp");
const image25 = "" + __buildAssetsURL("1.Dl_Y5zO9.webp");
const image26 = "" + __buildAssetsURL("2.93WTDfWK.webp");
const image27 = "" + __buildAssetsURL("3.Cho9s-sc.webp");
const image28 = "" + __buildAssetsURL("1.CwtL9nE8.webp");
const image29 = "" + __buildAssetsURL("2.DD4iPjmG.webp");
const image30 = "" + __buildAssetsURL("3.BkTCotda.webp");
const image31 = "" + __buildAssetsURL("1.DJ9wrHII.webp");
const image32 = "" + __buildAssetsURL("2.CJK32JPS.webp");
const image33 = "" + __buildAssetsURL("3.DdAsfMSH.webp");
const image34 = "" + __buildAssetsURL("1.DQ6g_lOA.webp");
const image35 = "" + __buildAssetsURL("2.B_aYxO52.webp");
const image36 = "" + __buildAssetsURL("3.CtMCF6Du.webp");
const tabs = [
  { year: "2025", season: "Fall/Winter", images: [photo19, photo22, photo34], designers: ["OSMOSIS", "NERMIN", "AISHA"] },
  { year: "2024", season: "Spring/Summer", images: [image34, image35, image36], designers: ["CHOLPONA", "Icona", "Suhaila"] },
  { year: "2024", season: "Fall/Winter", images: [image31, image32, image33], designers: ["Danatella", "Alisia Fiori", "BERGE"] },
  { year: "2023", season: "Spring/Summer", images: [image28, image29, image30], designers: ["La Donna Di Ferro", "Fair Blvd", "La Reine"] },
  { year: "2023", season: "Fall/Winter", images: [image25, image26, image27], designers: ["Beth & Mishka", "Beth & Mishka", "JAP Poland"] },
  { year: "2022", season: "Spring/Summer", images: [image22, image23, image24], designers: ["Savalme", "Savalme", "Walid Atallah"] },
  { year: "2022", season: "Fall/Winter", images: [image19, image20, image21], designers: ["Aaronic Atelier", "Aaronic Atelier", "Art Fashion"] },
  { year: "2021", season: "Spring/Summer", images: [image16, image17, image18], designers: ["JAP Poland", "Marsi", "Marsi"] },
  { year: "2021", season: "Fall/Winter", images: [image13$1, image14$1, image15$1], designers: ["Baravia Fashion", "Baravia Fashion", "D-Design"] },
  { year: "2020", season: "Spring/Summer", images: [image10$1, image11$1, image12$1], designers: ["Dilrabo", "Said Omari", "Said Omari"] },
  { year: "2020", season: "Fall/Winter", images: [image7$1, image8$1, image9$1], designers: ["Baravia", "Baravia", "Carbonado Collection"] },
  { year: "2019", season: "Spring/Summer", images: [image4$1, image5$1, image6$1], designers: ["DL-Dress", "Michael Lombard ", "Michael Lombard "] },
  { year: "2019", season: "Fall/Winter", images: [image1$1, image2$1, image3$1], designers: ["Beyader", "DL-Dress", "Beyader"] }
];
const getOptimizedImageUrl = (imageUrl) => {
  return imageUrl;
};
const getImageDimensions = () => {
  return {
    width: 400,
    height: 600
  };
};
const getOptimizedImageAttributes = (imageUrl, alt = "") => {
  const dimensions = getImageDimensions();
  return {
    src: getOptimizedImageUrl(imageUrl),
    alt,
    loading: "lazy",
    width: dimensions.width,
    height: dimensions.height,
    decoding: "async"
  };
};
const _sfc_main$3 = {
  __name: "HowItWasSection",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref(0);
    ref(null);
    const isTransitioning = ref(false);
    const currentImages = computed(() => {
      return tabs[currentTab.value].images;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))} data-v-4cc1bc5d><h2 id="previous-seasons" data-nosnippet class="text-xl md:text-3xl xl:text-4xl scroll-mt-[120px] md:scroll-mt-[100px]" data-v-4cc1bc5d>PREVIOUS 13 SEASONS</h2><p class="text-sm md:text-base xl:text-xl mb-4 xl:mb-8 md:mb-6" data-v-4cc1bc5d>collections</p><div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0 xl:mb-5 md:mb-4 mb-3 cursor-grab active:cursor-grabbing" data-v-4cc1bc5d><div class="flex gap-8 xl:mb-5 md:mb-4 mb-3 whitespace-nowrap pb-4 md:pb-0 pr-4 md:pr-0 pl-4 md:pl-0" data-v-4cc1bc5d><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<button class="${ssrRenderClass([{
          "text-black": currentTab.value === index,
          "text-black-20": currentTab.value !== index
        }, "flex flex-col items-start md:gap-2 gap-1 hover:text-black flex-shrink-0"])}" data-v-4cc1bc5d><span class="text-xl xl:text-4xl md:text-3xl transition-colors duration-300" data-v-4cc1bc5d>${ssrInterpolate(tab.year)}</span><span class="xl:max-w-[120px] md:max-w-[100px] max-w-[80px] xl:text-base text-sm text-left truncate transition-colors duration-300" data-v-4cc1bc5d>${ssrInterpolate(tab.season)}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0" data-v-4cc1bc5d><div class="flex md:grid md:grid-cols-3 gap-4 px-4 md:px-0" data-v-4cc1bc5d><!--[-->`);
      ssrRenderList(currentImages.value, (image, index) => {
        _push(`<div class="overflow-hidden rounded-lg flex-shrink-0 w-[280px] md:w-auto transition-all duration-700 ease-in-out" style="${ssrRenderStyle({
          opacity: isTransitioning.value ? 0.3 : 1
        })}" data-v-4cc1bc5d><div class="flex flex-col gap-5" data-v-4cc1bc5d>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/gallery" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttrs(mergeProps({ ref_for: true }, unref(getOptimizedImageAttributes)(image, unref(tabs)[currentTab.value].designers[index]), {
                class: "w-full h-full object-cover transition-all duration-700 ease-in-out",
                loading: index === 0 ? "eager" : "lazy"
              }))} data-v-4cc1bc5d${_scopeId}>`);
            } else {
              return [
                createVNode("img", mergeProps({ ref_for: true }, unref(getOptimizedImageAttributes)(image, unref(tabs)[currentTab.value].designers[index]), {
                  class: "w-full h-full object-cover transition-all duration-700 ease-in-out",
                  loading: index === 0 ? "eager" : "lazy"
                }), null, 16, ["loading"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span class="text-black transition-all duration-700 ease-in-out" data-v-4cc1bc5d>${ssrInterpolate(unref(tabs)[currentTab.value].designers[index])}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWasSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HowItWasSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4cc1bc5d"]]);
const image1 = "" + __buildAssetsURL("card-1.DaYhi4Nm.webp");
const image2 = "" + __buildAssetsURL("card-2.Cp2r5rgD.webp");
const image3 = "" + __buildAssetsURL("card-3.DlEllFPM.webp");
const image4 = "data:image/webp;base64,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";
const image5 = "data:image/webp;base64,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";
const image6 = "data:image/webp;base64,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";
const image7 = "data:image/webp;base64,UklGRsgMAABXRUJQVlA4WAoAAAAwAAAAvgAA2QAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBI6AcAAA2wx///OTfSa7/z/aUzmYmT2mZQ28aejbVt27ZtG6nbVY2gbVS3aTdFOJNM8/vOd/HD4B73390jETEBtPm/zf9t/m/z//9flICSyk7GQFl8BT2oLqm3k0palFSAtFN2UsnBfVJqS/YjFUhASWUjbRRSydw+vprSQxiuTAzAlCgDTAepDMCUynAyjZ9UVAVrggQeuB5buduHUTGCj+aHHQIXvgTvLAC6DF1/srKoH4aYELjzNqBzRdimcfk19VLJ8L8fBzJz1cJSqaYuaSRw7UPYVnQwjQODkOGrrwc6DKstWJqvnPz/Wlkdwv/KuWzrrGS4h2mjHjg/hH908ajVIQffzmFEfZInAIs+sesN8FMzPrwOaE0ZGuu857pb6I8BjPkBwOu1yZx535gdqBv6ay1A9/3yr1vwkApa2/kx+KkZ9ToaQOeu/RHphBLCDxFNUpIkJXmXDb/DDyZe/A6ocHQ/nQT0rW6xmWlRYBq44DJUkkXoLjdcCKQLrP2qLFrYoCkarTqfryWAQK+aQcQDaOwjHlCQm6elRejkdGKqBTB1tU1yNgnr7VVmM8fiqIVNuxPnIzUCjdT/egvojm2n+hZstQAttf83b5+GQElQkuxuW4nplQiUBJWEkqAkWgDtTjjYziu0GYJbJW3SGmLEvEKbUa54KeKBnM6yIwg1MlTkRwSM4zDEzp9UZyd2vnNKTwTzCicA8ppnPp6LYOSm2BQA8u9LV+eDXFyZdgaIPR9l5Axq7278Gps5ruS6DX6QPxHr+V9bOuO69eKfInCUdAV8DWtOBeELwUg7+lfaseSHj0sEdN+fBoSf5taHgIy62KQCh1fz4D3AHcean/XA8iV1R+niLts4bFngipdKQqCQKkZ52xUwwR2+FqwRD6DAwDHXIa/YIa2hBR8YpgAwTAlgEnuh8QF0qEmJAClNRD9+jWWgu4w6rIoY+zvsBuZE4V4qXPZ3GLHZAQwNRNACq008NfFf9AXQl4SeuRyYFgcg2eKJ4EtxyC1xkeCGic8iVewmfQdMTaw5SyA9PT5bPPWkdISOAFpAj2r1H3AsG7JHLKmuO06HFGLfo64RFiXW+DWQS3wfeQ2agCFAePlCSNVBO4VpAJ5IIiybpYVeet6Ll0INcfSM2ACjojgRr+ykQ8yPJkN4kE1NDlmGBnkI8pxEz912XnUFwDFEAjxwFaD3/nGLVMR1zhI6EWVmOAAciR0TfmBWFEkVfg0v3OqwoRvAxD0MB1p+mAkM3Waj//oGSmqxjEQ8/vQtKknrrR/fRnxnrGB8FOqOqwGzlxm7+V/LPlEIrCEcm5MFEIHBQENjFwF5xTYCkFro5xNCXj95rpbouydOjc/Q3c1zopBYgwax1mLyt4NJTNkJOIjpgxGbbaxaiAkkpGLWP07XSD3tmvlSxcHot2NGFHHWOonuR8cCSrrQwpJZ65CFkpb2ABXUdIB+VTZKgtg5D6kSAeS/jn2ltVSLAu8Q65Afpn/XGZR0oaQlEIwRy2Yhs3vC4eqRLrjANAgMwfGvl07E2tNSzO7ekNnSYpEb76EIZJjEVPLTy6rQSfrZ82O2rkMvxuwDVkwTTvLjt3PAQ4zFkkle/rQNitJ7umh9FZMgzt/K8Tb5lqBvdyfw5hywsHUvgCJRFTt/u0NDdk5ZrA7vH8OwwaBWz8ZlYfNR4liS3ZnrFKyeYLjA14L7ALZ5gHr/t2gB/SttkpstCfrvDNNofqHsu3MRDCyPlVw2jV6nwLH9w91k1BHPo9X5OhNY/RviPxSQgAAG77BJ6KcxEBfzxSLimfPedGQ7LbandHcT58BnMwRA6cQE6IrbQWWJdzwLGsBHXP07unpA8P1AEjalcCJAPVnxk2mgJKARDCxPvMRMCtW1B/h2TOKkFneTQBXulZ0nAjRDMGDJBuTGK7vUfuKH7vtjEdGEvYBh2jTHIgItvric9NPGUZayka5OxEfWNXUGVrqTwwwJvqJDHgkzlzMfINwL4DOq6dMXMltaoggGwN+7dBHACWzzWjNA1pc4NCdDR3HoDwBmzKBwHlAX7uNqIFnAiU0xgjXjgVXuxHcS4NUXWtPQ7atAC0KhyZbdwK4+4G1XJ9xVDABdlIaSWmyzCV9xAUDjIoc9vYB9oKQWlXFYMx7Yjmt10cUAzbNjtnwmUBwFtkEK52mpM9FSi7XkWcqB7UOAzgejeP3fWgh6I0FtsPFiW4fjK6dpgeyMhGO1cdjZw4Bv3Ulsa4n5d5PgMHjcuLz4UaElCC04hX6Ww0DZIGBAaZK7DWqiFoBGXkmMPxjTU0tAI08hjs0H+8MKd3E0LIHg7s5e9kA6kFlLtptAsKlgSzqACI2FCYCuBXb1AaauMICOPzow4YGJAII7kKqdm4y6NCC1Efp8lgsg9NlIhQfoetCpQw1ZQFoD68ZCEakWw2znJq0hutIzw3jTUSM8RhbMq4l40uCfZcrBm46sGj5tQWfj4NKvkWp2DUQAtpylkN2ZqpDdcTkheErf5Mb1LyHDrLks7ODJYlQkQhqgCpL/0jf52Lo3kGFq57RidAOoWdiK0QkmBbVoD5evaWmFL+9sISmZNRebTqlE31IKYaAyZAKVISLAnjocw6Dgk68OmQCKEhxVCSjYAgrXJa/tbAZQ0FSGYwRZGsZxw3s7mwEUsAlMrKoITKA8jAYaywAay6AVmsv4769o83+b/9v83+b//9ELVlA4IOoCAACQGgCdASq/ANoAPm02mEkkIyKhIlaoQIANiWdu4XaxHvF/w1x3aCci/6L7bvdf/cvYf4lPSA8wH6of3T2cvQB6AH9V/gHpR+xt6AH67+k/+wHwkft76NX//fYFM3LA0qDPIRxtbIy66bytkZddN5WyMuum8rZGXXTeVsjLrpvK2RRVVvaQbOoYQog7f8aZ9bIy2DTtZTBSYBz30EU+41N3IGnk1M8/WCR8lnkcdCSz3V3tHvoJKq3UhXXTdyKmwBgDaFyMuum8rZGXXTeVsjLrpvK2Rl103lbIy66a0AD+/9zlAAMn1V23OXBw8XppQSK6OA6wgW+/4y2IHJRHoff/rK3Jp9LwQgUuE7xoht1csxMk7pSWKnuzhI+jlKiI0lZSAudtwB7+0qeHBFAdbTfnsS0y306v+3VZ+p3nEfMWHY6h/y2fUDJTEYoy9M9J/k079Ebq4W6Owg/nM3cq3klTD8AV3oUVrqg/NWXxMRah1k/D+8TbqBbGeTrX0xi7S1sq0vVmQz+F6Xxt4gL6S/mmMfu4uc1f/v+H8r+2zbZWZ52EHN7j+Twa4dgf0ns1/+HlGpNNd8fCIhRvwiv6DPihGhJY8i8Kwd9YTVh3iJfP27wiu8swoV3gWv11/0mOELhuk/3vLRKSpTVrz0P0FSZ+CCcC+foMM6i276hXCpSMSswHf5wCo5aFdFHzmoOKp40cmgWnSR2eO2MshsDs+o76ff3bIlj+kIqO+9l/TToCuSpFpH2zEYxBH/3Z8rb2teMYrod2sJ9h3tBIDYcYg/cL8IWYzX05FiaMWSN5/xBytzE55r182Lbdr/s9qa/dRWg3+Y1LUL0xN3c0i+LTdoMbPcyS++bP/TLQxs1TqLx64bXfFcJUa7c014T6BZga47TIb8D8s+oxAqQLk55iUfFDxlmDHaC4AdPC1zxIow0DL+l309xaCBM5E/+cx0wxLb00Nn/8OlVBUz3pBTfp8j+Hc37ieAAAAAAAAA==";
const image8 = "" + __buildAssetsURL("card-8.DC0eir-i.webp");
const image9 = "data:image/webp;base64,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";
const image10 = "" + __buildAssetsURL("card-10.BqR6WsQ0.webp");
const image11 = "" + __buildAssetsURL("card-11.BsAjwhl9.webp");
const image12 = "" + __buildAssetsURL("card-12.DGh1KobL.webp");
const image13 = "data:image/webp;base64,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";
const image14 = "" + __buildAssetsURL("card-14.Bm0Pvvj1.webp");
const image15 = "data:image/webp;base64,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";
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
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mb-[105px]" }, _attrs))} data-v-cea75751><h2 id="partners-media" data-nosnippet class="text-xl md:text-3xl xl:text-4xl mb-8 xl:mb-[75px]" data-v-cea75751>PARTNERS &amp; MEDIA</h2><div class="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-9 gap-4 justify-items-center md:justify-items-start" data-v-cea75751><!--[-->`);
      ssrRenderList(sponsors, (sponsor, index) => {
        _push(`<div class="${ssrRenderClass([
          "flex justify-center items-center",
          index === 0 ? "col-span-2 md:col-span-2 xl:col-span-2" : ""
        ])}" data-v-cea75751><img${ssrRenderAttr("src", sponsor)} alt="Sponsor Logo" class="object-center" data-v-cea75751></div>`);
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
const SponsorsSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cea75751"]]);
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
      { startNumber: "1", endNumber: "14", label: "SEASONS", text: "organized" },
      { startNumber: "100", endNumber: "340", label: "DESIGNERS", text: "participated" },
      { startNumber: "100", endNumber: "1050", label: "MODELS", text: "professionally trained" }
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
        _push(`<div class="text-left"><h2 class="text-3xl xl:text-5xl 2xl:text-6xl font-light mb-2">${ssrInterpolate(unref(displayNumbers)[index].displayNumber)} `);
        if (index !== 0) {
          _push(`<span>+</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h2><p class="text-white text-base xl:text-xl 2xl:text-2xl">${ssrInterpolate(stat.label)}</p><p class="text-white text-sm xl:text-lg 2xl:text-xl">${ssrInterpolate(stat.text)}</p></div>`);
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const featuresData = FEATURES_DATA;
    console.log("🏠 Главная страница: Компонент загружен");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Emirates Fashion Week | Dubai 2025 | 14th Season | Spring Summer 26 | 8–11 November",
        description: "Emirates Fashion Week Dubai 2025 celebrates its 14th Season (Spring/Summer 26) on 8–11 November at Skylight Gallery, Arjaan by Rotana, Dubai Media City. Featuring 2 days of runway shows and 2 days of 40 fashion pop-ups & 60 beauty services market. Since 2019, EFW has showcased 350+ designers and trained 1200+ models.",
        keywords: "Emirates Fashion Week, Dubai Fashion, Fashion Shows Runways Dubai, Beauty Exhibition UAE, Fashion Pop-up Market Dubai, Designer Collections, Beauty Services Dubai, Fashion Week 2025 Dubai"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(HowItWasSection, {
        id: "previous-seasons",
        class: "mb-[56px] md:mb-[76px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(SponsorsSection, {
        id: "partners-media",
        class: "md:mb-[76px] mb-[56px]"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "md:mb-[76px] mb-[56px]" }, null, _parent));
      _push(`<div id="features-access" class="container mx-auto px-4 md:mb-[76px] mb-[56px]">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        data: unref(featuresData).featuresDataPromo
      }, null, _parent));
      _push(`</div><div id="faces-efw" class="container mx-auto px-4">`);
      _push(ssrRenderComponent(FacesOfEfwSection, null, null, _parent));
      _push(`</div><section id="economy-dubai"><div class="container mx-auto px-4 md:mb-[76px] mb-[56px]">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DuyErret.js.map
