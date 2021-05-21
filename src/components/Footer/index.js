import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./index.scss";

const Footer = () => {
	return (
		<div className="Footer">
			<span>
				Made with
				<span className="heart">
					<AiFillHeart size={18} />
				</span>
				by &nbsp;
				<a target="_blank" rel="noreferrer" href="https://amanjagdev.now.sh"> Aman Jagdev</a>
			</span>
		</div>
	);
};

export default Footer;
