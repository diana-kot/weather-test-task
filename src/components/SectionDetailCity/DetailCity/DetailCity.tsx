import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useWindowWidth } from 'hook/useWindowWidth';

import { removeCityFromFavorite, addCityToFavorite } from 'redux/favorites/slice';
import { selectFavoritesData } from 'redux/favorites/selectors';

import GoBack from '../../../UI/GoBack/GoBack';
import Icon from '../../../UI/Icon/Icon';

import './DetailCity.css';

type ICity = {
    city: any;
};

export default function DetailCity({ city }: ICity) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { favorites } = useSelector(selectFavoritesData);

    const windowWidth = useWindowWidth();

    const [cityFavorite, setCityFavorite] = useState<Boolean>(false);

    const now = new Date();
    const sunrise = new Date(city.sys.sunrise * 1000);
    const sunset = new Date(city.sys.sunset * 1000);
    const temp = Math.round(city.main.temp);

    const dispatchFavoriteCity = () => {
        if (cityFavorite) {
            dispatch(removeCityFromFavorite(city.name));
        } else {
            dispatch(
                addCityToFavorite({
                    name: city.name,
                    temp: temp,
                    image: city.weather[0].main,
                }),
            );
        }

        setCityFavorite(!cityFavorite);
    };

    useEffect(() => {
        let searchTerm = id;
        let cityId = favorites.find((city) => city.name === searchTerm);
        cityId ? setCityFavorite(true) : setCityFavorite(false);
    }, [id]);

    return (
        <>
            <div className="navigation">
                <GoBack text={windowWidth > 560 ? 'Назад' : ''} />
                {cityFavorite ? (
                    <Icon id="Bookmark_use" size={24} onClick={dispatchFavoriteCity} />
                ) : (
                    <Icon id="Bookmark" size={24} onClick={dispatchFavoriteCity} />
                )}
            </div>
            <div className="detail-city">
                <h3 className="detail-city__name">{city.name}</h3>
                <div className="detail-city__weather">{city.weather[0] && city.weather[0].description}</div>

                <div className="detail-city__temp">
                    <span className="detail-city__temp-span">{temp}°</span>
                    <img
                        src={require(`../../../assets/images/svg/${city.weather[0].main}.svg`)}
                        alt={`Изображение:`}
                        className="detail-city__temp-image"
                    />
                </div>
                <div className="detail-city__barometer">
                    <span>{Math.round(city.main.pressure * 0.75006375541921)} мм рт. ст.</span>
                </div>
                <div className="detail-city__daybreak">
                    {now < sunrise || now > sunset
                        ? `Восход в ${sunrise.toLocaleTimeString('ru', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}`
                        : `Закат в ${sunset.toLocaleTimeString('ru', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}`}
                </div>
            </div>
        </>
    );
}
