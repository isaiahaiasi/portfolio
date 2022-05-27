import { useEffect, useState } from "react";

// NOTE:
// This is the *Minimum Viable* theme changing component.
// A more robust system would be something like: https://github.com/pacocoursey/next-themes
// Which would involve a hook and a provider,
// which any UI component for changing themes could easily consume.

interface Props {
  themes: string[];
}
const ThemeSwitcher = ({themes}:Props) => {
  const [themeIndex, setThemeIndex] = useState(0);

  // step through to the next theme in the given themes array
  const incrementTheme = () => {
    setThemeIndex(prevIndex => ++prevIndex % themes.length);
  }

  useEffect(() => {
    const root = document.body;
    root.setAttribute("data-theme", themes[themeIndex]);
  }, [themeIndex, themes]);

  return (
    <div>
      <button onClick={incrementTheme}>Change theme!</button>
      <p>Current theme is: {themes[themeIndex]}. Isn&apos;t it pretty?? 😍</p>
    </div>
  );
}

export default ThemeSwitcher;