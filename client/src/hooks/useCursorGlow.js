import { useEffect } from 'react';

export function useCursorGlow() {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    glow.className =
      'pointer-events-none fixed w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 z-[9999] opacity-30 blur-3xl transition-opacity duration-300';
    glow.style.background =
      'radial-gradient(circle, rgba(22,163,74,0.25) 0%, transparent 70%)';
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    const enter = () => (glow.style.opacity = '0.35');
    const leave = () => (glow.style.opacity = '0');

    window.addEventListener('mousemove', move);
    document.body.addEventListener('mouseenter', enter);
    document.body.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);
}
