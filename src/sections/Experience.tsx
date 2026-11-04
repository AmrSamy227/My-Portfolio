import { ArrowUpRight, Briefcase } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <div className="section-slide-inner experience-section" aria-labelledby="experience-title">
      <div className="page-wrap">
        <Reveal direction="down">
          <SectionHeading
            number="05"
            label="Track Record & Growth"
            title="Practical industry training & builds."
            description="Structured development programs and intensive internships where architectural thinking and real-world execution met."
            titleId="experience-title"
          />
        </Reveal>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <Reveal direction="up" delay={index * 0.12} key={item.organization}>
              <article className="experience-entry">
                <div className="experience-entry__time">
                  <span className="experience-entry__number">0{index + 1}</span>
                  <span className="experience-entry__badge">
                    <Briefcase size={12} className="experience-badge-icon" />
                    {item.period}
                  </span>
                  <span className="experience-entry__type-tag">{item.type}</span>
                </div>
                <div className="experience-entry__content">
                  <div className="experience-entry__heading">
                    <div>
                      <p className="experience-entry__location">
                        {item.location} <span>·</span> ACTIVE ROLE
                      </p>
                      <h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="experience-entry__title-link"
                          >
                            {item.role}
                          </a>
                        ) : (
                          item.role
                        )}
                      </h3>
                      <p className="experience-entry__organization">{item.organization}</p>
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="experience-entry__arrow-box"
                        aria-label={`View ${item.role} at ${item.organization} on LinkedIn`}
                        title="View on LinkedIn"
                      >
                        <ArrowUpRight size={18} strokeWidth={2} />
                      </a>
                    ) : (
                      <div className="experience-entry__arrow-box" aria-hidden="true">
                        <ArrowUpRight size={18} strokeWidth={2} />
                      </div>
                    )}
                  </div>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
