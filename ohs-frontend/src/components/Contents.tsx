import React from 'react';
import { getCookie } from '../utils/Cookie';
import Login from './Login';
import PersonnelStatus from './PersonnelStatus';

interface ContentsProps {
  content: number;
}

function Contents(props: ContentsProps): React.ReactElement {
  if (getCookie('id') == null) {
    return <Login />;
  } else {
    if (props.content === 1) {
      return <PersonnelStatus />;
    } else if (props.content === 2) {
      return <div>근무표입니다.</div>;
    } else if (props.content === 3) {
      return <div>임무분담제입니다.</div>;
    } else if (props.content === 4) {
      return <div>전파사항입니다.</div>;
    } else if (props.content === 5) {
      return <div>긴급입니다.</div>;
    } else {
      return <div>error</div>;
    }
  }
}

export default Contents;
