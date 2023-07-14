import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container';

import styles from './styles.module.scss';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';

export const RoomPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className={styles['home-page-container']}>
      <div
        className={`${styles['header']} ${isOpen ? styles['open'] : ''}`}
        tabIndex={0}
      >
        <div>  
          <Menu />
        </div>
      </div>

      <div className={styles['subtiltle-page']}>
        <p>Selecione Sala</p>
      </div>

      <div className={styles['inventories-content']}>
            <div className={styles['actions']}>
                <p>Sala 1</p>
                <Button color="primary">Selecionar</Button>
            </div>
            <div className={styles['actions']}>
                <p>Sala 2</p>
                <Button color="primary">Selecionar</Button>
            </div>
            <div className={styles['actions']}>
                <p>Sala 3</p>
                <Button color="primary">Selecionar</Button>
            </div>
            <div className={styles['actions']}>
                <p>Sala 4</p>
                <Button color="primary">Selecionar</Button>
            </div>

        </div>

    </Container>
  );
};