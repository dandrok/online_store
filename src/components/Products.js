import classes from './Products.module.css';

import { useState } from 'react';

import Product from './Product';
import Titles from './Titles';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  fetch(
    'https://products-react-project-default-rtdb.europe-west1.firebasedatabase.app/products.json'
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
    });

  if (isLoading) {
    return;
  }

  return (
    <div className={classes.products}>
      <Titles />
      <section className={classes.section}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
};

export default Products;
