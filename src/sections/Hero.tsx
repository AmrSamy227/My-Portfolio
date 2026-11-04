import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { SocialSidebar } from '../components/SocialSidebar';
import { TextScramble } from '../components/TextScramble';
import { InteractiveConsole } from '../components/InteractiveConsole';

const codeSnippetLeft = `const techStack = [
  'React 18', 'Next.js',
  'TypeScript', 'Tailwind',
  'FastAPI', 'Python',
  'PostgreSQL', 'Docker'
];

async function deploySolution() {
  const perf = await optimize();
  return { status: 200, perf };
}`;

const codeSnippetRight = `interface EngineeringStandard {
  cleanArchitecture: true;
  responsiveEverywhere: true;
  frameRate: 60 | 120;
  pixelPerfect: true;
}

const developer = {
  name: "Amr Sami",
  location: "Cairo, Egypt",
  status: "READY_TO_BUILD"
};`;

export function Hero() {
  return (
    <div className="hero" aria-labelledby="hero-title">
      {/* Workspace image in the right corner, under text, 50% opacity, fading to the left */}
      <div className="hero__bg" aria-hidden="true">
        <img src="/cyberpunk-coding-station-stockcake.jpg" alt="" className="hero__bg-image" />
        <div className="hero__bg-overlay" />
      </div>

      {/* Dark code background fragments */}
      <div className="hero__code-bg" aria-hidden="true">
        <pre className="hero__code-fragment hero__code-fragment--left">{codeSnippetLeft}</pre>
        <pre className="hero__code-fragment hero__code-fragment--right">{codeSnippetRight}</pre>
      </div>

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="availability-dot" aria-hidden="true" />
          <span>AVAILABLE FOR FREELANCE & PRODUCT ROLES</span>
          <span className="hero__badge-pulse"><Sparkles size={12} /></span>
        </div>

        <h1 className="hero__title" id="hero-title">
          <span className="hero__title-accent glitch-text" data-text="FRONTEND">FRONTEND</span>
          <TextScramble />
        </h1>

        <p className="hero__lede">
          Crafting high-octane digital experiences where meticulous engineering meets visual finesse.
          Bridging deep frontend specialization with robust full-stack architecture.
        </p>

        <InteractiveConsole />

        <div className="hero__actions">
          <a className="button button--accent glow-hover-btn" href="#work">
            <span>Explore Selected Work</span>
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className="button button--outline" href="#contact">
            <span>Let's Discuss a Project</span>
          </a>
        </div>

        {/* Social sidebar renders inside hero on mobile, fixed on desktop */}
        <SocialSidebar />
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span className="scroll-pulse-text">SCROLL TO DISCOVER</span>
        <div className="hero__scroll-chevrons">
          <ChevronDown size={22} strokeWidth={2} aria-hidden="true" />
          <ChevronDown size={22} strokeWidth={2} aria-hidden="true" />
        </div>
      </a>
    </div>
  );
}
