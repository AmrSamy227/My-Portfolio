import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let initialized = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!initialized) {
        initialized = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseDown = () => {
      ring.classList.add('cursor-ring--click');
      dot.classList.add('cursor-dot--click');
    };

    const onMouseUp = () => {
      ring.classList.remove('cursor-ring--click');
      dot.classList.remove('cursor-dot--click');
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, input, textarea, summary, [role="button"], .tilt-card, .service-item, .skill-group, .experience-entry, .interactive-console'
      );
      if (interactive) {
        ring.classList.add('cursor-ring--hover');
        dot.classList.add('cursor-dot--hover');
      } else {
        ring.classList.remove('cursor-ring--hover');
        dot.classList.remove('cursor-dot--hover');
      }
    };

    const render = () => {
      // Smooth lerp
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" style={{ opacity: 0 }} />
    </>
  );
}
