import React from "react";
import Warper from "./Warper";
import Popup from "reactjs-popup";
import QBvideo from "./ExampleYoutube";
import './modal.css';

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      자고싶다ssafavavsvasfasfas
    </div>
  </div>
);


const CustomModal = ({format, title, content}) => (
  <Popup
    trigger={<button className={format} id={title}> QB </button>}
    modal
    contentStyle={contentStyle}
    scroll
  >
    {close => (
      <div className="modal">
        {content}
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
);

export default Warper(CustomModal);
