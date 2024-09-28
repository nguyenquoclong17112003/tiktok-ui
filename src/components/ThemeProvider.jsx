import React, { useState, createContext } from "react";

const themeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    handleTheme,
  };

  return (
    <div>
      <themeContext.Provider value={value}>{children}</themeContext.Provider>
    </div>
  );
}

export { ThemeProvider, themeContext };
