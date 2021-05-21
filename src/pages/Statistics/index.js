import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

const Statistics = () => {
	const [global, setGlobal] = useState(null);
	const [countires, setCountries] = useState(null);

	useEffect(() => {
		axios.get("https://api.covid19api.com/summary").then(({ data }) => {
			setGlobal(data.Global);
			setCountries(data.Countries);
		});
	}, []);

	return (
		<div className="Statistics container bs">
			{/* Global data  */}
			<div className="head">
				<div className="heading">Global</div>
				<div className="spacer"></div>
			</div>
			<div className="data">
				<div className="grid grid-1-1-1-1-1 head-row">
					<div className="col">Confirmed</div>
					<div className="col">Recovered</div>
					<div className="col">Deaths</div>
				</div>
				<div className="grid grid-1-1-1-1-1">
					<div className="col">{global?.TotalConfirmed}</div>
					<div className="col">{global?.TotalRecovered}</div>
					<div className="col">{global?.TotalDeaths}</div>
				</div>
			</div>

			{/* countries data  */}
			<div className="head">
				<div className="heading">All Countries</div>
				<div className="spacer"></div>
			</div>
			<div className="data">
				<div className="grid grid-1-1-1-1-1 head-row">
					<div className="col">Name</div>
					<div className="col">Country Code</div>
					<div className="col">Confirmed</div>
					<div className="col">Recovered</div>
					<div className="col">Deaths</div>
				</div>
				{countires?.map(
					({
						ID,
						Country,
						CountryCode,
						TotalConfirmed,
						TotalDeaths,
						TotalRecovered,
					}) => (
						<div className="grid grid-1-1-1-1-1" key={ID}>
							<div className="col">{Country}</div>
							<div className="col">{CountryCode}</div>
							<div className="col">{TotalConfirmed}</div>
							<div className="col">{TotalRecovered}</div>
							<div className="col">{TotalDeaths}</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Statistics;
