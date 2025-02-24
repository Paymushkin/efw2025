<template>
  <button
    :class="[
      'flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors',
      variant === 'primary'
        ? 'bg-black text-white hover:bg-black/90'
        : 'border border-black hover:bg-gray-100',
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'secondary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
});
</script>
