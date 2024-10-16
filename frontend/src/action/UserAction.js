import *as AuthApi from '../api/UserRequest.js'

export const getAllSportCenteruser = () => async (dispatch) => {
	dispatch({ type: "GetCenterUserRequest" });
	try {
		const { data } = await AuthApi.getAllSportCenteruser();
		dispatch({ type: 'GetCenterUserSuccess', payload: data.sportCenters });
	} catch (error) {
		dispatch({ type: "GetCenterUserFailure", payload: error.response.data.message });
	}
}

export const getSportField = (sport_id) => async (dispatch) => {
	dispatch({ type: "GetSportFieldRequest" });
	try {
		const { data } = await AuthApi.getSportField(sport_id);
		dispatch({ type: 'GetSportFieldSuccess', payload: data.allField });
	} catch (error) {
		dispatch({ type: "GetSportFieldFailure", payload: error.response.data.message });
	}
}
export const bookSlot = ({ field_id, index }) => async (dispatch) => {
	dispatch({ type: "BookSlotRequest" });
	try { 
		const { data } = await AuthApi.bookSlot({ field_id, index }); 
		dispatch({ type: 'BookSlotSuccess', payload: data });
	} catch (error) {
		dispatch({ type: "BookSlotFailure", payload: error.response.data.message });
	}
}


export const getField = (fieldId) => async (dispatch) => {
	dispatch({ type: "GetFieldRequest" });
	try { 
		const { data } = await AuthApi.getField(fieldId); 
		console.log(data);
		dispatch({ type: 'GetFieldSuccess', payload: data.field });
	} catch (error) {
		dispatch({ type: "GetFieldFailure", payload: error.response.data.message });
	}
}

