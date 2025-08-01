import { onMounted, onUnmounted, Ref } from 'vue';

export function useVideoVisibility(videoRef: Ref<HTMLVideoElement | null>) {
  let observer: IntersectionObserver | null = null;

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (!videoRef.value) return;

      if (entry.isIntersecting) {
        // Try to play when video becomes visible
        videoRef.value.play().catch(() => {
          console.log('Playback failed, might need user interaction');
        });
      } else {
        // Pause when video is not visible
        videoRef.value.pause();
      }
    });
  };

  onMounted(() => {
    if (!videoRef.value) return;

    // Create observer
    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the video is visible
      rootMargin: '50px' // Start loading slightly before the video comes into view
    });

    // Start observing
    observer.observe(videoRef.value);

    // Initial play attempt
    videoRef.value.play().catch(() => {
      console.log('Initial playback failed, might need user interaction');
    });
  });

  onUnmounted(() => {
    // Cleanup
    if (observer) {
      observer.disconnect();
    }
  });
} 