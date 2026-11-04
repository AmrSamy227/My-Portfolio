import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  'FULL STACK DEVELOPER',
  'UI / UX CRAFTSMAN',
  'CREATIVE WEB ENGINEER',
  'REACT & NODE ARCHITECT',
];

export function TextScramble() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="hero__title-rotator" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ opacity: 0, y: 26, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -26, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="hero__title-white hero__title-scramble"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}


