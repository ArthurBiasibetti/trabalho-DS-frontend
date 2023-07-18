import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';

import { Container } from '../../components/Container';

import { Menu } from '../../components/Menu';

import styles from './styles.module.scss';
import { Button } from '../../components/Button';

const options = [
  { value: '51', label: 'Ramiro' },
  { value: '23', label: 'Hunder' },
  { value: '32', label: 'Douglas' },
  { value: '5', label: 'Arthur F' },
  { value: '11', label: 'Arthur' },
  { value: '7', label: 'Maitê' },
  { value: '1', label: 'Guilherme' },
  { value: '4', label: 'Patricia' },
  { value: '2', label: 'Virginia' },
];

const fakeRooms = [1, 2, 3, 4, 5, 6, 7];

export const RoomPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<{ label: string; value: string }>
  >(options[2]);

  return (
    <Container>
      <p className={styles['subtitle-page']}>Selecione Sala</p>
      <Button
        color="primary"
        type="button"
        onClick={() => {}}
        className={styles['button-iniciar-inventario']}
      >
        Iniciar inventario
      </Button>
      <div className={styles['rooms-content']}>
        {fakeRooms.map((number) => (
          <div className={styles['action']}>
            <p>Sala {number}</p>
            <Select
              className={styles['select-style']}
              defaultValue={selectedOption}
              onChange={(e) => setSelectedOption(e)}
              options={options}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
