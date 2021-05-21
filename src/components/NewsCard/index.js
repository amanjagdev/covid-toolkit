import React from "react";
import "./index.scss";

import { BiLink } from "react-icons/bi";

const NewsCard = ({ title, description, url }) => {
	return (
		<div className="NewsCard">
			<div className="title">{title}</div>

			<div className="content">
				<div className="description">{description}</div>
				<a target="_blank" rel="noreferrer" href={url} alt={title}>
					<BiLink size={22} />
				</a>
			</div>
		</div>
	);
};

export default NewsCard;
