import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Products from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;