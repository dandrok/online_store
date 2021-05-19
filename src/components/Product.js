import React from 'react'
// import pen from './KroneApollo-e1571972772455.png';
import classes from './Product.module.css'
import { FaCartPlus } from 'react-icons/fa'

const Product = (props) => {
  return (
    <section>
      <div className={classes.product}>
        <div>
          <img
            src={props.image}
            alt={props.name}
            className={classes.product__img}
          />
        </div>
        <h4 className={classes.product__title}>{props.name}</h4>
        <h3>{props.price}</h3>
        <div className={classes.product__icon}>
          <FaCartPlus className={classes.product__icon_cart} />
        </div>
      </div>
    </section>
  )
}
export default Product
