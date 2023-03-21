import React from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { GlobalStyles } from "./assets";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <HelmetProvider>
        <GlobalStyles />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Martian+Mono:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;