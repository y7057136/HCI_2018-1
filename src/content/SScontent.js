import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/SS";
import '../css/content.css';
import TP2 from "../image/TP2.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const SScontent = () => (
  <div>
    <div className="header"> 스트롱 세이프티(Strong Safety) </div>
    <div className="content">
      {" "}
      스트롱 세이프티는 축구의 센터백, 스위퍼 쪽에 가까운 포지션으로 후방 포지션이지만 
      필요에 따라 전진하여 라인배커 뒤에서 라인배커를 보조하며 필요할 땐 전방으로 돌격하여 러닝백을 끊어주는 역할까지 한다.
      고로 러닝 수비, 패싱수비, 그리고 때에 따라 쿼터백을 압박하는 블리츠 전술까지 모두 행해야 하는 전천후 수비수이며, 
      한 경기에서 색과 인터셉트를 모두 기록할 확률이 가장 높은 포지션이다. 
    <div className = "star">
      <font size = "5"> Star Player : Troy Polamalu</font><br/>
      <img src = {TP2}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
  </div>
);

export default SScontent;