import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/E";
import '../css/content.css';
import JJW from "../image/JJW.png";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const Econtent = () => (
  <div>
    <div className="header"> 디펜시브 앤드(Defensive End) </div>
    <div className="content">
      {" "}
      수비라인의 끝자락에 서며 플레이에 따라 중심의 쿼터백을 공격할 수도 있고 러닝백의 측면돌파를 막을 수도 있다. 
      쿼터백을 쫓을 때 제일 중요한 선수들. 
      현대의 축구에서 양 풀백의 오버래핑능력이 필수 능력인 것처럼 수비엔드는 쿼터백에게 달려들어 압박수비를 하는 것이 필수 능력이다. 
      이렇게 쿼터백에게 돌진하는 패스러쉬라는 것이 엔드의 주요 임무이다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : J.J.Watt</font><br/>
      <img src = {JJW}></img><br/>
      휴스턴 텍산스 소속의 젊은 수비수이자 팀 리더. 2011년 시즌에 데뷔해서 괴물같은 활약을 보이며 NFL 최고의 수비수 중 하나로 평가받는 중이다.
      키 196cm 몸무게 130kg의 거구임에도 엄청난 운동능력을 자랑하는 Defensive End. 
      1억달러 계약에 사인한 후 바로 다음날에 새벽4시에 훈련시설에 나와서 웨이트를 거르지 않을 정도로 프로정신이 투철하며 어려운 시절을 잊지 않고 기부를 통한 선행에 앞장서면서 NFL 내외적으로도 존경받는 차세대 리더로 손꼽히고 있다.
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default Econtent;