import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/services';

export function Services() {
  return (
    <div className="section-slide-inner services-section" aria-labelledby="services-title">
      <div className="page-wrap">
        <Reveal direction="down">
          <SectionHeading
            number="03"
            label="Ways I can help"
            title="From first sketch to finished interface."
            description="Practical development support for thoughtful web products, from a focused improvement to a complete application."
            titleId="services-title"
          />
        </Reveal>

        <div className="services-layout">
          <Reveal direction="left" delay={0.1}>
            <p className="services-aside">A considered process.<br />A useful result.</p>
          </Reveal>

          <div className="service-list">
            {services.map((service, index) => (
              <Reveal key={service.number} direction="up" delay={index * 0.08} className="service-item">
                <span className="service-item__number">{service.number}</span>
                <div className="service-item__main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight className="service-item__arrow" size={18} strokeWidth={1.5} aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
