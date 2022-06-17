import styles from './Store.module.scss'
import ProductItem from './ProductItem'
import { CartState } from '../context/CartContext'


function Store() {
  const { state: { products } } = CartState();
  return (
    <div className={styles.container}>
      {products.map(product => <ProductItem key={product.title} product={product} />)}
    </div>
  )
}

export default Store