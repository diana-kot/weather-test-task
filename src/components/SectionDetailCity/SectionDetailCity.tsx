import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loader from 'UI/Loader/Loader';
import DetailCity from './DetailCity/DetailCity';
import ErrorInfo from 'components/ErrorInfo/ErrorInfo';

import { useAppDispatch } from 'redux/store';
import { selectCityData } from 'redux/detailCity/selectors';
import { fetchDetailCity } from 'redux/detailCity/asyncActions';

import './SectionDetailCity.css';

export default function SectionDetailCity() {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const { item, status } = useSelector(selectCityData);

    const getDetailCities = () => {
        dispatch(fetchDetailCity(id));
    };

    useEffect(() => {
        getDetailCities();
    }, []);

    return (
        <section className="section-city">
            {status === 'loading' && <Loader />}
            <div className="container center section-city__container">
                {status === 'error' && <ErrorInfo />}

                <div className="section-city__content">{status === 'completed' && <DetailCity city={item} />}</div>
            </div>
        </section>
    );
}
