import styles from './Header.module.scss'

function Header() {
  return (
    <>
      <img src="./public/header.svg" alt="header" className={styles.header} />
    </>
  )
}

export default Header