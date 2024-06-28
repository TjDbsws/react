import React from 'react'
import styles from './CommonFooter.module.scss'
import arrLeftImg from '../../../assets/images/icon-arrowLeft.svg'
import arrRightImg from '../../../assets/images/icon-arrowRight.svg'

export default function CommonFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button}>
            <img src={ arrLeftImg } alt="" />
        </button>
        {/* 변경될 UI 부분 */}
        <span>1</span>
        <button className={styles.pagination__button}>
            <img src={ arrRightImg } alt="" />
        </button>
      </div>
    </div>
  )
}
