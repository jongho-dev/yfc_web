import React from "react";
import "./home.scss";
import AboutPage from "../about/about";
import RecruitPage from "../recruit/recruit";
import MainPic from "../../assets/images/mainpicture.png";
import MaPic from "../../assets/images/mapic.png";

export default function HomePage() {
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  });
  return (
    <div className="home">
      <div className="main">
        <img src={MaPic} alt="" />
        <div className="black"></div>
      </div>

      <AboutPage />
      <RecruitPage />
    </div>
  );
}
