import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { MenuProps } from './interfaces';
import myImage from '../../img/ifsul-logo.png';
import styles from './styles.module.scss';

export const Menu: React.FC<MenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <li className={`${styles['menu-item']}`}>
                <Link to="/login"> Login</Link>
              </li>
              <li className={`${styles['menu-item']}`}>
                <Link to="/"> Carregar CSV</Link>
              </li>
              <li className={`${styles['menu-item']}`}>
                <Link to="/room"> Selecionar Sala </Link>
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
