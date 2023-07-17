import React from 'react';
import { Button } from '../../../../components/Button';

import styles from './styles.module.scss';

export interface EmptyInventoriesProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const EmptyInventories: React.FC<EmptyInventoriesProps> = ({
  onClick = () => {},
}) => {
  return (
    <div className={styles['empty-content']}>
      <p>Nenhum inventário cadastrado</p>
      <span>Adicione um inventário agora</span>
      <div className={styles['actions']}>
        <Button color="primary" onClick={onClick}>
          Adicionar inventário
        </Button>
      </div>
    </div>
  );
};
