import React from "react";
import './modal.css';

export default Comp => () => (
  <div className="example-warper">
    <Comp title = "QB1" className="position_buttonQB1"/>
    <Comp title = "QB2" className="position_buttonQB2"/>
  </div>
);
