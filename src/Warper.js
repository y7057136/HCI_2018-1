import React from "react";
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

export default Comp => () => (
	<div>
		<div className="left-poster">
			<Comp format="GoalButton" title="poster1" content={<GP/>} buttonName="골대"/>
		</div>
		<div className="example-warper">
			<div className="offense">
				<Comp format="QBButton" title="QB" content={<QB/>} buttonName="QB"/>

				<Comp format="FBButton" title="FB" content={<FB/>} buttonName="FB"/>
				<Comp format="RBButton" title="RB" content={<RB/>} buttonName="RB"/>

				<Comp format="CButton" title="C" content={<C/>} buttonName="C"/>

				<Comp format="GButton" title="G1" content={<G/>} buttonName="G"/>
				<Comp format="GButton" title="G2" content={<G/>} buttonName="G"/>

				<Comp format="OTButton" title="OT1" content={<OT/>} buttonName="OT"/>
				<Comp format="OTButton" title="OT2" content={<OT/>} buttonName="OT"/>

				<Comp format="TEButton" title="TE" content={<TE/>} buttonName="TE"/>

				<Comp format="WRButton" title="WR1" content={<WR/>} buttonName="WR"/>
				<Comp format="WRButton" title="WR2" content={<WR/>} buttonName="WR"/>
			</div>

			<div className="defense">
				<Comp format="MLBButton" title="MLB" content={<QB/>} buttonName="MLB"/>

				<Comp format="FSButton" title="FS" content={<QB/>} buttonName="FS"/>
				<Comp format="SSButton" title="SS" content={<QB/>} buttonName="SS"/>

				<Comp format="DTButton" title="DT1" content={<QB/>} buttonName="DT"/>
				<Comp format="DTButton" title="DT2" content={<QB/>} buttonName="DT"/>

				<Comp format="EButton" title="E1" content={<QB/>} buttonName="E"/>
				<Comp format="EButton" title="E2" content={<QB/>} buttonName="E"/>

				<Comp format="OLBButton" title="OLB1" content={<QB/>} buttonName="OLB"/>
				<Comp format="OLBButton" title="OLB2" content={<QB/>} buttonName="OLB"/>

				<Comp format="CBButton" title="CB1" content={<QB/>} buttonName="CB"/>
				<Comp format="CBButton" title="CB2" content={<QB/>} buttonName="CB"/>
			</div>
			<div id="center-line"></div>
		</div>
		<div className="right-poster">
			<Comp format="GoalButton" title="poster2" content={<GP/>} buttonName="골대"/>
		</div>
	</div>
);
