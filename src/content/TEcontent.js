import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/TE";
import '../css/content.css';
import AG from "../image/AG.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const TEcontent = () => (
  <div>
    <div className="header"> 타이트 엔드(Tight End) </div>
    <div className="content">
      {" "}
      공격진에서의 위치는 엔드라는 이름이 말해주듯 공격라인의 양 끝.
      이 중 라인맨과 타이트하게 밀착해서 서는 엔드를 타이트엔드라고 하고, 
      라인과 떨어져서 서는 엔드를 스플릿 엔드라고 한다. 
      와이드 리시버의 역할은 스플릿 엔드와 타이트 엔드가 패스를 받는 것 자체는 동일하나 와이드라는 점에서 타이트엔드가 와이드 리시버와 분류가 다른 결정적인 이유이다.
      타이트엔드의 역할은 크게 리시빙, 블로킹, 그리고 러닝으로 나뉜다.
      앞선 두 역할의 비중이 후자보다 높으며 특히 와이드 리시버와 다르게 블로킹 능력도 타이트엔드의 역량을 평가하는데 중요한 항목이다.
      그러나 선수 개인의 능력과 팀 전술 등에 따라 리시빙 혹은 블로킹 어느 한쪽에 더 특화된 경우도 흔하다. 
      때문에 리시빙과 블로킹 역할을 모두 훌륭하게 수행하는 타이트엔드는 엘리트로 분류된다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Antonio Gates</font><br/>
      <img src = {AG}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default TEcontent;