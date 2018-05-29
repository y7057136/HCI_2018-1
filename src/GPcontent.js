import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "./ExampleYoutube";
import './css/content.css';
import imgPath from "./image/play.png"

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      자고싶다ssafavavsvasfasfas
    </div>
  </div>
);

const GPcontent = () => (
  <div>
    <div className="header"> 스코어링(scoring) </div>
    <div className="idiom">
      <font size = "5" color="FF00CC">carry the ball</font><br/>
      (어떤 일을) 책임지고 하다.<br/>
       흔히 “캐리하다"라는 말로 우리나라에서도 많이 쓰이고 있다.<br/>
      <font size = "2.5" color="#ede734">
      My co-worker was sick, so I had to carry the ball.
      <br/>
      내 직장 동료가 아팠다. 그래서 내가 모든 일을 책임져야 했다.
      </font>
    </div>
    <div className="content">
      {" "}
      2점: 세이프티 <br/>
      아주 드문 경우로, 수비에 밀려 공격팀이 공을 갖고 자신의 엔드존으로 들어가 다운이 끝나면 세이프티(safety)라고 하여 2점을 내준다. 축구의 자책골 비슷한 개념. <br/>
      3점: 필드골  <a href="https://www.youtube.com/watch?v=ELDBzhgriUM"><img src={imgPath} width="20" height="20"></img></a><br/>
      4th down인데 1st down이나 터치다운을 해내기 어렵지만 거리가 충분히 가깝다고 생각되면 키커가 필드골(field goal)을 차서 성공하면 3점을 얻게 된다. 필드골이 실패하는 경우 공을 찬 지점에서 상대방에게 공을 넘겨주게 되므로 필드골 실패는 펀트보다 거리적으로불리해진다.<br/>
      6점: 터치다운 <a href="https://www.youtube.com/watch?v=weUavyblQNU"><img src={imgPath} width="20" height="20"></img></a><br/>
      공을 가지고 상대방의 골라인을 넘어 엔드존(End Zone)으로 공을 갖고 들어가면 터치다운이라고 하여 6점을 얻게 된다.<br/>
      7점: 터치다운 뒤 추가점수(킥) 성공<br/>
      터치다운 이후 추가점수를 낼 기회가 주어지는데 이때 25야드에서 필드골을 성공시키면 1점을 추가로 얻는다.<br/>
      8점: 터치다운 뒤 추가점수(2-pt conversion) 성공<br/>
      터치다운 이후 추가점수를 낼 기회에서 다시한번 공을 가지고 엔드존에 들어가면 2점을 추가로 얻는다.<br/>
    </div>
  </div>
);

export default GPcontent;
