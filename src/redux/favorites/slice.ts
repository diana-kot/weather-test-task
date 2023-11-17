import { createSlice } from '@reduxjs/toolkit';
import { FavoritesSliceState } from './types';

const initialState: FavoritesSliceState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addCityToFavorite: (state, action) => {
            state.favorites = [...state.favorites, action.payload]
        },
        removeCityFromFavorite(state, action) {
            state.favorites = state.favorites.filter(city => city.name !== action.payload);
        },
    },
});

export const { removeCityFromFavorite, addCityToFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
