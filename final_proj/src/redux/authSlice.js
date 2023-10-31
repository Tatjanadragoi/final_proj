import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithGoogle, logout, register, signIn } from '../firebase'

const INITIAL_STATE = {
    user: null
};

export const loginWithGoogle = createAsyncThunk(
    'auth/loginWithGoogle',
    async (_, thunkApi) => {
       const {user: {uid, email, displayName}} = await signInWithGoogle();

       const user = {uid, email, displayName}

       thunkApi.dispatch(setUser(user))
   
    
    });


 export const logoutFromApp = createAsyncThunk(
    'auth/logoutFromApp',
    async(_, thunkApi) => {
       await logout()

        return null;
        
    });


    export const registerUser = createAsyncThunk(
        "auth/register",
        async ({ email: userEmail, password }, thunkApi) => {
         
            const {
                payload: {
                  user: { uid, email, displayName },
                },
              } = await register(userEmail, password);
              return { uid, email, displayName };
         
      
        }
      );


export const signInUser = createAsyncThunk(
    'auth/signin',
    async ({email: userEmail, password}, thunkApi) => {
        try {
            const {
                user: {uid, email, displayName }
            } = await signIn(userEmail, password);
            return {uid, email, displayName};
        }
        catch (err) {
            console.log(err)
        }
       
      }       
    
  );


const authSlice = createSlice ({
name: 'auth',
initialState: INITIAL_STATE,
reducers: {
    setUser (state,action) {
        state.user = action.payload;
    },
},
    
extraReducers: {
    [logoutFromApp.rejected]: (state) => {
        state.user = null;

    }, 
    [logoutFromApp.fulfilled]: (state) => {
        state.user = null;
    },
    
    [registerUser.fulfilled]: (state, userData) => {
        state.user = userData.payload;

    }, 

    [signInUser.fulfilled]: (state, userData) => {
        state.user = userData.payload;
    }
    
}


});


export const {setUser} = authSlice.actions
export default authSlice.reducer;