import styles from './Separator.module.scss'
import { motion } from "framer-motion"

function Separator() {
  return (
    <div className={styles.overflow}>
      <div className={styles.container}>
        {/* animate={{ x: [-100, 100] }} transition={{ yoyo: Infinity, duration: 2, ease: 'linear' }} */}
        <img src="./public/asterisk.svg" alt="asterisk" className={styles.container__asterisk} />
        <motion.span className={styles.container__text}>A man can't  have enough basement. swag — A man can't have enough basement. swag</motion.span>
        <img src="./public/asterisk2.svg" alt="asterisk" className={styles.container__asterisk2} />
      </div>
    </div>
  )
}

export default Separator