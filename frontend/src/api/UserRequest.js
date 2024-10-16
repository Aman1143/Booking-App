import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api/user' });

export const getAllSportCenteruser = () => API.get('/getAllSportCenterUser', {
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});


export const getSportField = (sport_id) => API.get(`/getSportField/${sport_id}`, {
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});


export const bookSlot = ({ field_id, index} ) => API.get(`/bookSlot/${field_id}/${index}`, {
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});


export const getField = (fieldId) => API.get(`/getField/${fieldId} `, {
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});