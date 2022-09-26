import React from 'react';
import { getCookie } from '../utils/Cookie';

function Header(): React.ReactElement {
  if (getCookie('id') == null) {
    return (
      <header>
        <p>로그인하여 주십시오.</p>
      </header>
    );
  } else {
    return (
      <header>
        <p>{getCookie('id')}님 반갑습니다.</p>
      </header>
    );
  }
}

export default Header;
