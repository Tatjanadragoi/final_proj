import { createSlice } from '@reduxjs/toolkit';


 const costSlice = createSlice ({
    name: 'costs',
    initialState: {
        categories: [],
        // costs: [],
        isLoading: false
    },
    reducers: {

        addCategory (state, action) {
            state.categories.push(action.payload);
        },

        deleteCategory(state, action) {
            state.categories = state.categories.filter((category) => category.id !== action.payload);

        },

        // editCategory(state, action) {
        //     state.categories = 

        // },



        // addCost (state, action) {
        //         state.costs.push(action.payload)
        //     },


        // deleteCost (state, action) {
            
        // }
    }
})

export const { addCategory, deleteCategory, editCategory} = costSlice.actions;
export const {addCost, deleteCost, editCost} = costSlice.actions;

export default costSlice.reducer;