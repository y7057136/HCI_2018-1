import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "./ExampleYoutube";
import './modal.css';

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      자고싶다ssafavavsvasfasfas
    </div>
  </div>
);

const QBcontent = () => (
  <div>
    <div className="header"> 쿼터백(Quarter Back) </div>
    <div className="video">
      <a>asdasddsadasd asssssssssssssssssssssssssssssssssssssssss</a>
      <QBvideo />
    </div>
    <div className="content">
      {" "}
      미식축구의 포지션의 한 종류이자 미식축구의 꽃. 야구는 투수놀음이라는 말이 있다면 미식축구의 쿼터백은 그 선발투수보다 중요한 역할을 한다.
      라인맨 뒤에서 공을 받아 던져주는 포지션으로, 그야말로 필드의 야전사령관이자 미식축구 팀의 간판스타.
      쿼터백이라는 명칭의 어원은 초기 미식축구의 포메이션에서 유래했다.
      러닝게임 위주였던 초기 미식축구는
      <Popup
        trigger={<a><font color="FF00CC">라인맨</font></a>}
        position="bottom center"
        on="hover"
      >
        <Card title="졸려" />
      </Popup>
      이 제일 앞에 늘어서 있고 러싱을 담당하는
      <Popup
        trigger={<a><font color="FF00CC">하프백</font></a>}
        position="bottom center"
        on="hover"
      >
        <Card title="졸려" />
      </Popup>
      이 가장 뒤에 서고 라인맨과 하프백의 중간 지점에 하프백을 보조하는 풀백이 서게 된다.
      그리고 센터로부터 스냅을 받아 러닝백에게 공을 전달하거나 리시버들에게 포워드 패스를 담당하는 포지션의 선수는 라인맨과 하프백의 중간지점에 서게 되는데,
      풀백까지의 거리의 1/4(quarter)쯤 서는 포지션이라고 해서 쿼터백이라는 명칭이 나오게 된 것이다.

    </div>
  </div>
);

export default QBcontent;
