import React, { useEffect, useRef, useState } from 'react';

const CinematicCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, .cursor-pointer, [data-cursor="hover"]');
      setIsHovering(!!interactive);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: 8,
          height: 8,
          background: isHovering ? '#22C55E' : '#F0D882',
          transition: 'background 0.2s, opacity 0.3s',
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: 32,
          height: 32,
          border: `1px solid ${isHovering ? 'rgba(34, 197, 94, 0.5)' : 'rgba(240, 216, 130, 0.3)'}`,
          transition: 'border-color 0.3s, width 0.3s, height 0.3s',
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CinematicCursor;
