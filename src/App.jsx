import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";
import ItemDetail from "./components/ItemDetail";
import ErrorPage from "./pages/ErrorPage";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/AddToCart";
import { SelectedItemsProvider } from "./components/SelectedItemsContext";
function App() {
  return (
    <CartProvider>
      <SelectedItemsProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Collections />} />
              <Route path="collections/:category" element={<Collections />} />
              <Route
                path="/men"
                element={<Collections category="Men Clothes" />}
              />
              <Route
                path="/women"
                element={<Collections category="Women Clothes" />}
              />
              <Route
                path="/children"
                element={<Collections category="Children Clothes" />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/items/:itemId" element={<ItemDetail />} />
              <Route path="/checkout/:itemId" element={<Checkout />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SelectedItemsProvider>
    </CartProvider>
  );
}

export default App;
