import { Reveal } from '../components/Reveal';
import { featuredLogos } from '../data/featuredLogos';
import { person } from '../data/site';

export function Skills() {
  return (
    <div className="section-slide-inner skills-section" aria-labelledby="skills-title">
      <div className="page-wrap skills-ref-container">
        {/* Top Tagline */}
        <Reveal direction="down">
          <p className="skills-ref-tagline">
            A PROBLEM IS AN OPPORTUNITY TO DO YOUR BEST.
          </p>
        </Reveal>

        {/* Clean Large Heading */}
        <Reveal direction="down" delay={0.08}>
          <h2 className="skills-ref-title" id="skills-title">
            Skills & Experience
          </h2>
        </Reveal>

        {/* Narrative Description like the reference */}
        <Reveal direction="up" delay={0.14}>
          <div className="skills-ref-narrative">
            <p className="skills-ref-lead">
              I specialize in crafting engaging, accessible, and high-performance client-side web applications.
            </p>
            <p>
              My experience centers on modern <strong>JavaScript (ES6+)</strong>, <strong>TypeScript</strong>, <strong>React.js</strong>, and <strong>Next.js</strong> — building scalable full-stack applications with <strong>FastAPI</strong>, <strong>Python</strong>, <strong>Django</strong>, and <strong>PHP</strong>, integrating RESTful APIs, relational databases, and transforming complex Figma design files into interactive responsive user experiences.
            </p>
            <p className="skills-ref-link-row">
              For a deeper look at my verified work and experience, visit my{' '}
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="skills-ref-highlight-link"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </Reveal>

        {/* Crisp Monochrome Logos Matrix */}
        <Reveal direction="up" delay={0.22}>
          <div className="skills-ref-logos-grid">
            {featuredLogos.map((tech) => (
              <div key={tech.name} className="skills-ref-item" title={tech.name}>
                <div className="skills-ref-img-wrap">
                  <img
                    src={`/tech-logos-white/${tech.slug}.svg`}
                    alt={`${tech.name} logo`}
                    className="skills-ref-logo-img"
                    loading="lazy"
                  />
                </div>
                <span className="skills-ref-label">{tech.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
