import React, { useRef, useState, useEffect } from 'react';

const InteractiveAvatar = () => {
  const svgRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      const svgRect = svgRef.current.getBoundingClientRect();
      const svgCenterX = svgRect.left + svgRect.width / 2;
      const svgCenterY = svgRect.top + svgRect.height / 2;
      
      setMousePos({
        x: e.clientX - svgCenterX,
        y: e.clientY - svgCenterY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!leftEyeRef.current || !rightEyeRef.current) return;
    
    const maxMove = 10;
    const angle = Math.atan2(mousePos.y, mousePos.x);
    const distance = Math.min(Math.hypot(mousePos.x, mousePos.y) / 100, 1);
    
    const eyeX = Math.cos(angle) * maxMove * distance;
    const eyeY = Math.sin(angle) * maxMove * distance;

    leftEyeRef.current.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    rightEyeRef.current.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
  }, [mousePos]);

  return (
    <div className="w-64 h-64 md:w-96 md:h-96">
      <svg ref={svgRef} viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE0B2" />
            <stop offset="100%" stopColor="#FFCC80" />
          </linearGradient>
        </defs>
        
        {/* Face shape */}
        <path
          d="M200 350 
             C 280 350, 350 280, 350 200
             C 350 120, 280 50, 200 50
             C 120 50, 50 120, 50 200
             C 50 280, 120 350, 200 350"
          fill="url(#faceGradient)"
          stroke="#000000"
          strokeWidth="2"
        />
        
        {/* Eye sockets */}
        <ellipse cx="150" cy="180" rx="30" ry="25" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <ellipse cx="250" cy="180" rx="30" ry="25" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        
        {/* Animated eyes */}
        <g ref={leftEyeRef}>
          <circle cx="150" cy="180" r="15" fill="#FFFFFF" />
          <circle cx="150" cy="180" r="10" fill="#4B89DC" />
          <circle cx="150" cy="180" r="5" fill="#000000" />
          <circle cx="145" cy="175" r="3" fill="#FFFFFF" />
        </g>
        <g ref={rightEyeRef}>
          <circle cx="250" cy="180" r="15" fill="#FFFFFF" />
          <circle cx="250" cy="180" r="10" fill="#4B89DC" />
          <circle cx="250" cy="180" r="5" fill="#000000" />
          <circle cx="245" cy="175" r="3" fill="#FFFFFF" />
        </g>
        
        {/* Nose */}
        <path
          d="M200 200 
             C 205 220, 215 230, 200 240
             C 185 230, 195 220, 200 200"
          fill="#FFD0A1"
        />
        
        {/* Mouth */}
        <path
          d="M160 280 
             C 180 300, 220 300, 240 280"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default InteractiveAvatar;