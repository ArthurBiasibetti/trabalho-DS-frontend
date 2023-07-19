import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

import { Container } from '../../components/Container';

import { Menu } from '../../components/Menu';

import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import HttpClient from '../../config/axios';
import { Servidor } from '../../interfaces/servidor';
import { Sala } from '../../interfaces/salas';

export const RoomPage: React.FC = () => {
  const [servidores, setServidores] = useState<Servidor[]>([]);
  const [salas, setSalas] = useState<Sala[]>([]);
  const [opcoes, setOpcoes] = useState<{ label: string; value: number }[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const buscarServidores = async () => {
      try {
        const response = await HttpClient.api.get<{ message: Servidor[] }>(
          `/core/retornar-servidores`
        );
        setServidores(response.data.message);

        const options = response.data.message.map((servidor) => {
          return {
            value: servidor.id,
            label: servidor.nome,
          };
        });
        setOpcoes(options);
      } catch (e) {
        console.log(e);
      }
    };

    const buscarSalas = async () => {
      try {
        const response = await HttpClient.api.get<{ message: Sala[] }>(
          `/core/retornar-salas-inventarios-pendentes`
        );
        console.log(response.data);
        setSalas(response.data.message);
      } catch (e) {
        console.log(e);
      }
    };
    buscarServidores();
    buscarSalas();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('@DS/inventario')) {
      navigate('/login');
    }
  }, []);

  const setResponsavelSala = async (sala: Sala, responsavelId: number) => {
    try {
      const response = await HttpClient.api.post<{ message: boolean }>(
        `/core/set-responsavel-sala`,
        {
          espacoId: sala.espaco.id,
          inventario: sala.inventarioId,
          novoResponsavel: responsavelId,
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <p className={styles['subtitle-page']}>Selecione Sala</p>
      <Button
        color="primary"
        type="button"
        onClick={() => {}}
        className={styles['button-iniciar-inventario']}
      >
        Iniciar inventario
      </Button>
      <div className={styles['rooms-content']}>
        {salas.map((sala) => (
          <div className={styles['action']}>
            <p>{`${sala.espaco.id} ${sala.espaco.nome}`}</p>
            <Select
              className={styles['select-style']}
              defaultValue={opcoes[0].value}
              onChange={(e) => setResponsavelSala(sala, e as number)}
              options={opcoes}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
