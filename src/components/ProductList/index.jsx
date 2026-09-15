import {useEffect, useState} from 'react'
import ProductCard from '../ProductCard'
import './index.css'

const ProductList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getProductsList = async () => {
      const url = 'https://fakestoreapi.com/products'

      const response = await fetch(url)
      const responseData = await response.json()

      setList(responseData)
    }

    getProductsList()
  }, [])

  return (
    <div className="product-list">
      {list.map(item => (
        <ProductCard
          key={item.id}
          value={item}
        />
      ))}
    </div>
  )
}

export default ProductList
