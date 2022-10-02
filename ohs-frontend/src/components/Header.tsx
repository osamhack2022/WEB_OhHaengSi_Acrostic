import React from 'react';
import { getCookie, rmCookie } from '../utils/Cookie';

function Header(): React.ReactElement {
  const id = getCookie('id');
  const logout = () => {
    rmCookie('id');
    window.location.reload();
  };

  if (id == null) {
    return (
      <header>
        <p>로그인하여 주십시오.</p>
      </header>
    );
  } else {
    return (
      <header>
        <p>{id}님 반갑습니다.</p>
        <button onClick={logout}>logout</button>
      </header>
    );
  }
}

export default Header;
