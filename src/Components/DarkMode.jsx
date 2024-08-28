import React, { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function DarkMode() {
  // Initialize theme state
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" || !("theme" in localStorage) ? "dark" : "light"
  );

  // Apply theme on mount and when theme state changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle theme and update localStorage
  function handleClick() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.theme = newTheme;
  }

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <div className="ml-4 text-2xl">
        {theme === "light" ? <MdDarkMode /> : <MdOutlineDarkMode />}
      </div>
    </div>
  );
}

export default DarkMode;
