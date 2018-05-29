import React from "react";
import QB from './QBcontent.js';
import GP from './GPcontent.js'
import './css/modal.css';

export default Comp => () => (
	<div>
		<div className="left-poster">
			<Comp format="position_button" title="poster1" content={<GP/>} buttonName="골대"/>
		</div>
		<div className="example-warper">
			<Comp format="position_button" title="QB1" content={<QB/>} buttonName="QB"/>
			<Comp format="position_button" title="QB2" content={<QB/>} buttonName="QB"/>
		</div>
		<div className="right-poster">
			<Comp format="position_button" title="poster2" content={<GP/>} buttonName="골대"/>
		</div>
	</div>
);
