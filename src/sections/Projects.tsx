import { ArrowUpRight } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <div className="section-slide-inner projects-section" aria-labelledby="work-title">
      <div className="page-wrap">
        <Reveal direction="down">
          <SectionHeading
            number="02"
            label="Selected work"
            title="Built to be useful."
            description="A selection of academic, collaborative, and practical builds. High-performance interfaces engineered for production scale."
            titleId="work-title"
          />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="projects-introline">
            <span>Four featured builds · Real-world architectures & UI systems</span>
            <a className="small-arrow-link" href="#contact">
              Discuss a project <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Reveal key={project.number} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
