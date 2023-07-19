import React, { useEffect } from 'react';

import { Container } from '../../components/Container';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import styles from './styles.module.scss';

export const InvItemPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('@DS/inventario')) {
      navigate('/login');
    }
  }, []);
  return (
    <Container className={styles['home-page-container']}>
      <div className={styles['subtiltle-page']}>
        <p>Item Patrimônio</p>
      </div>

      <div className={styles['inventories-content']}>
        <div className={styles['sections']}>
          <div className={styles['description']}>
            <div className={styles['label']}>
              <p>Código Inventário</p>
              <p>---------</p>
            </div>
            <div className={styles['label']}>
              <p>Descrição/Nome</p>
              <p>-------</p>
            </div>
          </div>

          <div className={styles['actions']}>
            <form action="">
              <label htmlFor="">Observações</label>
              <input
                type="text"
                name="inventories-code"
                id="inventories-code"
              />
              <Button color="primary"> Enviar </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
