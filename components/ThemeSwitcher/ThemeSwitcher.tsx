import { useThemeSwitcher } from "../../hooks/useThemeSwitcher";

// TODO:
// - Create a contextProvider for the themeSwitcher hook at the top level
// - Avoid "flash" by injecting script?
// - Save preference in local storage
const ThemeSwitcher = () => {
  const { setTheme, currentTheme, themes } = useThemeSwitcher();

  return (
    <div>
      <fieldset>
        <legend>Select a theme:</legend>
        <div>
          <input
            type="radio"
            id="theme-option-light"
            name="theme-select"
            value="light"
            checked={"light"===currentTheme}
            onSelect={() => setTheme("light")}
          />
          <label htmlFor="theme-option-light">Light</label>
        </div>
        <div>
          <input
            type="radio"
            id="theme-option-dark"
            name="theme-select"
            value="dark"
            checked={"dark"===currentTheme}
            onSelect={() => setTheme("dark")}
          />
          <label htmlFor="theme-option-dark">Dark</label>
        </div>
      </fieldset>
      <p>Current theme is: {themes[themes.indexOf(currentTheme)]}. Isn&apos;t it pretty?? 😍</p>
    </div>
  );
}

export default ThemeSwitcher;
