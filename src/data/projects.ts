export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  highlight: string;
  visualTheme: 'careos' | 'gametech' | 'findora' | 'exoneural';
  imageSrc?: string;
  githubUrl: string | null;
  liveUrl: string | null;
};

export const projects: Project[] = [
  {
    number: '01',
    name: 'SMAP (CareOs)',
    category: 'Healthcare Technology / AI Platform',
    description:
      'A bilingual Arabic/English healthcare platform designed to connect patients, doctors, and clinics through digital healthcare services and AI-powered preliminary diagnosis features.',
    role:
      'Led frontend development, built responsive React 18 & TypeScript interfaces, implemented bilingual experiences, integrated REST APIs and JWT authentication, created appointment-booking flows, and connected AI-powered diagnosis modules.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'FastAPI', 'Python'],
    features: [
      'Arabic and English bilingual UI/UX',
      'Patient, doctor, and clinic portals',
      'Smart appointment-booking workflows',
      'AI-powered symptom diagnosis integration',
      'REST API and JWT authentication',
    ],
    highlight: 'Bilingual healthcare platform with AI diagnosis & verified doctor appointments.',
    visualTheme: 'careos',
    imageSrc: '/projects/careos.jpg',
    githubUrl: 'https://github.com/AmrSamy227/SMAP-Project',
    liveUrl: 'https://smap-project.vercel.app/',
  },
  {
    number: '02',
    name: 'GameTech',
    category: 'Gaming Platform / Game Tracker',
    description:
      'A modern, high-octane gaming platform designed for game discovery, personalized wishlist management, and gaming activity tracking with curated titles.',
    role:
      'Engineered interactive frontend architecture, responsive layouts, dynamic game carousels, category filtering, and real-time game collection management.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    features: [
      'Game browsing and discovery engine',
      'Detailed game stats & release timelines',
      'Personal game collections & wishlist',
      'Interactive hero carousel & category filters',
      'Gaming activity tracking',
    ],
    highlight: 'Interactive frontend tailored for game discovery, collection tracking, and immersive visuals.',
    visualTheme: 'gametech',
    imageSrc: '/projects/gametech.jpg',
    githubUrl: 'https://github.com/AmrSamy227/GameTech',
    liveUrl: null,
  },
  {
    number: '03',
    name: 'FINDORA CRM',
    category: 'SaaS / Real Estate CRM',
    description:
      'A multi-tenant SaaS CRM platform designed for real estate agencies to manage properties, listings, client leads, deal workflows, and financial operations.',
    role:
      'Architected full-stack solution including relational database design, role-based access control (RBAC), RESTful APIs, property mapping, and administrative analytics dashboards.',
    technologies: ['PHP 8', 'MySQL 8', 'JavaScript', 'Bootstrap 5', 'REST APIs'],
    features: [
      'Multi-tenant agency data isolation',
      'Role-based access control (RBAC) & security',
      'Property listing management & location maps',
      'Agent assignment & deal status pipelines',
      'Client search, financial reporting & analytics',
    ],
    highlight: 'Production-ready real estate CRM with multi-tenant company isolation and RBAC architecture.',
    visualTheme: 'findora',
    imageSrc: '/projects/findora.jpg',
    githubUrl: 'https://github.com/AmrSamy227/Findora-CRM-Final-Touch',
    liveUrl: null,
  },
  {
    number: '04',
    name: 'ExoNeural',
    category: 'Artificial Intelligence / Astronomy',
    description:
      'An AI-powered exoplanet detection platform developed for the NASA Space Apps Cairo Challenge using the NASA Kepler dataset with thousands of space observations.',
    role:
      'Engineered responsive React interface and connected it with a Flask machine-learning inference pipeline, enabling users to test planetary candidates in real time.',
    technologies: ['React.js', 'Flask', 'Python', 'Machine Learning', 'NASA Kepler Data'],
    features: [
      'Interactive React data visualization interface',
      'Flask backend ML inference pipeline',
      'NASA Kepler astronomical dataset integration',
      'Planetary transit analysis & detection score',
      'Deployed on Render (backend) & Netlify (frontend)',
    ],
    highlight: 'Awarded the "Galactic Problem Solver" badge at NASA Space Apps Cairo Challenge.',
    visualTheme: 'exoneural',
    imageSrc: '/projects/exoneural.jpg',
    githubUrl: 'https://github.com/YounesElshafi/ExoNeural/tree/main',
    liveUrl: 'https://exoneuralapp2.netlify.app/',
  },
];
