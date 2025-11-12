import { _ as _sfc_main$2 } from "./AppSeo-Bb_QAAbw.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useVideoVisibility } from "./useVideoVisibility-CFiWwuHF.js";
import "../server.mjs";
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
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {
  __name: "WidgetGuide",
  __ssrInlineRender: true,
  setup(__props) {
    const video1Ref = ref(null);
    const video2Ref = ref(null);
    const video3Ref = ref(null);
    useVideoVisibility(video1Ref);
    useVideoVisibility(video2Ref);
    useVideoVisibility(video3Ref);
    const copyStatus = ref({
      script: false,
      iframe: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))}><div class="max-w-3xl mb-12"><h1 class="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">Embedding the Live Report Widget</h1><p class="text-lg md:text-xl text-gray-600 mb-6"> Add the Emirates Fashion Week live report widget to your website. Choose the most suitable embedding method. </p><a href="https://wa.me/971585753302" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors duration-300"><svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Contact us on WhatsApp </a></div><div class="grid md:grid-cols-2 gap-8 mb-16"><div class="bg-white p-6 rounded-lg border border-gray-200"><h2 class="text-2xl font-medium mb-4">1. Via Script</h2><p class="text-gray-600 mb-4"> This method allows you to embed the widget using JavaScript. The widget will automatically adapt to the container size. </p><div class="bg-gray-50 p-4 rounded-lg mb-4 relative"><pre class="text-sm overflow-x-auto pr-16"><code class="block whitespace-pre-wrap break-all">&lt;script src=&quot;https://meyou.id/public/meyou_init.js&quot; id=&quot;meyou_init&quot; defer=&quot;&quot; data-event=&quot;https://meyou.id/efwss26/live?UTM=smi&amp;header&amp;footer&amp;adv&amp;tag&quot;&gt;&lt;/script&gt;</code></pre><button class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors bg-white rounded-md shadow-sm"${ssrRenderAttr("title", copyStatus.value.script ? "Copied!" : "Copy code")}>`);
      if (!copyStatus.value.script) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
      }
      _push(`</button></div><div class="space-y-4"><h3 class="font-medium">Benefits:</h3><ul class="list-disc list-inside text-gray-600 space-y-2"><li>Automatic container size adaptation</li><li>Optimized loading</li><li>Support for all modern browsers</li></ul></div></div><div class="bg-white p-6 rounded-lg border border-gray-200"><h2 class="text-2xl font-medium mb-4">2. Via iframe</h2><p class="text-gray-600 mb-4"> This method allows you to embed the widget directly using an HTML iframe tag. You can control the widget dimensions. </p><div class="bg-gray-50 p-4 rounded-lg mb-4 relative"><pre class="text-sm overflow-x-auto pr-16"><code class="block whitespace-pre-wrap break-all">&lt;iframe width=&quot;100%&quot; height=&quot;100%&quot; allowtransparency=&quot;&quot; allowfullscreen=&quot;&quot; src=&quot;https://meyou.id/efwss26/live?UTM=smi&amp;header&amp;footer&amp;adv&amp;tag&quot; frameborder=&quot;0&quot;&gt;&lt;/iframe&gt;</code></pre><button class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors bg-white rounded-md shadow-sm"${ssrRenderAttr("title", copyStatus.value.iframe ? "Copied!" : "Copy code")}>`);
      if (!copyStatus.value.iframe) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
      }
      _push(`</button></div><div class="space-y-4"><h3 class="font-medium">Benefits:</h3><ul class="list-disc list-inside text-gray-600 space-y-2"><li>Easy integration</li><li>Direct size control</li><li>Legacy browser support</li></ul></div></div></div><div class="mb-16"><h2 class="text-2xl md:text-3xl font-medium mb-8">Usage Examples</h2><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="bg-white rounded-lg border border-gray-200 overflow-hidden"><div class="aspect-video bg-gray-100"><video class="w-full h-full object-cover" loop muted playsinline autoplay webkit-playsinline x5-playsinline preload="auto" src="https://storage.yandexcloud.net/videos-meyou/efw2025/example-1.mp4"></video></div></div><div class="bg-white rounded-lg border border-gray-200 overflow-hidden"><div class="aspect-video bg-gray-100"><video class="w-full h-full object-cover" loop muted playsinline autoplay webkit-playsinline x5-playsinline preload="auto" src="https://storage.yandexcloud.net/videos-meyou/efw2025/example-2.mp4"></video></div></div><div class="bg-white rounded-lg border border-gray-200 overflow-hidden"><div class="aspect-video bg-gray-100"><video class="w-full h-full object-cover" loop muted playsinline autoplay webkit-playsinline x5-playsinline preload="auto" src="https://storage.yandexcloud.net/videos-meyou/efw2025/example-4.mp4"></video></div></div></div></div><details class="bg-white p-8 rounded-lg border border-gray-200"><summary class="text-2xl md:text-3xl font-medium mb-6 cursor-pointer">Widget Recommendations</summary><div class="space-y-6"><div><h3 class="text-xl font-medium mb-3">Widget Dimensions</h3><p class="text-gray-600 mb-4">When using iframe, you can configure the dimensions:</p><ul class="list-disc list-inside text-gray-600 space-y-2"><li>Set <code>width=&quot;100%&quot;</code> for responsive width</li><li>Set <code>height=&quot;100%&quot;</code> for responsive height</li><li>Or specify exact values in pixels</li></ul></div><div><h3 class="text-xl font-medium mb-3">Recommendations</h3><ul class="list-disc list-inside text-gray-600 space-y-2"><li>Use script for automatic adaptation</li><li>When using iframe, add <code>allowtransparency=&quot;&quot;</code> and <code>allowfullscreen=&quot;&quot;</code></li><li>Set <code>frameborder=&quot;0&quot;</code> for better integration</li></ul></div></div></details></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WidgetGuide.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "widget",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSeo = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Встраивание виджета репортажа - Emirates Fashion Week",
        description: "Инструкция по встраиванию виджета репортажа с Emirates Fashion Week на ваш сайт. Подробное руководство с примерами и настройками.",
        keywords: "Emirates Fashion Week, виджет репортажа, встраивание виджета, iframe, JavaScript"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/widget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=widget-TzTCotHS.js.map
