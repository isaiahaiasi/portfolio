import { useThemeSwitcher } from "../../hooks/useThemeSwitcher";

// TODO:
// - Create a contextProvider for the themeSwitcher hook at the top level
// - Avoid "flash" by injecting script?

const ThemeSwitcher = () => {
  const { setTheme, currentTheme, themes } = useThemeSwitcher();

  return (
    <div>
      <button onClick={() => setTheme("dark")}>🌘</button>
      <button onClick={() => setTheme("light")}>🌞</button>
      <p>Current theme is: {themes[themes.indexOf(currentTheme)]}. Isn&apos;t it pretty?? 😍</p>
    </div>
  );
}

export default ThemeSwitcher;