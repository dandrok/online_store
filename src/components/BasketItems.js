import classes from './BasketItems.module.css'
import placeholderimgn from '../images/KroneApollo-e1571972772455.png'
import {
  FaPlusSquare,
  FaMinusSquare,
  FaCartPlus,
  FaAngleDown,
} from 'react-icons/fa'
import classesTwo from './ProductPages.module.css'

const BasketItems = () => {
  return (
    <div className={classes.main_ctnr}>
      <div className={classes.table__}>
        <p>product details</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
      </div>
      <div className={classes.table__}>
        <div className={classes.image__}>
          <img src={placeholderimgn} alt='' className={classes.image__img} />
        </div>
        <div>
          <h5>77 EUR</h5>
        </div>
        <div>
          <div className={classesTwo.plusminus}>
            <button className={classesTwo.btn__} type='button' name='button'>
              <FaMinusSquare />
            </button>
            <input type='text' name='name' value='1' />
            <button className={classesTwo.btn__} type='button' name='button'>
              <FaPlusSquare />
            </button>
          </div>
        </div>
        <div>
          <h5>77 EUR</h5>
        </div>
      </div>
    </div>
  )
}

export default BasketItems
