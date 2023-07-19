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

export const ServidorRoomPage: React.FC = () => {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const servidor: Servidor = JSON.parse(
    localStorage.getItem('@DS/inventario')!
  );
  const navigate = useNavigate();

  useEffect(() =>
  {
    if (servidor.cargo.id == 0) navigate('/admin/room')
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
            <div>
              <p>{`${sala.espaco.id} ${sala.espaco.nome}`}</p>
              <p
                className={styles['estatiticas']}
              >{`${sala.quantidadePatrimonios} / ${sala.patrimoniosLidos}`}</p>
            </div>
            <Button
              type="button"
              color="primary"
              onClick={() => {
                navigate(`../readcode/${sala.espacoId}`);
              }}
            >
              Entrar na sala
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};
