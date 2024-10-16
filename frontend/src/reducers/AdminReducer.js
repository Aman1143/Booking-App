import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

export const adminCenterAddReducer = createReducer(initialState, (builder) => {
	builder
		.addCase('CenterAddRequest', (state) => {
			state.loading = true;
		})
		.addCase('CenterAddSuccess', (state, action) => {
			state.loading = false;
		})
		.addCase('CenterAddFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
});

export const adminGetCenterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase('GetCenterRequest', (state) => {
			state.loading = true;
		})
		.addCase('GetCenterSuccess', (state, action) => {
			state.loading = false;
			state.allCenters = action.payload;
		})
		.addCase('GetCenterFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})

})


export const adminGetSportCenterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase('GetSportCenterRequest', (state) => {
			state.loading = true;
		})
		.addCase('GetSportCenterSuccess', (state, action) => {
			state.loading = false;
			state.adminSports = action.payload;
		})
		.addCase('GetSportCenterFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
})


export const adminAddSportReducer = createReducer(initialState, (builder) => {
	builder
		.addCase('AddSportRequest', (state) => {
			state.loading = true;
		})
		.addCase('AddSportSuccess', (state, action) => {
			state.loading = false;
			state.adminAddSports = action.payload;
		})
		.addCase('AddSportFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
})