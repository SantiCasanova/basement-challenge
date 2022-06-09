import styles from './ProductItem.module.scss'
import { Product } from '../product/types'

interface Props {
  product: Product
}

function ProductItem({ product }: Props) {
  return (
    <div className={styles.container}></div>
  )
}

export default ProductItem