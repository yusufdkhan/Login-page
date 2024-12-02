import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [formData, setFormData] = useState();

  let handleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        handleMode,
        mode,
        formData,
        setFormData,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
