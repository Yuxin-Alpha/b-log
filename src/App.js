import React from 'react';
import './App.css';
// import Test from './views/test'
import Home from './views/home'
import Entry from './views/entry'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact  component={Home} />
					<Route path="/doc" exact component={Entry} />
				</Switch>
			</div>
		</Router>
    
  );
}

export default App;
