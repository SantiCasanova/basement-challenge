import styles from './Cart.module.scss'
import CartItem from './CartItem'
import { CartState } from '../context/CartContext'
import { Product } from './interfaces/types';

interface Props {
  show: boolean,
  closeModal: React.MouseEventHandler<HTMLButtonElement>
}

function Cart({ show, closeModal }: Props) {
  const { state: { cart } } = CartState();
  if (!show) {
    return null
  }
  if (show) {
    return (
      <div className={styles.container}>
        <button className={styles.container__button} onClick={closeModal}>CLOSE</button>
        <div className={styles.container__title} onClick={e => e.stopPropagation()}>
          <span className={styles.your}>YOUR</span>
          <span className={styles.cart}>CART</span>
        </div>
        {cart.length > 0 ? cart.map((item: Product) => <CartItem key={item.id} title={item.title} id={item.id} price={item.price} image={item.image} size='S' quantity={item.quantity} />) : ''}
        <div className={styles.bottom}>
          <div className={styles.bottom__total}>
            <span>TOTAL:</span>
            <span>$37.50</span>
          </div>
          <button className={styles.bottom__button}>CHECKOUT</button>
        </div>
      </div>
    )
  }
}

export default Cart

