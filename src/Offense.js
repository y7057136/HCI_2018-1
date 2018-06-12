import React, { Component } from 'react';
import Comp from "./Demo.js";
import QB from './content/QBcontent.js';
import GP from './content/GPcontent.js';
import FB from './content/FBcontent.js';
import RB from './content/RBcontent.js';
import C from './content/Ccontent.js';
import G from './content/Gcontent.js';
import OT from './content/OTcontent.js';
import TE from './content/TEcontent.js';
import WR from './content/WRcontent.js';
import './css/modal.css';

class Offense extends Component {

	constructor(props) {
        super(props);
        this.state = {
            qb: false,
						goal: false,
						fb: false,
						rb: false,
						c: false,
						guard: false,
						ot: false,
						te: false,
						wr: false,
						count: 0,
						oord: false
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

	myFBCallback = (dataFromChild) => {
		this.setState({ fb: dataFromChild });
		console.log(this.state.fb);
	}

	myRBCallback = (dataFromChild) => {
		this.setState({ rb: dataFromChild });
		console.log(this.state.rb);
	}

	myCCallback = (dataFromChild) => {
			      this.setState({ c: dataFromChild });
						console.log(this.state.c);
		  }

	myGuardCallback = (dataFromChild) => {
				      this.setState({ guard: dataFromChild });
							console.log(this.state.guard);
			    }

	myOTCallback = (dataFromChild) => {
					      this.setState({ ot: dataFromChild });
								console.log(this.state.goal);
				    }

	myTECallback = (dataFromChild) => {
										      this.setState({ te: dataFromChild });
													console.log(this.state.te);
									    }

	myWRCallback = (dataFromChild) => {
		this.setState({ wr: dataFromChild });
		console.log(this.state.wr);
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
				<div className="example-warper">
				<div className="offense">

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.qb} incrementCount={this.incrementClicked} callbackFromParent={this.myQBCallback} format="QBButton" title="QB" content={<QB/>} buttonName="QB"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.fb} incrementCount={this.incrementClicked} callbackFromParent={this.myFBCallback} format="FBButton" title="FB" content={<FB/>} buttonName="FB"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.rb} incrementCount={this.incrementClicked} callbackFromParent={this.myRBCallback} format="RBButton" title="RB" content={<RB/>} buttonName="RB"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.c} incrementCount={this.incrementClicked} callbackFromParent={this.myCCallback} format="CButton" title="C" content={<C/>} buttonName="C"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.guard} incrementCount={this.incrementClicked} callbackFromParent={this.myGuardCallback} format="GButton" title="G1" content={<G/>} buttonName="G"/>
					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.guard} incrementCount={this.incrementClicked} callbackFromParent={this.myGuardCallback} format="GButton" title="G2" content={<G/>} buttonName="G"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.ot} incrementCount={this.incrementClicked} callbackFromParent={this.myOTCallback} format="OTButton" title="OT1" content={<OT/>} buttonName="OT"/>
					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.ot} incrementCount={this.incrementClicked} callbackFromParent={this.myOTCallback} format="OTButton" title="OT2" content={<OT/>} buttonName="OT"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.te} incrementCount={this.incrementClicked} callbackFromParent={this.myTECallback} format="TEButton" title="TE" content={<TE/>} buttonName="TE"/>

					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.wr} incrementCount={this.incrementClicked} callbackFromParent={this.myWRCallback} format="WRButton" title="WR1" content={<WR/>} buttonName="WR"/>
					<Comp oORd={this.props.oORd} isGoal={false} last={this.state.oord} state = {this.state.wr} incrementCount={this.incrementClicked} callbackFromParent={this.myWRCallback} format="WRButton" title="WR2" content={<WR/>} buttonName="WR"/>
				</div>
				</div>
				<div className="right-poster">
					<Comp oORd={this.props.oORd} isGoal={true} state={this.state.goal} callbackFromParent={this.myGoalCallback} format="GoalButton" title="poster2" content={<GP/>} buttonName="골대"/>
				</div>
			</div>
		)
	}
}

export default Offense;
