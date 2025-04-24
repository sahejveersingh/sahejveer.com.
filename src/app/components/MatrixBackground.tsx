'use client';

import React, { useRef, useEffect } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;

    // Full screen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const characters = katakana + latin + nums;
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Initialize drops (one per column)
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Semi-transparent black background for fading effect
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0'; // Green text
      context.font = fontSize + 'px monospace';

      let activeDrops = 0; // Keep track if any drops are still falling

      // Loop through columns
      for (let i = 0; i < drops.length; i++) {
        // Only draw and increment if the drop is still on screen
        if (drops[i] * fontSize <= canvas.height) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          context.fillText(text, i * fontSize, drops[i] * fontSize);
          drops[i]++;
          activeDrops++; // This drop is still active
        } else {
          // Optionally draw one last fading character slightly off screen?
          // Or just do nothing for this column once it's passed.
        }
        
        // Removed the random reset logic completely
      }
      
      // Continue animation as long as trails need to fade,
      // or potentially stop if activeDrops === 0 and trails are fully faded (more complex)
      animationFrameId = requestAnimationFrame(draw); 
    };

    draw();

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          // Recalculate columns and potentially reset drops if needed
          // For simplicity, we might just let it adjust on next paint here
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensure it's behind other content
        background: '#000' // Fallback background
      }}
    />
  );
};

export default MatrixBackground; 