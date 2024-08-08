import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './reset.css'
import './variables.css'
import DessertProvider from './components/DessertProvider/DessertProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DessertProvider>
      <App />
    </DessertProvider>
  </StrictMode>,
)
