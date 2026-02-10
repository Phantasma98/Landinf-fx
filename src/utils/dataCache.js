/**
 * Кешування даних у sessionStorage для швидкого доступу
 */

const CACHE_PREFIX = 'fenix_cache_';
const CACHE_VERSION = 'v1';

export const dataCache = {
  /**
   * Зберегти дані в кеші
   */
  set(key, data, persistent = false) {
    const cacheKey = `${CACHE_PREFIX}${CACHE_VERSION}_${key}`;
    const cacheData = {
      data,
      timestamp: Date.now(),
      version: CACHE_VERSION,
    };

    try {
      const storage = persistent ? localStorage : sessionStorage;
      storage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (e) {
      console.warn('Cache set failed:', e);
    }
  },

  /**
   * Отримати дані з кешу
   */
  get(key, maxAge = Infinity, persistent = false) {
    const cacheKey = `${CACHE_PREFIX}${CACHE_VERSION}_${key}`;

    try {
      const storage = persistent ? localStorage : sessionStorage;
      const cached = storage.getItem(cacheKey);

      if (!cached) return null;

      const { data, timestamp, version } = JSON.parse(cached);

      // Перевірка версії
      if (version !== CACHE_VERSION) {
        storage.removeItem(cacheKey);
        return null;
      }

      // Перевірка часу
      if (Date.now() - timestamp > maxAge) {
        storage.removeItem(cacheKey);
        return null;
      }

      return data;
    } catch (e) {
      console.warn('Cache get failed:', e);
      return null;
    }
  },

  /**
   * Видалити дані з кешу
   */
  remove(key, persistent = false) {
    const cacheKey = `${CACHE_PREFIX}${CACHE_VERSION}_${key}`;
    const storage = persistent ? localStorage : sessionStorage;
    storage.removeItem(cacheKey);
  },

  /**
   * Очистити весь кеш
   */
  clear() {
    [sessionStorage, localStorage].forEach(storage => {
      const keys = Object.keys(storage);
      keys.forEach(key => {
        if (key.startsWith(CACHE_PREFIX)) {
          storage.removeItem(key);
        }
      });
    });
  },
};
