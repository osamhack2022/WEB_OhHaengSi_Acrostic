import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import { getCookie, rmCookie } from '../utils/Cookie';

function Header(): React.ReactElement {
  const [id, setId] = useState(getCookie('id'));
  const logout = () => {
    rmCookie('id');
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      {id == null ? (
        <label>로그인하여 주십시오.</label>
      ) : (
        <>
          <button onClick={logout}>logout</button>
          <label>{id}님 반갑습니다.</label>
        </>
      )}
    </header>
  );
}

export default Header;
