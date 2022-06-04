import { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";

import styles from "./ThemeSwitcher.module.css";

// TODO:
// - Avoid "flash" by injecting script?
// - Save preference in local storage
const ThemeSwitcher = () => {
  const themeData = useContext(ThemeContext);

  const currentTheme = themeData?.currentTheme ?? "light";
  const setTheme = themeData?.setTheme ?? (() => {});

  return (
    <div className={styles.themeSwitcher}>
      <fieldset>
        <legend>Select a theme:</legend>
        <div>
          <input
            type="radio"
            id="theme-option-light"
            name="theme-select"
            value="light"
            checked={"light" === currentTheme}
            onChange={() => setTheme("light")}
          />
          <label htmlFor="theme-option-light">Light</label>
        </div>
        <div>
          <input
            type="radio"
            id="theme-option-dark"
            name="theme-select"
            value="dark"
            checked={"dark" === currentTheme}
            onChange={() => setTheme("dark")}
          />
          <label htmlFor="theme-option-dark">Dark</label>
        </div>
      </fieldset>
      <p>Current theme is: {currentTheme}. Isn&apos;t it pretty?? 😍</p>
    </div>
  );
};

export default ThemeSwitcher;
