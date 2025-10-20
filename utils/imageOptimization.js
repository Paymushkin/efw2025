// Функция для оптимизации URL изображения
export const getOptimizedImageUrl = (imageUrl) => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return imageUrl.replace('.png', '-mobile.png');
  }
  return imageUrl;
};

// Функция для предзагрузки изображения
export const preloadImage = (imageUrl) => {
  const img = new Image();
  img.src = getOptimizedImageUrl(imageUrl);
  return img;
};

// Функция для предзагрузки массива изображений
export const preloadImages = (imageUrls) => {
  return imageUrls.map(preloadImage);
};

// Функция для определения размеров изображения на основе устройства
export const getImageDimensions = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return {
    width: isMobile ? 280 : 400,
    height: isMobile ? 420 : 600
  };
};

// Функция для добавления атрибутов оптимизации к изображению
export const getOptimizedImageAttributes = (imageUrl, alt = '') => {
  const dimensions = getImageDimensions();
  return {
    src: getOptimizedImageUrl(imageUrl),
    alt,
    loading: 'lazy',
    width: dimensions.width,
    height: dimensions.height,
    decoding: 'async'
  };
}; 