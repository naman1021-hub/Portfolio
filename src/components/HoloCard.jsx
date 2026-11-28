import React from 'react';
import { useReducedMotion } from 'framer-motion';

export const HoloCard = ({
  image,
  alt,
  preset = 'bursts',
  name,
  headline,
  detail,
  status,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width;
    const pointerY = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty('--holo-x', `${pointerX * 100}%`);
    event.currentTarget.style.setProperty('--holo-y', `${pointerY * 100}%`);
    event.currentTarget.style.setProperty('--holo-rotate-x', `${(0.5 - pointerY) * 10}deg`);
    event.currentTarget.style.setProperty('--holo-rotate-y', `${(pointerX - 0.5) * 10}deg`);
  };

  const resetPointer = (event) => {
    event.currentTarget.style.removeProperty('--holo-x');
    event.currentTarget.style.removeProperty('--holo-y');
    event.currentTarget.style.removeProperty('--holo-rotate-x');
    event.currentTarget.style.removeProperty('--holo-rotate-y');
  };

  return (
    <article
      className={`holo-card holo-card--${preset}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label={`${name}, ${headline}`}
    >
      <img className="holo-card-image" src={image} alt={alt} />
      <div className="holo-card-overlay">
        <div className="holo-card-topline">
          <span className="holo-card-mark" aria-hidden="true">NG</span>
          <span className="holo-card-edition">PORTFOLIO / 2026</span>
        </div>

        <div className="holo-card-copy">
          <h2>{name}</h2>
          <p>{detail}</p>
        </div>

        <div className="holo-card-status">
          <div className="holo-card-status-line">
            <span className="holo-card-status-dot" aria-hidden="true" />
            <span>{status}</span>
          </div>
          <span className="holo-card-role">{headline}</span>
        </div>
      </div>
    </article>
  );
};
