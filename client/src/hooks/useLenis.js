import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export let lenisInstance = null;

export function useLenis() {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.documentElement.classList.add('lenis', 'lenis-smooth');

    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);
}