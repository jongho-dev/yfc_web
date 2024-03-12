import React, { useState } from "react";
import "./recruit.scss";
import { SlArrowDown } from "react-icons/sl";

export default function RecruitPage() {
  const [q1Open, setQ1Open] = useState(false);
  const [q2Open, setQ2Open] = useState(false);
  const [q3Open, setQ3Open] = useState(false);
  const [q4Open, setQ4Open] = useState(false);
  const [q5Open, setQ5Open] = useState(false);
  const [q6Open, setQ6Open] = useState(false);

  return (
    <div className="recruit">
      {/* <div className="schedule">
        <h3>모집 일정</h3>
      </div> */}
      <div className="qna">
        <h3>자주 하는 질문</h3>
        <ul>
          <li style={{ height: q1Open ? "148px" : "98px" }}>
            <div className="question">
              Q. 무슨 종목을 다루나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q1Open) {
                    setQ1Open(false);
                  } else {
                    setQ1Open(true);
                  }
                }}
                style={{ transform: q1Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q1Open ? "1" : "0" }}>
              A. 플러레와 에페를 다루고 있으나 주종목을 플러레입니다.
            </div>
          </li>
          <li style={{ height: q2Open ? "175px" : "98px" }}>
            <div className="question">
              Q. 펜싱은 처음인데 괜찮나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q2Open) {
                    setQ2Open(false);
                  } else {
                    setQ2Open(true);
                  }
                }}
                style={{ transform: q2Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q2Open ? "1" : "0" }}>
              A. 괜찮습니다! 신입부원 대다수가 펜싱 초보자이며 다같이 기본
              스텝부터 배울 예정입니다.
              <br />
              &ensp; (전문 플러레 코치님과의 훈련, 선배님들과의 1:1 강습 가능)
            </div>
          </li>
          <li style={{ height: q3Open ? "148px" : "98px" }}>
            <div className="question">
              Q. 부원들 학번과 성비가 어떻게 되나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q3Open) {
                    setQ3Open(false);
                  } else {
                    setQ3Open(true);
                  }
                }}
                style={{ transform: q3Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q3Open ? "1" : "0" }}>
              A. 22학번부터 대학원생까지 다양하게 있으며 남녀 성비는 5:5로
              유지하고 있습니다.
            </div>
          </li>
          <li style={{ height: q4Open ? "148px" : "98px" }}>
            <div className="question">
              Q. 월수금토 정규 훈련은 모두 필참인가요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q4Open) {
                    setQ4Open(false);
                  } else {
                    setQ4Open(true);
                  }
                }}
                style={{ transform: q4Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q4Open ? "1" : "0" }}>
              A. 주 1회 이상 필참입니다!
            </div>
          </li>
          <li style={{ height: q5Open ? "175px" : "98px" }}>
            <div className="question">
              Q. 펜싱 대회에도 참가할 수 있나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q5Open) {
                    setQ5Open(false);
                  } else {
                    setQ5Open(true);
                  }
                }}
                style={{ transform: q5Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q5Open ? "1" : "0" }}>
              A. 연세펜싱부는 대회 출전을 목표로 훈련에 임하기에 어느정도 실력만
              갖춰졌다면 가능합니다! <br />
              &emsp;&ensp;또한 Y-CUP의 경우 전원 필수 참여로, 선수 혹은 스텝으로
              참여해야 합니다.
            </div>
          </li>
          <li style={{ height: q6Open ? "175px" : "98px" }}>
            <div className="question">
              Q. 펜싱 장비는 모두 사비로 구입해야 하나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q6Open) {
                    setQ6Open(false);
                  } else {
                    setQ6Open(true);
                  }
                }}
                style={{ transform: q6Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q6Open ? "1" : "0" }}>
              A. 와이어를 제외한 모든 장비는 공용으로 대여 가능합니다! <br />
              &emsp; 신입 훈련 기간에도 공용 장비를 이용하여 훈련을 진행합니다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
