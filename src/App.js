import React from 'react';
import './App.css';
// import Test from './views/test'
import Home from './views/home'
import Entry from './views/entry'
import Article from './views/article'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Entry} />
					<Route path="/info" exact  component={Home} />
					<Route path="/article" exact component={Article} />
				</Switch>
			</div>
		</Router>
    
  );
}

export default App;
