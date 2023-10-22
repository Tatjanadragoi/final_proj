import {configureStore} from '@reduxjs/toolkit';
import costsReducer from './costSlice'
import expensesReducer from './newCostSlice'



export const store = configureStore({
    reducer: {
        costs: costsReducer,
        // auth: authReducer
        expenses: expensesReducer
    } 
});


export default store;

