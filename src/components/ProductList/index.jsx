import { useEffect, useState } from "react";

import ProductFilters from "../ProductFilters";
import ProductCard from "../ProductCard";

import "./index.css";

const ProductList = () => {
  const [list, setList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        const data = await response.json();

        setList(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const filteredList = list
    .filter((product) =>
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategory === "all" ||
        product.category === selectedCategory
    );

  if (sortBy === "price-low") {
    filteredList.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    filteredList.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "name-az") {
    filteredList.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortBy === "name-za") {
    filteredList.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  return (
    <div>
      <ProductFilters
        list={list}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="products-container">
        {filteredList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;