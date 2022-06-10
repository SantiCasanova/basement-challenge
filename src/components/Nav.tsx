import styles from './Nav.module.scss'
import Cart from './Cart'
import { useState } from 'react'

function Nav() {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.nav}>
      <img src="./public/logo.svg" alt="logo" className={styles.nav__logo} />
      <img src="./public/hd-4k.svg" alt="hd-4k" className={styles.nav__hd4k} />
      <button className={styles.nav__button} onClick={() => { setShow(true) }}>
        <span>CART</span>
        <span className={styles.button__item}>(0)</span>
      </button>
      <Cart closeModal={() => { setShow(false) }} show={show} />
    </div>
  )
}

export default Nav