import React from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from './interfaces';
import styles from './styles.module.scss';

export const Menu: React.FC<MenuProps> = () => {
    return (
    <div>
        <nav className={`${styles['menu']}`}>
            <ul>
                <li className={`$${styles['menu-item']}`}> <Link to="/login"> Login</Link> </li>
                <li className={`$${styles['menu-item']}`}> <Link to="/"> Carregar CSV</Link> </li>
                <li className={`$${styles['menu-item']}`}> <Link to="/room"> Selecionar Sala </Link> </li>
                <li className={`$${styles['menu-item']}`}> <Link to="/invlist"> Lista Inventário</Link> </li>
                <li className={`$${styles['menu-item']}`}>Logout</li>
            </ul>
        </nav>
    </div>
    )
}