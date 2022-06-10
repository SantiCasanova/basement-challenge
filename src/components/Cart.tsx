import styles from './Cart.module.scss'
import CartItem from './CartItem'

function Cart() {
  return (
    <div className={styles.container}>
      <button className={styles.container__button}>CLOSE</button>
      <div className={styles.container__title}>
        <span className={styles.your}>YOUR</span>
        <span className={styles.cart}>CART</span>
      </div>
      <CartItem />
    </div>
  )
}

export default Cart