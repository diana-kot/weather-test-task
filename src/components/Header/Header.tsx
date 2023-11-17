import React from 'react';
import { Link } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';

import LogoIcon from '../../assets/images/svg/Logo.svg';

import Icon from '../../UI/Icon/Icon';

import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container center flex">
                <Link to={routerPath.INDEX} className="header__logo">
                    <img src={LogoIcon} alt="Логотип" className="header__image" />
                    {/* 
                     <Icon id="Logo" size={32} /> */}
                    <p className="header__text">WeatherCheck</p>
                </Link>
            </div>
        </header>
    );
}
