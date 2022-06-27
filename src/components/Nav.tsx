import styles from './Nav.module.scss'
import Cart from './Cart'
import { useState } from 'react'
import { CartState } from '../context/CartContext'

function Nav() {
  const [show, setShow] = useState(false)
  const { state: { cart } } = CartState();
  return (
    <div className={styles.nav}>
      <picture>
        <source media="(max-width:480px)" srcSet="./public/mobile-logo.svg" className={styles.nav__mobileLogo} />
        <source media="(min-width:480px)" srcSet="./public/hd-4k.svg" className={styles.nav__hd4k} />
        <img src="./public/logo.svg" className={styles.nav__logo} />
      </picture>
      <button className={styles.nav__button} onClick={() => { setShow(true) }}>
        <span>CART</span>
        <span className={styles.button__item}>({cart.length})</span>
      </button>
      <Cart closeModal={() => { setShow(false) }} show={show} />
    </div>
  )
}

export default Nav