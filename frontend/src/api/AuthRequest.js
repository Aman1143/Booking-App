import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:8000/api/auth'});


export const signUp=(formData)=>API.post('/register',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});

export const login=(formData)=>API.post('/login',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
 

