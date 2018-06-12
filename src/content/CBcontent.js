import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/CB";
import '../css/content.css';
import DS from "../image/DS.jpg";

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
    <div className="header"> 코너 백(Corner Back) </div>
    <div className="content">
      {" "}
      미식축구의 수비 포지션. 수비 뒤뜰의 가장자리로 침투해 들어오는 상대팀 와이드 리시버를 막는 것이 주임무다. 
      후방 중앙에서 수비를 하는 세이프티와 함께 최종 수비를 담당한다. 
      공격수가 양쪽 사이드에 각각 놓이는 경기의 특성상 코너백의 가장 중요한 역할은 와이드 리시버와의 1대 1 경합이다. 
      팀 전술에 따라 전담마크가 아닌 지역수비를 할 수도 있으나, 가장 중요한 상황에는 리시버들을 1대 1로 막아내는 것이 중요하다. 
      이에 비하여 세이프티는 필드를 두루 살피는 전략적인 위치여서 코너백은 신체적인 수비, 
      세이프티는 전략적인 수비 능력을 더 중시한다고 한다. 
      코너백을 맡다가 세이프티를 맡게 되는 경우들이 더러 있는데, 
      "난 머리보다 몸인데 왜 세이프티를 시키냐?"라는 말이 있을 정도로 같은 듯 다른 것이 두 포지션의 차이. 
    </div>
    <div className = "star">
      <font size = "5"> Star Player : J.J.Watt</font><br/>
      <img src = {DS}></img><br/>
      대학 풋볼 시절 플로리다 스테이트 세미놀스에서 최고의 활약을 펼치며 팀을 명문의 반열로 이끌었을뿐만 아니라 
      이미 NFL에서도 탑급 활약을 펼칠 재능으로 인정받았었다. 
      이후 애틀랜타 팰컨스에서 1989년 전체 5순위로 지명받은 샌더스는 
      샌프란시스코 포티나이너스, 댈러스 카우보이스, 워싱턴 레드스킨스등 4개팀에서 11년간 뛰면서 8번의 프로보울, 
      그해 최고의 선수인 AP 퍼스트팀 동시선정을 받았고, 2번의 슈퍼볼 우승, 1994년 AP DPOY(최우수 수비선수) 수상등의 경력을 자랑한다. 
      NFL.com이 공식 선정한 All time best player 순위에서 34위에 선정되었다.
      참고로 미국 스포츠 역사상 유일하게 슈퍼볼과 월드시리즈 양쪽 모두 주전으로 출전한 선수였다.
      또한, MLB에서 홈런을 날리고 NFL에서 터치다운을 한 선수로 유명하다.
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default Econtent;