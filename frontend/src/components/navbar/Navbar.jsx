import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
	const [userData, setUserData] = useState();
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

	return (
		<>
			<nav>
				<div className="nav__logo">SPORTS CENTER</div>
				<ul className="nav__links">
					<li className="link"><a href="/">Home</a></li>
					{userData?.userAdmin && (
						<li className="link"><a href="/adminCenters">YourCenters</a></li>
					)}
					{
						userData?.userAdmin && (
							<li className="link"><a href="/addCenter">AddCenter</a></li>
						)
					}
					<li className="link"><a href="#">Contact Us</a></li>
					{
						!userData && (
							<li className="link"><a href="/authentication">SignIn</a></li>
						)
					}
				</ul>
			</nav>
		</>
	)
}

export default Navbar
