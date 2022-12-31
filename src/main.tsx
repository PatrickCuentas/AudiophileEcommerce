import ReactDOM from 'react-dom/client';

import { CartProvider } from 'lib/context/CartContext';
import { NavbarProvider } from 'lib/context/NavbarContext';
import { Toaster } from 'react-hot-toast';

import App from './App';

import './index.css';
import 'animate.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <NavbarProvider>
      <Router>
        <App />
        <Toaster />
      </Router>
    </NavbarProvider>
  </CartProvider>
);
