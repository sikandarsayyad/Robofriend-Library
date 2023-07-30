import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {

	constructor(){
		super();
		this.state ={
			robots: robots,
			searchfield: ''
		}
	}

	componentDidMount(){
		this.setState({robots: robots})
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});

		return(
			<div className='tc'>
				<h1 className='f1'>Robotfriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Cardlist robots={filteredRobots}/>	
			</div>
		)

	}
		

}

export default App;