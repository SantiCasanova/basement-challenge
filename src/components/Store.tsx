import styles from './Store.module.scss'
import ProductItem from './ProductItem'
import { products } from '../product/mock'

function Store() {
  return (
    <div className={styles.container}>
      <ProductItem product={products[0]} />
    </div>
  )
}

export default Store