import styles from './CartItem.module.scss'

function CartItem() {
  return (
    <div className={styles.container}>
      <img src="./public/products/shirt.png" alt="product" className={styles.container__image} />
      <div className={styles.rightSide}>
        <div className={styles.rightSide__header}>
          <span className={styles.title}>BLACK T-SHIRT</span>
          <span className={styles.description}>Unisex Basic Softstyle T-Shirt</span>
        </div>
        <div className={styles.selectors}>
          <div className={styles.selectorItem}>
            <span className={styles.selectorItem__title}>Quantity:</span>
            <div className={styles.selectorItem__results}>
              <span>-</span>
              <p>1</p>
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
      <span className={styles.container__productPrice}>$12,50</span>
    </div >
  )
}

export default CartItem