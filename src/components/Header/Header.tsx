import React from 'react';
import { Link } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';

import LogoIcon from '../../assets/images/svg/Logo.svg';

import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container center flex header__container">
                <Link to={routerPath.INDEX} className="header__logo">
                    <img src={LogoIcon} alt="Логотип" className="header__image" />
                    <p className="header__text">WeatherCheck</p>
                </Link>
            </div>
        </header>
    );
}
