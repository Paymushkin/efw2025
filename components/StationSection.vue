<template>
  <div :class="[
    'flex flex-col gap-10 py-10',
    isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
    'items-center justify-between'
  ]">
    <div class="lg:w-1/2">
      <h2 class="text-3xl lg:text-4xl mb-6">{{ title }}</h2>
      <p class="text-gray-700 mb-4">{{ description }}</p>
      <div v-if="price" class="mb-7">
        <span class="text-[#D3D4D7]">{{ String(price) }}$</span>
      </div>
      <button class="bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition-opacity">
        {{ buttonText }}
      </button>
    </div>
    <div class="lg:w-1/2">
      <img :src="imageSrc" :alt="title" class="w-full rounded-lg">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
    default: 'Order >'
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
    default: '1000'
  }
})
</script> 