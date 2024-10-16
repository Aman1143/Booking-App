import axios from 'axios';

const API=axios.create({baseURL:'https://booking-app-nine-blue.vercel.app/api/admin'});

export const addSportCenter=(formData)=>API.post('/addSportCenter',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
export const getAllSportCenter=()=>API.get('/getAllSportCenter',{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});


export const getSports=(center_id)=>API.get(`/getSports/${center_id}`,{ 
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});


export const addSport=({formData,center_id},navigate)=>API.post(`/addSport/${center_id}`,formData,{ 
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});