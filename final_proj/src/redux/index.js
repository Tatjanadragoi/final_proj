import {configureStore} from '@reduxjs/toolkit';
import costsReducer from './costSlice'


export const store = configureStore({
    reducer: {
        costs: costsReducer,
        // auth: authReducer
    } 
});