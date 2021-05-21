import React from "react";
import "./index.scss";

import { BiLink } from "react-icons/bi";

const ResourceCard = ({ name, desc, link }) => {
	return (
		<div className="ResourceCard">
			<div className="title">{name}</div>

			<div className="content">
				<div className="description">{desc}</div>
				<a href={link} alt={name}>
					<BiLink size={22} />
				</a>
			</div>
		</div>
	);
};

export default ResourceCard;
