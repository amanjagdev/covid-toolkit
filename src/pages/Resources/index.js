import React from "react";
import "./index.scss";
import ResourceCard from "../../components/ResourceCard";
import { COVID_RESOURCES } from "../../data";
const Resources = () => {
	return (
		<div className="Resources container bs">
			<div className="head">
				<div className="heading">Resources</div>
				<div className="link-to-page"></div>
			</div>
			<div className="cards">
				{COVID_RESOURCES.map((item, index) => (
					<ResourceCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Resources;
