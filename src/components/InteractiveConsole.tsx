import { useState } from 'react';

export function InteractiveConsole() {
  const [copied, setCopied] = useState(false);
  const command = 'npx amrsami';

  const copyCommand = () => {
    navigator.clipboard?.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="interactive-console">
      <div className="interactive-console__header">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
        <span className="interactive-console__title">bash — amrsami@portfolio:~</span>
      </div>
      <div className="interactive-console__body" onClick={copyCommand} title="Click to copy CLI command">
        <span className="console-prompt">$</span>
        <span className="console-cmd">{command}</span>
        <span className="console-cursor">_</span>
        <button type="button" className="console-copy-btn" aria-label="Copy command">
          {copied ? 'COPIED!' : 'CLICK TO COPY'}
        </button>
      </div>
    </div>
  );
}
