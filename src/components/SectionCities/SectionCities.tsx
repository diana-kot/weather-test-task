import React from 'react';

import { ICity } from 'redux/favorites/types';

import CitiesList from './CitiesList/CitiesList';

import './SectionCities.css';

interface ICitiesList {
    favorites: Array<ICity>;
}

export default function SectionCities({ favorites }: ICitiesList) {
    return (
        <section className="section-cities">
            <div className="container section-cities__container">
                <div className="">
                    <CitiesList cities={favorites} />
                </div>
            </div>
        </section>
    );
}
