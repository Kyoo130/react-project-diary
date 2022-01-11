import React from 'react';
import styles from './SearchHeader.module.css'

const SearchHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.wrapper}>
        <div className={styles.tit_cont}>
          <i className="fas fa-bars"></i>
          <h1 className={styles.tit_name}>Wanted</h1>
        </div>
        <ul className={styles.menu_cont}>
          <li className={styles.menu_list}><a href="#">채용</a></li>
          <li className={styles.menu_list}><a href="#">이벤트</a></li>
          <li className={styles.menu_list}><a href="#">직군별 연봉</a></li>
          <li className={styles.menu_list}><a href="#">이력서</a></li>
          <li className={styles.menu_list}><a href="#">커뮤니티</a></li>
          <li className={styles.menu_list}><a href="#">프리랜서</a></li>
          <li className={styles.menu_list}><a href="#">Ai 합격예측</a></li>
        </ul>
        <aside>
          <ul className={styles.aside_cont}>
            <li className={styles.aside_list}>
              <button className={styles.aside_btn}><i className="fas fa-search"></i></button>
            </li>
            <li className={styles.aside_list}>
              <button className={styles.aside_btn}><i className="far fa-bell"></i></button>
            </li>
            <li className={styles.aside_list}>
              <button className={styles.aside_btn}><i className="far fa-user-circle"></i></button>
            </li>
            <li className={styles.aside_list}>
              <a className={styles.aside_service} href="#">기업 서비스</a>
            </li>
          </ul>
        </aside>


      </nav>
    </header>
  )
};

export default SearchHeader;
