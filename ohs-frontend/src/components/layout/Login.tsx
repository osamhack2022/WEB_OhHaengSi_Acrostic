import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styles from '../../styles/Login.module.scss';
import { setCookie } from '../../utils/Cookie';

type data = { value: string; label: string };

function Login(): React.ReactElement {
  const [options, setOptions] = useState<data[]>([]);

  const getOption = () => {
    let n: number = 5;

    // axios
    //     .post('https://ohs.run.goorm.io/auth/login')
    //     .then((response: any) => {
    //       console.log(response);
    //       n = response.data.room;
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });

    setOptions(() => {
      const option = [];
      for (let i = 1; i <= n; i++) {
        option.push({ value: String(i), label: i + '생활관' });
      }
      return option;
    });
  };

  const setCompany = () => {
    return (
      <>
        <label>소속 중대를 입력하여 주십시오.</label>
        <div>
          <input type="text" />
          <button onClick={() => getOption()}>제출</button>
        </div>
      </>
    );
  };

  const setSelect = () => {
    return (
      <>
        <label>소속 생활관을 입력하여 주십시오.</label>
        <div className={styles.selectBox}>
          <Select
            defaultValue={options[0]}
            options={options}
            onChange={select => {
              setCookie('id', select!.value);
              window.location.reload();
            }}
          />
        </div>
      </>
    );
  };

  return (
    <div className={styles.login}>
      <h2>소속 입력</h2>
      {setCompany()}
      {setSelect()}
    </div>
  );
}

export default Login;
