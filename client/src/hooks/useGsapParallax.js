import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapParallax(selector = '[data-parallax]') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.to(el, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    });
    return () => ctx.revert();
  }, [selector]);
}
