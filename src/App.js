import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing Pages
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Plasma from "./pages/Plasma";
import SlotAvailability from "./pages/SlotAvailability";
import News from "./pages/News";
import Statistics from "./pages/Statistics";
import Resources from "./pages/Resources/Resources";

const App = () => {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/plasma" exact component={Plasma} />
					<Route path="/slot" exact component={SlotAvailability} />
					<Route path="/news" exact component={News} />
					<Route path="/statistics" exact component={Statistics} />
					<Route path="/resources" exact component={Resources} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
