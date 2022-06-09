import styles from './Separator.module.scss'

function Separator() {
  return (
    <div className={styles.container}>
      <img src="./public/asterisk.svg" alt="asterisk" className={styles.container__asterisk} />
      <span className={styles.container__text}>A man can't  have enough basement. swag — A man can't have enough basement. swag</span>
      <img src="./public/asterisk2.svg" alt="asterisk" className={styles.container__asterisk2} />
    </div>
  )
}

export default Separator