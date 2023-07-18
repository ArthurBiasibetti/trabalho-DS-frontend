import React, { PropsWithChildren } from 'react';

import { ContainerProps } from './interfaces';
import { Menu } from '../Menu';

import styles from './styles.module.scss';

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <Menu />
      {children}
    </div>
  );
};
