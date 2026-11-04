import { Globe2, MessageSquareCode } from 'lucide-react';
import { languages } from '../data/credentials';
import { Reveal } from '../components/Reveal';

export function Languages() {
  return (
    <div className="section-slide-inner languages-section" aria-labelledby="languages-title">
      <div className="page-wrap languages-inner">
        <Reveal direction="left" className="languages-heading-block">
          <Globe2 size={20} className="languages-globe-icon" />
          <h2 id="languages-title">Global Communication</h2>
        </Reveal>
        <Reveal direction="right" className="languages-list" delay={0.1}>
          {languages.map((language) => (
            <div key={language.name} className="language-badge">
              <MessageSquareCode size={16} className="lang-icon" />
              <div className="lang-info">
                <span className="lang-name">{language.name}</span>
                <span className="lang-level">{language.level} Proficiency</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
