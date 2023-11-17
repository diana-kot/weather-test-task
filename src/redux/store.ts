import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import cities from './cities/slice';
import city from './detailCity/slice'
import favorites from './favorites/slice'

export const store = configureStore({
    reducer: { 
      cities,
      city,
      favorites
    },
});




export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
