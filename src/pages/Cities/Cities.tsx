import React from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '../../layouts/MainLayout/MainLayout';

import SectionCities from '../../components/SectionCities/SectionCities';
import SectionSearch from '../../components/SectionSearch/SectionSearch';
import SectionText from '../../components/SectionText/SectionText';

import { selectFavoritesData } from 'redux/favorites/selectors';

export default function Cities() {
    const { favorites } = useSelector(selectFavoritesData);

    return (
        <MainLayout>
            <div className="cities-page">
                <div className="container center">
                    <SectionSearch />
                    {favorites.length > 0 ? <SectionCities favorites={favorites} /> : <SectionText />}
                </div>
            </div>
        </MainLayout>
    );
}
