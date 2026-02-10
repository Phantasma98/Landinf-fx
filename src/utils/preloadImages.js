/**
 * Preload критичних зображень для миттєвого відображення
 */
export function preloadImages(imageUrls) {
  if (!Array.isArray(imageUrls)) return;

  imageUrls.forEach(url => {
    if (!url) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Preload всіх зображень з масиву об'єктів
 */
export function preloadImagesFromData(data) {
  const images = [];

  function extractImages(obj) {
    if (!obj || typeof obj !== 'object') return;

    Object.entries(obj).forEach(([key, value]) => {
      if (key === 'image' && typeof value === 'string') {
        images.push(value);
      } else if (Array.isArray(value)) {
        value.forEach(item => extractImages(item));
      } else if (typeof value === 'object') {
        extractImages(value);
      }
    });
  }

  extractImages(data);
  preloadImages(images);
}
