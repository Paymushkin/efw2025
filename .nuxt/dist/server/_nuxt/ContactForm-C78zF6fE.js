import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
const _sfc_main = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: {
    isOpen: Boolean
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const form = reactive({
      name: "",
      email: "",
      message: ""
    });
    const emailError = ref("");
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" }, _attrs))}><div class="bg-white p-6 rounded-lg max-w-md w-full mx-4"><div class="flex justify-between items-center mb-6"><h3 class="text-xl font-semibold">Contact Us</h3><button class="text-gray-500 hover:text-gray-700 text-2xl leading-none"> × </button></div>`);
        if (showSuccess.value) {
          _push(`<div class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"><p>Your message has been sent successfully!</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showError.value) {
          _push(`<div class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"><p>An error occurred while sending your message. Please try again later.</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!showSuccess.value) {
          _push(`<form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-1">Name</label><input${ssrRenderAttr("value", form.name)} type="text" required class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Email</label><input${ssrRenderAttr("value", form.email)} type="email" required class="${ssrRenderClass([
            "w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black",
            emailError.value ? "border-red-500" : "border-gray-300"
          ])}">`);
          if (emailError.value) {
            _push(`<p class="mt-1 text-sm text-red-500">${ssrInterpolate(emailError.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div><label class="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea required rows="4" class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">${ssrInterpolate(form.message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="w-full bg-black text-white py-2 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-400">${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}</button></form>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ContactForm-C78zF6fE.js.map
