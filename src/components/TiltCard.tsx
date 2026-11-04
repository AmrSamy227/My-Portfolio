import React, { useRef, useState } from 'react';

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({ children, className = '', intensity = 12 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`,
      transition: 'transform 0.1s ease-out',
    });

    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="tilt-card__glow"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(53, 214, 190, 0.15) 0%, transparent 60%)`,
          opacity: glowPos.opacity,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

