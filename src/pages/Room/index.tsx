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
import { Loader } from '../../components/Loader';

export const RoomPage: React.FC = () => {
  const [servidores, setServidores] = useState<Servidor[]>([]);
  const [salas, setSalas] = useState<Sala[]>([]);
  const [opcoes, setOpcoes] = useState<{ label: string; value: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mostrarBotaoIniciar, setMostrarBotaoIniciar] = useState(false);

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
        setSalas(response.data.message);
        setMostrarBotaoIniciar(response.data.message[0].inventario.status == 1);
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

  const iniciarInventario = async () => {
    try {
      const response = await HttpClient.api.post<{ message: boolean }>(
        `/core/iniciar-inventario`
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <p className={styles['subtitle-page']}>Selecione Responsavel da Sala</p>
      {mostrarBotaoIniciar && (
        <Button
          color="primary"
          type="button"
          onClick={() => {
            iniciarInventario(), setMostrarBotaoIniciar(false);
          }}
          className={styles['button-iniciar-inventario']}
        >
          Iniciar inventario
        </Button>
      )}
      <div className={styles['rooms-content']}>
        {salas.map((sala) => (
          <div className={`${styles['room']} ${styles['rooms-list']}`}>
            <p>{`${sala.espaco.id} ${sala.espaco.nome}`}</p>
            <Select
              className={`${styles['select-style']} `}
              defaultValue={opcoes.find((r) => r.value === sala.responsavel.id)}
              onChange={(e) => setResponsavelSala(sala, e.value)}
              options={opcoes}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
