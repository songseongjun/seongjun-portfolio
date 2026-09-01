"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return <div className="w-14 h-7" />;
  }

  return (
      <button
          onClick={toggle}
          className="relative w-14 h-7 rounded-full transition-colors duration-300 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          aria-label="Toggle theme"
      >
        <div
            className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-transform duration-300 bg-white dark:bg-neutral-900 shadow-sm ${
                dark ? "translate-x-7" : ""
            }`}
        />
      </button>
  );
}