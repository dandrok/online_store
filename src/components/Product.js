import React from 'react'
// import pen from './KroneApollo-e1571972772455.png';
import classes from './Product.module.css'

const Product = (props) => {
  return (
    <div className={classes.product}>
      <img
        src={props.image}
        alt={props.name}
        className={classes.product__img}
      />
      <h4 className={classes.product__title}>{props.name}</h4>
      <h3>{props.price}</h3>
    </div>
  )
}

export default Product
