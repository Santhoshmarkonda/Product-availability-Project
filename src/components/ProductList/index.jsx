import './index.css'
import ProductCard from '../ProductCard'
import {useState, useEffect} from 'react'

const ProductList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getProductsList = async () => {
      const url = 'https://dummyjson.com/products'
      const response = await fetch(url)
      const responseData = await response.json()

      setList(responseData.products)
    }

    getProductsList()
  }, [])

  return (
    <div className="products-container">
      {list.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}

export default ProductList