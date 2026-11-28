import React, { useEffect, useRef } from 'react';

const parseHexColor = (value) => {
  const hex = value.replace('#', '');
  const expanded = hex.length === 3 ? hex.split('').map((part) => part + part).join('') : hex;

  if (!/^[\da-f]{6}$/i.test(expanded)) return { r: 174, g: 184, b: 203 };

  return {
    r: Number.parseInt(expanded.slice(0, 2), 16),
    g: Number.parseInt(expanded.slice(2, 4), 16),
    b: Number.parseInt(expanded.slice(4, 6), 16),
  };
};

const mixColor = (start, end, amount) => ({
  r: Math.round(start.r + (end.r - start.r) * amount),
  g: Math.round(start.g + (end.g - start.g) * amount),
  b: Math.round(start.b + (end.b - start.b) * amount),
});

const colorWithAlpha = (color, alpha) => `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;

const ShapeWaves = ({
  text = '</>',
  fontFamily = 'Geist, "Geist Sans", system-ui, sans-serif',
  fontWeight = 500,
  textSize = 0.6,
  shapes = 'mixed',
  cellSize = 10,
  dotSize = 0.75,
  color = '#C1CAD8',
  hoverColor = '#FFFFFF',
  backgroundColor = 'transparent',
  speed = 1,
  scale = 1,
  contrast = 1,
  brightness = 0.45,
  flow = 0,
  direction = 0,
  fade = 0.25,
  interactive = true,
  splashRadius = 40,
  splashStrength = 0.4,
  glow = 0.25,
  intro = true,
  introDuration = 1.6,
  paused = false,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas) return undefined;
    if (!context) {
      console.error('ShapeWaves requires a browser with 2D canvas support.');
      return undefined;
    }

    const maskCanvas = document.createElement('canvas');
    const maskContext = maskCanvas.getContext('2d');
    if (!maskContext) {
      console.error('ShapeWaves could not create its text mask.');
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = reducedMotionQuery.matches;
    let lightTheme = document.documentElement.classList.contains('light');
    let currentColor = parseHexColor(lightTheme ? '#64748B' : color);
    let currentHoverColor = parseHexColor(lightTheme ? '#334155' : hoverColor);
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let spacing = 24;
    let columns = 0;
    let rows = 0;
    let textMask;
    let frameId = 0;
    let lastFrameTime = 0;
    let lastClick = { x: -1000, y: -1000, time: -Infinity };
    const pointer = { x: -1000, y: -1000 };
    const startTime = performance.now();

    const updateTheme = () => {
      lightTheme = document.documentElement.classList.contains('light');
      currentColor = parseHexColor(lightTheme ? '#64748B' : color);
      currentHoverColor = parseHexColor(lightTheme ? '#334155' : hoverColor);
    };

    const rebuildMask = () => {
      spacing = Math.max(18, cellSize * Math.max(0.5, scale) * 2.4);
      columns = Math.ceil(width / spacing);
      rows = Math.ceil(height / spacing);
      maskCanvas.width = Math.max(1, columns);
      maskCanvas.height = Math.max(1, rows);
      maskContext.clearRect(0, 0, columns, rows);
      maskContext.fillStyle = '#FFFFFF';
      maskContext.textAlign = 'center';
      maskContext.textBaseline = 'middle';
      maskContext.font = `${fontWeight} ${Math.max(1, (Math.min(width * 0.8, height * 0.8) * textSize) / spacing)}px ${fontFamily}`;
      maskContext.fillText(text, columns / 2, rows / 2, columns * 0.9);
      textMask = maskContext.getImageData(0, 0, columns, rows).data;
    };

    const drawShape = (shape, x, y, size, fill) => {
      context.fillStyle = fill;
      if (shape === 1) {
        context.fillRect(x - size, y - size, size * 2, size * 2);
      } else if (shape === 2) {
        context.beginPath();
        context.moveTo(x, y - size * 1.4);
        context.lineTo(x + size * 1.4, y);
        context.lineTo(x, y + size * 1.4);
        context.lineTo(x - size * 1.4, y);
        context.closePath();
        context.fill();
      } else if (shape === 3) {
        context.fillRect(x - size * 1.6, y - size * 0.35, size * 3.2, size * 0.7);
        context.fillRect(x - size * 0.35, y - size * 1.6, size * 0.7, size * 3.2);
      } else {
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
      }
    };

    const draw = (now) => {
      context.clearRect(0, 0, width, height);
      if (backgroundColor !== 'transparent') {
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, width, height);
      }

      const elapsed = (now - startTime) / 1000;
      const time = elapsed * speed;
      const introProgress = !intro || reducedMotion
        ? 1
        : Math.min(1, elapsed / Math.max(0.1, introDuration));
      const normalizedBrightness = Math.max(0, Math.min(1, brightness));
      const normalizedContrast = Math.max(0.25, Math.min(2, contrast));
      const radius = Math.max(1, splashRadius);
      const clickAge = (now - lastClick.time) / 1000;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const x = column * spacing + spacing / 2;
          const y = row * spacing + spacing / 2;
          const wavePhase = (x * Math.cos(direction) + y * Math.sin(direction)) * 0.014
            + Math.sin((x + y) * 0.006) * flow
            - time;
          const wave = (Math.sin(wavePhase) + 1) / 2;
          const maskIndex = (row * columns + column) * 4 + 3;
          const textAmount = textMask?.[maskIndex] ? textMask[maskIndex] / 255 : 0;
          const pointerDistance = Math.hypot(x - pointer.x, y - pointer.y);
          const clickDistance = Math.hypot(x - lastClick.x, y - lastClick.y);
          const pointerAmount = interactive
            ? Math.max(0, 1 - pointerDistance / radius) * splashStrength
            : 0;
          const clickAmount = interactive && clickAge >= 0 && clickAge < 1.2
            ? Math.max(0, 1 - Math.abs(clickDistance - clickAge * radius * 2) / radius)
              * (1 - clickAge / 1.2) * splashStrength
            : 0;
          const centerDistance = Math.hypot(x - width / 2, y - height / 2);
          const edgeFade = Math.max(0.08, 1 - (centerDistance / Math.hypot(width / 2, height / 2)) * fade);
          const alpha = Math.min(
            0.34,
            (0.045 + normalizedBrightness * 0.055 + wave * 0.025 + textAmount * 0.12
              + pointerAmount * 0.12 + clickAmount * 0.1) * normalizedContrast * edgeFade * introProgress,
          );
          const mixedColor = mixColor(currentColor, currentHoverColor, Math.min(1, pointerAmount + clickAmount));
          const size = Math.max(0.45, dotSize * (0.55 + wave * 0.35 + textAmount * 0.45 + pointerAmount));
          const shape = shapes === 'mixed' ? (column + row * 3) % 4 : shapes === 'squares' ? 1 : 0;

          if (glow > 0 && (textAmount > 0.2 || pointerAmount > 0.2)) {
            drawShape(shape, x, y, size * 2, colorWithAlpha(mixedColor, alpha * glow * 0.22));
          }
          drawShape(shape, x, y, size, colorWithAlpha(mixedColor, alpha));
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      rebuildMask();
      draw(performance.now());
    };

    const animate = (now) => {
      if (now - lastFrameTime >= 1000 / 30) {
        draw(now);
        lastFrameTime = now;
      }
      if (!paused && !reducedMotion) frameId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerDown = (event) => {
      lastClick = { x: event.clientX, y: event.clientY, time: performance.now() };
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handleMotionPreference = (event) => {
      reducedMotion = event.matches;
      window.cancelAnimationFrame(frameId);
      draw(performance.now());
      if (!paused && !reducedMotion) frameId = window.requestAnimationFrame(animate);
    };

    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', resize);
    reducedMotionQuery.addEventListener('change', handleMotionPreference);
    if (interactive) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    }

    resize();
    if (!paused && !reducedMotion) frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      reducedMotionQuery.removeEventListener('change', handleMotionPreference);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      themeObserver.disconnect();
    };
  }, [
    backgroundColor,
    brightness,
    cellSize,
    color,
    contrast,
    direction,
    dotSize,
    fade,
    flow,
    fontFamily,
    fontWeight,
    glow,
    hoverColor,
    interactive,
    intro,
    introDuration,
    paused,
    scale,
    shapes,
    speed,
    splashRadius,
    splashStrength,
    text,
    textSize,
  ]);

  return <canvas ref={canvasRef} className="shape-waves-background" aria-hidden="true" />;
};

export default ShapeWaves;
