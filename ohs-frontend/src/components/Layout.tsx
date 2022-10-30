import React from 'react';
import styles from '../styles/Layout.module.scss';
import { dateKoreanFormat } from '../utils/Date';
import Contents from './layout/Contents';

function Layout(): React.ReactElement {
  const [content, setContent] = React.useState(1);

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <h1 onClick={() => setContent(1)}>오늘 행정반 소식</h1>
        <label>{dateKoreanFormat}</label>
        {/* <img src="" alt="logo" onClick={() => setContent(1)} /> */}
        <div className={styles.menu}>
          <ul>
            <li className={content === 1 ? styles.act : ''} onClick={() => setContent(1)}>
              인원현황
            </li>
            <li className={content === 2 ? styles.act : ''} onClick={() => setContent(2)}>
              근무표
            </li>
            <li className={content === 3 ? styles.act : ''} onClick={() => setContent(3)}>
              임무분담제
            </li>
            <li className={content === 4 ? styles.act : ''} onClick={() => setContent(4)}>
              전파사항
            </li>
            <li className={content === 5 ? styles.act : ''} onClick={() => setContent(5)}>
              긴급
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contents}>
        <Contents content={content} />
      </div>
    </div>
  );
}

export default Layout;
