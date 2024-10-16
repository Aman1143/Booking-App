import React, { useEffect, useState } from 'react'
import "./Home.css"
import client1 from '../../images/client-1.jpg'
import center from '../../images/center1.jpg'
import header from '../../images/header.jpg'
import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSportCenteruser } from '../../action/UserAction'

const Home = () => {
	const dispatch = useDispatch();
	const { loading, allUserCenters } = useSelector((state) => state.allSportCentersUser) 

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


	useEffect(() => {
		dispatch(getAllSportCenteruser());
	}, [])
	return (
		<>
			<Navbar />
			<header className="section__container header__container">
				<div className="header__image__container">
					<div className="header__content">
						<h1>Enjoy Your sports</h1>
						<p>Book fields, courts and stay fit</p>
					</div>

				</div>
			</header>



{/* All Center */}
			<section className="section__container popular__container">
				<h2 className="section__header">{!userData?.userAdmin?"Our Data":""}</h2>
				{
					!userData?.userAdmin && (
						<div className="popular__grid">
							{
								allUserCenters?.length > 0 && allUserCenters ? (
									allUserCenters.map((item) => (
										<div className="popular__card"  >
											<img src={center} alt="lorem" className="center-image" />
											<div className="popular__content">
												<div className="popular__card__header">
													<h4>{item.name} </h4>
													<button className="button-70">
														<a href={`/sportCenter/${item._id}`}>View</a>
													</button>
												</div>
												<p> Sports</p>
											</div>
										</div>
									))
								) : (
									<>
										{
											loading && (
												<span>loading....</span>
											)
										}
										{!loading && <h1>No  Sports Centers</h1>}
									</>
								)
							}
						</div>
					)
				}
			</section>


			{/* Our client */}

			<section className="client">
				<div className="section__container client__container">
					<h2 className="section__header">What our client say</h2>
					<div className="client__grid">
						<div className="client__card">
							<img src={client1} alt="client" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquam quos
								labore possimus qui expedita perspiciatis au nesciunt a qui impedit sunt!.
							</p>
						</div>
						<div className="client__card">
							<img src={client1} alt="client" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, praesentium!
								Magni rem commodi error esse dignissimos, vel at eligendi beatae.
							</p>
						</div>
						<div className="client__card">
							<img src={client1} alt="client" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A numquam ipsam unde voluptatibus
								omnis incidunt, officia nam sed ut! Neque.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section__container">
				<div className="reward__container">
					<p>100+ discount offers</p>
					<h4>Join rewards and discover amazing discounts on your booking</h4>
					<button className="reward__btn">Join Rewards</button>
				</div>
			</section>

			<footer className="footer">
				<div className="section__container footer__container">
					<div className="footer__col">
						<h3>SPORT CENTER</h3>
						<p>
							SPORT CENTER is a premier sport center booking website that offers a seamless and
							convenient way to find and book ground worldwide.
						</p>
						<p>
							With a user-friendly interface and a vast selection of sport center,
							SPORT CENTER aims to provide a stress-free experience for player
							seeking the perfect play.
						</p>
					</div>
					<div className="footer__col">
						<h4>Company</h4>
						<p>About Us</p>
						<p>Our Team</p>
						<p>SignIn</p>
						<p>Book</p>
						<p>Contact Us</p>
					</div>
					<div className="footer__col">
						<h4>Legal</h4>
						<p>FAQs</p>
						<p>Terms & Conditions</p>
						<p>Privacy Policy</p>
					</div>
					<div className="footer__col">
						<h4>Resources</h4>
						<p>Social Media</p>
						<p>Help Center</p>
						<p>Partnerships</p>
					</div>
				</div>
				<div className="footer__bar">
					Copyright © 2023 Web Design Aman Nanda IIT2021272. All rights reserved.
				</div>
			</footer>
		</>
	)
}

export default Home