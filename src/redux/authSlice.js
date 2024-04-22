import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isLoggedIn: false,
  user: JSON.parse(localStorage.getItem('user')) || null, 
  loginError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; 
      state.loginError = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.loginError = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null; 
      state.loginError = null;
      localStorage.removeItem('user');
    },
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { loginSuccess, loginFailure, logout, setUser } = authSlice.actions;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectLoginError = state => state.auth.loginError;
export const selectUser = state => state.auth.user; 

export default authSlice.reducer;
