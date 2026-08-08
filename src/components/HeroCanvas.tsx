import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system for drifting soft glowing particles
    interface Particle {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedY: number;
      speedX: number;
      pulseSpeed: number;
    }

    const particleCount = 28;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.4 + 0.15,
        speedY: -(Math.random() * 0.35 + 0.1),
        speedX: (Math.random() - 0.5) * 0.15,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Render drifting particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(time + p.y * 0.005) * 0.2;
        p.alpha += Math.sin(time * 2) * 0.002;

        // Reset particle when it floats past top
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Soft mauve and nude glowing tint
        ctx.fillStyle = `rgba(185, 135, 147, ${Math.max(0.1, Math.min(0.6, p.alpha))})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(243, 230, 223, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Soft shifting background mesh gradient */}
      <div className="absolute inset-0 animate-mesh-gradient opacity-90" />

      {/* Floating Organic Soft Shapes in the background */}
      <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-[#F3E6DF]/50 to-[#B98793]/15 blur-3xl animate-float-slow" />
      <div 
        className="absolute bottom-[0%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-[#A8B8A5]/20 via-[#F3E6DF]/40 to-[#FCF9F6] blur-3xl animate-float-slow" 
        style={{ animationDelay: '-4s' }} 
      />

      {/* Delicate moving light flare */}
      <div className="absolute inset-0 opacity-30 animate-light-flare pointer-events-none">
        <div className="w-[120%] h-32 bg-gradient-to-r from-transparent via-[#FCF9F6] to-transparent blur-2xl transform -rotate-45" />
      </div>

      {/* Particle Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
