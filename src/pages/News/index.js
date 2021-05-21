import React, { useEffect, useState } from "react";
import "./index.scss";
import NewsCard from "../../components/NewsCard";
import axios from "axios";

const News = () => {
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		axios
			.get(
				"https://newsapi.org/v2/everything?q=covid&sortBy=publishedAt&apiKey=4f4ce39feb7246a3b14fa52bf63a2cf4&pageSize=100&page=1"
			)
			.then(({ data }) => {
				setArticles(data.articles);
			});
	}, []);

	return (
		<div className="News container bs">
			<div className="head">
				<div className="heading">Latest News</div>
				<div className="link-to-page"></div>
			</div>
			<div className="cards">
				{articles &&
					articles.map((article) => <NewsCard {...article} />)}
			</div>
		</div>
	);
};

export default News;
