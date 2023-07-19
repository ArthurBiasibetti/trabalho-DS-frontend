import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

import { Container } from '../../components/Container';
import { Input } from '../../components/Input';

import { useNavigate } from 'react-router-dom';
import HttpClient from '../../config/axios';
import { Servidor } from '../../interfaces/servidor';
import styles from './styles.module.scss';

export const LoginPage: React.FC = () => {
  const [servidores, setServidores] = useState<Servidor[]>([]);
  const [opcoes, setOpcoes] = useState<{ label: string; value: number }[]>([]);
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<{ label: string; value: number }>
  >(opcoes[0]);

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
    buscarServidores();
  }, []);

  const salvarUsuario = () => {
    if (!selectedOption) return;

    const usuario = servidores.find(
      (servidor) => selectedOption?.value == servidor.id
    );

    localStorage.setItem('@DS/inventario', JSON.stringify(usuario));

    navigate('/');
  };

  return (
    <Container showMenu={false} className={styles['login-page']}>
      <div className={styles['login-wrapper']}>
        <div className={styles['login-form']}>
          <legend>Entrar</legend>

          <Select
            className={styles['select-style']}
            defaultValue={selectedOption}
            onChange={(e) => setSelectedOption(e)}
            options={opcoes}
          />
          <Input
            type="submit"
            value="Entrar"
            onClick={salvarUsuario}
            disabled={!selectedOption}
          />
        </div>
      </div>
    </Container>
  );
};
