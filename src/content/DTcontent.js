import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/DT";
import '../css/content.css';
import WP from "../image/WP.png";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const DTcontent = () => (
  <div>
    <div className="header"> 디펜시브 태클(Defensive Tackle) </div>
    <div className="content">
      {" "}
      수비라인의 중앙에 서며 두명의 수비 엔드들 사이에 정렬하여 플레이를 시작한다.
      주 목적은 상대 러닝백의 중앙돌파 시도를 저지하는 것이며 가능하다면 중앙돌파로 쿼터백을 무너뜨리는 것이 목표.
      수비 태클은 좀 더 러닝백 저지에 치중하기 때문에 쌕을 기록하는 일은 적지만 파워가 좋은 선수들은 쌕을 5~6개씩 기록하기도 한다.
      최소 120kg 이상의 거구들이 주로 맡는 포지션
    <div className = "star">
      <font size = "5"> Star Player : William Perry</font><br/>
      <img src = {WP}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
  </div>
);

export default DTcontent;
