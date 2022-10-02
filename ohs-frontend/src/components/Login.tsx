import React, { useState } from 'react';
import { setCookie } from '../utils/Cookie';
import { useForm } from 'react-hook-form';

function Login(): React.ReactElement {
  const [info, setInfo] = useState({ id: '', pw: '' });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setCookie('id', data.id);
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('id')} />
        <input type="password" {...register('pw')} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
