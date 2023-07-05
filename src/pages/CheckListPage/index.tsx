import React, { useEffect } from 'react';
import { Container } from '../../components/Container';
import { Html5QrcodeScanner } from 'html5-qrcode';

import style from './styles.module.scss';

export const CheckListPage = () => {
  function onScanSuccess(decodedText: string, decodedResult: any) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function onScanFailure(error: unknown) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }

  useEffect(() => {
    const canvasWrapper = document.getElementById('scanner');

    if (canvasWrapper) {
      let html5QrcodeScanner = new Html5QrcodeScanner(
        'scanner',
        {
          fps: 10,
          qrbox: {
            width: canvasWrapper.clientWidth,
            height: canvasWrapper.clientHeight,
          },
        },
        /* verbose= */ false
      );

      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    }
  }, []);

  return (
    <Container className={style['check-list-page']}>
      <div className={style['table-list']}></div>
      <div id="scanner" style={{ width: '100%', height: '100%' }}></div>
    </Container>
  );
};
