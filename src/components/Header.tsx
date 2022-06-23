import styles from './Header.module.scss'

function Header() {
  return (
    <div className={styles.container}>
      <img src="./public/header.svg" alt="header" className={styles.container__header} />
    </div>
  )
}

export default Header