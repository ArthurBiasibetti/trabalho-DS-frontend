import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

export const Input = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`${styles['input']} ${className || ''}`}
      {...props}
    />
  );
});
