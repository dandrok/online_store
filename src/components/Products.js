import classes from './Products.module.css'

import { useState, useEffect } from 'react'

import Product from './Product'
import Titles from './Titles'

const Products = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedProduct, setLoadedProduct] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://products-react-project-default-rtdb.europe-west1.firebasedatabase.app/products.json'
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const products = []

        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          }

          products.push(product)
        }

        setIsLoading(false)
        setLoadedProduct(products)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    )
  }

  return (
    <div className={classes.products}>
      <Titles />
      <section className={classes.section}>
        {loadedProduct.map((prd) => (
          <Product
            key={prd.id}
            id={prd.id}
            color={prd.color}
            description={prd.description}
            name={prd.name}
            price={prd.price}
            image={prd.image}
          />
        ))}
      </section>
    </div>
  )
}

export default Products
