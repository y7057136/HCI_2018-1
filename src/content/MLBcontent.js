import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/MLB";
import '../css/content.css';
import BU from "../image/BU.png";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const MLBcontent = () => (
  <div>
    <div className="header"> 미들 라인백커(Middle Linebacker) </div>
    <div className="content">
      {" "}
      수비라인의 중앙에 서며 두명의 수비 엔드들 사이에 정렬하여 플레이를 시작한다. 
      주 목적은 상대 러닝백의 중앙돌파 시도를 저지하는 것이며 가능하다면 중앙돌파로 쿼터백을 무너뜨리는 것이 목표. 
      수비 태클은 좀 더 러닝백 저지에 치중하기 때문에 쌕을 기록하는 일은 적지만 파워가 좋은 선수들은 쌕을 5~6개씩 기록하기도 한다.
      최소 120kg 이상의 거구들이 주로 맡는 포지션
    <div className = "star">
      <font size = "5"> Star Player : William Perry</font><br/>
      <img src = {BU}></img><br/>
      2012시즌을 끝으로 은퇴.
      레이 루이스와 함께 흑백 양대 미드라인배커가 2012시즌을 끝으로 은퇴하게 되었다. 
      다만 슈퍼볼 우승이라는 유종의 미를 거두고 영광스럽게 떠난 루이스에 비해 울라커는 
      2006년 슈퍼볼 41에서 페이튼 매닝의 인디애나폴리스 콜츠에 밀려 아쉽게 준우승만 차지하고 
      2012년 노쇠화에 이은 재계약 실패로 아쉽게 은퇴했다. 
      이후 2018년에 NFL 명예의 전당에 헌액되었다.
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
  </div>
);

export default MLBcontent;