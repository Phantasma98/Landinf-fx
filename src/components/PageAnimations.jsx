import { useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';

// --- Transition Context ---
export const TransitionContext = createContext(null);

export function useTransitionNavigate() {
  const ctx = useContext(TransitionContext);
  return ctx?.navigateWithTransition || null;
}

const FADE_OUT = 250;
const FADE_IN = 300;

// S-curve easing for organic feel on reveal opacity
function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

export default function PageAnimations({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lenisRef = useRef(null);
  const revealElementsRef = useRef([]);
  const heroRef = useRef(null);
  const isTransitioning = useRef(false);
  const isFirstRender = useRef(true);
  const prefersReducedMotion = useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // --- Lenis smooth scroll (mount once) ---
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    let frameId;
    function raf(time) {
      lenis.raf(time);
      updateReveal(lenis, revealElementsRef.current);
      updateHeroParallax(lenis, heroRef.current);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    const handleResize = () => cachePositions(revealElementsRef.current);
    window.addEventListener('resize', handleResize, { passive: true });

    const handleModalState = (e) => {
      if (e.detail?.open) {
        lenis.stop();
      } else if (!isTransitioning.current) {
        lenis.start();
      }
    };
    window.addEventListener('modal-state', handleModalState);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('modal-state', handleModalState);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // --- Navigate with opacity cross-fade ---
  const pendingHash = useRef(null);

  const navigateWithTransition = useCallback((to) => {
    if (isTransitioning.current) return;

    // Split path and hash
    const [path, hash] = to.split('#');
    const targetPath = path || pathname;

    if (targetPath === pathname && !hash) return;

    // If same page, just scroll to hash
    if (targetPath === pathname && hash) {
      const target = document.getElementById(hash);
      if (target && lenisRef.current) {
        lenisRef.current.scrollTo(target);
      }
      return;
    }

    pendingHash.current = hash || null;
    isTransitioning.current = true;
    const pageContainer = document.querySelector('.page-container');

    if (!pageContainer || prefersReducedMotion.current) {
      navigate(targetPath);
      isTransitioning.current = false;
      return;
    }

    // Freeze Lenis & disable scroll during transition
    if (lenisRef.current) lenisRef.current.stop();

    // Fade out current page + fixed header
    const header = pageContainer.querySelector('header') || document.querySelector('header');
    fadeElements([pageContainer, header], 0, FADE_OUT);

    // Scroll to top during fade (user can't see — page is fading)
    setTimeout(() => {
      if (!pendingHash.current) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }
    }, FADE_OUT * 0.5);

    // After fade out — navigate
    setTimeout(() => {
      navigate(targetPath);
      // pathname effect handles fade-in
    }, FADE_OUT);
  }, [pathname, navigate]);

  // --- Global click interceptor for <a> links ---
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return;
      }

      // Handle hash links with Lenis smooth scroll
      const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
      const normalizedHref = baseUrl && href.startsWith(baseUrl) ? href.slice(baseUrl.length) || '/' : href;
      if (normalizedHref.startsWith('#') || normalizedHref.startsWith('/#')) {
        const hash = normalizedHref.startsWith('/#') ? normalizedHref.slice(1) : normalizedHref;
        const target = document.querySelector(hash);
        if (target && lenisRef.current) {
          e.preventDefault();
          lenisRef.current.scrollTo(target);
        }
        return;
      }

      e.preventDefault();
      const base = import.meta.env.BASE_URL.replace(/\/$/, '');
      const cleanHref = base && href.startsWith(base) ? href.slice(base.length) || '/' : href;
      navigateWithTransition(cleanHref);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigateWithTransition]);

  // --- Page change: fade in + setup reveals ---
  useEffect(() => {
    cleanupElements(revealElementsRef.current);
    revealElementsRef.current = [];
    heroRef.current = null;

    const hash = pendingHash.current;
    pendingHash.current = null;

    if (!hash) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    const initPage = (pageContainer) => {
      heroRef.current = pageContainer.querySelector('#home');

      if (isFirstRender.current) {
        isFirstRender.current = false;
        if (lenisRef.current) lenisRef.current.start();

        requestAnimationFrame(() => {
          const elements = setupRevealElements(pageContainer, prefersReducedMotion.current);
          requestAnimationFrame(() => {
            cachePositions(elements);
            revealElementsRef.current = elements;
            startRecacheInterval(elements);
          });
        });
        return;
      }

      // Fade in new page + fixed header
      const header = pageContainer.querySelector('header') || document.querySelector('header');
      const els = [pageContainer, header];

      // Set initial invisible state
      for (const el of els) {
        if (!el) continue;
        el.style.opacity = '0';
        el.style.transition = 'none';
      }
      pageContainer.style.pointerEvents = '';

      // Force reflow so opacity:0 is painted before transition starts
      void pageContainer.offsetWidth;

      // Animate in
      fadeElements(els, 1, FADE_IN);

      if (lenisRef.current) lenisRef.current.start();

      // Scroll to hash target after page loads
      if (hash) {
        requestAnimationFrame(() => {
          const target = document.getElementById(hash);
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target, { immediate: true });
          }
        });
      }

      setTimeout(() => {
        // Clean up inline transition styles
        for (const el of els) {
          if (!el) continue;
          el.style.transition = '';
          el.style.opacity = '';
        }
        isTransitioning.current = false;

        const elements = setupRevealElements(pageContainer, prefersReducedMotion.current);
        requestAnimationFrame(() => {
          cachePositions(elements);
          revealElementsRef.current = elements;
          startRecacheInterval(elements);
        });
      }, FADE_IN);
    };

    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
      initPage(pageContainer);
    } else {
      const observer = new MutationObserver(() => {
        const pc = document.querySelector('.page-container');
        if (pc) {
          observer.disconnect();
          initPage(pc);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

// --- Fade helper for page + fixed elements (header) ---
function fadeElements(elements, targetOpacity, duration) {
  for (const el of elements) {
    if (!el) continue;
    el.style.transition = `opacity ${duration}ms ease`;
    el.style.opacity = String(targetOpacity);
    if (targetOpacity === 0) {
      el.style.pointerEvents = 'none';
    } else {
      el.style.pointerEvents = '';
    }
  }
}

// --- Triplex reveal: clip-path + scale + opacity ---
function updateReveal(lenis, elements) {
  if (!elements || elements.length === 0 || !lenis) return;

  const viewportBottom = lenis.scroll + window.innerHeight;

  for (const item of elements) {
    if (item.done) continue;

    const rawPercent = (viewportBottom - item.top) / item.height;

    if (rawPercent <= 0) continue;

    if (rawPercent >= 1) {
      item.el.style.clipPath = '';
      item.el.style.opacity = '';
      item.el.style.willChange = '';
      item.done = true;
      continue;
    }

    const eased = smoothstep(rawPercent);
    const clipBottom = (1 - rawPercent) * 100;
    const opacity = 0.3 + eased * 0.7;

    item.el.style.clipPath = `inset(0 0 ${clipBottom}% 0)`;
    item.el.style.opacity = opacity;
  }
}

// --- Hero parallax ---
function updateHeroParallax(lenis, heroEl) {
  if (!heroEl || !lenis) return;
  const parallaxY = lenis.scroll * 0.3;
  heroEl.style.backgroundPositionY = `${parallaxY}px`;
}

// --- Setup reveal elements ---
function setupRevealElements(pageContainer, reducedMotion) {
  if (!pageContainer || reducedMotion) return [];

  const sections = pageContainer.querySelectorAll('section');
  if (sections.length < 2) return [];

  const elements = [];

  for (let i = 1; i < sections.length; i++) {
    const targets = getSectionTargets(sections[i]);
    for (const target of targets) {
      target.style.clipPath = 'inset(0 0 100% 0)';
      target.style.opacity = '0.3';
      target.style.willChange = 'clip-path, opacity';
      elements.push({ el: target, top: 0, height: 0, done: false });
    }
  }

  return elements;
}

function cachePositions(elements) {
  if (!elements) return;
  const scrollY = window.scrollY || window.pageYOffset;
  for (const item of elements) {
    if (item.done) continue;
    const rect = item.el.getBoundingClientRect();
    item.top = rect.top + scrollY;
    item.height = Math.max(rect.height, 1);
  }
}

function startRecacheInterval(elements) {
  let count = 0;
  const interval = setInterval(() => {
    cachePositions(elements);
    count++;
    if (count >= 10) clearInterval(interval);
  }, 500);
}

function cleanupElements(elements) {
  if (!elements) return;
  for (const item of elements) {
    item.el.style.clipPath = '';
    item.el.style.opacity = '';
    item.el.style.willChange = '';
  }
}

function getSectionTargets(section) {
  const directChildren = Array.from(section.children);
  if (directChildren.length === 0) return [];

  let baseTargets = directChildren;
  if (directChildren.length === 1) {
    const wrapperChildren = Array.from(directChildren[0].children);
    if (wrapperChildren.length > 0) {
      baseTargets = wrapperChildren;
    }
  }

  const expandedTargets = [];
  baseTargets.forEach((element) => collectTargets(element, expandedTargets));
  return expandedTargets;
}

function collectTargets(node, output) {
  if (node.classList.contains('stagger-container')) {
    Array.from(node.children).forEach((child) => collectTargets(child, output));
    return;
  }
  output.push(node);
}
