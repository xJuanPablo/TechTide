import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);