import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
let businesses = [
business,
business,
business,
business,
business,
business,
];
function App() {
  return (
  	<div className = "app">
  	<h1>ravenous</h1>
  	<BusinessList businesses = {businesses}/>
  	<SearchBar/>
  	</div>
  	);
}

export default App;
