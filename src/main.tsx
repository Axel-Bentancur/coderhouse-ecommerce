import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/CartContext.tsx';

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
)
