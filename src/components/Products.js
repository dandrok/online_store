import classes from './Products.module.css'

import { useState, useEffect } from 'react'

import Product from './Product'

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
      <div>
        <div className={classes.title}>
          <p>Products</p>
        </div>
        <div className={classes.line}></div>
      </div>
      <section className={classes.section}>
        {loadedProduct.map((prdk) => (
          <Product
            key={prdk.id}
            id={prdk.id}
            color={prdk.color}
            description={prdk.description}
            name={prdk.name}
            price={prdk.price}
            image={prdk.image}
          />
        ))}
      </section>
    </div>
  )
}

export default Products
