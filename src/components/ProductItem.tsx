import styles from './ProductItem.module.scss'
import { Product } from './interfaces/types'
import { useState } from 'react'
import { CartState } from '../context/CartContext'

interface Props {
  product: Product
}

function ProductItem({ product }: Props) {
  const { state: { cart }, dispatch } = CartState();
  const [box, setBox] = useState(false)
  return (
    <div className={styles.container} onMouseEnter={() => { setBox(true) }} onMouseLeave={() => { setBox(false) }}>
      <img src={product.image} alt="productImage" className={styles.container__image} />
      <div onClick={() => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: product
        })
      }} className={`${box ? styles.hover : styles.hover__disabled}`}>
        <img src="./public/world.svg" alt="world" className={styles.hover__image} />
        <span className={styles.hover__text}>ADD TO CART</span>
      </div>
      <div className={styles.container__bottom}>
        <span className={styles.bottom__title}>{product.title}</span>
        <span className={styles.bottom__price}>${product.price}</span>
      </div>
    </div>
  )
}

export default ProductItem