import classes from './BasketShop.module.css'
import BasketItems from './BasketItems'

const BasketShop = () => {
  return (
    <section className={classes.basketpage}>
      <div>
        <div className={classes.title}>
          <p>Shopping Bag</p>
        </div>
        <div className={classes.line}></div>
      </div>
      <div>
        <BasketItems />
      </div>
    </section>
  )
}

export default BasketShop
