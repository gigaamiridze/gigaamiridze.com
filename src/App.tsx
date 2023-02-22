import React from "react";
import { ThemeProvider } from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { defaultTheme } from "./theme/defaultTheme";
// Importing Components
import GlobalStyles from "./assets/styles/Global"; 

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <GlobalStyles />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
