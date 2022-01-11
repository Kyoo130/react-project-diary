import React from 'react';
import styles from './SearchHeader.module.css'

const SearchHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__main}>
          <a className={styles.navbar__main__btn} href="#"><i className="fas fa-bars"></i></a>
          <h1 className={styles.navbar__main__tit}>Wanted</h1>
        </div>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__menu__list}><a className={styles.navbar__menu__list__a} href="#">채용</a></li>
          <li className={styles.navbar__menu__list}><a className={styles.navbar__menu__list__a} href="#">이벤트</a></li>
          <li className={styles.navbar__menu__list}><a className={styles.navbar__menu__list__a} href="#">직군별 연봉</a></li>
          <li className={styles.navbar__menu__list}><a className={styles.navbar__menu__list__a} href="#">이력서</a></li>
          <li className={styles.navbar__menu__list}><a className={styles.navbar__menu__list__a} href="#">커뮤니티</a></li>
          <li className={styles.navbar__menu__list}><a className={styles.navbar__menu__list__a} href="#">프리랜서</a></li>
          <li className={styles.navbar__menu__list}><a className={styles.navbar__menu__list__a} href="#">Ai 합격예측</a></li>
        </ul>
        <aside className={styles.navbar__aside}>
          <ul className={styles.navbar__aside__ul}>
            <li className={styles.navbar__aside__list}>
              <button className={styles.navbar__aside__list__btn}><i className="fas fa-search"></i></button>
            </li>
            <li className={styles.navbar__aside__list}>
              <button className={styles.navbar__aside__list__btn}><i className="far fa-bell"></i></button>
            </li>
            <li className={styles.navbar__aside__list}>
              <button className={styles.navbar__aside__list__btn}><i className="far fa-user-circle"></i></button>
            </li>
            <li className={styles.navbar__aside__list}>
              <a className={styles.navbar__aside__list__service} href="#">기업 서비스</a>
            </li>
          </ul>
        </aside>
      </nav>
    </header>
  )
};

export default SearchHeader;
