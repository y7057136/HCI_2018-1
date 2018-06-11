import React from "react";
import Popup from "reactjs-popup";
import QBvideo from "../ExampleYoutube";
import '../css/content.css';
import TB from "../image/TomBrady.jpeg";

const Card = ({ title, content }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      {content}
    </div>
  </div>
);

const QBcontent = () => (
  <div>
    <div className="header"> 쿼터백(Quarter Back) </div>
    <div className="idiom">
      <font size = "5" color="FF00CC">Monday-morning quarterback</font><br/>
      잘 알려지지 않은 부분에 대해 문제를 풀어내는 답을 내는 사람<br/>
      <font size = "2.5" color="#ede734">
      Social media seems to have turned everyone into a Monday morning
      quarterback whenever political issues are discussed.
      <br/>
      소셜미디어는 정치적인 이슈가 논의될때 모든 사람들을 답을 낼 수 있는 사람들로 만들어 냈다.
      </font>
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
        <Card title="라인맨" content = "라인맨"/>
      </Popup>
      이 제일 앞에 늘어서 있고 러싱을 담당하는
      <Popup
        trigger={<a><font color="FF00CC">하프백</font></a>}
        position="bottom center"
        on="hover"
      >
        <Card title="하프백" content="하프백"/>
      </Popup>
      이 가장 뒤에 서고 라인맨과 하프백의 중간 지점에 하프백을 보조하는 풀백이 서게 된다.
      그리고 센터로부터 스냅을 받아 러닝백에게 공을 전달하거나 리시버들에게 포워드 패스를 담당하는 포지션의 선수는 라인맨과 하프백의 중간지점에 서게 되는데,
      풀백까지의 거리의 1/4(quarter)쯤 서는 포지션이라고 해서 쿼터백이라는 명칭이 나오게 된 것이다.
    </div>
    <div className = "star">
      <font size = "5"> Star Player : Tom Brady</font><br/>
      <img src = {TB}></img><br/>
      2001년 시즌 혜성처럼 나타나서 2016년 시즌까지 뉴잉글랜드 패트리어츠의 슈퍼볼 5회 우승(최다우승)을 이끈 쿼터백.
      NFL 정규시즌-포스트시즌 통산 최다승 쿼터백. 그가 주전으로 뛰었던 16시즌동안 패트리어츠는 15번의 디비전 우승,
      12번의 챔피언쉽 진출, 그리고 8번의 슈퍼볼 진출을 이루어냈다. 현지에서는 조 몬태나와 더불어 NFL 역사상 최고의 쿼터백으로
      여겨지고 있으며 역대 최고라는 소리도 심심치 않게 나오는 현재 진행중인 전설.
    </div>
    <font size = "5"> 관련 영상</font><br/>
    <QBvideo />
  </div>
);

export default QBcontent;
