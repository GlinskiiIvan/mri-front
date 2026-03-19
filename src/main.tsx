import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/reset.css'
import './ui/tokens.css'
import './ui/index.css'
import App from './App'
import BuutonsPage from './pages/BuutonsPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <BuutonsPage />
  </StrictMode>,
)
