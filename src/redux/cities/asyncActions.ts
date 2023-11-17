import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICity, SearchCitiesParams } from './types';

import { GEO_API_URL, API_KEY_GEO } from 'constants/config';

export const fetchCities = createAsyncThunk<ICity[], SearchCitiesParams>(
    'cities/fetchCities',
    async (params, { rejectWithValue }) => {
        const { inputValue } = params;

        const geoOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${API_KEY_GEO}`,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
        };

        const url = `${GEO_API_URL}/cities?namePrefix=${inputValue}&languageCode=RU&types=CITY&namePrefixDefaultLangResults=True&sort=-population&limit=1`;

        try {
            const res = await fetch(url, geoOptions);

            if (!res.ok) {
                return rejectWithValue('Ошибка запроса!');
            }

            const items = await res.json();
            const { data } = items;

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);


