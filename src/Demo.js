import React, { Component } from 'react';
import Popup from "reactjs-popup";
import QBvideo from "./ExampleYoutube";
import './css/modal.css';

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

const onStyle = {
	backgroundColor: "blue",
  color: "white",
  borderColor: "#2980b9"
};

const outStyle = {
  borderColor: "#cfcece",
  color: "white",
  backgroundColor: "red"
};

class CustomModal extends Component{
  constructor(props) {
        super(props);
  }
  render(){
    return(
  <Popup
    trigger={
      this.props.state ?
      <button style = {onStyle} onMouseLeave={() => this.props.callbackFromParent(false)} className={this.props.format} id={this.props.title}> {this.props.buttonName} </button> :
      <button style = {outStyle} onMouseEnter={() => this.props.callbackFromParent(true)} className={this.props.format} id={this.props.title}> {this.props.buttonName} </button>
    }
    modal
    contentStyle={contentStyle}
    scroll
  >
    {close => (
      <div className="modal">
        {this.props.content}
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
)

}
}

export default CustomModal;
