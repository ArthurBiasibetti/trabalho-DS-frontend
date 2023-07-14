import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container';

import styles from './styles.module.scss';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';

export const InvListPage: React.FC = () => {
  return (
    <Container className={styles['home-page-container']}>
      <Menu />

      <div className={styles['subtiltle-page']}>
        <p>Lista Inventário</p>
      </div>

      <div className={styles['inventories-content']}>
        <Table
          data={[
            {
              '#': 1,
              item: 'Computador LG 9283921',
              codigo: '1274515183',
            },
            {
              '#': 2,
              item: 'Computador LG 9283921',
              codigo: '1223145151',
            },
            {
              '#': 31,
              item: 'Computador LG 9283921',
              codigo: '1274516651',
            },
            {
              '#': 67,
              item: 'Computador LG 9283921',
              codigo: '1274512422',
            },
            {
              '#': 4,
              item: 'Computador LG 9283921',
              codigo: '1274090882',
            },
          ]}
        />
      </div>
    </Container>
  );
};
