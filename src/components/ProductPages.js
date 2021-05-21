import classes from './ProductPages.module.css'
import {
  FaPlusSquare,
  FaMinusSquare,
  FaCartPlus,
  FaAngleDown,
} from 'react-icons/fa'
import placeholderimg from '../images/KroneApollo-e1571972772455.png'

const ProductPages = (props) => {
  return (
    <section className={classes.productpage}>
      <div className={classes.productpage__left}>
        <div className={classes.left__img}>
          <img
            src={placeholderimg}
            alt={placeholderimg}
            className={classes.__img}
          />
        </div>
        <div className={classes.productpage__desc}>
          <div className={classes.desc__}>
            <h5 className={classes.left__desc}>DESCRIPTION</h5>
            <FaAngleDown />
          </div>
          <div className={classes.left__line}></div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              alias, omnis aspernatur ipsa esse ipsum nam porro quo at
              blanditiis molestias officia odio maxime vero nisi quasi vitae
              illum consequuntur.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.productpage__right}>
        <div>
          <h5>NAME</h5>
        </div>
        <div>
          <h3>PRICE</h3>
        </div>
        <div>
          <h5>COLOR</h5>
          <div className={classes.color__border}>
            <div></div>
          </div>
        </div>
        <div className={classes.plusminus}>
          <button className={classes.btn__} type='button' name='button'>
            <FaMinusSquare />
          </button>
          <input type='text' name='name' value='1' />
          <button className={classes.btn__} type='button' name='button'>
            <FaPlusSquare />
          </button>
        </div>
        <div>
          <button className={classes.btn__cart}>
            <span>
              <FaCartPlus />
            </span>{' '}
            ADD TO BAG
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductPages
