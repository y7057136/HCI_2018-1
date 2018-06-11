import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../ExampleYoutube";
import '../css/content.css';
import WS from "../image/WS.jpg";

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
    <div className="header"> 오펜시브 태클(Offensive Tackle) </div>
    <div className="content">
      {" "}
      공격라인 바깥쪽에 선다. 이쪽은 쿼터백을 직접 노리는 수비수들을 막아야 한다.
      항공전으로 비교하면 폭격기의 호위용 전투기 같은 임무를 하는 셈이다.
      특히 쿼터백이 볼 수 없는 방향에 있는 태클의 역할은 막중하다. 
      최근 흥행한 미식축구 영화 '블라인드 사이드'의 주인공 마이클 오어의 역할이 바로 이 역할. 
      영화 제목인 블라인드 사이드의 뜻이 바로 쿼터백이 볼 수 없는 방향, 즉 사각지대를 뜻한다. 
      현대 미식축구가 패싱게임 위주로 흐르면서 급격하게 몸값이 오르고 있는 포지션 중 하나. 
      특히 왼쪽 태클은 공격진에서 러닝백, 리시버보다도 중요도가 높은 포지션 중 하나인데, 
      이 선수가 상대 수비수에게 1대1에서 밀리면 쿼터백이 마음 놓고 등 뒤를 맡길 수 없기 때문에 이쪽 포지션에 좀 더 전략적인 투자가 늘어나고 스타급 선수들이 예전보다 연봉이 크게 올랐다. 
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Warren Sapp</font><br/>
      <img src = {WS}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default Gcontent;