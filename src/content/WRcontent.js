import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/WR";
import '../css/content.css';
import KJ from "../image/KJ.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const WRcontent = () => (
  <div>
    <div className="header"> 와이드 리시버(Wide Receiver) </div>
    <div className="content">
      {" "}
      넓게 흩어져서 받는 사람이라는 말 그대로 수비의 빈틈을 파고들어 쿼터백이 던진 패스를 받아내는 역할이다. 
      장거리 공격을 마무리하는 역할로 경기 내내 쿼터백이 패스를 해주는 몇 초 정도 외에는 눈에 띄기 힘들지만, 
      패스를 받는 순간 큰 스포트라이트를 받는다. 
      라인맨-러닝백이 지상전의 역할을 맡는다면, 쿼터백-리시버가 공중전의 역할을 맡는다.
      포지션적으로 가장 외곽에 위치해 있어 자유도가 크고, 
      패스를 받기 유리한 위치를 선점하는 능력이 중요하기 때문에 치밀한 작전계획에 따라 이루어지는 조직적인 팀플레이에 가장 구속을 덜 받으면서,
      경기의 흐름을 바꿀 수 있는 빅플레이는 보통 와이드 리시버의 플레이에 의해서 이루어지는 관계로 스포트라이트를 대단히 많이 받는 위치라 자기중심적인 성격의 선수들이 많다. 
      축구에서 특급 골잡이들이 전술이 아닌 자신의 본능만을 믿고 플레이하는 것과 다르지 않다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Kelvin Johnson</font><br/>
      <img src = {KJ}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default WRcontent;