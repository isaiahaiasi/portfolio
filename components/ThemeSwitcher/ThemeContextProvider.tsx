import React from 'react'
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher'
import ThemeContext from './contexts/ThemeContext';

// TODO: defaultTheme should be constrained by values of themes object
interface Props {
  children: React.ReactNode;
  themes?: Record<string, string>;
  defaultTheme: string;
}

const defaultThemes = {
  dark: "dark",
  light: "light",
}

export const ThemeContextProvider = ({
  themes = defaultThemes,
  defaultTheme,
  children
}:Props) => {
  const themeData = useThemeSwitcher(themes, defaultTheme);

  return (
   <ThemeContext.Provider value={themeData}>
     {children}
   </ThemeContext.Provider>
  )
}
