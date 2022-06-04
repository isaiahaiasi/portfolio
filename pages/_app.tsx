import "../styles/design_tokens.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import Layout from "../components/Layout/Layout";
import { ThemeContextProvider } from "../components/ThemeSwitcher/ThemeContextProvider";

const themes = {
  light: "light",
  dark: "dark",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider defaultTheme="dark" themes={themes}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
