import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container';

import styles from './styles.module.scss';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';

export const ReadcodePage: React.FC = () => {
  return (
    <Container className={styles['home-page-container']}>
      <Menu />

      <div className={styles['subtiltle-page']}>
        <p>Buscar Patrimônio</p>
      </div>

      <div className={styles['inventories-content']}>
        <div className={styles['sections']}>
          <div className={styles['actions']}>
            <Button color="primary">Leitura por Câmera</Button>
          </div>

          <p>OU</p>

          <div className={styles['actions']}>
            <form action="">
              <label htmlFor="">Informe o código</label>
              <input
                type="text"
                name="inventories-code"
                id="inventories-code"
              />
              <Button color="primary"> Selecionar </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
