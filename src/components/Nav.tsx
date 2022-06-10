import styles from './Nav.module.scss'
import Cart from './Cart'

function Nav() {
  return (
    <div className={styles.nav}>
      <img src="./public/logo.svg" alt="logo" className={styles.nav__logo} />
      <img src="./public/hd-4k.svg" alt="hd-4k" className={styles.nav__hd4k} />
      <button className={styles.nav__button}>
        <span>CART</span>
        <span className={styles.button__item}>(0)</span>
      </button>
      <Cart />
    </div>
  )
}

export default Nav