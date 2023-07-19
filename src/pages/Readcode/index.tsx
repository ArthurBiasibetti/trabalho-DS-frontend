import React, { useEffect, useState } from 'react';

import { Container } from '../../components/Container';

import { Button } from '../../components/Button';
import styles from './styles.module.scss';

import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate, useParams } from 'react-router-dom';

export const ReadcodePage: React.FC = () => {
  const [isReadingCode, setIsReadingCode] = useState(false);
  const [codigosScanneados, setCodigosScanneados] = useState<string[]>([]);

  const { idSala } = useParams();
  const navigate = useNavigate();

  function onScanSuccess(decodedText: string, decodedResult: any) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function onScanFailure(error: unknown) {
    console.warn(error);
  }

  useEffect(() => {
    if (document.getElementById('scanner')) {
      let html5QrcodeScanner = new Html5QrcodeScanner(
        'scanner',
        { fps: 10, qrbox: 250 },
        false
      );

      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    }
  }, [isReadingCode]);

  useEffect(() => {
    if (!localStorage.getItem('@DS/inventario')) {
      navigate('/login');
    }
  }, []);

  return (
    <Container className={styles['home-page-container']}>
      {!isReadingCode ? (
        <>
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
