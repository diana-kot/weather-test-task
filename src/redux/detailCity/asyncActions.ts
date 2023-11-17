import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICity } from 'redux/cities/types';

import { API_KEY, SERVER_URL_API } from 'constants/config';

export const fetchDetailCity = createAsyncThunk<ICity, any>(
    'cities/fetchDetailCity',
    async (id, { rejectWithValue }) => {
        const url = `${SERVER_URL_API}/weather?q=${id}&appid=${API_KEY}&units=metric&lang=ru`;

        try {
            const res = await fetch(url);

            if (!res.ok) {
                return rejectWithValue('Ошибка запроса!');
            }

            const data = await res.json();

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
