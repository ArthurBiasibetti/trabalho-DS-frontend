import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Container } from '../../components/Container';
import { Input } from '../../components/Input';

import { LoginFormFields } from './interfaces';

import styles from './styles.module.scss';

export const LoginPage: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormFields>();

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => console.log(data);

  return (
    <Container className={styles['login-page']}>
      <div className={styles['login-wrapper']}>
        <form
          className={styles['login-form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend>Login</legend>

          <div>
            <span className={styles['label']}>Nome:</span>
            <Input {...register('name', { required: true })} />

            <span className={styles['label']}>Senha:</span>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              {...register('password', { required: true })}
            />
          </div>
          <Input type="submit" />
        </form>
      </div>
    </Container>
  );
};
