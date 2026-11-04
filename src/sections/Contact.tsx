import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { person } from '../data/site';

export function Contact() {
  const [copyMessage, setCopyMessage] = useState('');

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(person.email);
      setCopyMessage('Email copied to clipboard.');
    } catch {
      setCopyMessage('Copy is unavailable here. Select the email address to copy it.');
    }
    window.setTimeout(() => setCopyMessage(''), 3500);
  }

  return (
    <div className="section-slide-inner contact-section" aria-labelledby="contact-title">
      <div className="page-wrap contact-inner">
        <div className="contact-section__eyebrow"><span>08</span><span>Start a conversation</span></div>
        <div className="contact-main">
          <p className="contact-overline">Have a project in mind?</p>
          <h2 id="contact-title">Let's build something <em>meaningful.</em></h2>
          <p className="contact-description">
            I'm open to freelance projects, collaborations, and opportunities to work on interesting digital products.
          </p>
          <div className="contact-actions">
            <a className="button button--accent" href={`mailto:${person.email}?subject=${encodeURIComponent("Let's build something meaningful")}`}>
              <Mail size={16} aria-hidden="true" /> Say hello <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button className="copy-email-button" type="button" onClick={copyEmail} aria-describedby="copy-email-status">
              {copyMessage === 'Email copied to clipboard.' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
              Copy email
            </button>
          </div>
          <p className="contact-email">{person.email}</p>
          <p className="sr-only" id="copy-email-status" aria-live="polite">{copyMessage}</p>
        </div>
        <div className="contact-aside">
          <span className="contact-aside__label">Find me elsewhere</span>
          <a href={person.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span><ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a href={person.github} target="_blank" rel="noreferrer">
            <span>GitHub</span><ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <span className="contact-aside__availability"><span className="availability-dot" aria-hidden="true" /> Open to freelance and collaborations</span>
        </div>
        <div className="contact-watermark" aria-hidden="true">AMR<span>.</span></div>
      </div>
    </div>
  );
}
