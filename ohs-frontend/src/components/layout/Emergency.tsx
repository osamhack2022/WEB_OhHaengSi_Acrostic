import axios from 'axios';
import React from 'react';
import styles from '../../styles/Emergency.module.scss';

function Emergency(): React.ReactElement {
  const sendData = async () => {
    axios
      .get('https://ohs.run.goorm.io/emergency')
      .then((response: any) => {
        console.log(response);
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
