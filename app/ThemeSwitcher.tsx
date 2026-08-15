"use client";

import { useEffect, useState } from "react";

type Theme = "purple" | "green";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("purple");

  useEffect(() => {
    const active = document.documentElement.dataset.theme;
    if (active === "green" || active === "purple") setTheme(active);
  }, []);

  function selectTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("ivan-portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      <button
        type="button"
        className={theme === "purple" ? "active" : ""}
        aria-pressed={theme === "purple"}
        onClick={() => selectTheme("purple")}
      >
        <span className="theme-swatch purple" aria-hidden="true" />
        <span className="theme-label">Purple</span>
      </button>
      <button
        type="button"
        className={theme === "green" ? "active" : ""}
        aria-pressed={theme === "green"}
        onClick={() => selectTheme("green")}
      >
        <span className="theme-swatch green" aria-hidden="true" />
        <span className="theme-label">Green</span>
      </button>
    </div>
  );
}
