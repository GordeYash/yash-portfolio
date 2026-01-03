"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring settings make the dot "lag" behind the cursor smoothly
  const springConfig = { damping: 25, stiffness: 250 };
  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX - 6); // Center the 12px dot
      dotY.set(e.clientY - 6);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [dotX, dotY]);

  return (
    <motion.div
      style={{
        x: dotX,
        y: dotY,
      }}
      className="fixed top-0 left-0 w-3 h-3 bg-indigo-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}