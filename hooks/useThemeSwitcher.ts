import { useCallback, useEffect, useState } from "react";

const themes = ["light", "dark"] as const;
type Theme = typeof themes[number];

export function useThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = useCallback((newTheme: Theme) => {
    if (themes.indexOf(newTheme) > -1) {
      setCurrentTheme(newTheme);
      return 0;
    } else {
      console.error(`Could not set unknown theme ${newTheme}`);
      return 1;
    }
  }, [setCurrentTheme]);

  // On mount, attempt to set default theme based on system preference.
  // Only works for "dark" and "light".
  useEffect(() => {
    console.log("this isn't running every time, is it?")
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const systemDefaultTheme = darkThemeMq.matches ? "dark" : "light";
    setTheme(systemDefaultTheme);
  }, [setTheme]);

  // Apply data-theme property to root element/body.
  useEffect(() => {
    const root = document.body;
    root.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return {
    themes,
    currentTheme,
    setTheme
  }
}
