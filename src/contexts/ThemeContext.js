import React, { createContext, useState, useEffect, useMemo } from "react";

// Define your theme properties for a more robust system
const themes = {
  light: {
    background: "#FFFFFF",
    text: "#1F2937",
    primary: "#3B82F6",
    secondary: "#6B7280",
    accent: "#10B981",
    // ... other properties like fonts, spacing
  },
  dark: {
    background: "#111827",
    text: "#F9FAFB",
    primary: "#60A5FA",
    secondary: "#9CA3AF",
    accent: "#34D399",
    // ...
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Ensure saved theme is valid, otherwise default to 'light'
    return savedTheme && themes[savedTheme] ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", themeName);
    const currentTheme = themes[themeName];
    const root = document.documentElement;

    // Apply theme as CSS variables to the root element
    Object.keys(currentTheme).forEach((key) => {
      root.style.setProperty(`--color-${key}`, currentTheme[key]);
    });

    // For compatibility with utility-class frameworks like TailwindCSS
    if (themeName === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const value = useMemo(
    () => ({
      theme: themes[themeName], // Pass the full theme object
      toggleTheme,
    }),
    [themeName],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
