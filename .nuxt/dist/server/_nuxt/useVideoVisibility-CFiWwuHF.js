import { ref } from "vue";
function useVideoVisibility(videoRef) {
  let observer = null;
  const isVisible = ref(false);
  const videoRefs = /* @__PURE__ */ new Map();
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (!video) return;
      isVisible.value = entry.isIntersecting;
      if (entry.isIntersecting) {
        video.play().catch(() => {
          console.log("Playback failed, might need user interaction");
        });
      } else {
        video.pause();
      }
    });
  };
  const setVideoRef = (el, key) => {
    if (el) {
      videoRefs.set(key, el);
      if (!observer) {
        observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.5,
          rootMargin: "50px"
        });
      }
      observer.observe(el);
    } else {
      const existingVideo = videoRefs.get(key);
      if (existingVideo && observer) {
        observer.unobserve(existingVideo);
      }
      videoRefs.delete(key);
    }
  };
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    videoRefs.clear();
  };
  if (videoRef) {
    return {
      isVisible
    };
  } else {
    return {
      setVideoRef,
      cleanup,
      isVisible
    };
  }
}
export {
  useVideoVisibility as u
};
//# sourceMappingURL=useVideoVisibility-CFiWwuHF.js.map
