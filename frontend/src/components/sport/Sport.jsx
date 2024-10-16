import React, { useState, useEffect } from 'react'
import center from '../../images/center1.jpg'
import './Sport.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { bookSlot, getField, getSportField } from '../../action/UserAction';


const Sport = () => {
	const { sport_id } = useParams();
	const dispatch = useDispatch();
	const [userData, setUserData] = useState();


	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);



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


	const { loading, sportField } = useSelector((state) => state.sportAllField);
	const { field } = useSelector((state) => state.getField);
	const [fieldShedule, setFieldShedule] = useState(() => {
		return (field) ? field : "";
	});



	useEffect(() => {
		dispatch(getSportField(sport_id));
	}, [])


	const handleOnClick = (fieldId, item) => {
		dispatch(getField(item._id));
	}

	const handleSlotBook = (field_id, index) => {
		if (!userData?.userAdmin) {
			if (fieldShedule && fieldShedule.time[index]) {
				alert("Already Booked Sorry !! ");
				return;
			}
		}
		dispatch(bookSlot({ field_id, index }))
		if (fieldShedule && fieldShedule.time[index]) {
			alert("Made Avilable by admin");
		} else {
			alert("Booked");
		}
		window.location.reload();
	}


	useEffect(() => {
		if (field) {
			setFieldShedule(field);
		}
	}, [handleOnClick])
	return (
		<>
			<div class="booking-page">
				<header class="page-header">
					<h1>Book a Field for Sport</h1>
					<p>Select a time slot to book your field.</p>
				</header>

				<div class="field-images">
					<h2>Available Fields</h2>
					<div className="date">
						<h3> Date: {currentDate.toLocaleDateString()}</h3>
					</div>
					<div class="fields-gallery">
						<img src={center} alt="Field 1" />
						<img src={center} alt="Field 2" />
						<img src={center} alt="Field 3" />
					</div>
				</div>

				<div class="schedule">
					<h2>Schedule</h2>

					<div class="tabs">
						{
							sportField && sportField.length > 0 ? (
								sportField.map((item, index) => (
									<button className="tab active" onClick={() =>
										handleOnClick(item?._id, item)}>
										Court  {index + 1}
									</button>
								))
							) : (
								<>
									{
										loading && (
											<span>loading....</span>
										)
									}
									{!loading && <h3>NO Field herer !!</h3>}
								</>
							)
						}
					</div>

					<>
						<div className="center">
							{
								fieldShedule?.time ? (
									fieldShedule.time.map((item, index) => (
										<div className="time-table" key={index}>
											<div className="time-column">
												<div className="time-slot">
													{index % 12 === 0 ? 12 : index % 12} {index < 12 ? "AM" : "PM"}
												</div>
												<div
													className={`booking-slot ${item === true ? 'yes' : 'no'}`}
													onClick={() => handleSlotBook(fieldShedule._id, index)}
												>
													{item === true ? "Booked" : "Available"}
												</div>
											</div>
										</div>
									))
								) : (
									<span style={{
										fontSize: "12px",
										textDecoration: "underline",
										alignItems: 'center'
									}}>click slot</span>
								)
							}
						</div>
					</>





				</div>

			</div>
		</>
	)
}

export default Sport

