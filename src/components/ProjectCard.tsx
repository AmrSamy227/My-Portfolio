import { ArrowDownRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import { TiltCard } from './TiltCard';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard className={`project-card project-card--${project.visualTheme}`} intensity={6}>
      <article aria-labelledby={`project-${project.number}-title`}>
        {/* Project Visual Showcase */}
        <div
          className={`project-art project-art--${project.visualTheme}`}
          role="img"
          aria-label={`${project.name} project preview`}
        >
          {project.imageSrc ? (
            <div className="project-art__screenshot-container">
              <img
                src={project.imageSrc}
                alt={`${project.name} screenshot preview`}
                className="project-art__screenshot"
                loading="lazy"
              />
              <div className="project-art__screenshot-overlay" />
              <div className="project-art__scanline" aria-hidden="true" />
            </div>
          ) : (
            <>
              <div className="project-art__scanline" aria-hidden="true" />
              <div className="project-art__composition" aria-hidden="true">
                <span className="project-art__shape project-art__shape--one" />
                <span className="project-art__shape project-art__shape--two" />
                <span className="project-art__shape project-art__shape--three" />
                <span className="project-art__initials">EN</span>
              </div>
            </>
          )}

          <div className="project-art__topbar">
            <span className="project-art__number">{project.number} / 04</span>
            <span className="project-art__status-live">● SYSTEM ACTIVE</span>
          </div>

          <div className="project-art__caption">
            <span>{project.category}</span>
            <span className="project-art__view-hint">
              <ExternalLink size={11} /> PREVIEW
            </span>
          </div>
        </div>

        {/* Project Information */}
        <div className="project-card__content">
          <div className="project-card__meta">
            <span className="project-card__category">{project.category}</span>
            <span className="project-card__counter">PROJ // {project.number}</span>
          </div>

          <h3 id={`project-${project.number}-title`}>{project.name}</h3>
          <p className="project-card__description">{project.description}</p>
          <p className="project-card__highlight">{project.highlight}</p>

          <ul className="tech-list" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology} className="tech-tag-interactive">
                {technology}
              </li>
            ))}
          </ul>

          <details className="project-details">
            <summary>
              <span>System & Role Architecture</span>
              <ArrowDownRight size={16} strokeWidth={1.7} aria-hidden="true" />
            </summary>
            <div className="project-details__body">
              <div>
                <h4>Key Impact</h4>
                <p>{project.role}</p>
              </div>
              <div>
                <h4>Core Modules</h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>

          <div className="project-card__links" aria-label={`${project.name} project links`}>
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-micro">
                GitHub Repository <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ) : (
              <span className="project-link-placeholder">
                <span className="project-link-glyph" aria-hidden="true">GH</span> Private / Production Codebase
              </span>
            )}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-micro">
                Live Deployment <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ) : (
              <span className="project-link-placeholder">Deployment verified</span>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
