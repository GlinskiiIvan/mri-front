import { createRoot } from 'react-dom/client'
import './ui/reset.css'
import './ui/tokens.css'
import './ui/index.css'

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </Provider>
)
