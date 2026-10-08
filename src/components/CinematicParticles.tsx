import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  opacity: number;
  speed: number;
  twinkle: number;
  twinkleSpeed: number;
  color: string;
}

const COLORS = [
  'rgba(240, 216, 130,',
  'rgba(34, 197, 94,',
  'rgba(255, 255, 255,',
  'rgba(255, 255, 255,',
  'rgba(255, 255, 255,',
];

const CinematicParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let particles: Particle[] = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 3500),
        400
      );
      particles = [];
      for (let i = 0; i < count; i++) {
        const z = Math.random();
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z,
          radius: z * 2.5 + 0.3,
          opacity: z * 0.6 + 0.15,
          speed: z * 0.08 + 0.01,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const drawNebula = () => {
      const scroll = scrollRef.current;
      const scrollFrac = scroll / (document.body.scrollHeight - window.innerHeight || 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const parallaxX = (mouseX - canvas.width / 2) * 0.02;
      const parallaxY = (mouseY - canvas.height / 2) * 0.02;

      // Nebula glow layers — shift hue subtly with scroll
      const glowRadius = 300 + scrollFrac * 150;
      const cx = canvas.width * 0.35 + parallaxX;
      const cy = canvas.height * 0.4 + parallaxY - scroll * 0.15;

      const grad1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
      grad1.addColorStop(0, 'rgba(34, 197, 94, 0.06)');
      grad1.addColorStop(0.5, 'rgba(34, 197, 94, 0.02)');
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx2 = canvas.width * 0.7 - parallaxX;
      const cy2 = canvas.height * 0.6 + parallaxY - scroll * 0.1;
      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, glowRadius * 0.8);
      grad2.addColorStop(0, 'rgba(240, 216, 130, 0.05)');
      grad2.addColorStop(0.5, 'rgba(240, 216, 130, 0.015)');
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Warp streaks — thin lines radiating outward, denser at top
      const warpCount = 30;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      for (let i = 0; i < warpCount; i++) {
        const angle = (i / warpCount) * Math.PI * 2 + scrollFrac * 0.3;
        const dist = 200 + Math.sin(scroll * 0.002 + i) * 100;
        const innerR = dist;
        const outerR = dist + 60 + scrollFrac * 200;
        const x1 = centerX + Math.cos(angle) * innerR;
        const y1 = centerY + Math.sin(angle) * innerR;
        const x2 = centerX + Math.cos(angle) * outerR;
        const y2 = centerY + Math.sin(angle) * outerR;

        const alpha = 0.04 + Math.sin(scroll * 0.003 + i * 0.5) * 0.03;
        ctx.strokeStyle = `rgba(240, 216, 130, ${Math.max(0, alpha)})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Particles with depth parallax
      particles.forEach((p) => {
        p.twinkle += p.twinkleSpeed;
        const twinkleAlpha = (Math.sin(p.twinkle) + 1) * 0.5;

        // Scroll-based vertical drift — deeper particles move slower
        const scrollOffset = scroll * (0.3 + p.z * 0.7);
        let py = p.y - scrollOffset * 0.3;
        py = ((py % canvas.height) + canvas.height) % canvas.height;

        const px = p.x + parallaxX * (0.3 + p.z * 0.7);
        const driftY = parallaxY * (0.3 + p.z * 0.7);

        const finalY = py + driftY;
        const alpha = p.opacity * (0.3 + twinkleAlpha * 0.7);

        ctx.beginPath();
        ctx.arc(px, finalY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${alpha})`;
        ctx.fill();

        // Bigger particles get a subtle glow
        if (p.radius > 1.5) {
          ctx.beginPath();
          ctx.arc(px, finalY, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${alpha * 0.15})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(drawNebula);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove);

    resize();
    drawNebula();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default CinematicParticles;
