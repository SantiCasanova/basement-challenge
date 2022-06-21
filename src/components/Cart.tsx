import styles from './Cart.module.scss'
import CartItem from './CartItem'
import { CartState } from '../context/CartContext'
import { Product } from './interfaces/types';
import { useState, useEffect } from 'react';

interface Props {
  show: boolean,
  closeModal: React.MouseEventHandler<HTMLButtonElement>
}

function Cart({ show, closeModal }: Props) {
  const { state: { cart } } = CartState();
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.map(item => item.price * item.quantity).reduce((a: number, b: number) => { return a + b }, 0))
  }, [cart])


  if (!show) {
    return null
  }
  if (show) {
    return (
      <div className={styles.container}>
        <button className={styles.container__button} onClick={closeModal}>CLOSE</button>
        <div className={styles.container__title}>
          <span className={styles.your}>YOUR</span>
          <span className={styles.cart}>CART</span>
        </div>
        {cart.length > 0 ? cart.map((item: Product) => <CartItem key={item.id} product={item} />) : ''}
        <div className={styles.bottom}>
          <div className={styles.bottom__total}>
            <span>TOTAL:</span>
            <span>${total}</span>
          </div>
          <button className={styles.bottom__button}>CHECKOUT</button>
        </div>
      </div>
    )
  }
}

export default Cart

