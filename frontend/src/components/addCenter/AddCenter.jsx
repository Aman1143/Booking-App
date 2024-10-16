import React, { useState } from 'react';
import "./AddCenter.css";
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSportCenter } from '../../action/AdminAction';

const AddCenter = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		centerName: "",
		games: [""]
	});

	const handleAddGame = () => {
		setFormData((prevState) => ({
			...prevState,
			games: [...prevState.games, ''] // Add a new empty string to the games array
		}));
	};

	// Function to handle changes in game input fields
	const handleGameChange = (index, value) => {
		const updatedGames = [...formData.games];
		updatedGames[index] = value; // Update the specific game input
		setFormData((prevState) => ({
			...prevState,
			games: updatedGames,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		dispatch(addSportCenter(formData, navigate));
	};

	return (
		<>
			<Navbar />
			<div className="container">
				<h2>Add Sport Center</h2>

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="centerName">Center Name</label>
						<input
							type="text"
							id="centerName"
							value={formData.centerName}
							onChange={(e) => setFormData({ ...formData, centerName: e.target.value })}
							placeholder="Enter center name"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="game">Available Games</label>
						<div id="games-list">
							{formData.games.map((game, index) => (
								<input
									key={index}
									type="text"
									id={`game-${index}`}
									value={game}
									onChange={(e) => handleGameChange(index, e.target.value)} // Handle change for the specific input
									placeholder="Enter game name"
									required
								/>
							))}
						</div>
						<button type="button" className="add-game-btn button-70" onClick={handleAddGame}>
							Add Game
						</button>
					</div>

					<button type="submit" className="button-70">Submit</button>
				</form>
			</div>
		</>
	);
};

export default AddCenter;
