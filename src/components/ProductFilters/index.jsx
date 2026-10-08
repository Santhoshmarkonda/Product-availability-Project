import "./index.css";

const ProductFilters = ({
  list,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) => {
  const uniqueCategories = new Set();

  for (let product of list) {
    uniqueCategories.add(product.category);
  }

  const categories = [...uniqueCategories];

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="product-filters">
      <div className="search-bar">
        <img
          className="search-icon"
          src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
          alt="search"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search for products..."
        />
      </div>

      <div className="category-list">
        <select value={selectedCategory} onChange={onCategoryChange}>
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
