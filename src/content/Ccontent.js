import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/C";
import '../css/content.css';
import TP from "../image/TP.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const Ccontent = () => (
  <div>
    <div className="header"> 센터(Center) </div>
    <div className="content">
      {" "}
      공격라인의 중심에 서서, 플레이를 시작할때 쿼터백에게 스냅(snap)을 던지는 선수다. 
      그 이후에는 여타 라인맨처럼 상대를 막아주는 역할을 한다. 공을 제일 먼저 잡고 제일 먼저 움직이므로, 
      상대 수비수들의 움직임을 미리 읽는 감각이 필요하며 스냅타이밍을 조절해 수비수들의 스텝을 뺏어버리는 솜씨도 필요하다.
      따라서 쿼터백 뿐만이 아니라 센터가 블로킹 방향의 변화를 지시하는 것도 볼 수 있다. 언더 센터포지션에서는 쿼터백과의 호흡이 정말 중요하다. 
      과거의 풋볼은 럭비처럼 러싱플레이가 중요했기 때문에 초창기에는 팀 라인맨의 리더 및 지휘자 역할까지 하기도 했으나 점점 전략전술의 발달로 인해 다양한 역할을 요구받게 되었다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Travis Frederick</font><br/>
      <img src = {TP}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default Ccontent;