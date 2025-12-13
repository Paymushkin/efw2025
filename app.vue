<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (process.client) {
    // Убираем crosshair курсор если он был установлен
    const removeCrosshair = () => {
      if (document.body) {
        const computedStyle = window.getComputedStyle(document.body);
        if (computedStyle.cursor === 'crosshair' || document.body.style.cursor === 'crosshair') {
          document.body.style.setProperty('cursor', 'default', 'important');
        }
        // Удаляем inline стиль cursor: crosshair если он есть
        if (document.body.style.cursor === 'crosshair') {
          document.body.style.removeProperty('cursor');
          document.body.style.setProperty('cursor', 'default', 'important');
        }
      }
    };
    
    // Вызываем сразу и периодически
    removeCrosshair();
    setTimeout(removeCrosshair, 100);
    setTimeout(removeCrosshair, 500);
    setTimeout(removeCrosshair, 1000);
    
    // Наблюдаем за изменениями стилей body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          removeCrosshair();
        }
      });
    });
    
    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      });
    }
    
    // Также удаляем data-cursor-element-id атрибуты, которые могут создавать проблемы
    const removeCursorAttributes = () => {
      const elements = document.querySelectorAll('[data-cursor-element-id], [element-id^="cursor-el-"]');
      elements.forEach((el) => {
        el.removeAttribute('data-cursor-element-id');
        if (el.hasAttribute('element-id') && el.getAttribute('element-id')?.startsWith('cursor-el-')) {
          el.removeAttribute('element-id');
        }
      });
    };
    
    setTimeout(removeCursorAttributes, 100);
    setTimeout(removeCursorAttributes, 500);
    
    // Наблюдаем за добавлением элементов с cursor атрибутами
    const cursorObserver = new MutationObserver(() => {
      removeCursorAttributes();
    });
    
    cursorObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-cursor-element-id', 'element-id']
    });
  }
});
</script>
