import styles from './ProductItem.module.scss'
import { Product } from '../product/types'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

interface Props {
  product: Product
}

function ProductItem({ product }: Props) {
  const [box, setBox] = useState(false)
  const cart = useContext(CartContext)
  const pushProduct = (product: Product) => {
    const itemIndex = cart.findIndex(item => item.id === product.id)
    itemIndex === -1 ? cart.push({ ...product, quantity: 1 }) : cart[itemIndex].quantity++
  }

  return (
    <div className={styles.container} onMouseEnter={() => { setBox(true) }} onMouseLeave={() => { setBox(false) }}>
      <img src={product.image} alt="productImage" className={styles.container__image} />
      <div onClick={() => { pushProduct(product) }} className={`${box ? styles.hover : styles.hover__disabled}`}>
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