import React, { useState, useEffect } from 'react'
import "./SportCenter.css"
import center from '../../images/center1.jpg'
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addSport, getSports } from '../../action/AdminAction';



const SportCenter = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, adminSports } = useSelector((state) => state.adminAllSpots);
	const [userData, setUserData] = useState();
	const { center_id } = useParams();

	const initialState = {
		sportName: "",
		totalField: "",
	};

	const [formData, setFormData] = useState(initialState);

	const handleOnchange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}
	useEffect(() => {
		const userString = localStorage.getItem('user');
		if (userString) {
			try {
				const user = JSON.parse(userString);
				setUserData(user)
			} catch (error) {
				console.error('Error parsing user from localStorage:', error);
			}
		} else {
			console.log('No user found in localStorage');
		}
	}, [])

	useEffect(() => {
		if (center_id) {
			dispatch(getSports(center_id))
		}
	}, [center_id]);

	useEffect(() => {
		console.log(adminSports);
	}, [])


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addSport({ formData, center_id }, navigate));
	}
	return (
		<>
			<Navbar />
			<div>
				{
					adminSports && adminSports.length > 0 ? (
						<div class="center-page">
							<header class="center-header">
								<h1>Sports Center Name</h1>
								<p>Choose a sport and book your field</p>
							</header>

							<div class="sport-boxes">
								{
									adminSports.map((item) => (
										<div class="sport-box">
											<img src={center} alt="Football" />
											<h2>{item.sportName}</h2>
											<h3>TotalField:{item.totalField}</h3>
											<button><a href={`/sport/${item._id}`}>View</a></button>
										</div>
									))
								}
							</div>
						</div>
					) : (
						<>
							{
								loading && (
									<span>loading....</span>
								)
							}
							{!loading && <h3>Ohh Look like you have not added any sport yet!!</h3>}
						</>
					)
				}
			</div>
			{
				userData?.userAdmin && (
					<div class="form-container" >
						<h2>Add a New Sport Field</h2>
						<form class="add-field-form" onSubmit={handleSubmit} enctype="multipart/form-data" >
							<div class="form-group">
								<label for="fieldName">Sport Name</label>
								<input type="text" id="fieldName" name="sportName"
									value={formData.sportName} onChange={handleOnchange} placeholder="Enter field name" />
							</div>


							<div class="form-group">
								<label for="fieldName">Total Field</label>
								<input type="number" id="totalField" name="totalField" value={formData.totalField} onChange={handleOnchange} placeholder="Enter total field  " />
							</div>

							<button type="submit" class="submit-button">Submit</button>
						</form>
					</div>
				)
			}

		</>
	)
}

export default SportCenter