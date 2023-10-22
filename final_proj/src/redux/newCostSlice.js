import { createSlice } from '@reduxjs/toolkit';


 const expensesSlice = createSlice ({
    name: 'expenses',
    initialState: {
        expenses: [],
        isLoading: false,
        
        
    },
    reducers: {

       

        // deleteCategory(state, action) {
        //     state.categories = state.categories.filter((category) => category.id !== action.payload);

        // },

        


        addExpenses (state, action) {
                state.expenses.push(action.payload)
            },


        deleteCost (state, action) {
            
        }
    }
})


export const {addExpenses, deleteExpenses, editExpenses} = expensesSlice.actions;

export default expensesSlice.reducer;