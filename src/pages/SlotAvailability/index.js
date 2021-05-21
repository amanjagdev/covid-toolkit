import Axios from "axios";
import React, { useState } from "react";
import "./index.scss";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SlotAvailability = () => {
	const [pincode, setPincode] = useState("249408");
	const [date, setDate] = useState(new Date());
	const [results, setResults] = useState(null);

	const passedDate = `${date.getDate()}-${
		date.getMonth() + 1
	}-${date.getFullYear()}`;
	const baseUrl =
		"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin";

	const handleSubmit = () => {
		Axios.get(`${baseUrl}?pincode=${pincode}&date=${passedDate}`)
			.then((res) => {
				console.log(res.data.sessions);
				setResults(res.data.sessions);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className="SlotAvailability container bs">
			<div className="head">
				<div className="heading">Slot Availability</div>
				<div className="spacer"></div>
			</div>
			<div className="description">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
				dignissimos beatae, nobis minima voluptatum veniam cum iusto
				voluptate repellat possimus.
			</div>
			<div className="main">
				<div className="plasma-info">
					<h3>Slots Info</h3>
					<div className="scroll-view">
						<div className="cards">
							{results &&
								results.map(
									({
										name,
										address,
										center_id,
										min_age_limit,
										block_name,
										vaccine,
										slots,
										fee,
										available_capacity,
									}) => (
										<div className="card" key={center_id}>
											<p className="name grid grid-1-1">
												<strong>Name : </strong>
												{name}
											</p>
											<p className="contact grid grid-1-1">
												<strong>Min Age Limit :</strong>{" "}
												{min_age_limit}
											</p>
											<p className="address grid grid-1-1">
												<strong>Address :</strong>{" "}
												{address}
											</p>
											<p className="block grid grid-1-1">
												<strong>Block :</strong>{" "}
												{block_name}
											</p>
											<p className="capacity grid grid-1-1">
												<strong>Capacity :</strong>{" "}
												{available_capacity}
											</p>
											<p className="fee grid grid-1-1">
												<strong>Fee :</strong> ₹{fee}
											</p>
											<p className="vaccine grid grid-1-1">
												<strong>Vaccine :</strong>{" "}
												{vaccine}
											</p>
											<p className="slots grid grid-1-1">
												<strong>Slots :</strong>{" "}
												{slots &&
													slots.map((s) => `${s} `)}
											</p>
										</div>
									)
								)}
						</div>
					</div>
				</div>
				<div className="plasma-submit">
					<h3>Find Slots</h3>
					<div className="plasma-form">
						<label htmlFor="pincode">Pincode</label>
						<input
							type="text"
							id="pincode"
							value={pincode}
							onChange={(e) => setPincode(e.target.value)}
						/>
						<div className="date-pick">
							<DatePicker
								selected={date}
								onChange={(date) => setDate(date)}
							/>
						</div>
						<button
							className="primary"
							onClick={() => handleSubmit()}>
							Get Slots
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SlotAvailability;
