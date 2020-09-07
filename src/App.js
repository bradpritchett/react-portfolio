import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
	return (
		<Router>
			<div className="container-fluid">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Projects" component={Projects} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
