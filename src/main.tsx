import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
//Context
import { CartProvider } from './context/CartContext.tsx';

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>,
  </BrowserRouter>
)
