import React from 'react';
import { ButtonProps } from './interfaces';

import styles from './styles.module.scss';

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  className,

  ...props
}) => {
  return (
    <button
      className={`${styles['button']} ${styles[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
