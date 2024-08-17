"use client";
import { createContext, useEffect, useState } from "react";
import Theme from "../components/Theme";



export const ThemeContext = createContext();
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });


  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // function to toggle the dark mode button
  const toggle=()=>{
    setTheme(theme === "dark" ? "light" :"dark")
  }

  return (
    //if we wrap themeContext.provider we can use themeState and themeToggle every where
    <ThemeContext.Provider value={{ theme ,toggle}}>
      {children}
    </ThemeContext.Provider>
  );
};
