import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import { getCookie, rmCookie } from '../utils/Cookie';

function Header(): React.ReactElement {
  const [room, setRoom] = useState(getCookie('id'));
  const chRoom = () => {
    rmCookie('id');
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      {room == null ? (
        <label>로그인하여 주십시오.</label>
      ) : (
        <>
          <button onClick={chRoom}>생활관 변경</button>
          <label>{room}생활관 입니다.</label>
        </>
      )}
    </header>
  );
}

export default Header;
