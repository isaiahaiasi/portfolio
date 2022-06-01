import { useEffect, useState } from "react";
import { ValueOf } from "../utils/utils";

// I GIVE UP!!!
// JUST GOING TO MAKE IT TAKE AN OBJECT!!
// AND PRETEND IT'S AN ENUM!!
// BECAUSE TS ENUMS SUCK!!!!

export function useThemeSwitcher<ThemeSet extends Record<string,string>>(themes: ThemeSet, initialValue:ValueOf<ThemeSet>) {
  type Theme = ValueOf<ThemeSet>;

  const [currentTheme, setTheme] = useState<Theme>(initialValue);

  // On mount, attempt to set default theme based on system preference.
  // Only works for "dark" and "light".
  useEffect(() => {
    console.log("this isn't running every time, is it?")
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const systemDefaultTheme = darkThemeMq.matches ? "dark" : "light";

    if (Object.values(themes).includes(systemDefaultTheme)) {
      setTheme(systemDefaultTheme as Theme);
    }
  }, [themes]);

  // Apply data-theme property to root element/body.
  useEffect(() => {
    const root = document.body;
    root.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return {
    themes,
    currentTheme,
    setTheme,
  }
}
