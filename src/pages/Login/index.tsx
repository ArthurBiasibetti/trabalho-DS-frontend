import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Container } from '../../components/Container';
import { Input } from '../../components/Input';

import { LoginFormFields } from './interfaces';

import styles from './styles.module.scss';

const options = [
  { value: '51', label: 'Ramiro' },
  { value: '23', label: 'Hunder' },
  { value: '32', label: 'Douglas' },
  { value: '5', label: 'Arthur F' },
  { value: '11', label: 'Arthur' },
  { value: '7', label: 'Maitê' },
  { value: '1', label: 'Guilherme' },
  { value: '4', label: 'Patricia' },
  { value: '2', label: 'Virginia' },
];

export const LoginPage: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormFields>();
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<{ label: string; value: string }>
  >(options[2]);

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => console.log(data);

  return (
    <Container className={styles['login-page']}>
      <div className={styles['login-wrapper']}>
        <form
          className={styles['login-form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend>Escolha o servidor</legend>

          <Select
            className={styles['select-style']}
            defaultValue={selectedOption}
            onChange={(e) => setSelectedOption(e)}
            options={options}
            {...register}
          />
          <Input type="submit" />
        </form>
      </div>
    </Container>
  );
};
