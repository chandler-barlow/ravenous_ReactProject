import React from 'react';
import "./BusinessList.css";
import Business from '../Business/Business';

class BuisnessList extends React.Component{
	render(){
		return (<div className="BusinessList">
			    <Business/>
			    <Business/>
			    <Business/>
			    <Business/>
			    <Business/>
			    <Business/>
			    </div>);
	}
}

export default BuisnessList;