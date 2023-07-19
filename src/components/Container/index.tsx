import React, { PropsWithChildren, useEffect } from 'react';

import { ContainerProps } from './interfaces';
import { Menu } from '../Menu';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  showMenu = true,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('@DS/inventario')) {
      navigate('/login');
    }
  }, []);

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {showMenu && <Menu />}
      {children}
    </div>
  );
};
