import React from 'react';
import { Button } from '../../../../components/Button';

import styles from './styles.module.scss';
import { Servidor } from '../../../../interfaces/servidor';

export interface EmptyInventoriesProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const servidor: Servidor = JSON.parse(localStorage.getItem('@DS/inventario')!);

export const EmptyInventories: React.FC<EmptyInventoriesProps> = ({
  onClick = () => {},
}) => {
  const message =
    servidor.cargo.id === 0
      ? 'Nenhum inventário cadastrado'
      : 'Nenhum inventário disponível';

  return (
    <div className={styles['empty-content']}>
      <p>{message}</p>
      {servidor.cargo.id === 0 && (
        <>
          <span>Adicione um inventário agora</span>
          <div className={styles['actions']}>
            <Button color="primary" onClick={onClick}>
              Adicionar inventário
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
