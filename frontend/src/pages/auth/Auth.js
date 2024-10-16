import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./Auth.css"
import { login, signUp } from '../../action/AuthAction';

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const initialState = {
		name: "",
		email: "",
		password: "",
		isAdmin: "",
	};
	const [formData, setFormData] = useState(initialState);

	const handleRoleChange = (e) => {
		setFormData({ ...formData, isAdmin: e.target.value === "admin" });
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if (isSignUp) {
			dispatch(signUp(formData, navigate));
		}else{
			dispatch(login(formData,navigate));
		}
	}

	return (
		<>
			<div class="signup-container">
				<div class="signup-box">
					<h2>{isSignUp ? 'Register' : 'Login'}</h2>
					<form id="signup-form" onSubmit={handleSubmit}>
						{
							isSignUp && (
								<div class="form-group">
									<label for="name">Full Name</label>
									<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
								</div>
							)
						}
						<div class="form-group">
							<label for="email">Email Address</label>
							<input type="email" id="email" name="email" value={formData.eamil} onChange={handleChange} placeholder="Enter your email" />
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required minlength="6" />
						</div>

						{/*  User Role Selection  */}
						<div class="form-group">
							<label> Role</label>
							<div class="role-selection">
								<input
									type="radio"
									id="admin"
									name="user-role"
									value="admin"
									onChange={handleRoleChange}
								/>
								<label for="admin">Admin</label>

								<input
									type="radio"
									id="player"
									name="user-role"
									value="player"
									onChange={handleRoleChange}
								/>
								<label for="player">player</label>
							</div>
						</div>

						<button type="submit" class="signup-btn">{isSignUp ? "Sign Up" : "Sign In"}</button>
						<div className="check">
							<span
								style={{
									fontSize: "12px",
									cursor: "pointer",
									textDecoration: "underline",
								}}
								onClick={() => { 
									setIsSignUp((prev) => !prev);
								}}
							>
								{isSignUp
									? "Already have an account Login"
									: "Don't have an account Sign up"}
							</span>
						</div>
					</form>
				</div>
			</div>

		</>
	)
}

export default Auth