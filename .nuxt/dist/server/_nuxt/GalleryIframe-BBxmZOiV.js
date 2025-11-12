import { ref, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "GalleryIframe",
  __ssrInlineRender: true,
  props: {
    showFog: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const isMobile = ref(false);
    watch(isMobile, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "reportage",
        class: ["container gallery-iframe-container", { "with-fog": __props.showFog }]
      }, _attrs))} data-v-9f964efd><div class="overlay" data-v-9f964efd></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryIframe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GalleryIframe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f964efd"]]);
export {
  GalleryIframe as G
};
//# sourceMappingURL=GalleryIframe-BBxmZOiV.js.map
