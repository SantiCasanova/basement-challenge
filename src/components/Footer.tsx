import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
      <img src="./public/footer.svg" alt="footer" className={styles.footer__image} />
    </div>
  )
}

export default Footer