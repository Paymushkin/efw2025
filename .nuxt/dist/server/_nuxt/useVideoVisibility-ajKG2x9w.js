import { ref } from "vue";
function useVideoVisibility() {
  const videoRefs = ref({});
  const observers = ref({});
  const isVisible = ref({});
  const handleVisibility = (index) => (entries) => {
    entries.forEach((entry) => {
      const video = videoRefs.value[index];
      if (entry.target === video) {
        isVisible.value[index] = entry.isIntersecting;
        if (entry.isIntersecting) {
          video?.play().catch(() => {
          });
        } else {
          video?.pause();
        }
      }
    });
  };
  const observeVideo = (index) => {
    const video = videoRefs.value[index];
    if (video && !observers.value[index]) {
      const observer = new IntersectionObserver(handleVisibility(index), {
        threshold: 0.5
      });
      observer.observe(video);
      observers.value[index] = observer;
    }
  };
  const unobserveVideo = (index) => {
    const observer = observers.value[index];
    if (observer) {
      observer.disconnect();
      delete observers.value[index];
    }
  };
  const setVideoRef = (el, index) => {
    if (el) {
      videoRefs.value[index] = el;
      observeVideo(index);
    } else {
      unobserveVideo(index);
      delete videoRefs.value[index];
    }
  };
  const cleanup = () => {
    Object.keys(observers.value).forEach(unobserveVideo);
    videoRefs.value = {};
    observers.value = {};
    isVisible.value = {};
  };
  return {
    setVideoRef,
    cleanup,
    isVisible
  };
}
export {
  useVideoVisibility as u
};
//# sourceMappingURL=useVideoVisibility-ajKG2x9w.js.map
