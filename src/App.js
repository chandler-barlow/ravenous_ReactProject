import React from 'react';
import logo from './logo.svg';
import './App.css';
import BuisnessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';

function App() {
  return (
  	<div className = "app">
  	<h1>ravenous</h1>
  	<BuisnessList/>
  	<SearchBar/>
  	</div>
  	);
}

export default App;
