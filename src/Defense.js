import React, { Component } from 'react';
import Comp from "./Demo.js";
import E from './content/Econtent.js';
import DT from './content/DTcontent.js';
import SS from './content/SScontent.js';
import FS from './content/FScontent.js';
import MLB from './content/MLBcontent.js';
import CB from './content/CBcontent.js';
import GP from './content/GPcontent.js';
import OLB from './content/OLBcontent.js';


import './css/modal.css';

class Defense extends Component {

	constructor(props) {
        super(props);
        this.state = {
            mlb: false,
						sb: false,
						dt: false,
						end: false,
						olb: false,
						cbb: false,
						change: 0
        };
    }

	myMLBCallback = (dataFromChild) => {
    this.setState({ mlb: dataFromChild });
		console.log(this.state.mlb);
  }

	myGoalCallback = (dataFromChild) => {
	  this.setState({ goal: dataFromChild });
		console.log(this.state.goal);
  }

	mySBCallback = (dataFromChild) => {
		this.setState({ sb: dataFromChild });
		console.log(this.state.sb);
	}

	myDTCallback = (dataFromChild) => {
		this.setState({ dt: dataFromChild });
		console.log(this.state.dtb);
	}

	myENDCallback = (dataFromChild) => {
		this.setState({ end: dataFromChild });
		console.log(this.state.eb);
	}

	myOLBCallback = (dataFromChild) => {
		this.setState({ olb: dataFromChild });
		console.log(this.state.olb);
	}

	myCBCallback = (dataFromChild) => {
		this.setState({ cb: dataFromChild });
		console.log(this.state.cb);
	}

	render(){
		return(
			<div>
				<div className="left-poster">
					<Comp state = {this.state.goal} callbackFromParent={this.myGoalCallback} format="GoalButton" title="poster1" content={<GP/>} buttonName="골대"/>
				</div>
				<div className="defense">

				<Comp state = {this.state.mlb} callbackFromParent={this.myMLBCallback} format="MLBButton" title="MLB" content={<MLB/>} buttonName="MLB"/>

				<Comp state = {this.state.sb} callbackFromParent={this.mySBCallback} format="FSButton" title="FS" content={<FS/>} buttonName="FS"/>
				<Comp state = {this.state.sb} callbackFromParent={this.mySBCallback} format="SSButton" title="SS" content={<SS/>} buttonName="SS"/>

				<Comp state = {this.state.dt} callbackFromParent={this.myDTCallback} format="DTButton" title="DT1" content={<DT/>} buttonName="DT"/>
				<Comp state = {this.state.dt} callbackFromParent={this.myDTCallback} format="DTButton" title="DT2" content={<DT/>} buttonName="DT"/>

				<Comp state = {this.state.end} callbackFromParent={this.myENDCallback} format="EButton" title="E1" content={<E/>} buttonName="E"/>
				<Comp state = {this.state.end} callbackFromParent={this.myENDCallback} format="EButton" title="E2" content={<E/>} buttonName="E"/>

					<Comp state = {this.state.olb} callbackFromParent={this.myOLBCallback} format="OLBButton" title="OLB1" content={<OLB/>} buttonName="OLB"/>
					<Comp state = {this.state.olb} callbackFromParent={this.myOLBCallback} format="OLBButton" title="OLB2" content={<OLB/>} buttonName="OLB"/>

					<Comp state = {this.state.cb} callbackFromParent={this.myCBCallback} format="CBButton" title="CB1" content={<CB/>} buttonName="CB"/>
					<Comp state = {this.state.cb} callbackFromParent={this.myCBCallback} format="CBButton" title="CB2" content={<CB/>} buttonName="CB"/>
				</div>
				<div className="right-poster">
					<Comp state = {this.state.goal} callbackFromParent={this.myGoalCallback} format="GoalButton" title="poster2" content={<GP/>} buttonName="골대"/>
				</div>
			</div>
		)
	}
}

export default Defense;
