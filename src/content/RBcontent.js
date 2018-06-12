import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/RB";
import '../css/content.css';
import MTL from "../image/MTL.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const RBcontent = () => (
  <div>
    <div className="header"> 러닝백(RunningBack) </div>
    <div className="content">
      {" "}
      쿼터백이 오펜스의 사령관이라면 러닝백은 오펜스의 돌격대장이라 할 수 있다. 
      쿼터백으로부터 스크리미지 라인 뒤에서 공을 받아(hand-off) 뛰어서 전진하는 역할을 한다. 
      직선 주력의 재빠름 뿐만 아니라 상대를 제치기 위해 방향을 급선회하는 테크닉과 자기보다 훨씬 거대한 수비수들의 돌진을 두려워하지 않는 저돌성, 
      그리고 그렇게 치고받고 깔리는 중에도 공을 절대 손에서 놓치지 않는 집중력, 
      그리고 태클을 당한 뒤 1분 안에 다시 일어나서 뛸 수 있는 강한 체력이 요구되는 포지션이다.

    </div>
    <div className = "star">
      <font size = "5"> Star Player : Marshawn Terrell Lynch</font><br/>
      <img src = {MTL}></img><br/>
      시애틀 시호크스의 레전드 러닝백 "비스트 모드"[12] 마션 린치(현재 오클랜드 레이더스 소속)
      2007년 버펄로 빌스에 의해 1순위로 지명되고 2010년 시애틀로 이적하면서 기량이 만개한다. 
      특히 2010년 시즌 뉴올리언스 세인츠와의 와일드카드 경기 4쿼터에서의 67야드짜리 러싱 터치다운은 NFL 경기 중 최고의 명장면으로 꼽힐 정도.
      린치의 스타일은 수비를 그대로 뚫고 나가는 플레이로 아주 유명하다. 당장 유튜브에 "Lynch Beast Mode"라고만 치면 이해가 쉽게 될 것이다.
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default RBcontent;