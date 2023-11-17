import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDetailCity } from './asyncActions';
import { ICity, CitySliceState } from './types';

const initialState: CitySliceState = {
    item: {
        id: '',
        name: '',
        latitude: 0,
        longitude: 0,
        countryCode: '',
    },
    error: null,
    status: null,
};

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailCity.pending, (state) => {
            state.item = {
                id: '',
                name: '',
                latitude: 0,
                longitude: 0,
                countryCode: '',
            };
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(fetchDetailCity.fulfilled, (state, action: PayloadAction<ICity>) => {
            state.item = action.payload;
            state.status = 'completed';
        });

        builder.addCase(fetchDetailCity.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload;
        });
    },
});

export default citySlice.reducer;
