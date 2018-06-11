import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../ExampleYoutube";
import '../css/content.css';
import DJ from "../image/DarylJohnston.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const FBcontent = () => (
  <div>
    <div className="header"> 풀백(FullBack) </div>
    <div className="content">
      {" "}
      러싱 전술에서 주로 등장하며 러닝백 앞에 서서 라인맨과 함께 러닝백의 길을 뚫어주는 러닝백의 보디가드 역할을 한다.
      혹은 직접 볼을 들고 뛰거나 짧은 패스를 받아내는등 러닝백에 쏠린 시선을 분산하는 보디가드나 와이드 리시버가 많이 
      나오는 샷건등의 포메이션에서 쿼터백의 보호 역할도 수행한다.
      공을 들고 뛰는 일이 거의 없어서 러닝백만큼 주목받는 포지션이 아니지만,
      뛰어난 러닝백 옆에는 반드시 뛰어난 풀백이 있을 만큼 음지에서 제 역할을 하는 선수가 풀백에 적격이다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Daryl Johnston</font><br/>
      <img src = {DJ}></img><br/>
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default FBcontent;