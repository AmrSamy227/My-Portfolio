export type TechLogoMapping = {
  src: string;
  name: string;
  color?: string;
};

export const techLogoMap: Record<string, TechLogoMapping> = {
  // Frontend
  'HTML5': { src: '/tech-logos/html5.svg', name: 'HTML5', color: '#E34F26' },
  'CSS3': { src: '/tech-logos/css3.svg', name: 'CSS3', color: '#1572B6' },
  'JavaScript ES6+': { src: '/tech-logos/javascript.svg', name: 'JavaScript', color: '#F7DF1E' },
  'TypeScript': { src: '/tech-logos/typescript.svg', name: 'TypeScript', color: '#3178C6' },
  'React.js': { src: '/tech-logos/react.svg', name: 'React', color: '#61DAFB' },
  'Next.js': { src: '/tech-logos/nextdotjs.svg', name: 'Next.js', color: '#FFFFFF' },
  'Bootstrap': { src: '/tech-logos/bootstrap.svg', name: 'Bootstrap', color: '#7952B3' },
  'Tailwind CSS': { src: '/tech-logos/tailwindcss.svg', name: 'Tailwind CSS', color: '#06B6D4' },

  // Backend
  'PHP': { src: '/tech-logos/php.svg', name: 'PHP', color: '#777BB4' },
  'Python': { src: '/tech-logos/python.svg', name: 'Python', color: '#3776AB' },
  'Django': { src: '/tech-logos/django.svg', name: 'Django', color: '#092E20' },
  'Flask': { src: '/tech-logos/flask.svg', name: 'Flask', color: '#FFFFFF' },
  'REST APIs': { src: '/tech-logos/fastapi.svg', name: 'REST APIs / FastAPI', color: '#009688' },

  // Databases
  'PostgreSQL': { src: '/tech-logos/postgresql.svg', name: 'PostgreSQL', color: '#4169E1' },
  'MySQL': { src: '/tech-logos/mysql.svg', name: 'MySQL', color: '#4479A1' },
  'NoSQL': { src: '/tech-logos/mongodb.svg', name: 'MongoDB / NoSQL', color: '#47A248' },

  // Tools & Workflow
  'Git': { src: '/tech-logos/git.svg', name: 'Git', color: '#F05032' },
  'GitHub': { src: '/tech-logos/github.svg', name: 'GitHub', color: '#FFFFFF' },
  'Figma': { src: '/tech-logos/figma.svg', name: 'Figma', color: '#F24E1E' },
  'Responsive Design': { src: '/tech-logos/googlechrome.svg', name: 'Responsive Web', color: '#4285F4' },
  'UI/UX Implementation': { src: '/tech-logos/layers.svg', name: 'UI / UX Design', color: '#35D6BE' },
  'Debugging': { src: '/tech-logos/gnubash.svg', name: 'Bash & Debugging', color: '#4EAA25' },
  'Deployment': { src: '/tech-logos/docker.svg', name: 'Docker & Cloud', color: '#2496ED' },
  'Cross-Browser Compatibility': { src: '/tech-logos/firefoxbrowser.svg', name: 'Cross-Browser', color: '#FF7139' },

  // Other Technical Knowledge
  'C': { src: '/tech-logos/c.svg', name: 'C', color: '#A8B9CC' },
  'C++': { src: '/tech-logos/cplusplus.svg', name: 'C++', color: '#00599C' },
  'SQL': { src: '/tech-logos/sqlite.svg', name: 'SQL / Relational DB', color: '#003B57' },
  'Prompt Engineering': { src: '/tech-logos/openai.svg', name: 'AI / Prompting', color: '#35D6BE' },
};

