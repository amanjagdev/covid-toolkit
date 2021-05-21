import React from "react";
import "./index.scss";
import ResourceCard from "../../components/ResourceCard";
import { COVID_RESOURCES } from "../../data";
const Resources = () => {
	return (
		<div className="Resources container bs">
			<div className="head">
				<div className="heading">Resources</div>
				<div className="spacer"></div>
			</div>
			<div className="cards">
				{COVID_RESOURCES.map((item, index) => (
					<ResourceCard key={index} {...item} />
				))}
			</div>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.covidresourcesindia.com/"
				className="all">
				More Resources
			</a>
		</div>
	);
};

export default Resources;
