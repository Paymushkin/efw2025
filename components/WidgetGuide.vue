<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Header -->
    <div class="max-w-3xl mb-12">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">Embedding the Live Report Widget</h1>
      <p class="text-lg md:text-xl text-gray-600">
        Add the Emirates Fashion Week live report widget to your website. Choose the most suitable embedding method.
      </p>
    </div>

    <!-- Embedding Methods -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <!-- Via Script -->
      <div class="bg-white p-6 rounded-lg border border-gray-200">
        <h2 class="text-2xl font-medium mb-4">1. Via Script</h2>
        <p class="text-gray-600 mb-4">
          This method allows you to embed the widget using JavaScript. The widget will automatically adapt to the container size.
        </p>
        <div class="bg-gray-50 p-4 rounded-lg mb-4 relative">
          <pre class="text-sm overflow-x-auto pr-16"><code class="block whitespace-pre-wrap break-all">&lt;script src="https://meyou.ru/public/meyou_init.js" id="meyou_init" defer="" data-event="https://meyou.ru/efw2025/live?UTM=smi&header&footer&adv&tag"&gt;&lt;/script&gt;</code></pre>
          <button 
            @click="copyCode('script')"
            class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors bg-white rounded-md shadow-sm"
            :title="copyStatus.script ? 'Copied!' : 'Copy code'"
          >
            <svg v-if="!copyStatus.script" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
        <div class="space-y-4">
          <h3 class="font-medium">Benefits:</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Automatic container size adaptation</li>
            <li>Optimized loading</li>
            <li>Support for all modern browsers</li>
          </ul>
        </div>
      </div>

      <!-- Via iframe -->
      <div class="bg-white p-6 rounded-lg border border-gray-200">
        <h2 class="text-2xl font-medium mb-4">2. Via iframe</h2>
        <p class="text-gray-600 mb-4">
          This method allows you to embed the widget directly using an HTML iframe tag. You can control the widget dimensions.
        </p>
        <div class="bg-gray-50 p-4 rounded-lg mb-4 relative">
          <pre class="text-sm overflow-x-auto pr-16"><code class="block whitespace-pre-wrap break-all">&lt;iframe width="100%" height="100%" allowtransparency="" allowfullscreen="" src="https://meyou.ru/efw2025/live?UTM=smi&header&footer&adv&tag" frameborder="0"&gt;&lt;/iframe&gt;</code></pre>
          <button 
            @click="copyCode('iframe')"
            class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors bg-white rounded-md shadow-sm"
            :title="copyStatus.iframe ? 'Copied!' : 'Copy code'"
          >
            <svg v-if="!copyStatus.iframe" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
        <div class="space-y-4">
          <h3 class="font-medium">Benefits:</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Easy integration</li>
            <li>Direct size control</li>
            <li>Legacy browser support</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Usage Examples -->
    <div class="mb-16">
      <h2 class="text-2xl md:text-3xl font-medium mb-8">Usage Examples</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Example 1 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="aspect-video bg-gray-100">
            <video 
              class="w-full h-full object-cover"
              autoplay 
              loop 
              muted 
              playsinline
              src="https://storage.yandexcloud.net/videos-meyou/efw2025/example-1.mp4"
            ></video>
          </div>
        </div>

        <!-- Example 2 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="aspect-video bg-gray-100">
            <video 
              class="w-full h-full object-cover"
              autoplay 
              loop 
              muted 
              playsinline
              src="https://storage.yandexcloud.net/videos-meyou/efw2025/example-2.mp4"
            ></video>
          </div>
        </div>

        <!-- Example 3 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="aspect-video bg-gray-100">
            <video 
              class="w-full h-full object-cover"
              autoplay 
              loop 
              muted 
              playsinline
              src="https://storage.yandexcloud.net/videos-meyou/efw2025/example-4.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>

    <!-- Setup Instructions -->
    <details class="bg-white p-8 rounded-lg border border-gray-200">
      <summary class="text-2xl md:text-3xl font-medium mb-6 cursor-pointer">Widget Recommendations</summary>
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-medium mb-3">Widget Dimensions</h3>
          <p class="text-gray-600 mb-4">When using iframe, you can configure the dimensions:</p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Set <code>width="100%"</code> for responsive width</li>
            <li>Set <code>height="100%"</code> for responsive height</li>
            <li>Or specify exact values in pixels</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-medium mb-3">Recommendations</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Use script for automatic adaptation</li>
            <li>When using iframe, add <code>allowtransparency=""</code> and <code>allowfullscreen=""</code></li>
            <li>Set <code>frameborder="0"</code> for better integration</li>
          </ul>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const SCRIPT_CODE = '&lt;script src="https://meyou.ru/public/meyou_init.js" id="meyou_init" defer="" data-event="https://meyou.ru/efw2025/live?UTM=smi&header&footer&adv&tag"&gt;&lt;/script&gt;';
const IFRAME_CODE = '&lt;iframe width="100%" height="100%" allowtransparency="" allowfullscreen="" src="https://meyou.ru/efw2025/live?UTM=smi&header&footer&adv&tag" frameborder="0"&gt;&lt;/iframe&gt;';

const copyStatus = ref({
  script: false,
  iframe: false
});

const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const copyCode = async (type) => {
  const code = decodeHtml(type === 'script' ? SCRIPT_CODE : IFRAME_CODE);

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(code);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback: Ошибка при копировании', err);
      }
      textArea.remove();
    }
    copyStatus.value[type] = true;
    setTimeout(() => {
      copyStatus.value[type] = false;
    }, 2000);
  } catch (err) {
    console.error('Ошибка при копировании:', err);
  }
};
</script>

<style>
/* Стили для details */
details {
  transition: all 0.3s ease;
}

details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::after {
  content: '▼';
  margin-left: 10px;
  display: inline-block;
  transition: transform 0.3s ease;
}

details[open] > summary::after {
  transform: rotate(180deg);
}
</style> 