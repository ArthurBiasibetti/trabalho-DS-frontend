import React, { useEffect, useState } from 'react';

import { Container } from '../../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../components/Button';
import styles from './styles.module.scss';

import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate, useParams } from 'react-router-dom';
import { Table } from '../../components/Table';
import HttpClient from '../../config/axios';
import { Patrimonio } from '../../interfaces/patrimonio';

const defaultTableData: Patrimonio[] = [{ numero: 0, descricao: '' }];

export const ReadcodePage: React.FC = () => {
  const [isReadingCode, setIsReadingCode] = useState(false);
  const [dataTable, setDataTable] = useState(defaultTableData);
  const [isTableOpen, setIsTableOpen] = useState(false);
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

  useEffect(() => {
    const pegarPatrimonio = async () => {
      try {
        const response = await HttpClient.api.get<{ message: Patrimonio[] }>(
          `/core/retorna-patrimonio-sala/${idSala}`
        );

        console.log(response.data.message);

        response.data.message.length > 0 && setDataTable(response.data.message);
      } catch (e) {
        console.error(e);
      }
    };

    pegarPatrimonio();
  }, []);

  return (
    <Container className={styles['home-page-container']}>
      <div className={styles['subtitle-page']}>
        <p>Buscar Patrimônio</p>
        <Button
          color="primary"
          className={styles['open-close']}
          onClick={() => setIsTableOpen((oldState) => !oldState)}
        >
          {isTableOpen ? 'Fechar Tabela' : 'Abrir Tabela'}
        </Button>
      </div>

      <div className={styles['inventories-content']}>
        <div
          className={`${styles['table-wrapper']} ${
            isTableOpen ? styles['isOpen'] : ''
          }`}
        >
          <Table data={dataTable} />
        </div>
        <div
          className={`${styles['sections']} ${
            isTableOpen ? styles['isClose'] : ''
          }`}
        >
          <div
            id="scanner"
            style={{
              width: '50vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          />
          <div className={styles['actions']}>
            <label htmlFor="">Informe o código do patrimonio</label>
            <input type="text" name="inventories-code" id="inventories-code" />
            <Button color="primary"> Selecionar </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
