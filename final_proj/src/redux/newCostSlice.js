import { createSlice } from '@reduxjs/toolkit';


 const expensesSlice = createSlice ({
    name: 'expenses',
    initialState: {
        expenses: [],
        isLoading: false,
        isEdditing: false,
        
        
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


        }
    }
})


export const {addExpenses, deleteExpenses, editExpenses} = expensesSlice.actions;

export default expensesSlice.reducer;