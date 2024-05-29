import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { CartProvider } from "./components/AddToCart";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
