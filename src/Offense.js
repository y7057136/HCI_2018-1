import React, { Component } from 'react';
import Comp from "./Demo.js";
import QB from './QBcontent.js';
import GP from './GPcontent.js'
import './css/modal.css';

class Offense extends Component {

	constructor(props) {
        super(props);
        this.state = {
            qb: false,
						goal: false,
						change: 0
        };
    }

	myQBCallback = (dataFromChild) => {
        this.setState({ qb: dataFromChild });
				console.log(this.state.qb);
    }

	myGoalCallback = (dataFromChild) => {
	      this.setState({ goal: dataFromChild });
				console.log(this.state.goal);
    }

	render(){
		return(
			<div>
				<div className="left-poster">
					<Comp state = {this.state.goal} callbackFromParent={this.myGoalCallback} format="position_button" title="poster1" content={<GP/>} buttonName="골대"/>
				</div>
				<div className="example-warper">
					<Comp state = {this.state.qb} callbackFromParent={this.myQBCallback} format="position_button" title="QB1" content={<QB/>} buttonName="QB"/>
					<Comp state = {this.state.qb} callbackFromParent={this.myQBCallback} format="position_button" title="QB2" content={<QB/>} buttonName="QB"/>
				</div>
				<div className="right-poster">
					<Comp state = {this.state.goal} callbackFromParent={this.myGoalCallback} format="position_button" title="poster2" content={<GP/>} buttonName="골대"/>
				</div>
			</div>
		)
	}
}

export default Offense;
