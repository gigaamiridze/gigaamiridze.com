import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";
// Importing Components
import GlobalStyles from "./assets/styles/Global"; 

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;
