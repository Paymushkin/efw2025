import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { M as Marquee } from "./MarqueeSection-CvcM_x-d.js";
import { _ as _sfc_main$3 } from "./BigSponsorStation-C-j1EYgQ.js";
import { m as marqueeText2 } from "./texts-CvqgDMCX.js";
import { _ as _sfc_main$2 } from "./AppSeo-BjG2yXmh.js";
import { s as station2 } from "./station-2-Dn8AZ31q.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./nuxt-link-Bmms7Mh5.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "./BaseButton-W8SaqIZj.js";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
const Station1 = "" + __buildAssetsURL("station-1.C7LqaV28.png");
const Station2 = "" + __buildAssetsURL("station-2.C0xPAZVE.png");
const Station3 = "" + __buildAssetsURL("station-3.DiDw-w-i.png");
const sponsor4 = "" + __buildAssetsURL("sponsor-logo.NspEgLtG.webp");
const EVENT_TYPES = {
  bigSponsorStation: {
    type: "bigSponsorStation",
    title: "Stations for sponsors",
    description: "AI-powered business stations designed for seamless networking, lead generation, and interactive presentations. Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.",
    images: [
      { src: Station1, caption: "Station 1", subcaption: "Описание и цена" },
      { src: Station2, caption: "Station 1", subcaption: "Описание и цена" },
      { src: Station3, caption: "Station 1", subcaption: "Описание и цена" }
    ],
    buttonText: "More information >"
  }
};
const _sfc_main$1 = {
  __name: "StationSection",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: "Order >"
    },
    imageSrc: {
      type: String,
      required: true
    },
    isReversed: {
      type: Boolean,
      default: false
    },
    price: {
      type: [String, Number],
      default: "1000"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "flex flex-col gap-10 py-10",
          __props.isReversed ? "lg:flex-row-reverse" : "lg:flex-row",
          "items-center justify-between"
        ]
      }, _attrs))}><div class="lg:w-1/2"><h2 class="text-3xl lg:text-4xl mb-6">${ssrInterpolate(__props.title)}</h2><p class="text-gray-700 mb-4">${ssrInterpolate(__props.description)}</p>`);
      if (__props.price) {
        _push(`<div class="mb-7"><span class="text-[#D3D4D7]">${ssrInterpolate(String(__props.price))}$</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition-opacity">${ssrInterpolate(__props.buttonText)}</button></div><div class="lg:w-1/2"><img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.title)} class="w-full rounded-lg"></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StationSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const station1 = "" + __buildAssetsURL("station-1.BNlqT-t_.webp");
const station3 = "" + __buildAssetsURL("station-3.CHbwsq4R.webp");
const _sfc_main = {
  __name: "station",
  __ssrInlineRender: true,
  setup(__props) {
    const event = {
      ...EVENT_TYPES.bigSponsorStation
    };
    const sponsors = [sponsor4, sponsor4, sponsor4, sponsor4];
    const stationDescriptions = [
      "Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities.",
      "Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities.",
      "Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities."
    ];
    const scrollToSection = (sectionId) => {
      const element = (void 0).getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Business Stations - Emirates Fashion Week Dubai 2025",
        description: "Explore our AI-powered business stations at Emirates Fashion Week Dubai 2025. Transform your networking and lead generation with interactive, digital-first experiences.",
        keywords: "Business Stations Dubai, Fashion Week Networking, AI Business Solutions, Fashion Industry Technology, Business Opportunities Dubai, Digital Fashion Events"
      }, null, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        title: event.title,
        description: event.description,
        "button-text": event.buttonText,
        images: event.images,
        link: "#stations",
        isStationPage: true,
        onClick: ($event) => scrollToSection("stations")
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Marquee, { content: sponsors }, null, _parent));
      _push(`<div class="container"><div id="stations" class="xl:px-4 xl:py-20 py-10"><div class="flex flex-col xl:gap-32 divide-y-2 divide-[#EFF5F6]">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Station 1",
        description: stationDescriptions[0],
        "image-src": unref(station1),
        "is-reversed": false,
        price: 500
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Station 2",
        description: stationDescriptions[1],
        "image-src": unref(station2),
        "is-reversed": true,
        price: 1e3
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Station 3",
        description: stationDescriptions[2],
        "image-src": unref(station3),
        "is-reversed": false,
        price: 2e3
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(Marquee, { content: unref(marqueeText2) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/station.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=station-elW6sZtE.js.map
