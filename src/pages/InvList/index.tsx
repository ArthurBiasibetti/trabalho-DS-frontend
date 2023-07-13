import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container';

import styles from './styles.module.scss';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';

export const InvListPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className={styles['home-page-container']}>
      <div
        className={`${styles['header']} ${isOpen ? styles['open'] : ''}`}
        tabIndex={0}
      >
        <div>  
          <Menu />
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles['bars-icon']}`}
            tabIndex={0}
            onClick={() => setIsOpen((oldState) => !oldState)}
          />
        </div>
      </div>

      <div className={styles['subtiltle-page']}>
        <p>Lista Inventário</p>
      </div>
      
  
      <div className={styles['inventories-content']}>
      </div>

    </Container>
  );
};