import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import NewsCard from "../../components/NewsCard";
import { Link } from "react-router-dom";
import Axios from "axios";

const Home = () => {
	const [stats, setStats] = useState(null);
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		Axios.get(
			"https://newsapi.org/v2/everything?q=covid&sortBy=publishedAt&apiKey=4f4ce39feb7246a3b14fa52bf63a2cf4&pageSize=100&page=1"
		).then(({ data }) => {
			setArticles(data.articles);
		});
		Axios.get(
			"https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
		).then(({ data }) => {
			setStats({
				total_cases: data.data.total_cases,
				recovery_cases: data.data.recovery_cases,
				death_cases: data.data.death_cases,
			});
		});
	}, []);

	return (
		<div className="Home">
			<div className="container">
				<div className="grid grid-2-1">
					<div className="col">
						<div className="news bs">
							<div className="head">
								<div className="heading">Latest News</div>
								<div className="link-to-page">
									<Link to="/news">
										<FaChevronDown size={22} />
									</Link>
								</div>
							</div>
							{articles ? (
								<>
									<NewsCard {...articles[0]} />
									<NewsCard {...articles[1]} />
								</>
							) : (
								<div className="loader" />
							)}
						</div>
					</div>
					<div className="col">
						<div className="statistics bs">
							<div className="head">
								<div className="heading">Statistics</div>
								<div className="link-to-page">
									<Link to="/statistics">
										<FaChevronDown size={22} />
									</Link>
								</div>
							</div>
							<div className="data">
								<div className="grid grid-1-1-1-1 head-row">
									<div className="col">Name</div>
									<div className="col">C</div>
									<div className="col">R</div>
									<div className="col">D</div>
								</div>
								<div className="grid grid-1-1-1-1">
									<div className="col">World</div>
									<div className="col">
										{stats ? stats.total_cases : 0}
									</div>
									<div className="col">
										{stats ? stats.recovery_cases : 0}
									</div>
									<div className="col">
										{stats ? stats.death_cases : 0}
									</div>
								</div>
							</div>
						</div>
						<div className="slot-avail bs">
							<div className="head">
								<div className="heading">Slot Avialable</div>
								<div className="link-to-page">
									<Link to="/slot">
										<FaExternalLinkAlt size={20} />
									</Link>
								</div>
							</div>
							<div className="description">
								Just select the State and the district or
								Pincode. It will readily show the list of the
								slots available on a particular day and users
								can see info from vaccine (Covishield/Covaxin),
								minnimum age and more.
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-1-1">
					<div className="plasma bs">
						<div className="head">
							<div className="heading">Plasma</div>
							<div className="link-to-page">
								<Link to="/plasma">
									<FaExternalLinkAlt size={20} />
								</Link>
							</div>
						</div>
						<div className="description">
							Plasma has been instrumental in helping COVID-19
							patients. Click here to get the plasma leads for
							your respective cities.
						</div>
					</div>
					<div className="resources bs">
						<div className="head">
							<div className="heading">Resources</div>
							<div className="link-to-page">
								<Link to="/resources">
									<FaExternalLinkAlt size={20} />
								</Link>
							</div>
						</div>
						<div className="description">
							A comprehensive list of COVID resources across India
							Disclaimer: Please use caution and perform due
							diligence before using the resources listed on this
							website.
						</div>
					</div>
				</div>
				<div className="row">
					<div className="guidelines bs">
						<div className="head">
							<div className="heading">Guidelines</div>
							<div className="spacer" />
						</div>
						<div className="cards grid grid-1-1">
							<div className="card">
								<div className="title">Do's</div>
								<div className="lines">
									<div className="line">
										💠Regular hand wash for 30 seconds will
										help you avoid germs or any kind of
										infection.
									</div>
									<div className="line">
										💠 Coronavirus usually spreads through
										cough and covering your nose and mouth
										will save you from this epidemic.
									</div>
								</div>
							</div>
							<div className="card">
								<div className="title">Dont's</div>
								<div className="lines">
									<div className="line">
										💠Do not get close to anyone, especially
										touching or laughing closely.
									</div>
									<div className="line">
										💠Do not touch your face, nose and mouth
										often. This avoids the risks of
										developing the virus.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
