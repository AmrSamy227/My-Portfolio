import { useEffect, useRef, useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveBackground } from './components/InteractiveBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { SlidePagination, slides } from './components/SlidePagination';
import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Languages } from './sections/Languages';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';

export function App() {
  const [activeSection, setActiveSection] = useState('top');
  const isNavigatingRef = useRef(false);

  // Navigate directly to a slide index
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return;
    const targetId = slides[index].id;
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      isNavigatingRef.current = true;
      setActiveSection(targetId);
      
      const topOffset = targetElem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 800);
    }
  }, []);

  // Keyboard navigation: Arrow Up / Arrow Down / Page Up / Page Down
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown'].includes(e.code)) {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        e.preventDefault();
        const currentIdx = slides.findIndex((s) => s.id === activeSection);
        if (currentIdx < slides.length - 1) {
          goToSlide(currentIdx + 1);
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.code)) {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        e.preventDefault();
        const currentIdx = slides.findIndex((s) => s.id === activeSection);
        if (currentIdx > 0) {
          goToSlide(currentIdx - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, goToSlide]);

  // Track active slide based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current) return;
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = slides.length - 1; i >= 0; i--) {
        const el = document.getElementById(slides[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(slides[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="site-shell slide-deck-shell">
      <ScrollProgress />
      <CustomCursor />
      <InteractiveBackground />
      <SlidePagination activeSection={activeSection} onNavigate={goToSlide} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar activeSection={activeSection} onNavigate={goToSlide} />
      <main id="main-content" className="slides-container">
        <section id="top" className="fp-slide-section">
          <Hero />
        </section>
        <section id="about" className="fp-slide-section">
          <About />
        </section>
        <section id="work" className="fp-slide-section">
          <Projects />
        </section>
        <section id="services" className="fp-slide-section">
          <Services />
        </section>
        <section id="skills" className="fp-slide-section">
          <Skills />
        </section>
        <section id="experience" className="fp-slide-section">
          <Experience />
        </section>
        <section id="education" className="fp-slide-section">
          <Education />
        </section>
        <section id="certifications" className="fp-slide-section">
          <Certifications />
        </section>
        <section id="contact" className="fp-slide-section">
          <Languages />
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}
