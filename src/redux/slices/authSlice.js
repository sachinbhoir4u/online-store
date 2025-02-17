import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginWithGoogle: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user)); 
    },
    logout: (state) => {
      state.user = null; 
      localStorage.removeItem('user');
    },
  },
});

export const { loginWithGoogle, logout } = authSlice.actions;
export default authSlice.reducer;
