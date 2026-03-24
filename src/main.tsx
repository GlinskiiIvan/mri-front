import { createRoot } from 'react-dom/client'
import './ui/reset.css'
import './ui/tokens.css'
import './ui/index.css'

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
)
