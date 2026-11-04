type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className = 'w-6 h-6' }: TechIconProps) {
  switch (name.toLowerCase()) {
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" />
          <path d="M16.5 7.5H7.5l.4 4h8.2l-.5 5-3.6 1.1-3.6-1.1-.3-2.5" />
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" />
          <path d="M8 7.5h8l-.3 3.5H8.3l.3 3.5h7.1l-.5 4-3.2 1-3.2-1-.2-2" />
        </svg>
      );

    case 'javascript es6+':
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8 15c0 1.5 1 2.5 2.5 2.5s2-1 2-2V9" />
          <path d="M15 15.5c.8.9 1.8 1.5 3 1.5 1.4 0 2.5-.8 2.5-2 0-2.8-4-1.8-4-4.5 0-1.2 1-2 2.5-2 1 0 1.8.4 2.5 1" />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 9h6M10 9v8" />
          <path d="M14 15.5c.8.9 1.8 1.5 3 1.5 1.4 0 2.5-.8 2.5-2 0-2.8-4-1.8-4-4.5 0-1.2 1-2 2.5-2 1 0 1.8.4 2.5 1" />
        </svg>
      );

    case 'react.js':
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
        </svg>
      );

    case 'next.js':
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 16V8l8 9" />
          <path d="M15 8v4" />
        </svg>
      );

    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M6 12c1-2 2.5-3 4.5-3 3 0 3.5 3 6 3 1.5 0 2.5-.8 3.5-2.5-1 2-2.5 3-4.5 3-3 0-3.5-3-6-3-1.5 0-2.5.8-3.5 2.5z" />
          <path d="M2 17c1-2 2.5-3 4.5-3 3 0 3.5 3 6 3 1.5 0 2.5-.8 3.5-2.5-1 2-2.5 3-4.5 3-3 0-3.5-3-6-3-1.5 0-2.5.8-3.5 2.5z" />
        </svg>
      );

    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M8.5 7.5h4c1.4 0 2.5.8 2.5 2s-1.1 2-2.5 2h-4v-4z" />
          <path d="M8.5 11.5h4.5c1.4 0 2.5.9 2.5 2.2 0 1.4-1.1 2.3-2.5 2.3H8.5v-4.5z" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 3c-4 0-4 2-4 2v3h4v1H6s-3 0-3 4 2 4 4 4h1v-2c0-2 2-2 2-2h4c2 0 2-2 2-2v-4c0-4-3-4-3-4h-2zm-2 2a1 1 0 110 2 1 1 0 010-2z" />
          <path d="M12 21c4 0 4-2 4-2v-3h-4v-1h6s3 0 3-4-2-4-4-4h-1v2c0 2-2 2-2 2h-4c-2 0-2 2-2 2v4c0 4 3 4 3 4h2zm2-2a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="6" />
          <path d="M7 10h2a1.5 1.5 0 010 3H7v3M7 10v6" />
          <path d="M17 10h2a1.5 1.5 0 010 3h-2v3M17 10v6" />
          <path d="M12 9v6M12 11h2a1.5 1.5 0 010 3h-2" />
        </svg>
      );

    case 'django':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 8v8M11 11v5c0 1.5-1 2-2.5 2M16 8v8" />
        </svg>
      );

    case 'flask':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M9 3h6M10 3v5l-5 8.5A3 3 0 007.6 21h8.8a3 3 0 002.6-4.5L14 8V3" />
          <path d="M7.5 16h9" />
        </svg>
      );

    case 'rest apis':
    case 'api':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 12h16M15 7l5 5-5 5M9 17l-5-5 5-5" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M6 9a6 6 0 0112 0c0 4-3 7-6 9-3-2-6-5-6-9z" />
          <circle cx="12" cy="9" r="2.5" />
          <path d="M9 14l-3 4M15 14l3 4M12 18v3" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="7" rx="8" ry="3" />
          <path d="M4 7v6c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
          <path d="M4 13v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" />
        </svg>
      );

    case 'nosql':
    case 'sql':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="9" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M6 8.5v7M8.5 6l7 3" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M5 5.5A2.5 2.5 0 017.5 3h5a2.5 2.5 0 012.5 2.5v0a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 015 5.5z" />
          <path d="M5 10.5A2.5 2.5 0 017.5 8h5a2.5 2.5 0 012.5 2.5v0a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 015 10.5z" />
          <path d="M5 15.5A2.5 2.5 0 017.5 13H10v2.5a2.5 2.5 0 01-2.5 2.5v0A2.5 2.5 0 015 15.5z" />
          <circle cx="12.5" cy="15.5" r="2.5" />
        </svg>
      );

    case 'responsive design':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="2" y="4" width="14" height="12" rx="2" />
          <rect x="14" y="8" width="8" height="12" rx="2" />
          <path d="M6 20h6" />
        </svg>
      );

    case 'ui/ux implementation':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
        </svg>
      );

    case 'debugging':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 2a4 4 0 00-4 4v2h8V6a4 4 0 00-4-4zM6 11h12M4 7l3 3M20 7l-3 3M4 17l3-3M20 17l-3-3M8 12v4a4 4 0 008 0v-4" />
        </svg>
      );

    case 'deployment':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 14.899A7 7 0 1115.71 8h1.79a4.5 4.5 0 012.5 8.242M12 12v9m0 0l-3-3m3 3l3-3" />
        </svg>
      );

    case 'cross-browser compatibility':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
        </svg>
      );

    case 'c':
    case 'c++':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M14 9a4 4 0 100 6" />
          {name.toLowerCase() === 'c++' && <path d="M17 10v4M15 12h4" />}
        </svg>
      );

    case 'prompt engineering':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 10l2 2-2 2M13 14h2" />
        </svg>
      );
  }
}
