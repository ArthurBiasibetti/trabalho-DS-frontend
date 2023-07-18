import React, { CSSProperties } from 'react';
import { RingLoader } from 'react-spinners';

const override: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '10rem',
  width: '10rem',
  zIndex: '999',
};

const blackWindow: CSSProperties = {
  position: 'absolute',
  top: '0%',
  left: '0%',
  // transform: 'translate(-50%, -50%)',
  width: '100vw',
  height: '100vh',
  background: 'hsla(0, 0%, 0%, 0.493)',
  zIndex: '998',
};

export const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <>
    {isLoading && <div style={blackWindow}></div>}
    <RingLoader
      color={'white'}
      loading={isLoading}
      cssOverride={override}
      size={250}
      aria-label="Loading Spinner"
    />
  </>
);
