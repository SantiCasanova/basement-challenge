import { Product } from './interfaces/types'
import { CartState } from '../context/CartContext'
import { useState, useEffect } from 'react';
import styles from './CartItem.module.scss'

interface Props {
  product: Product
};
function CartItem({ product }: Props) {
  const { state: { cart }, dispatch } = CartState();
  const [totalPerProduct, setTotalPerProduct] = useState(0);

  useEffect(() => {
    setTotalPerProduct(product.price * product.quantity)
  }, [cart])


  return (
    <div className={styles.container}>
      <img src={product.image} alt="product" className={styles.container__image} />
      <div className={styles.rightSide}>
        <div className={styles.rightSide__header}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.description}>Unisex Basic Softstyle T-Shirt</span>
        </div>
        <div className={styles.selectors}>
          <div className={styles.selectorItem}>
            <span className={styles.selectorItem__title}>Quantity:</span>
            <div className={styles.selectorItem__results}>
              <span onClick={() => {
                dispatch({
                  type: 'REMOVE_QTY',
                  payload: product
                })
              }} >-</span>
              <p>{product.quantity}</p>
              <span onClick={() => {
                dispatch({
                  type: 'ADD_QTY',
                  payload: product
                })
              }}>+</span>
            </div>
          </div>
          <div className={styles.selectorItem}>
            <span className={styles.selectorItem__title}>Size:</span>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>
      </div>
      <span className={styles.container__productPrice}>${totalPerProduct}</span>
    </div >
  )
}

export default CartItem