import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook for animating a number counting up from 0 to a target value.
 * Triggers when the element enters the viewport via IntersectionObserver.
 *
 * @param {number} target - The target number to count up to
 * @param {object} options
 * @param {number} [options.duration=2000] - Animation duration in ms
 * @param {number} [options.decimals=0] - Number of decimal places
 * @param {number} [options.threshold=0.3] - IntersectionObserver threshold
 * @returns {{ ref: React.RefObject, value: number, isComplete: boolean }}
 */
export default function useCountUp(target, {
  duration = 2000,
  decimals = 0,
  threshold = 0.3,
} = {}) {
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo for natural deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const current = eased * target;

      setValue(decimals > 0
        ? parseFloat(current.toFixed(decimals))
        : Math.round(current)
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(decimals > 0 ? parseFloat(target.toFixed(decimals)) : target);
        setIsComplete(true);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, decimals]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate, threshold]);

  return { ref, value, isComplete };
}
