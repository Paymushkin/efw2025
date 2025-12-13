import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "secondary",
      validator: (value) => ["primary", "secondary"].includes(value)
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md"].includes(value)
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "flex items-center gap-2 rounded-3xl transition-colors",
          __props.size === "sm" ? "px-3 py-1.5 text-xs" : "px-6 py-2.5 text-sm",
          __props.variant === "primary" ? "bg-black text-white hover:bg-black/90" : "border border-black text-black hover:bg-gray-100"
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=BaseButton-W8SaqIZj.js.map
