import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TemaProvider } from './contexts/TemaContext.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import ReactGA from "react-ga4";

// Inicializa con tu ID de medición
ReactGA.initialize("G-RHQKSE1DV4");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemaProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </TemaProvider>
  </StrictMode>,
)
