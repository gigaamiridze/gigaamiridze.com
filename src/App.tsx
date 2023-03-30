import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets";
import { defaultTheme } from "./theme";
import { router } from "./routes";
import { AnimatedCursor, PreLoader } from "./layouts";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      {loading
        ? <PreLoader />
        : <RouterProvider router={router} />
      }
      <HelmetProvider>
        <GlobalStyles />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Martian+Mono:wght@200;300;400;500;600;700&family=Courgette&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
        </Helmet>
      </HelmetProvider>
      <AnimatedCursor />
    </ThemeProvider>
  )
}

export default App;