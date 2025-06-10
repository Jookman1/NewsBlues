export interface ScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
  callback?: () => void;
  instant?: boolean;
}

// Easing functions for smooth animations
export const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuint: (t: number): number => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
  easeOutExpo: (t: number): number => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
};

export const smoothScrollTo = (
  targetElement: HTMLElement | null,
  options: ScrollOptions = {}
): void => {
  if (!targetElement) return;

  const {
    duration = 1200,
    easing = easingFunctions.easeInOutCubic,
    offset = -80, // Account for fixed header
    callback,
    instant = false
  } = options;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

  // If instant scroll is requested, jump immediately
  if (instant) {
    window.scrollTo(0, targetPosition);
    callback?.();
    return;
  }

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easedProgress = easing(progress);
    const currentPosition = startPosition + (distance * easedProgress);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      callback?.();
    }
  };

  requestAnimationFrame(animation);
};

export const smoothScrollToId = (
  elementId: string,
  options: ScrollOptions = {}
): void => {
  const element = document.getElementById(elementId);
  smoothScrollTo(element, { ...options, instant: true });
};

// Intersection Observer for scroll-triggered animations
export const createScrollObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '-50px 0px -50px 0px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Parallax scroll effect
export const createParallaxEffect = (
  element: HTMLElement,
  speed: number = 0.5
): (() => void) => {
  const handleScroll = (): void => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * speed;
    element.style.transform = `translateY(${parallax}px)`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};