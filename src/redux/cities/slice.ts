import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from './asyncActions';
import { CitiesSliceState } from './types';

const initialState: CitiesSliceState = {
    items: [],
    status: null,
    error: null,
};

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        resetItems(state) {
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCities.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(fetchCities.fulfilled, (state, action) => {
            state.status = 'completed';
            state.items = action.payload;
        });

        builder.addCase(fetchCities.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload;
            state.items = [];
        });
    },
});

export const { resetItems } = citiesSlice.actions;

export default citiesSlice.reducer;
