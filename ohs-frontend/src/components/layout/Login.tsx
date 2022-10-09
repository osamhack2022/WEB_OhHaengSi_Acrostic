import React, { useState } from 'react';
import styles from '../../styles/Login.module.scss';
import { setCookie } from '../../utils/Cookie';
import { useForm } from 'react-hook-form';

function Login(): React.ReactElement {
  const [info, setInfo] = useState({ id: '', pw: '' });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setCookie('id', data.id);
    window.location.reload();
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>ID</label>
          <input type="text" {...register('id')} />
        </div>
        <div>
          <label>PW</label>
          <input type="password" {...register('pw')} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
