import { createSlice } from '@reduxjs/toolkit';
import { FILTER_TYPE } from '../constants';

 const expensesSlice = createSlice ({
    name: 'expenses',
    initialState: {
        expenses: [],
        isLoading: false,
        isEdditing: false,
        chosenExpensesId: null,
        filterType: FILTER_TYPE.ALL
        
       
    },
    reducers: {

       addExpenses (state, action) {
                state.expenses.push(action.payload)
            },


        deleteExpenses(state, action) {
                state.expenses = state.expenses.filter((expenses) => expenses.id !== action.payload);
    
            },

        editExpenses(state, action) {

            const editExpenses = state.expenses.find(({id}) => id === action.payload.id);

            editExpenses.isEdditing = !editExpenses.isEdditing;
            editExpenses.expenses = action.payload.expenses;

            },

        setSingleExpenseId(state,action) {
            state.chosenExpensesId= action.payload;
        },

        setFilterType (state,action) {
            state.filterType = action.payload;
           
        },


    }
})


export const {addExpenses, deleteExpenses, editExpenses, setSingleExpenseId, setFilterType} = expensesSlice.actions;

export default expensesSlice.reducer;