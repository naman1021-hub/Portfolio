import React, { useEffect, useRef, useState } from 'react';

const interactiveSelector = 'a, button, input, select, [role="button"], summary, [data-cursor-label], .cursor-target';
const textInputSelector = 'textarea, [contenteditable="true"], input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]):not([type="color"]):not([type="hidden"])';

const TargetCursor = ({
  spinDuration = 2,
  hideDefaultCursor = false,
  parallaxOn = false,
}) => {
  const cursorRef = useRef(null);
  const activeTargetRef = useRef(null);
  const visibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [targetInfo, setTargetInfo] = useState(null);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine) and (hover: hover)');
    if (!pointerQuery.matches) return undefined;

    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    if (hideDefaultCursor) document.documentElement.classList.add('target-cursor-enabled');

    const clearTarget = () => {
      activeTargetRef.current = null;
      visibleRef.current = false;
      setIsVisible(false);
      cursor.style.setProperty('--target-parallax-x', '0px');
      cursor.style.setProperty('--target-parallax-y', '0px');
      setTargetInfo(null);
    };

    const updateTarget = (target) => {
      if (target === activeTargetRef.current) return;

      activeTargetRef.current = target;

      if (!target) {
        setTargetInfo(null);
        return;
      }

      const label = target.dataset.cursorLabel
        || target.getAttribute('aria-label')
        || target.getAttribute('title')
        || (target.matches('a') ? 'OPEN' : target.matches('input, select') ? 'EDIT' : 'SELECT');

      setTargetInfo({ label: label.trim().slice(0, 14) });
    };

    const handlePointerMove = (event) => {
      if (event.pointerType !== 'mouse') {
        clearTarget();
        return;
      }

      const isInsidePage = event.clientX >= 0
        && event.clientY >= 0
        && event.clientX < document.documentElement.clientWidth
        && event.clientY < document.documentElement.clientHeight;

      if (!isInsidePage) {
        clearTarget();
        return;
      }

      cursor.style.setProperty('--target-cursor-x', `${event.clientX}px`);
      cursor.style.setProperty('--target-cursor-y', `${event.clientY}px`);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      const element = event.target instanceof Element ? event.target : null;
      const target = element?.closest(interactiveSelector) || null;
      if (target?.matches(textInputSelector) || target?.closest(textInputSelector)) {
        clearTarget();
        return;
      }

      updateTarget(target);

      if (parallaxOn && target) {
        const bounds = target.getBoundingClientRect();
        const offsetX = ((event.clientX - bounds.left) / Math.max(1, bounds.width) - 0.5) * 5;
        const offsetY = ((event.clientY - bounds.top) / Math.max(1, bounds.height) - 0.5) * 5;
        cursor.style.setProperty('--target-parallax-x', `${offsetX}px`);
        cursor.style.setProperty('--target-parallax-y', `${offsetY}px`);
      } else {
        cursor.style.setProperty('--target-parallax-x', '0px');
        cursor.style.setProperty('--target-parallax-y', '0px');
      }
    };

    const handlePointerOut = (event) => {
      if (event.relatedTarget === null) clearTarget();
    };

    const handleBlur = () => clearTarget();

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerOut);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerOut);
      window.removeEventListener('blur', handleBlur);
      if (hideDefaultCursor) document.documentElement.classList.remove('target-cursor-enabled');
    };
  }, [hideDefaultCursor, parallaxOn]);

  return (
    <div
      ref={cursorRef}
      className={`target-cursor-overlay${isVisible ? ' is-visible' : ''}${targetInfo ? ' is-targeted' : ''}`}
      style={{ '--target-cursor-spin-duration': `${Math.max(0.5, spinDuration)}s` }}
      aria-hidden="true"
    >
      <span className="target-cursor-orbit">
        <span className="target-cursor-ring" />
      </span>
      <span className="target-cursor-crosshair target-cursor-crosshair--horizontal" />
      <span className="target-cursor-crosshair target-cursor-crosshair--vertical" />
      <span className="target-cursor-center" />
      {targetInfo && <span className="target-cursor-label">{targetInfo.label}</span>}
    </div>
  );
};

export default TargetCursor;
