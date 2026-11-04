import { useState, useEffect, memo } from 'react';

const words = [
  'FULL-STACK DEVELOPER',
  'REACT & NEXT.JS SPECIALIST',
  'UI/UX CRAFTSMAN',
  'CREATIVE PROBLEM SOLVER',
];

export const TextScramble = memo(function TextScramble() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);

  useEffect(() => {
    const chars = '!<>-_/[]{}~=+*^?#_01';
    let frame = 0;
    let animId: number;
    const targetWord = words[currentWordIndex];

    const scramble = () => {
      frame++;
      let output = '';
      let complete = true;

      for (let i = 0; i < targetWord.length; i++) {
        if (targetWord[i] === ' ') {
          output += ' ';
          continue;
        }

        // Progressively reveal correct character from left to right
        if (frame > i * 2.5 + 8) {
          output += targetWord[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
          complete = false;
        }
      }

      setDisplayText(output);

      if (!complete) {
        animId = requestAnimationFrame(scramble);
      }
    };

    animId = requestAnimationFrame(scramble);

    // Switch words every 4.2s
    const timeout = setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4200);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timeout);
    };
  }, [currentWordIndex]);

  return (
    <span className="hero__title-white" aria-label={words[currentWordIndex]}>
      <span className="hero__title-scramble" aria-hidden="true">
        {displayText}
      </span>
    </span>
  );
});

