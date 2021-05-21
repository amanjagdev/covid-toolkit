import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Importing Pages
import Home from "./pages/Home";
import Plasma from "./pages/Plasma";
import SlotAvailability from "./pages/SlotAvailability";
import News from "./pages/News";
import Statistics from "./pages/Statistics";
import Resources from "./pages/Resources/";
import About from "./pages/About";

const App = () => {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/plasma" exact component={Plasma} />
					<Route path="/about" exact component={About} />
					<Route path="/slot" exact component={SlotAvailability} />
					<Route path="/news" exact component={News} />
					<Route path="/statistics" exact component={Statistics} />
					<Route path="/resources" exact component={Resources} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
