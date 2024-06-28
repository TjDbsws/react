import React, { useState } from 'react'
import styles from './CommonNav.module.scss'
import { Link } from 'react-router-dom';
import navJson from './nav.json'

export default function CommonNav() {
  const [navigation, setNavigation] = useState(navJson);

  // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출
  const navLinks = navigation.map((item) => {
    return (
        <Link to={item.path} className={styles.navigation__menu} key={item.path}>
            <span className={styles.navigation__menu__label}>{item.label}</span>
        </Link>
    )
  })

  return <div className={styles.navigation}>
    {navLinks}
  </div>
}
