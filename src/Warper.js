import React, { Component } from 'react';
import Offense from './Offense.js';
import Defense from './Defense.js';
import './css/modal.css';

class Warper extends Component {
	constructor(props) {
        super(props);
        this.state = {
            oord : true
        };
  }

	changeOD = () => {
		{ this.state.oord ?
			this.setState({ oord: false }) :
			this.setState({ oord: true })
		}
		console.log(this.state.oord);
  }

	render(){
		return(
			<div className="example-warper">
				{this.state.oord ?
					<Offense callbackFromParent={this.changeOD}/> :
					<Defense callbackFromParent={this.changeOD}/>
				}
				<div id="center-line"></div>
			</div>
		)
	}
}

export default Warper;
