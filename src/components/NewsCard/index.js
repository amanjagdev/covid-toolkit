import React from "react";
import "./index.scss";

import { BiLink } from "react-icons/bi";

const NewsCard = () => {
	return (
		<div className="NewsCard">
			<div className="title">
				Mit Feldspieler Pérez im Tor: River Plate trotzt
				Corona-Umständen in der Copa Libertadores
			</div>

			<div className="content">
				<div className="description">
					Wegen zahlreicher Corona-Infizierter im Kader hat der
					argentinische Erstligist River Plate einen Feldspieler ins
					Tor gestellt. Beim Gruppenspiel in der Copa Libertadores
					gegen den kolumbianischen Vere [...]
				</div>
				<a href="https://someurl">
					<BiLink size={22} />
				</a>
			</div>
		</div>
	);
};

export default NewsCard;
