import React, { useMemo, useState } from 'react';

export const TechText = ({
  text,
  fontWeight = 600,
  fontSize = 150,
  reveal = 'letter',
  dashLength = 4,
  dashGap = 2,
  specks = 15,
  intro = 'none',
  introDuration = 2,
  clickKick = false,
  guides = false,
  className = '',
}) => {
  const [kickCount, setKickCount] = useState(0);
  const words = useMemo(() => text.trim().split(/\s+/), [text]);
  const speckCount = Math.max(0, Math.min(50, specks));
  let letterIndex = 0;

  const Tag = clickKick ? 'button' : 'span';

  return (
    <Tag
      type={clickKick ? 'button' : undefined}
      className={`tech-text ${reveal === 'letter' ? 'tech-text--reveal-letter' : ''} ${intro === 'rise' ? 'tech-text--intro-rise' : ''} ${clickKick && kickCount > 0 ? 'tech-text--has-kicked' : ''} ${guides ? 'tech-text--guides' : ''} ${className}`}
      style={{
        '--tech-font-weight': fontWeight,
        '--tech-font-size': `${fontSize}px`,
        '--tech-dash-length': `${dashLength}px`,
        '--tech-dash-gap': `${dashGap}px`,
        '--tech-intro-duration': `${introDuration}s`,
      }}
      aria-label={clickKick ? text : undefined}
      onClick={clickKick ? () => setKickCount((count) => count + 1) : undefined}
    >
      <span className="tech-text-words" key={kickCount} aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span className="tech-text-word" key={`${word}-${wordIndex}`}>
            {Array.from(word).map((character) => {
              const index = letterIndex;
              letterIndex += 1;
              return (
                <span
                  className="tech-text-char"
                  key={`${character}-${index}`}
                  style={{ '--tech-char-index': index }}
                >
                  {character}
                </span>
              );
            })}
          </span>
        ))}
      </span>
      {Array.from({ length: speckCount }, (_, index) => (
        <span
          className="tech-text-speck"
          key={index}
          style={{
            '--tech-speck-left': `${(index * 37 + 11) % 100}%`,
            '--tech-speck-top': `${(index * 53 + 17) % 100}%`,
            '--tech-speck-delay': `${(index % 7) * -0.45}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </Tag>
  );
};
