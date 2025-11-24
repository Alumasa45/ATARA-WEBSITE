import React, { useEffect, useRef } from 'react';

const SnowflakeCursor = ({ element }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrame = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;

    const targetElement = element || document.body;

    canvas.style.position = element ? 'absolute' : 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';

    targetElement.appendChild(canvas);
    canvasRef.current = canvas;

    const setCanvasSize = () => {
      canvas.width = element ? targetElement.clientWidth : window.innerWidth;
      canvas.height = element ? targetElement.clientHeight : window.innerHeight;
    };

    const addParticle = (x, y) => {
      particles.current.push(new Particle(x, y));
    };

    const onMouseMove = (e) => {
      const x = element ? e.clientX - targetElement.getBoundingClientRect().left : e.clientX;
      const y = element ? e.clientY - targetElement.getBoundingClientRect().top : e.clientY;
      addParticle(x, y);
    };

    const updateParticles = () => {
      if (!context || !canvas) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        particle.update(context);
        if (particle.lifeSpan < 0) {
          particles.current.splice(index, 1);
        }
      });
    };

    const animationLoop = () => {
      updateParticles();
      animationFrame.current = requestAnimationFrame(animationLoop);
    };

    const init = () => {
      setCanvasSize();
      targetElement.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', setCanvasSize);
      animationLoop();
    };

    const destroy = () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      targetElement.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', setCanvasSize);
    };

    init();
    return () => destroy();
  }, [element]);

  return null;
};

class Particle {
  constructor(x, y) {
    this.position = { x, y };
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: 1 + Math.random(),
    };
    this.lifeSpan = Math.floor(Math.random() * 60 + 80);
    this.initialLifeSpan = this.lifeSpan;
    this.size = Math.random() * 4 + 2;
  }

  update(context) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan--;

    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 300;

    const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
    const opacity = scale;

    context.save();
    context.globalAlpha = opacity;
    context.shadowColor = 'white';
    context.shadowBlur = 8;
    context.fillStyle = 'white';
    context.translate(this.position.x, this.position.y);
    context.scale(scale, scale);
    
    // Draw snowflake shape
    const size = this.size;
    context.lineWidth = 1;
    context.strokeStyle = 'white';
    
    // Main cross
    context.beginPath();
    context.moveTo(-size, 0);
    context.lineTo(size, 0);
    context.moveTo(0, -size);
    context.lineTo(0, size);
    
    // Diagonal lines
    context.moveTo(-size * 0.7, -size * 0.7);
    context.lineTo(size * 0.7, size * 0.7);
    context.moveTo(-size * 0.7, size * 0.7);
    context.lineTo(size * 0.7, -size * 0.7);
    
    // Small branches
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const x1 = Math.cos(angle) * size * 0.5;
      const y1 = Math.sin(angle) * size * 0.5;
      const x2 = Math.cos(angle + 0.5) * size * 0.3;
      const y2 = Math.sin(angle + 0.5) * size * 0.3;
      const x3 = Math.cos(angle - 0.5) * size * 0.3;
      const y3 = Math.sin(angle - 0.5) * size * 0.3;
      
      context.moveTo(x1, y1);
      context.lineTo(x1 + x2, y1 + y2);
      context.moveTo(x1, y1);
      context.lineTo(x1 + x3, y1 + y3);
    }
    
    context.stroke();
    context.restore();
  }
}

export default SnowflakeCursor;