import { createSlice } from '@reduxjs/toolkit';


 const costSlice = createSlice ({
    name: 'costs',
    initialState: {
        categories: [],
        // costs: [],
        isLoading: false,
        isEditing: false
    },
    reducers: {

        addCategory (state, action) {
            state.categories.push(action.payload);
        },

        deleteCategory(state, action) {
            state.categories = state.categories.filter((category) => category.id !== action.payload);

        },


        editCategory (state, action) {
            const categoryToEdit = state.categories.find(({id}) => id === action.payload.id);
      
            categoryToEdit.isEditing = !categoryToEdit.isEditing;
            categoryToEdit.categories = action.payload.text;
          },

        // editCategory(state, action) {
        //     state.categories = 

        // },



        
    }
})

export const { addCategory, deleteCategory, editCategory} = costSlice.actions;
export const {addCost, deleteCost, editCost} = costSlice.actions;

export default costSlice.reducer;