import { GraduationCap, Calendar, Award } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { education } from '../data/education';

export function Education() {
  return (
    <div className="section-slide-inner education-section" aria-labelledby="education-title">
      <div className="page-wrap">
        <Reveal direction="down">
          <SectionHeading
            number="06"
            label="Academic Foundation"
            title="Education & Applied Technology."
            description="Continuous academic excellence in Computer Science, Software Engineering, and Artificial Intelligence."
            titleId="education-title"
          />
        </Reveal>

        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal key={item.institution} direction="up" delay={index * 0.15}>
              <div className="education-card">
                <div className="education-card__header">
                  <span className="education-card__number">0{index + 1}</span>
                  <span className="education-card__period">
                    <Calendar size={13} className="edu-icon" /> {item.period}
                  </span>
                </div>
                <div className="education-card__body">
                  <div className="education-card__badge">
                    <GraduationCap size={18} className="edu-badge-icon" />
                    <span>{item.detail || 'Applied Specialization'}</span>
                  </div>
                  <h3>{item.qualification}</h3>
                  <p className="education-card__institution">{item.institution}</p>
                </div>
                <div className="education-card__footer">
                  <Award size={14} className="edu-verify-icon" />
                  <span>Verified Academic Credential</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
