import { _ as __nuxt_component_0 } from './nuxt-link-Bmms7Mh5.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './BaseButton-W8SaqIZj.mjs';

const title2 = `Emirates Fashion Week:<br>First-Ever Thousands of Leads Alongside Beauty!`;
const _sfc_main = {
  __name: "BigSponsorStation",
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
      required: true
    },
    link: {
      type: String,
      default: "#stations",
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    isStationPage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto md:my-10 my-5" }, _attrs))}><div class="flex flex-col gap-11"><div class="flex md:flex-row flex-col justify-between items-start gap-[120px]">`);
      if (!__props.isStationPage) {
        _push(`<h3 class="shrink-0 w-[500px] 2xl:text-4xl xl:text-3xl text-xl text-center md:text-left">${ssrInterpolate(__props.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isStationPage) {
        _push(`<h3 class="2xl:text-4xl xl:text-3xl text-xl text-left">${title2}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "w-auto": !__props.isStationPage, "xl:w-1/3 md:w-2/3 xl:px-[20px]": __props.isStationPage }, "flex flex-col items-start gap-3 max-w-full"])}"><p class="text-lg">${ssrInterpolate(__props.description)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/station${__props.link}`,
        class: "hover:opacity-80 transition-opacity duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { variant: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.buttonText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.buttonText), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { variant: "primary" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.buttonText), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0"><div class="flex md:grid md:grid-cols-3 gap-6 px-4 md:px-0"><!--[-->`);
      ssrRenderList(__props.images, (image, idx) => {
        _push(`<div class="flex flex-col gap-4 flex-shrink-0 w-[280px] md:w-auto"><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.caption)} class="w-full"><div class="flex flex-col"><span class="xl:text-xl text-lg">${ssrInterpolate(image.caption)}</span><span class="text-gray-500">${ssrInterpolate(image.subcaption)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/program/BigSponsorStation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BigSponsorStation-C-j1EYgQ.mjs.map
