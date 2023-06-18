import React from 'react';
import { Button } from '../../../../components/Button';

import styles from './styles.module.scss';

export const EmptyInventories: React.FC = () => {
  return (
    <div className={styles['empty-content']}>
      <p>Nenhum inventário cadastrado</p>
      <span>Adicione um inventário agora</span>
      <div className={styles['actions']}>
        <Button color="primary">Adicionar inventário</Button>
      </div>
    </div>
  );
};
