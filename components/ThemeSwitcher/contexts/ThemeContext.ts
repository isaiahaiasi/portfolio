import { createContext } from "react";
import { useThemeSwitcher } from "../../../hooks/useThemeSwitcher";

export type ThemeContextValue = ReturnType<typeof useThemeSwitcher>;

const ThemeContext = createContext<ThemeContextValue|null>(null);

export default ThemeContext;
