import React from "react";
import "./home.scss";
import AboutPage from "../about/about";
import ActivityPage from "../activity/activity";
import RecruitPage from "../recruit/recruit";
import MainPic from "../../assets/images/mainpicture.png";
import MaPic from "../../assets/images/mapic.png";

export default function HomePage() {
  return (
    <div className="home">
      <div className="main">
        <img src={MaPic} alt="" />
        <div className="black"></div>
      </div>

      <AboutPage />
      <ActivityPage />
      <RecruitPage />
    </div>
  );
}
