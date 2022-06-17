import { Product } from './interfaces/types'
import styles from './CartItem.module.scss'

interface Props extends Product {
  quantity: number
};
function CartItem({ image, title, price, quantity }: Props) {
  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.container__image} />
      <div className={styles.rightSide}>
        <div className={styles.rightSide__header}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>Unisex Basic Softstyle T-Shirt</span>
        </div>
        <div className={styles.selectors}>
          <div className={styles.selectorItem}>
            <span className={styles.selectorItem__title}>Quantity:</span>
            <div className={styles.selectorItem__results}>
              <span>-</span>
              <p>{quantity}</p>
              <span>+</span>
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
      <span className={styles.container__productPrice}>${price}</span>
    </div >
  )
}

export default CartItem