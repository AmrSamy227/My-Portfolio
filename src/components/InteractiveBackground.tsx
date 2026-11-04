import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
};

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    // Density based on screen width
    const particleCount = Math.min(Math.floor((width * height) / 16000), 85);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 1.5 + 0.8,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
        targetAlpha: Math.random() * 0.35 + 0.15,
      });
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const onMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle interactive spotlight around cursor
      if (mouseX > -500) {
        const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
        glow.addColorStop(0, 'rgba(53, 214, 190, 0.045)');
        glow.addColorStop(0.5, 'rgba(53, 214, 190, 0.015)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Update & draw particles + connect lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Mouse interaction: push away gently or highlight
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 130;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 1.8;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
          p.radius = p.baseRadius + force * 1.2;
          p.alpha = Math.min(0.8, p.targetAlpha + force * 0.4);
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.05;
          p.alpha += (p.targetAlpha - p.alpha) * 0.05;
        }

        // Draw particle (teal neon)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 214, 190, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle neural-network lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          const connectMax = 115;

          if (cdist < connectMax) {
            const lineAlpha = (1 - cdist / connectMax) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(53, 214, 190, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-bg-canvas" aria-hidden="true" />;
}

