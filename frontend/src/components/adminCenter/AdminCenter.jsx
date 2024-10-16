import React, { useEffect, useState } from 'react'
import "./AdminCenter.css"
import center from '../../images/center1.jpg'
import Navbar from '../navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSportCenter } from '../../action/AdminAction'



const AdminCenter = () => {


	
	const dispatch = useDispatch();
	const { loading, allCenters } = useSelector((state) => state.allSportCenters)
	useEffect(() => {
		dispatch(getAllSportCenter());
		console.log(allCenters);
	}, [])

	return (
		< >
			<Navbar />
			<section className="section__container popular__container">
				<h2 className="section__header">Your Centers</h2>
				<div className="popular__grid">
					{
						allCenters?.length > 0 && allCenters ? (
							allCenters.map((item) => (
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
			</section>
		</>
	)
}

export default AdminCenter