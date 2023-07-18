import React, { useEffect, useState } from 'react';

import { Container } from '../../components/Container';

import styles from './styles.module.scss';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';

import { Html5QrcodeScanner } from 'html5-qrcode';

export const ReadcodePage: React.FC = () => {
  const [isReadingCode, setIsReadingCode] = useState(false);
  const [codigosScanneados, setCodigosScanneados] = useState<string[]>([])

  function onScanSuccess(decodedText: string, decodedResult: any) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function onScanFailure(error: unknown) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    // console.warn(`Code scan error = ${error}`);
  }

  useEffect(() => {
    if (document.getElementById('scanner')) {
      let html5QrcodeScanner = new Html5QrcodeScanner(
        'scanner',
        { fps: 10, qrbox: 250 },
        /* verbose= */ false
      );

      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    }
  }, [isReadingCode]);

  return (
    <Container className={styles['home-page-container']}>
      {!isReadingCode ? (
        <>
          <Menu />

          <div className={styles['subtitle-page']}>
            <p>Buscar Patrimônio</p>
          </div>

          <div className={styles['inventories-content']}>
            <div className={styles['sections']}>
              <div className={styles['actions']}>
                <Button color="primary" onClick={() => setIsReadingCode(true)}>
                  Leitura por Câmera
                </Button>
              </div>

              <p>OU</p>

              <div className={styles['actions']}>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="">Informe o código</label>
                  <input
                    type="text"
                    name="inventories-code"
                    id="inventories-code"
                  />
                  <Button color="primary"> Selecionar </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          id="scanner"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        ></div>
      )}
    </Container>
  );
};
