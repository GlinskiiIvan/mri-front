import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/reset.css'
import './ui/tokens.css'
import './ui/index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
