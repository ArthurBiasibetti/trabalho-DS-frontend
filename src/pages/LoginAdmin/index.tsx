import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

import { Container } from '../../components/Container';
import { Input } from '../../components/Input';

import { useNavigate } from 'react-router-dom';
import HttpClient from '../../config/axios';
import { Servidor } from '../../interfaces/servidor';
import styles from './styles.module.scss';

export const LoginSecreto: React.FC = () =>
{
  const navigate = useNavigate();

  useEffect(() =>
  {
    const buscarServidores = async () =>
    {
      try
      {
        const response = await HttpClient.api.get<{ message: Servidor[] }>(
          `/core/retornar-admin`
        );


        const usuario = response.data.message.find(
          (servidor) => 0 == servidor.id
        );

        localStorage.setItem('@DS/inventario', JSON.stringify(usuario));

        navigate('/');
      } catch (e)
      {
        console.log(e);
      }
    };
    buscarServidores();
  }, []);

  return (
    <Container showMenu={false} className={styles['login-page']}>

    </Container>
  );
};
