import React from 'react';
import { getCookie } from '../../utils/Cookie';
import Board from './Board';
import CleaningEach from './Cleaning';
import Emergency from './Emergency';
import Login from './Login';
import PersonnelStatus from './Personnel';
import Schedule from './Schedule';

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
      return <Schedule />;
    } else if (props.content === 3) {
      return <CleaningEach />;
    } else if (props.content === 4) {
      return <Board />;
    } else if (props.content === 5) {
      return <Emergency />;
    } else {
      return <div>error</div>;
    }
  }
}

export default Contents;
