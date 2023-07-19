import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

import { Container } from '../../components/Container';

import { Menu } from '../../components/Menu';

import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import HttpClient from '../../config/axios';
import { Servidor } from '../../interfaces/servidor';
import { Sala } from '../../interfaces/salas';
import { Loader } from '../../components/Loader';
import styles from './styles.module.scss';

const servidor: Servidor = JSON.parse(localStorage.getItem('@DS/inventario')!);

export const ServidorRoomPage: React.FC = () => {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const buscarSalas = async () => {
      try {
        const response = await HttpClient.api.get<{ message: Sala[] }>(
          `/core/retornar-salas-inventarios-servidor/${servidor.id}`
        );
        setSalas(response.data.message);
      } catch (e) {
        console.log(e);
      }
    };
    buscarSalas();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('@DS/inventario')) {
      navigate('/login');
    }
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <p className={styles['subtitle-page']}>Selecione a Sala</p>

      <div className={styles['rooms-content']}>
        {salas.map((sala) => (
          <div className={`${styles['room']} ${styles['rooms-list']}`}>
            <p>{`${sala.espaco.id} ${sala.espaco.nome}`}</p>
            <Button type="button" color="primary">
              SAlve
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};
