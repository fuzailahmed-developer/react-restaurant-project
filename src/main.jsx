import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/userContext.jsx'
import { CartInfoProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <CartInfoProvider>
        <App />
      </CartInfoProvider>
    </ContextProvider>
  </BrowserRouter>
)
