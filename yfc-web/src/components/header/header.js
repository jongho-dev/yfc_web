import React from "react";
import "./header.scss";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <div className="left">
        <div className="logo">
          {/* <img src={Logo2} alt="" /> */}
          <h2>
            YONSEI
            <br /> FENCING
          </h2>
        </div>
        {/* <ul className="menu">
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">PHOTO</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul> */}
      </div>

      <div className="right">
        <a href="">로그인</a>
        <div className="line"></div>
        <a href="">회원가입</a>
        <IoMenu className="menubtn" />
      </div>
    </header>
  );
}
