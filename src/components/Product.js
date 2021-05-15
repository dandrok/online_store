import React from 'react';
import pen from './KroneApollo-e1571972772455.png';
import classes from './Product.module.css';

const Product = () => {
  return (
    <div className={classes.product}>
      <img src={pen} alt="pen" className={classes.product__img} />
      <h4 className={classes.product__title}>Nice Pen</h4>
      <h3>39.99 EUR</h3>
    </div>
  );
};

export default Product;
