import React, { PropsWithChildren } from 'react';

import { ContainerProps } from './interfaces';

import styles from './styles.module.scss';

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  let timeout: number = 0;

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    timeout = setTimeout(() => {
      console.log(event.target);
      handleMouseDown(event);
    }, 60);
  };

  return (
    <div
      className={`${styles.container} ${className || ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={() => clearTimeout(timeout)}
    >
      {children}
    </div>
  );
};
