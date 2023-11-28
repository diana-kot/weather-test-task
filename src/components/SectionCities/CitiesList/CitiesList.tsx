import React from 'react';

import { ICity } from 'redux/favorites/types';

import CityCard from '../CityCard/CityCard';

import './CitiesList.css';

type ICities = {
    cities: Array<ICity>;
};

export default function CitiesList({ cities }: ICities) {
    return (
        <ul className="cities__list grid-three">
            {cities &&
                cities.length > 0 &&
                cities.map((item: any) => (
                    <li className="list__item" key={item.name}>
                        <CityCard item={item} />
                    </li>
                ))}
        </ul>
    );
}
