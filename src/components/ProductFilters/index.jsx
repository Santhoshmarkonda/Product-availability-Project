import "./index.css";

const ProductFilters = ({
  list,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}) => {
  const categories = [];

  list.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  return (
    <div className="product-filters">

      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />

      <select
        value={selectedCategory}
        onChange={(event) =>
          setSelectedCategory(event.target.value)
        }
      >
        <option value="all">All Categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(event) =>
          setSortBy(event.target.value)
        }
      >
        <option value="default">Sort By</option>
        <option value="price-low">
          Price: Low to High
        </option>
        <option value="price-high">
          Price: High to Low
        </option>
        <option value="name-az">
          Name: A-Z
        </option>
        <option value="name-za">
          Name: Z-A
        </option>
      </select>

    </div>
  );
};

export default ProductFilters;