import React, { useState } from "react";
import "./header.scss";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/images/mainlogo.jpg";

export default function Header() {
  const [size, setSize] = useState("wide");
  window.addEventListener("resize", () => {
    if (window.innerWidth < 950) {
      setSize("small");
    } else {
      setSize("wide");
    }
  });

  return (
    <header>
      <div
        className="inline_wide"
        style={{ display: size == "wide" ? "flex" : "none" }}
      >
        <a href="" className="left">
          <img src={Logo} className="logo" alt="" />
        </a>
        <div className="right">
          <ul className="menu">
            <li>
              <a href="">소개</a>
            </li>
            <li>
              <a href="">활동</a>
            </li>
            <li>
              <a href="">지원하기</a>
            </li>
            <li>
              <a href="">로그인</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="inline_small"
        style={{ display: size == "wide" ? "none" : "flex" }}
      >
        <a href="" className="left">
          <img src={Logo} className="logo" alt="" />
        </a>
        <IoMenu className="right-menubtn" />
      </div>
    </header>
  );
}
