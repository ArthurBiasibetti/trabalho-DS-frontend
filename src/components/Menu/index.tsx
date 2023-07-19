import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { MenuProps } from './interfaces';
import myImage from '../../img/ifsul-logo.png';
import styles from './styles.module.scss';
import { Servidor } from '../../interfaces/servidor';

export const Menu: React.FC<MenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const servidor: Servidor = JSON.parse(
    localStorage.getItem('@DS/inventario')!
  );

  const navigate = useNavigate();

  return (
    <div
      className={`${styles['menu']} ${isOpen ? styles['open'] : ''}`}
      tabIndex={0}
    >
      <div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles['bars-icon']}`}
          tabIndex={0}
          onClick={() => setIsOpen((oldState) => !oldState)}
        />
        {isOpen && (
          <nav>
            <img
              src={myImage}
              alt="Logo IFSul"
              className={`${styles['logo-img']}`}
            />
            <ul>
              {servidor.cargo.id == 0 && (
                <li className={`${styles['menu-item']}`}>
                  <Link to="/"> Importar CSV</Link>
                </li>
              )}
              <li className={`${styles['menu-item']}`}>
                <Link
                  to={
                    servidor.cargo.id === 0
                      ? '../admin/room'
                      : '../servidor/room'
                  }
                >
                  Selecionar Responsáveis das salas
                </Link>
              </li>
              <li className={`${styles['menu-item']}`}>
                <Link to="/readcode"> Buscar Patrimônio</Link>
              </li>
              <li className={`${styles['menu-item']}`}>
                <Link to="/invlist"> Lista Inventário</Link>
              </li>
              <li
                className={`${styles['menu-item']}`}
                onClick={() => {
                  localStorage.removeItem('@DS/inventario');
                  navigate('/login');
                }}
              >
                Logout
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
