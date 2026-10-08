import Header from "./components/Header";
import ProductFilters from "./components/ProductFilters";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const filteredList = list.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || item.category === selectedCategory),
  );

  useEffect(() => {
    const getProductsList = async () => {
      const url = "https://dummyjson.com/products";
      const response = await fetch(url);
      const responseData = await response.json();

      setList(responseData.products);
    };

    getProductsList();
  }, []);

  return (
    <>
      <Header />

      <main id="home">
        <section id="search">
          <ProductFilters
            list={list}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>

        <section id="products">
          <ProductList list={filteredList} setCart={setCart}/>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
