import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { certifications } from '../data/credentials';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export function Certifications() {
  return (
    <div className="section-slide-inner certifications-section" aria-labelledby="certifications-title">
      <div className="page-wrap">
        <Reveal direction="down">
          <SectionHeading
            number="07"
            label="Validated Knowledge"
            title="Industry Certifications & Verified Competencies."
            description="Accredited certifications from Harvard (CS50x), Cisco Networking Academy, EF SET, and OPEN MOOCs."
            titleId="certifications-title"
          />
        </Reveal>

        <div className="certifications-grid">
          {certifications.map((certification, index) => {
            const [name, issuer] = certification.includes('—')
              ? certification.split('—').map((s) => s.trim())
              : [certification, 'Accredited Issuer'];

            return (
              <Reveal key={certification} direction="scale" delay={index * 0.08}>
                <div className="certification-card">
                  <div className="certification-card__top">
                    <span className="certification-card__num">0{index + 1}</span>
                    <ShieldCheck size={18} className="cert-shield-icon" />
                  </div>
                  <div className="certification-card__content">
                    <span className="certification-card__issuer">{issuer}</span>
                    <h4>{name}</h4>
                  </div>
                  <div className="certification-card__action">
                    <span>VERIFIED RECORD</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
