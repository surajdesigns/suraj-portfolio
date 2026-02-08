"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);

    // Hover detection (SAFE VERSION)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target) return;

      if (
        target.closest("a, button, input, textarea, [role='button']")
      ) {
        setIsHovering(true);

        if (target.dataset.cursorText) {
          setCursorText(target.dataset.cursorText);
        } else if (target.closest("a")) {
          setCursorText("View");
        } else if (target.closest("button")) {
          setCursorText("Click");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [moveCursor]);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/50 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          backgroundColor: isHovering
            ? "rgba(124, 58, 237, 0.1)"
            : "transparent",
          borderColor: isHovering
            ? "rgba(124, 58, 237, 0.5)"
            : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ duration: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-medium text-white uppercase tracking-wider"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
