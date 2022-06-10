import styles from './Store.module.scss'
import ProductItem from './ProductItem'
import { products } from '../product/mock'

function Store() {
  return (
    <div className={styles.container}>
      {products.map(product => <ProductItem key={product.title} product={product} />)}
    </div>
  )
}

export default Store