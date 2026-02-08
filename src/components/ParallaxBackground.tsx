"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [shapes] = useState<FloatingShape[]>([
    { id: 1, x: 10, y: 20, size: 300, color: "rgba(124, 58, 237, 0.15)", delay: 0 },
    { id: 2, x: 70, y: 60, size: 250, color: "rgba(6, 182, 212, 0.12)", delay: 0.5 },
    { id: 3, x: 30, y: 70, size: 200, color: "rgba(124, 58, 237, 0.1)", delay: 1 },
    { id: 4, x: 80, y: 10, size: 180, color: "rgba(6, 182, 212, 0.08)", delay: 1.5 },
    { id: 5, x: 50, y: 40, size: 150, color: "rgba(124, 58, 237, 0.08)", delay: 2 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at ${50 + mousePosition.x * 10}% ${-20 + mousePosition.y * 10}%, rgba(124, 58, 237, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at ${80 + mousePosition.x * 5}% ${60 + mousePosition.y * 5}%, rgba(6, 182, 212, 0.1), transparent),
            radial-gradient(ellipse 50% 30% at ${20 + mousePosition.x * 8}% ${80 + mousePosition.y * 8}%, rgba(124, 58, 237, 0.1), transparent)
          `,
        }}
      />

      {/* Floating Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="floating-shape pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x * (30 + shape.id * 10),
            y: mousePosition.y * (30 + shape.id * 10),
          }}
          transition={{
            duration: 0.8,
            delay: shape.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            background: shape.color,
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>  
      </div>
    </div>
  );
}
