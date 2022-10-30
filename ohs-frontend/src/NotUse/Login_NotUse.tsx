import React, { useState } from 'react';
import styles from '../styles/Login.module.scss';
import { setCookie } from '../utils/Cookie';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type logIn = { username: string; password: string };
type signUp = { username: string; password: string; name: string; rank: string };

function Login(): React.ReactElement {
  const [choice, setChoice] = useState('logIn');
  const { register, handleSubmit, reset } = useForm();
  // 로그인 제거 및 생활관 설정 추가
  const onSubmit = (data: any) => {
    if (choice === 'logIn') {
      console.log(data);
      axios
        .post('https://ohs.run.goorm.io/auth/login', { params: data })
        .then((response: any) => {
          console.log(response);
          setCookie('token', data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      console.log(data);
      axios
        .post('https://ohs.run.goorm.io/auth/users', { params: data })
        .then((response: any) => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
    setCookie('id', data.username);
    window.location.reload();
  };

  return (
    <div className={styles.login}>
      <button
        className={choice === 'logIn' ? styles.act : ''}
        onClick={() => {
          setChoice('logIn');
          reset();
        }}>
        로그인
      </button>
      <button
        className={choice === 'signUp' ? styles.act : ''}
        onClick={() => {
          setChoice('signUp');
          reset();
        }}>
        회원가입
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username')} placeholder="ID" />
        <input type="password" {...register('password')} placeholder="PW" />
        {choice === 'signUp' ? (
          <>
            <input type="text" {...register('name')} placeholder="NAME" />
            <input type="text" {...register('rank')} placeholder="RANK" />
          </>
        ) : (
          <></>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
