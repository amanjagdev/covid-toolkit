import React from "react";
import "./index.scss";
import NewsCard from "../../components/NewsCard";

const News = () => {
	return (
		<div className="News container bs">
			<div className="head">
				<div className="heading">Latest News</div>
				<div className="link-to-page"></div>
			</div>
			<div className="cards">
				<NewsCard />
				<NewsCard />
			</div>
		</div>
	);
};

export default News;
