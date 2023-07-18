import React, { CSSProperties, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container';

import { EmptyInventories } from './templates/emptyInventories';

import styles from './styles.module.scss';
import { Menu } from '../../components/Menu';
import { UploadInput } from '../../components/UploadInput';
import HttpClient from '../../config/axios';
import { CircleLoader, RingLoader } from 'react-spinners';
import { Loader } from '../../components/Loader';

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

export const HomePage: React.FC = () => {
  const [inventories, setInventories] = useState<{ name: string }[]>([]);
  const [isAddingInventory, setIsAddingInventory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let malditoTimer: number;
  const uploadFile = async (file: File) => {
    console.log('oi');
    if (!file) {
      // console.log(file)
      return;
    }
    console.log(file);
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

  return (
    <Container className={styles['home-page-container']}>
      <Loader isLoading={isLoading} />
      <div className={styles['inventories-content']}>
        {inventories.length <= 0 && !isAddingInventory ? (
          <EmptyInventories onClick={() => setIsAddingInventory(true)} />
        ) : (
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
        )}
      </div>
    </Container>
  );
};
