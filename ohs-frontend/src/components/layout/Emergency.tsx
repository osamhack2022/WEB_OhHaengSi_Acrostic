import axios from 'axios';
import React from 'react';
import styles from '../../styles/Emergency.module.scss';
import { getCookie } from '../../utils/Cookie';

function Emergency(): React.ReactElement {
  const sendData = async () => {
    axios
      .post('https://ohs.run.goorm.io/emergency/room/' + getCookie('id'))
      .then((response: any) => {
        alert(response.data.roomId + '생활관 긴급 상황 전달하였습니다.');
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className={styles.box}>
      <button type="submit" onClick={sendData}>
        긴급
      </button>
      <br />
      <label>* 지휘통제실 및 간부에게 긴급 연락이 전달됩니다.</label>
    </div>
  );
}

export default Emergency;
