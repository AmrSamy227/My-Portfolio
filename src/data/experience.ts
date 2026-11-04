export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  location: string;
  type: string;
  points: string[];
  link?: string;
}

export const experiences: ExperienceItem[] = [
  {
    organization: 'Information Technology Institute (ITI)',
    role: 'Full Stack Development Trainee',
    period: 'August 2025 – September 2025',
    location: 'Cairo, Egypt · Remote',
    type: 'Training',
    link: 'https://www.linkedin.com/in/amr-sami227/',
    points: [
      'Gained hands-on experience in Flask, Django, PostgreSQL, and REST API development.',
      'Built a full-featured PlayStation lounge booking system with authentication, session scheduling, and booking management.',
      'Improved reservation efficiency and reduced manual scheduling workload by approximately 60%.',
      'Strengthened backend development, authentication, and database integration skills.',
    ],
  },
  {
    organization: 'OrbScope Academy',
    role: 'Mobile App Development Trainee',
    period: 'July 2025 – August 2025',
    location: 'Cairo, Egypt · On-site',
    type: 'Training',
    link: 'https://www.linkedin.com/in/amr-sami227/',
    points: [
      'Learned Flutter and Dart.',
      'Built interactive mobile UI screens.',
      'Practiced real-time data handling.',
      'Learned frontend/backend integration concepts in mobile applications.',
    ],
  },
  {
    organization: 'TAG SiS Company',
    role: 'Frontend Development Trainee',
    period: 'February 2025 – April 2025',
    location: 'Egypt',
    type: 'Training',
    link: 'https://www.linkedin.com/in/amr-sami227/',
    points: [
      'Completed structured frontend training with HTML, CSS, and Bootstrap.',
      'Built more than 10 responsive web pages.',
      'Practiced layout design and accessibility fundamentals.',
    ],
  },
];
