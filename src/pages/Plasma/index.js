import React, { useState } from "react";
import "./index.scss";
import { PLASMA_DATA } from "../../data";

const Plasma = () => {
	const [name, setName] = useState("");
	const [bloodGroup, setBloodGroup] = useState("B+");
	const [contact, setContact] = useState("");
	const [address, setAddress] = useState("");
	const [age, setAge] = useState(0);

	const [results, setResults] = useState(PLASMA_DATA);

	const handleSubmit = () => {
		if (
			name === "" ||
			bloodGroup === "" ||
			contact === "" ||
			address === "" ||
			age === ""
		)
			setResults(...results, { name, bloodGroup, contact, address, age });
	};

	return (
		<div className="Plasma container bs">
			<div className="head">
				<div className="heading">Plasma</div>
				<div className="spacer"></div>
			</div>
			<div className="description">
				Plasma has been instrumental in helping COVID-19
				patients.Fingthe plasma leads for your respective cities from
				the below information.
			</div>
			<div className="main">
				<div className="plasma-info">
					<h3>Plasma Info</h3>
					<div className="scroll-view">
						<div className="cards">
							{results &&
								results.map(
									(
										{ name, address, phone, bloodGroup },
										index
									) => (
										<div className="card">
											<h4 className="bg" key={index}>
												{bloodGroup}
											</h4>
											<div className="content">
												<p className="name">
													Name: {name}
												</p>
												<p className="contact">
													Contact : {phone}
												</p>
												<p className="address">
													Address : {address}
												</p>
											</div>
										</div>
									)
								)}
						</div>
					</div>
				</div>
				<div className="plasma-submit">
					<h3>Submit your info</h3>
					<div className="plasma-form">
						<label htmlFor="Name">Full Name</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor="blood_group">Blood group</label>
						<select
							name="blood_grp"
							value={bloodGroup}
							onChange={(e) => setBloodGroup(e.target.value)}>
							<option value="AB+">AB+</option>
							<option value="AB-">AB-</option>
							<option value="A+">A+</option>
							<option value="A-">A-</option>
							<option value="B+">B+</option>
							<option value="B-">B-</option>
							<option value="O+">O+</option>
							<option value="O-">O-</option>
						</select>
						<label htmlFor="contact">Contact</label>
						<input
							type="text"
							id="contact"
							value={contact}
							onChange={(e) => setContact(e.target.value)}
						/>
						<label htmlFor="age">Age</label>
						<input
							type="number"
							id="age"
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
						<label htmlFor="address">Address</label>
						<input
							type="text"
							id="address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>

						<button
							className="primary"
							onClick={() => handleSubmit()}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plasma;
