import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { slides } from './SlidePagination';

const navItems = [
  { label: 'ABOUT ME', id: 'about' },
  { label: 'WORK', id: 'work' },
  { label: 'STACK', id: 'skills' },
  { label: 'EXPERIENCE', id: 'experience' },
  { label: 'CONTACT', id: 'contact' },
];

function Wordmark({ onNavigate }: { onNavigate?: (idx: number) => void }) {
  return (
    <a
      className="wordmark"
      href="#top"
      aria-label="Amr Sami — back to top"
      onClick={(e) => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(0);
        }
      }}
    >
      <span>AMR</span> <span className="wordmark__accent">SAMI</span>
    </a>
  );
}

type NavbarProps = {
  activeSection?: string;
  onNavigate?: (index: number) => void;
};

export function Navbar({ activeSection = 'top', onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      const idx = slides.findIndex((s) => s.id === id);
      if (idx !== -1) {
        onNavigate(idx);
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner page-wrap">
        <Wordmark onNavigate={onNavigate} />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'nav-link is-active' : 'nav-link'}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-cta"
          href="#contact"
          onClick={(e) => handleNavClick('contact', e)}
        >
          <span>Let's Talk</span>
          <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-navigation' : undefined}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} strokeWidth={1.6} /> : <Menu size={23} strokeWidth={1.6} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {navItems.map((item, index) => (
              <a
                key={item.id}
                className="mobile-nav__link"
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                <span className="mobile-nav__number">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-nav__email" href="mailto:amrsamihst@gmail.com" onClick={() => setMenuOpen(false)}>
              amrsamihst@gmail.com
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
