import styles from './Cart.module.scss'
import CartItem from './CartItem'

interface Props {
  show: boolean,
  closeModal: React.MouseEventHandler<HTMLButtonElement>
}

function Cart({ show, closeModal }: Props) {
  if (!show) {
    return null
  }
  return (
    <div className={styles.container}>
      <button className={styles.container__button} onClick={closeModal}>CLOSE</button>
      <div className={styles.container__title} onClick={e => e.stopPropagation()}>
        <span className={styles.your}>YOUR</span>
        <span className={styles.cart}>CART</span>
      </div>
      <CartItem />
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

export default Cart

