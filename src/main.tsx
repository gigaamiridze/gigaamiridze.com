import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { defaultTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { MenuContextProvider } from "./contexts";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)