import { useEffect } from 'react';

// Content is visible by default, including when motion or observers are unavailable.
export default function useReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      '.about-grid, .mobile-studio, .featured-work-title-con, .featured-work-subject-con, .temp-con, .first-block > div, .second-block > div, .expertise-main-con > div, .footer-inner'
    ));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    const revealAll = () => {
      if (!preference.matches) return;
      elements.forEach(element => element.classList.remove('reveal-pending'));
      observer.disconnect();
    };
    if (!preference.matches) {
      elements.forEach(element => {
        element.classList.add('reveal-item');
        // Never hide something already on screen or reached through a deep link.
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add('reveal-pending');
          observer.observe(element);
        }
      });
    }
    const revealFocused = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      const parent = target.closest('.reveal-pending');
      if (parent) { parent.classList.remove('reveal-pending'); observer.unobserve(parent); }
    };
    preference.addEventListener('change', revealAll);
    document.addEventListener('focusin', revealFocused);
    return () => {
      observer.disconnect();
      elements.forEach(element => element.classList.remove('reveal-pending', 'reveal-item'));
      preference.removeEventListener('change', revealAll);
      document.removeEventListener('focusin', revealFocused);
    };
  }, []);
}
