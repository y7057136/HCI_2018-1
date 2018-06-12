import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Change from './content/CHANGEcontent.js';
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
        this.state = { open: false };
      }

  closeModal = () => {
    this.setState({ open: false });
  };

  goal = () => {
      console.log("GOALLLLLL");
  }

  conditionalIncrement = () => {
    console.log(this.props.last);
    this.props.incrementCount();

    {this.props.last ?
      this.setState({ open: true }) :
      console.log("fuck")
    }
  }

  render(){
    return(
  <div>
  <Popup
    trigger={
      this.props.state ?
      <button style = {onStyle} onMouseLeave={() => this.props.callbackFromParent(false)} className={this.props.format} id={this.props.title}> {this.props.buttonName} </button> :
      <button style = {outStyle} onMouseEnter={() => this.props.callbackFromParent(true)} className={this.props.format} id={this.props.title}> {this.props.buttonName} </button>
    }
    modal
    contentStyle={contentStyle}
    onClose={this.props.isGoal ? ()=>this.goal(): ()=>this.conditionalIncrement()}
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

  <Popup
    open={this.state.open}
    closeOnDocumentClick
    onClose={() => this.props.incrementCount()}
  >
  {close => (
    <div className="modal">
      <Change/>
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
  </div>
)

}
}

export default CustomModal;
