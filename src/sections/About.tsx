import { aboutFacts, aboutParagraphs } from '../data/site';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Code2, Terminal, Cpu, Globe, Sparkles } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Core Focus', value: 'Frontend & Full-Stack' },
  { icon: Terminal, label: 'Work Methodology', value: 'Clean Code & Architecture' },
  { icon: Cpu, label: 'Education Target', value: 'B.Sc. Information Technology' },
  { icon: Globe, label: 'Base Location', value: 'Cairo, Egypt' },
];

export function About() {
  return (
    <div className="section-slide-inner about-section" aria-labelledby="about-title">
      <div className="page-wrap">
        <SectionHeading
          number="01"
          label="Profile & Philosophy"
          title="Bridging design nuance with engineering precision."
          description="A look into my background, approach to building digital products, and dedication to modern web standards."
          titleId="about-title"
        />

        <div className="about-showcase-grid">
          {/* Left Column: Stylized Portrait Frame with Cyber Aesthetic */}
          <Reveal direction="left" className="about-portrait-col">
            <div className="portrait-cyber-frame">
              <div className="portrait-cyber-frame__corner portrait-cyber-frame__corner--tl" />
              <div className="portrait-cyber-frame__corner portrait-cyber-frame__corner--tr" />
              <div className="portrait-cyber-frame__corner portrait-cyber-frame__corner--bl" />
              <div className="portrait-cyber-frame__corner portrait-cyber-frame__corner--br" />

              <div className="portrait-image-wrapper">
                <img
                  src="/amr-portrait.jpg"
                  alt="Portrait of Amr Sami"
                  className="portrait-image"
                />
                <div className="portrait-overlay-glow" aria-hidden="true" />
                <div className="portrait-scan-line" aria-hidden="true" />
              </div>

              <div className="portrait-cyber-badge">
                <div className="portrait-badge-status">
                  <span className="portrait-status-dot" />
                  <span>AMR SAMI // DEV</span>
                </div>
                <div className="portrait-badge-specs">
                  <span>CAIRO · EGY</span>
                  <Sparkles size={12} className="portrait-sparkle-icon" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Spec Sheet & Narrative */}
          <Reveal direction="right" className="about-content-col" delay={0.15}>
            <div className="about-interactive-card">
              <span className="about-card-tag">// DEVELOPER SPEC & ARCHITECTURE</span>
              <p className="aside-note">
                Crafting interfaces that feel alive, intuitive, and architecturally resilient.
              </p>
              <div className="about-metrics">
                {stats.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className="about-metric-item">
                      <Icon size={16} className="about-metric-icon" />
                      <div>
                        <div className="about-metric-label">{s.label}</div>
                        <div className="about-metric-val">{s.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="about-copy">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="about-facts" aria-label="About Amr">
              {aboutFacts.map((fact, index) => (
                <div className="about-fact" key={fact}>
                  <span className="about-fact__number">0{index + 1}</span>
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
