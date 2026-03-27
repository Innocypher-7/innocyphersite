import React, { useState, useEffect, useRef } from "react";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-y-0 translate-x-0 scale-100 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-12 scale-95 opacity-0";
      case "down":
        return "-translate-y-12 scale-95 opacity-0";
      case "left":
        return "translate-x-12 scale-95 opacity-0";
      case "right":
        return "-translate-x-12 scale-95 opacity-0";
      default:
        return "translate-y-12 scale-95 opacity-0";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
