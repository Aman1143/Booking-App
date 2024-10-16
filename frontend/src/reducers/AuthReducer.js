import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

export const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase('RegisterRequest', (state) => {
			state.loading = true;
		})
		.addCase('RegisterSuccess', (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			localStorage.setItem('token', action.payload.token);
			console.log(action.payload.user);
			localStorage.setItem('user', JSON.stringify(action.payload.user));
			state.isAuthenticated = true;
		})
		.addCase('RegisterFailure', (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		})
		.addCase('LoginRequest', (state) => {
			state.loading = true;
		})
		.addCase('LoginSuccess', (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			localStorage.setItem('token', action.payload.token);
			console.log(action.payload.user);
			localStorage.setItem('user', JSON.stringify(action.payload.user));
			state.isAuthenticated = true;
		})
		.addCase('LoginFailure', (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		});
});
