import React, { useState, useEffect } from "react";

const TechCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePos = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");
      setIsHovering(!!isClickable);
    };
    window.addEventListener("mousemove", updatePos);
    return () => window.removeEventListener("mousemove", updatePos);
  }, []);

  return (
    <>
      <div
        className={`hidden md:block fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out mix-blend-screen ${isHovering ? "scale-150 bg-blue-500/20 border-purple-400" : "scale-100 border-blue-500/50"}`}
        style={{ transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)` }}
      />
      <div
        className={`hidden md:block fixed top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-[9999] transition-all duration-75 ease-out`}
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
      />
    </>
  );
};

export default TechCursor;
