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
						fs: false,
						ss: false,
						dt: false,
						end: false,
						olb: false,
						cbb: false,
						count: 0,
						oord: false
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

	myFSCallback = (dataFromChild) => {
		this.setState({ fs: dataFromChild });
		console.log(this.state.fs);
	}

	mySSCallback = (dataFromChild) => {
		this.setState({ ss: dataFromChild });
		console.log(this.state.ss);
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

	incrementClicked = () => {
		this.setState({ count : this.state.count + 1});
		if(this.state.count == 2){
			this.setState({ oord : true});
		}
		if(this.state.count == 4){
			console.log("change!");
			this.props.callbackFromParent();
			this.setState({ count : 0, oord : false});
		}
		console.log(this.state.count);
	}

	render(){
		return(
			<div>
				<div className="left-poster">
					<Comp oORd={this.props.oORd} isGoal={true} state = {this.state.goal} callbackFromParent={this.myGoalCallback} format="GoalButton" title="poster1" content={<GP/>} buttonName="골대"/>
				</div>
				<div className="defense">

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state={this.state.mlb} incrementCount={this.incrementClicked} callbackFromParent={this.myMLBCallback} format="MLBButton" title="MLB" content={<MLB/>} buttonName="MLB"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.fs} incrementCount={this.incrementClicked} callbackFromParent={this.myFSCallback} format="FSButton" title="FS" content={<FS/>} buttonName="FS"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.ss} incrementCount={this.incrementClicked} callbackFromParent={this.mySSCallback} format="SSButton" title="SS" content={<SS/>} buttonName="SS"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.dt} incrementCount={this.incrementClicked} callbackFromParent={this.myDTCallback} format="DTButton" title="DT1" content={<DT/>} buttonName="DT"/>
					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.dt} incrementCount={this.incrementClicked} callbackFromParent={this.myDTCallback} format="DTButton" title="DT2" content={<DT/>} buttonName="DT"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.end} incrementCount={this.incrementClicked} callbackFromParent={this.myENDCallback} format="EButton" title="E1" content={<E/>} buttonName="E"/>
					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.end} incrementCount={this.incrementClicked} callbackFromParent={this.myENDCallback} format="EButton" title="E2" content={<E/>} buttonName="E"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.olb} incrementCount={this.incrementClicked} callbackFromParent={this.myOLBCallback} format="OLBButton" title="OLB1" content={<OLB/>} buttonName="OLB"/>
					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.olb} incrementCount={this.incrementClicked} callbackFromParent={this.myOLBCallback} format="OLBButton" title="OLB2" content={<OLB/>} buttonName="OLB"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.cb} incrementCount={this.incrementClicked} callbackFromParent={this.myCBCallback} format="CBButton" title="CB1" content={<CB/>} buttonName="CB"/>
					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.cb} incrementCount={this.incrementClicked} callbackFromParent={this.myCBCallback} format="CBButton" title="CB2" content={<CB/>} buttonName="CB"/>
				</div>
				<div className="right-poster">
					<Comp oORd={this.props.oORd} isGoal={true} state = {this.state.goal} callbackFromParent={this.myGoalCallback} format="GoalButton" title="poster2" content={<GP/>} buttonName="골대"/>
				</div>
			</div>
		)
	}
}

export default Defense;
