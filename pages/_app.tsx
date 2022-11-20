import type { AppProps } from "next/app";
import { BaseStyles, themeGet, ThemeProvider } from "@primer/react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${themeGet("colors.fg.default")};
    background-color: ${themeGet("colors.canvas.default")};
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <BaseStyles>
        <GlobalStyles />
        <Component {...pageProps} />
      </BaseStyles>
    </ThemeProvider>
  );
}
