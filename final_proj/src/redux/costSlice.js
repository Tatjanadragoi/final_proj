import { createSlice } from '@reduxjs/toolkit';


 const costSlice = createSlice ({
    name: 'costs',
    initialState: {
        costItems: [],
        isLoading: false
    },
    reducers: {

        

            addCost (state, action) {
                state.costs.push({
                    id: Date.now(),
                    cost: action.payload,
                    isEditting: false

                })
            },






            deleteCost (state, action) {}
    }
})


export default costSlice.reducer;