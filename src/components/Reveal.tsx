import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || reduceMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -40, filter: 'blur(8px)' };
      case 'right':
        return { opacity: 0, x: 40, filter: 'blur(8px)' };
      case 'down':
        return { opacity: 0, y: -30, filter: 'blur(8px)' };
      case 'scale':
        return { opacity: 0, scale: 0.92, filter: 'blur(8px)' };
      case 'up':
      default:
        return { opacity: 0, y: 35, filter: 'blur(8px)' };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'scale':
        return revealed
          ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
          : { opacity: 0, scale: 0.92, filter: 'blur(8px)' };
      default:
        return revealed
          ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
          : getInitial();
    }
  };

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
