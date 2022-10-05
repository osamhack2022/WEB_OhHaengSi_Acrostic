import React from 'react';
import styles from '../styles/Layout.module.scss';
import { dateFormat } from '../utils/Date';
import Contents from './layout/Contents';

function Layout(): React.ReactElement {
  const [content, setContent] = React.useState(1);

  return (
    <div className={styles.wrap}>
      <h1 onClick={() => setContent(1)}>오행시</h1>
      <label>{dateFormat}</label>
      {/* <img src="" alt="logo" onClick={() => setContent(1)} /> */}
      <div className={styles.menu}>
        <ul>
          <li onClick={() => setContent(1)}>인원현황</li>
          <li onClick={() => setContent(2)}>근무표</li>
          <li onClick={() => setContent(3)}>임무분담제</li>
          <li onClick={() => setContent(4)}>전파사항</li>
          <li onClick={() => setContent(5)}>긴급</li>
        </ul>
      </div>
      <div className={styles.contentsbox}>
      <Contents content={content} />
        </div>
    </div>
  );
}

export default Layout;
