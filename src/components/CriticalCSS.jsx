import { useEffect } from 'react';

/**
 * Компонент для inline критичного CSS
 * Завантажує основні стилі синхронно для швидкого першого рендеру
 */
export default function CriticalCSS() {
  useEffect(() => {
    // Після завантаження сторінки додаємо решту стилів асинхронно
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/styles/globals.css';
    link.media = 'print';
    link.onload = function() {
      this.media = 'all';
    };
    document.head.appendChild(link);
  }, []);

  return null;
}
