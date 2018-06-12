import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/G";
import '../css/content.css';
import SH from "../image/SH.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const Gcontent = () => (
  <div>
    <div className="header"> 가드(Guard) </div>
    <div className="content">
      {" "}
      센터의 양 옆에 서는 선수들이다. 
      주된 역할은 블로킹이다. 
      특히 러닝백의 러싱 공간을 확보하는 것이 가장 중요하다.
      전략의 특성에 따라서 약간 다른 역할을 하기도 하지만 러닝백의 가장 큰 임무인 중앙돌파는 가드의 블로킹이 필수. 
      특히 런블로킹에 능한 선수를 선호한다. 
      가드의 주요 무브 중 하나가 풀링(Pulling)이다. 
      풀링이란 위와 같이 자기 자리를 벗어나 움직이면서 수비수를 블로킹하는 기술로 볼캐리어를 직접 보호하는 기술이다.
      현대 미식축구에서는 오펜스 라인맨 누구도 관계없이 풀링 플레이를 구사하지만, 여전히 가드가 이 역할을 가장 많이 수행하는 편이다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Steve Hutchinson</font><br/>
      <img src = {SH}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default Gcontent;