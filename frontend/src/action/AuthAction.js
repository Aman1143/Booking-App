import *as AuthApi from '../api/AuthRequest.js'

export const signUp = (formData, navigate) => async (dispatch) => {
	dispatch({ type: "RegisterRequest" });
	try {
		const { data } = await AuthApi.signUp(formData);
		dispatch({ type: 'RegisterSuccess', payload: data });
		navigate('../', { replace: true });
	} catch (error) {
		dispatch({ type: "RegisterFailure", payload: error.response.data.message });
	}
}

export const login = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "LoginRequest" });
    try {
        const { data } = await AuthApi.login(formData);
        dispatch({ type: 'LoginSuccess', payload: data });
        navigate('../', { replace: true });

    } catch (error) {
        dispatch({ type: "LoginFailure", payload: error.response.data.message });
    }
}