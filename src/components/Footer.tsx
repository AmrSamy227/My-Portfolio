import { ArrowUpRight } from 'lucide-react';
import { person } from '../data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page-wrap site-footer__inner">
        <a className="footer-wordmark" href="#top">AMR SAMI<span>.</span></a>
        <p className="site-footer__place">Cairo, Egypt</p>
        <div className="site-footer__socials" aria-label="Social links">
          <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
          <a href={person.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
        <div className="site-footer__bottom">
          <span>© {year} Amr Sami. All rights reserved.</span>
          <span>Designed and built with care by Amr Sami.</span>
          <a href="#top" className="back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
