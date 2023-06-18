import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container';

import { EmptyInventories } from './templates/emptyInventories';

import styles from './styles.module.scss';

export const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inventories, setInventories] = useState<{ name: string }[]>([]);

  return (
    <Container className={styles['home-page-container']}>
      <div
        className={`${styles['header']} ${isOpen ? styles['open'] : ''}`}
        tabIndex={0}
      >
        <div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles['bars-icon']}`}
            tabIndex={0}
            onClick={() => setIsOpen((oldState) => !oldState)}
          />
        </div>
      </div>
      <div className={styles['inventories-content']}>
        {inventories.length <= 0 ? <EmptyInventories /> : null}
      </div>
    </Container>
  );
};
