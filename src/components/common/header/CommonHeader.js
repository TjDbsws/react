import styles from './CommonHeader.module.scss'
import logoImage from '../../../assets/images/image-logo.png'

export default function CommonHeader() {
    return <div className={styles.header}>
        <div className={styles.header__logoBox}>
            <img src={ logoImage } className={styles.header__logoBox__logo} alt="" />
            <div className={styles.header__logoBox__title}>PhotoSplash</div>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>사진제출</button>
            <button className={styles.header__profileBox__button}>
                북마크
            </button>
            <span className={styles.header__profileBox__userName}> 서윤 | tjdbs@naver.com</span>
        </div>
    </div>
}
