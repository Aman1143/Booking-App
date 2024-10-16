import { createReducer } from '@reduxjs/toolkit'
const intialState = {};

export const userGetCenterReducer = createReducer(intialState, (builder) => {
	builder
		.addCase('GetCenterUserRequest', (state) => {
			state.loading = true;
		})
		.addCase('GetCenterUserSuccess', (state, action) => {
			state.loading = false;
			console.log(action.payload);
			state.allUserCenters = action.payload;
		})
		.addCase('GetCenterUserFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})

})


export const getSportFieldReducer = createReducer(intialState, (builder) => {
	builder
		.addCase('GetSportFieldRequest', (state) => {
			state.loading = true;
		})
		.addCase('GetSportFieldSuccess', (state, action) => {
			state.loading = false;
			state.sportField = action.payload;
		})
		.addCase('GetSportFieldFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
})

export const bookSlotReducer = createReducer(intialState, (builder) => {
	builder
		.addCase('BookSlotRequest', (state) => {
			state.loading = true;
		})
		.addCase('BookSlotSuccess', (state, action) => {
			state.loading = false;
			state.slotBook = action.payload;
		})
		.addCase('BookSlotFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
})


export const getFieldReducer = createReducer(intialState, (builder) => {
	builder
		.addCase('GetFieldRequest', (state) => {
			state.loading = true;
		})
		.addCase('GetFieldSuccess', (state, action) => {
			state.loading = false;
			state.field = action.payload;
		})
		.addCase('GetFieldFailure', (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
})

