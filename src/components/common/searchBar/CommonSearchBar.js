import styles from './CommonSearchBar.module.scss'
import searchImage from '../../../assets/images/icon-search.svg'

export default function CommonSearchBar() {

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar__search}>
                <input type="text" placeholder='찾으실 이미지를 검색하세요.' className={styles.searchBar__search__input} />
                <img src={searchImage} alt="" />
            </div>
        </div>
    )
}
