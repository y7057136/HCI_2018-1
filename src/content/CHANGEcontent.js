import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../video/C";
import '../css/content.css';
import TP from "../image/TP.jpg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const Ccontent = () => (
  <div>
    <div className="header"> 4번의 다운이 일어났기 때문에 포지션 선택권이 넘어갑니다. </div>
    <font size = "5"> 다운</font>
    <div className="content">
      {" "}
      미식축구의 진행을 이해하는 데 있어 제일 기초적이며 중요한 개념.
      미식축구의 플레이는 주심의 신호를 받고 공격팀 센터가 쿼터백에게 공을 건네주는 스냅 동작으로 시작하는데,
      이 때부터 공을 잡은 선수가 경기장 밖으로 나가거나, 점수를 내거나, 전진하려고 하는데 수비수들한테 막혀 더 이상 움직임이 불가능해졌을 때까지를 한 다운이라고 한다.
      공격팀은 네 번의 다운 동안 10야드를 전진하면 다시 첫 다운부터 시작하게 된다.
      그러므로 지금이 몇 번째 다운이며 새로운 퍼스트 다운까지 몇 야드 남았는지가 현재 경기 상황을 알려주는 제일 중요한 지표가 된다.
      예를 들어 '2nd and 5'라고 하면 '지금 공격팀은 두 번째 다운을 하고 있으며, 5야드를 더 가야 새로운 퍼스트 다운이 된다'라는 뜻이다.
      4번에 공격안에 10야드를 전진하지 못하면 공격권이 넘어가게 된다.
    </div>
    <font size = "5">경기시간</font>
    <div className="content">
      각 15분씩의 4쿼터제로 진행되어 총 60분이 소요된다. 4쿼터 종료시 동점인 경우에는 연장전을 하는데, 프로는 서든데스 방식으로, 아마추어는 각팀에게 공격권을 한 번씩 부여하는 방식으로 진행된다.
    </div>
  </div>
);

export default Ccontent;
