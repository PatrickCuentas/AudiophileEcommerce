import ReactDOM from "react-dom/client";

import { CartProvider } from "./context/CartContext.jsx";
import { NavbarProvider } from "./context/NavbarContext.jsx";

import App from "./App";

import "./index.css";
import "animate.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <NavbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavbarProvider>
  </CartProvider>
);
