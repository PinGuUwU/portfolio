import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TemaProvider } from './contexts/TemaContext.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemaProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </TemaProvider>
  </StrictMode>,
)
