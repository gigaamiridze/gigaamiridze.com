import React from "react";
import { ThemeProvider } from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { defaultTheme } from "./theme/defaultTheme";
// Importing Components
import { GlobalStyles } from "./assets";
import { Portfolio } from "./layouts";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <GlobalStyles />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Martian+Mono:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        <Portfolio />
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
