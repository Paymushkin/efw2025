<template>
  <button
    :class="[
      'flex items-center gap-2 rounded-3xl transition-colors',
      size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-6 py-2.5 text-sm',
      variant === 'primary'
        ? 'bg-black text-white hover:bg-black/90'
        : 'border border-black text-black hover:bg-gray-100',
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
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md'].includes(value),
  },
});
</script>
