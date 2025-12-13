import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "MarqueeSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: [String, Array],
      // Разрешаем оба типа: String и Array
      required: true
    },
    isStatic: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-black w-full overflow-hidden" }, _attrs))} data-v-e60382c5><div class="${ssrRenderClass([
        "whitespace-nowrap  flex justify-center",
        !__props.isStatic && "animate-marquee"
      ])}" data-v-e60382c5>`);
      if (Array.isArray(__props.content)) {
        _push(`<!--[-->`);
        ssrRenderList(__props.content, (item, index) => {
          _push(`<div class="inline-block py-4" data-v-e60382c5><img${ssrRenderAttr("src", item)} alt="Marquee Image" class="md:max-h-11 max-h-8 w-auto object-contain mx-20" data-v-e60382c5></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<span class="${ssrRenderClass([__props.isStatic ? "text-base py-2" : "md:text-lg text-base py-4", "inline-block text-white px-4"])}" data-v-e60382c5>${ssrInterpolate(__props.content)}</span>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarqueeSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e60382c5"]]);

export { Marquee as M };
//# sourceMappingURL=MarqueeSection-CvcM_x-d.mjs.map
