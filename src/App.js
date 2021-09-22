// imports
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// contexts
import DataContext from './contexts/DataContext';
// css
import './App.css';

const App = () => {
  const [data, setData] = useState(['dataOne', 'dataTwo'])
	return (
		<div id="app">
      {/* Provider takes in a value prop */}
			<DataContext.Provider value={{ data, setData }}>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</DataContext.Provider>
		</div>
	);
};

export default App;
