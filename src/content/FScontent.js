import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/FS";
import '../css/content.css';
import TM from "../image/TM.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const FScontent = () => (
  <div>
    <div className="header"> 프리 세이프티(Free Safety) </div>
    <div className="content">
      {" "}
      프리 세이프티는 골키퍼, 혹은 마누엘 노이어형 스키퍼에 가깝다. 
      스트롱 세이프티가 전진해 후방 가운데쪽을 지키는 동안 최후방에 포진해 코너백이 
      와이드 리시버와의 1:1 마크에서 뚫렸을 때 전방위 백업을 가기도 하고, 
      팀의 마지막 방어선이 되거나 롱패스를 막아내는 역할을 한다. 
      다른 어떤 포지션보다도 항상 최악의 상황을 상정하여 빅플레이를 허용하지 않도록 하는 판단력과 경기 운영이 필요한 케이스이며, 
      커버-2 디펜스나 커버-3류의 지역방어 수비에서는 가장 넓은 범위를 커버해야하는 선수이다.
    <div className = "star">
      <font size = "5"> Star Player : Tyrann Mathieu</font><br/>
      <img src = {TM}></img><br/>
      애리조나 카디널스의 스타였다가 2018년 휴스턴 텍산스로 이적한 더 허니뱃저(The Honey Badger) 타이런 매튜. 사실상 모든 디펜시브 백 포지션을 전천후로 소화하는 신개념 세이프티.
     대인마크는 물론 닥돌과 태클스킬까지 뛰어나서 카디널스의 후방을 전천후로 백업하고 있다.
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
  </div>
);

export default FScontent;