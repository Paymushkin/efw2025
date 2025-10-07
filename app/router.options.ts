// Глобальная обработка прокрутки к якорям: ждём появления элемента в DOM и только потом скроллим
import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to: any, from: any, savedPosition: { left: number; top: number } | null) {
    if (process.client) {
      // Диагностика поведения скролла
      // eslint-disable-next-line no-console
      console.log('[router.scrollBehavior] to.hash:', to?.hash, 'savedPosition:', savedPosition, 'from:', from?.fullPath, 'to:', to?.fullPath);
    }
    if (to.hash) {
      // Дожидаемся полной отрисовки (window.load), затем — появления элемента в DOM
      if (process.client) {
        return new Promise((resolve) => {
          const startRAFLoop = () => {
            const maxAttempts = 120; // ~2s при rAF — запас под тяжёлые изображения
            let attempts = 0;
            const tryScroll = () => {
              const el = document.querySelector(to.hash) as HTMLElement | null;
              if (el) {
                // Сначала плавно скроллим нативно к элементу
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Затем в течение 1500мс поддерживаем позицию, если layout продолжит сдвигаться (ленивая загрузка, iframe и т.п.)
                const start = performance.now();
                let lastTop = -1;
                const getHeaderOffset = () => {
                  const header = document.querySelector('header, .the-header, #header') as HTMLElement | null;
                  if (!header) return 0;
                  const style = window.getComputedStyle(header);
                  const isFixedOrSticky = style.position === 'fixed' || style.position === 'sticky';
                  return isFixedOrSticky ? header.offsetHeight : 0;
                };
                const stabilize = () => {
                  const rect = el.getBoundingClientRect();
                  const headerOffset = getHeaderOffset();
                  const desiredTop = Math.max(0, rect.top + window.scrollY - headerOffset - 8);
                  if (Math.abs(desiredTop - lastTop) > 1) {
                    window.scrollTo({ top: desiredTop, left: 0, behavior: 'auto' });
                    lastTop = desiredTop;
                  }
                  if (performance.now() - start < 1500) {
                    requestAnimationFrame(stabilize);
                  }
                };
                requestAnimationFrame(stabilize);
                // eslint-disable-next-line no-console
                console.log('[router.scrollBehavior] element found after load, scrolling+stabilizing to:', to.hash);
                // Разрешаем, фиксируя текущую позицию
                resolve({ left: window.scrollX, top: window.scrollY });
                return;
              }
              if (attempts++ < maxAttempts) {
                requestAnimationFrame(tryScroll);
              } else {
                // eslint-disable-next-line no-console
                console.log('[router.scrollBehavior] element not found after load attempts, fallback top');
                resolve({ left: 0, top: 0 });
              }
            };
            requestAnimationFrame(tryScroll);
          };

        if (document.readyState === 'complete') {
            // Страница уже загружена полностью
            startRAFLoop();
          } else {
            // Ждём полной загрузки ресурсов
            window.addEventListener('load', () => {
              // Небольшая пауза для стабилизации layout
              setTimeout(startRAFLoop, 50);
            }, { once: true });
          }
        });
      }
      // На сервере — безопасный возврат
      return { left: 0, top: 0 };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
};


