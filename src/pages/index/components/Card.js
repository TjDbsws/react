import React from 'react'
import styles from './Card.module.scss'

export default function Card() {
    const openDialog = () => {
        console.log("함수 호출")
    }

  return (
    <div className={styles.card} onClick={openDialog}>
      <img src="" alt="" className={styles.card__image} />
    </div>
  )
}
