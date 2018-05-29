import React from "react";
import QB from './QBcontent.js';
import './modal.css';

export default Comp => () => (
  <div className="example-warper">
    <Comp format="position_button" title="QB1" content={<QB/>}/>
    <Comp format="position_button" title="QB2" content={<QB/>}/>
  </div>
);
