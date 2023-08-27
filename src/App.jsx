import './App.css';
import Header from './Components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { useState } from 'react';
const App = () => {
	return (
		<>
			<Router>
				<Header />
				<div className="App">
					<Routes>
						<Route path="/" element={<Home  />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default App;
