import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties, useEffect, useState } from 'react';

import { Container } from '../../components/Container';

import { EmptyInventories } from './templates/emptyInventories';

import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { UploadInput } from '../../components/UploadInput';
import HttpClient from '../../config/axios';
import { Inventario } from '../../interfaces/inventario';
import { Servidor } from '../../interfaces/servidor';
import styles from './styles.module.scss';

const override: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '10rem',
  width: '10rem',
  zIndex: '999',
};

const blackWindow: CSSProperties = {
  position: 'absolute',
  top: '0%',
  left: '0%',
  // transform: 'translate(-50%, -50%)',
  width: '100vw',
  height: '100vh',
  background: 'hsla(0, 0%, 0%, 0.493)',
  zIndex: '998',
};

const servidor: Servidor = JSON.parse(localStorage.getItem('@DS/inventario')!);

export const HomePage: React.FC = () => {
  const [inventarios, setInventarios] = useState<Inventario[]>([]);
  const [isAddingInventory, setIsAddingInventory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  let malditoTimer: number;
  const uploadFile = async (file: File) => {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    const result = await HttpClient.api.post('/core/importar-csv', formData);
    malditoTimer = setInterval(async () => {
      const jaTaPronto = await HttpClient.api.get(
        `/core/ta-pronto?idSolicitacao=${result.data.message}`
      );

      if (jaTaPronto.data.message) {
        clearInterval(malditoTimer);
        setIsLoading(false);
      }
    }, 15000);
    setIsLoading(true);
  };

  const renderUpload = () => (
    <div className={styles['upload-wrapper']}>
      <div
        className={styles['close-button']}
        onClick={() => setIsAddingInventory(false)}
      >
        <FontAwesomeIcon icon={faClose} />
      </div>
      <UploadInput
        isLoading={isLoading}
        onChange={uploadFile}
        className={styles['upload']}
      />
    </div>
  );

  const renderList = () =>
    inventarios.map((inventario) => (
      <div className={styles['inventario']}>
        <span>Inventario {inventario.id}</span>
        <span className={styles['inventario-data']}>
          {new Date(inventario.createdAt).toLocaleDateString('pt-BR')}
        </span>
      </div>
    ));

  useEffect(() => {
    setIsLoading(true);
    const pegaInventario = async () => {
      try {
        const response = await HttpClient.api.get<{ message: Inventario[] }>(
          '/core/retornar-inventarios-pendentes'
        );

        setInventarios(response.data.message);
        setIsLoading(false);
        if (response.data.message.length > 0) navigate('/room');
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };

    pegaInventario();
  }, []);

  return (
    <Container className={styles['home-page-container']}>
      <Loader isLoading={isLoading} />
      <div className={styles['inventories-content']}>
        {inventarios.length <= 0 && !isLoading ? (
          <EmptyInventories onClick={() => setIsAddingInventory(true)} />
        ) : (
          ''
        )}
        {isAddingInventory && renderUpload()}
      </div>
    </Container>
  );
};
