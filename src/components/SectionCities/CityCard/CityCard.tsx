import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { routerPath } from 'constants/routerPath';

import { useAppDispatch } from 'redux/store';
import { fetchDetailCity } from 'redux/detailCity/asyncActions';

import './CityCard.css';

export default function CityCard({ item }: any) {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    
    const getDetailCities = () => {
        dispatch(fetchDetailCity(id));
    };

    useEffect(() => {
        getDetailCities();
    }, []);

    return (
        <Link className="city-card" to={`${routerPath.CITIES}/${item.name}`}>
            <div className="city-card__content">
                <div className="city-card__name">{item.name}</div>
                <div className="city-card__temp">{String(item.temp)}°</div>

                <div className="city-card__image">
                    <img src={require(`../../../assets/images/svg/${item.image}.svg`)} alt={`Изображение:`} />
                </div>
            </div>
        </Link>
    );
}
