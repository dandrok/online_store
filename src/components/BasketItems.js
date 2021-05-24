import classes from './BasketItems.module.css'
import placeholderimgn from '../images/KroneApollo-e1571972772455.png'
const BasketItems = () => {
  return (
    <div>
      <div>
        <p>product details</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
      </div>
      <div>
        <div>
          <img src={placeholderimgn} alt={placeholderimgn} />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default BasketItems
