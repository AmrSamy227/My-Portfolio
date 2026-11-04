import { useEffect, useState } from 'react';

type SlideNavProps = {
  activeSection: string;
  onNavigate: (index: number) => void;
};

export const slides = [
  { id: 'top', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'work', label: 'Work', number: '03' },
  { id: 'services', label: 'Services', number: '04' },
  { id: 'skills', label: 'Stack', number: '05' },
  { id: 'experience', label: 'Experience', number: '06' },
  { id: 'education', label: 'Education', number: '07' },
  { id: 'certifications', label: 'Certificates', number: '08' },
  { id: 'contact', label: 'Contact', number: '09' },
];

export function SlidePagination({ activeSection, onNavigate }: SlideNavProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const idx = slides.findIndex((s) => s.id === activeSection);
    if (idx !== -1) setCurrentIdx(idx);
  }, [activeSection]);

  return (
    <aside className="slide-pagination" aria-label="Page Slides Navigation">
      <div className="slide-pagination__track">
        {slides.map((s, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              key={s.id}
              type="button"
              className={`slide-bullet ${isActive ? 'slide-bullet--active' : ''}`}
              onClick={() => onNavigate(idx)}
              aria-label={`Jump to slide ${s.number}: ${s.label}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className="slide-bullet__dot" />
              <span className="slide-bullet__tooltip">
                <span className="slide-bullet__num">{s.number}</span>
                <span className="slide-bullet__name">{s.label}</span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="slide-counter">
        <span className="slide-counter__current">0{currentIdx + 1}</span>
        <span className="slide-counter__divider">/</span>
        <span className="slide-counter__total">0{slides.length}</span>
      </div>
    </aside>
  );
}

