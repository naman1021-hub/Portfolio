import React from 'react';

const strandPaths = [
  'M12 5 17 11 13 16 20 21',
  'M52 5 47 11 51 16 44 21',
  'M12 59 17 53 13 48 20 43',
  'M52 59 47 53 51 48 44 43',
];

export const ElectricLogo = ({
  src = '/favicon.svg',
  color = '#ecc7ff',
  glowColor = '#ad6dff',
  scale = 0.7,
  strands = 4,
  bend = 0.6,
  crackle = 1.5,
  arcs = 1,
  speed = 2.5,
  interactive = false,
}) => (
  <span
    className={`electric-logo${interactive ? ' electric-logo--interactive' : ''}`}
    style={{
      '--electric-color': color,
      '--electric-glow': glowColor,
      '--electric-scale': scale,
      '--electric-bend': bend,
      '--electric-crackle': crackle,
      '--electric-speed': `${speed}s`,
    }}
    aria-hidden="true"
  >
    <img className="electric-logo-image" src={src} alt="" />
    <svg className="electric-logo-arcs" viewBox="0 0 64 64" fill="none">
      {Array.from({ length: Math.max(0, Math.min(strands, strandPaths.length)) }, (_, index) => (
        <path
          className="electric-logo-strand"
          d={strandPaths[index]}
          key={index}
          style={{ '--electric-delay': `${index * -0.13}s` }}
        />
      ))}
      {Array.from({ length: Math.max(0, Math.min(arcs, 4)) }, (_, index) => (
        <circle
          className="electric-logo-ring"
          cx="32"
          cy="32"
          r={25 + index * 3}
          key={index}
          style={{ '--electric-delay': `${index * -0.35}s` }}
        />
      ))}
    </svg>
  </span>
);
