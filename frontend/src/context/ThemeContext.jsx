// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const tokens = {
    colors: {
      primary: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
      surface:
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white",
      neutral: "text-gray-700",
      hover: "hover:text-indigo-600",
    },
    typography: {
      brand: "text-4xl font-bold",
      link: "font-medium",
    },
    spacing: {
      container: "px-4 sm:px-6 lg:px-8",
      gap: "space-x-6",
    },
    radius: {
      md: "rounded-md",
    },
    shadow: {
      md: "shadow-md",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, tokens }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
