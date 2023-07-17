import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container';

import { EmptyInventories } from './templates/emptyInventories';

import styles from './styles.module.scss';
import { Menu } from '../../components/Menu';
import { UploadInput } from '../../components/UploadInput';

export const HomePage: React.FC = () => {
  const [inventories, setInventories] = useState<{ name: string }[]>([]);
  const [isAddingInventory, setIsAddingInventory] = useState(false);

  return (
    <Container className={styles['home-page-container']}>
      <Menu />

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
            <UploadInput onChange={() => {}} className={styles['upload']} />
          </div>
        )}
      </div>
    </Container>
  );
};
