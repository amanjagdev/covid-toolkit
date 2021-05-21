import React from "react";
import "./index.scss";
import { useRouteMatch } from "react-router-dom";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { RiVirusFill } from "react-icons/ri";

const NavBar = () => {
	const { isExact } = useRouteMatch("/");

	return (
		<div className="NavBar">
			<div className="container bs">
				<div className="main-icon fa">
					<Link to="/">
						{isExact ? (
							<AiFillHome size={28} />
						) : (
							<BiArrowBack size={28} />
						)}
					</Link>
				</div>
				<div className="center fa ">
					<span>Covid Toolkit</span>
					<RiVirusFill size={28} />
				</div>
				<div className="about">
					<Link to="/about">About</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
