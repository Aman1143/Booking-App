import *as AuthApi from '../api/AdminRequest.js'

export const addSportCenter = (formData, navigate) => async (dispatch) => {
	dispatch({ type: "CenterAddRequest" });
	try {
		const { data } = await AuthApi.addSportCenter(formData);
		dispatch({ type: 'CenterAddSuccess', payload: data });
		navigate('../', { replace: true });
	} catch (error) {
		dispatch({ type: "CenterAddFailure", payload: error.response.data.message });
	}
}
export const getAllSportCenter = () => async (dispatch) => {
	dispatch({ type: "GetCenterRequest" });
	try {
		const { data } = await AuthApi.getAllSportCenter();
		// console.log(data);
		dispatch({ type: 'GetCenterSuccess', payload: data.sportCenters }); 
	} catch (error) {
		dispatch({ type: "GetCenterFailure", payload: error.response.data.message });
	}
}


export const getSports = (center_id) => async (dispatch) => {
	dispatch({ type: "GetSportCenterRequest" });
	try {
		const { data } = await AuthApi.getSports(center_id);
		console.log(data);
		console.log("get");
		dispatch({ type: 'GetSportCenterSuccess', payload: data.sports }); 
	} catch (error) {
		dispatch({ type: "GetSportCenterFailure", payload: error.response.data.message });
	}
}


export const addSport = ({formData,center_id},navigate) => async (dispatch) => {
	dispatch({ type: "AddSportRequest" });
	try {
		const { data } = await AuthApi.addSport({formData,center_id},navigate);  
		dispatch({ type: 'AddSportSuccess', payload: data }); 
		navigate('/', { replace: true });
	} catch (error) {
		dispatch({ type: "AddSportFailure", payload: error.response.data.message });
	}
}
