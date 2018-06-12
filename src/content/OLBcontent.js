import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/OLB";
import '../css/content.css';
import LT from "../image/LT.png";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const OLBcontent = () => (
  <div>
    <div className="header"> 아웃사이드 라인배커(Outside Linebacker) </div>
    <div className="content">
      {" "}
      아웃사이드 라인배커. 
      이 포지션은 사실상 수비엔드와 거의 같은 포지션으로 수비시에는 쿼터백에게 돌진하여 쌕을 따내는 것이 최고의 임무이다. 
      축구에선 윙백에 가까운 역할로, 축구의 윙백과 동일하게 한쪽 측면의 패스러쉬를 혼자 책임지는 중요한 역할을 한다. 
      가끔 수비엔드가 3-4 디펜스에서는 이 포지션으로 나올 때가 있다. 다른 점이라면 수비 엔드는 라인에 서기 때문에 신장과 체중이 더 중요하고, 
      이 포지션은 정렬할 때 쿼터백에서 가장 멀리 떨어져 있는 수비 라인맨이기 때문에 다른 선수들보다도 스피드가 절대적으로 중요하다. 
      멀리서 돌진해 상대 공격 라인맨의 블로킹을 뚫고 들어가야 하기 때문에 투쟁심도 필수적이다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Lawrence Taylor</font><br/>
      <img src = {LT}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default OLBcontent;