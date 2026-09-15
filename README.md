# 🛍️ Product Availability

A responsive React.js application that displays products fetched from the **Fake Store API** and demonstrates different product availability states using conditional rendering.

The project was built as part of a React assignment to practice **state management, API integration, conditional rendering, reusable components, and responsive UI design**.

---

## 🚀 Live Demo

🔗 **Live Demo:** https://github.com/Santhoshmarkonda/Product-availability-Project.git

---

## 📸 Screenshots

### Product Listing

Add your project screenshot here:

```text
![Product Availability](./screenshots/product-availability.png)
```

---

## ✨ Features

* 📦 Fetch products from an external REST API
* 🔍 Search products
* 🏷️ Display product categories
* 💰 Display product prices
* ⭐ Display product ratings and review counts
* 🟢 In Stock status
* 🟠 Low Stock status
* 🔴 Out of Stock status
* ⏳ Loading state
* ❌ Error state
* 📭 Empty state
* 📱 Responsive design
* ♻️ Reusable React components
* 🎯 Conditional rendering using React

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **REST API**
* **Vite**

---

## 🔗 API

This project uses the Fake Store API to retrieve product information.

**API Endpoint:**

```text
https://fakestoreapi.com/products
```

The API provides information such as:

* Product ID
* Product title
* Product price
* Product category
* Product image
* Product rating
* Review count

---

## 📂 Project Structure

```text
product-availability/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── Header/
│   │   │   ├── index.jsx
│   │   │   └── index.css
│   │   │
│   │   ├── ProductList/
│   │   │   ├── index.jsx
│   │   │   └── index.css
│   │   │
│   │   └── ProductCard/
│   │       ├── index.jsx
│   │       └── index.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Component Structure

```text
App
│
├── Header
│
└── ProductList
      │
      └── ProductCard
```

### Header

Responsible for:

* Application title
* Search input
* Add New Product button

### ProductList

Responsible for:

* Fetching product data from the API
* Managing product state
* Rendering the list of products
* Handling conditional states

### ProductCard

Responsible for displaying:

* Product image
* Product title
* Category
* Price
* Rating
* Review count
* Availability status

---

## 🔄 Application Flow

```text
User opens application
        ↓
ProductList component loads
        ↓
API request is sent
        ↓
┌───────────────┐
│ API Response  │
└───────┬───────┘
        │
   ┌────┴─────┐
   ↓          ↓
Success      Error
   │
   ↓
Products available?
   │
 ┌─┴─────────┐
 ↓           ↓
Yes          No
 ↓           ↓
Products   Empty State
 ↓
Product Cards
```

---

## 🎯 Conditional Rendering

The application demonstrates multiple React conditional rendering techniques.

### Ternary Operator

Used to display different UI states:

```jsx
{loading ? (
  <LoadingState />
) : error ? (
  <ErrorMessage />
) : products.length === 0 ? (
  <EmptyState />
) : (
  <ProductList />
)}
```

### Logical AND (`&&`)

Used when content should only appear under a specific condition:

```jsx
{product.stock > 0 && (
  <p>Items available</p>
)}
```

### If Statements

Used for availability conditions:

```jsx
if (stock === 0) {
  return <OutOfStock />
}

if (stock <= 5) {
  return <LowStock />
}

return <InStock />
```

---

## 📊 Product Availability

Products are displayed with different availability badges:

| Stock Status | Badge           |
| ------------ | --------------- |
| More than 5  | 🟢 In Stock     |
| 1–5 items    | 🟠 Low Stock    |
| 0 items      | 🔴 Out of Stock |

> **Note:** The Fake Store API does not provide a stock field by default, so availability logic is handled within the application.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd product-availability
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

---

## 🧪 Testing the Application

Test the following scenarios:

### 1. Success State

Open the application and verify that products are displayed.

### 2. Loading State

Verify that the loading UI appears while products are being fetched.

### 3. Empty State

Search for a product that does not exist.

Example:

```text
xyz123
```

Expected result:

```text
No Products Found
```

### 4. Error State

Test the application with an invalid API request or network failure.

Expected result:

```text
Something went wrong. Please try again.
```

### 5. Stock States

Verify that products display the appropriate availability badge.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Desktop

```text
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Product │ │ Product │ │ Product │
└─────────┘ └─────────┘ └─────────┘
```

### Mobile

```text
┌───────────────┐
│    Product    │
└───────────────┘
┌───────────────┐
│    Product    │
└───────────────┘
```

---

## 📚 Learning Objectives

Through this project, I practiced:

* React functional components
* `useState`
* `useEffect`
* API integration using `fetch()`
* Asynchronous JavaScript
* Conditional rendering
* Ternary operators
* Logical `&&`
* `if/else` conditions
* Props
* Component reusability
* Array `map()`
* Search and filtering
* Error handling
* Responsive CSS

---

## 🔮 Future Improvements

Some possible enhancements:

* Add new products dynamically
* Edit existing products
* Delete products
* Sort products by price
* Filter products by category
* Add pagination
* Add product details page
* Add shopping cart functionality
* Add authentication
* Connect to a custom backend API

---

## 👨‍💻 Author

**Santhosh**

Computer Science Engineering Graduate
Java Backend & React Developer

### GitHub

Add your GitHub profile URL here.

### LinkedIn

Add your LinkedIn profile URL here.

---

## ⭐ Acknowledgements

* [Fake Store API](https://fakestoreapi.com/) for providing product data.
* React.js for the frontend framework.
* Vite for the development environment.

---

## 📄 License

This project is created for **educational and learning purposes**.
