import React from "react";
import logo from "./assets/logo.svg";
import fleshDown from "./assets/fleshdown.svg";
import menuIcon from "./assets/menuIcon.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [visible, setVisible] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return (
    <>
      {visible && (
        <div
          className="menu"
          style={{ display: visible ? "flex" : "none" }}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="your-club-parent">
            <a href="#" onMouseEnter={() => setHover(true)}>
              Your Club
            </a>
            <img src={fleshDown} alt="fleshDown" />
            <div
              className="your-club-child"
              onMouseLeave={() => setHover(false)}
              style={{ display: hover ? "flex" : "none" }}
            >
              <Link to="/soccer">فوتبال</Link>
              <a href="#">تنیس</a>
              <a href="#">بسکتبال </a>
            </div>
          </div>
          {/*  */}
          <a href="#">مسابقاب</a>
          <a href="#">نتایج</a>
          <a href="#"> صقحات اجتماعی </a>
          <a href="#"> میزها</a>
          <a href="#"> بلیطها </a>
          <Link to="/"> خانه </Link>
        </div>
      )}
      <header>
        <img src={logo} alt="logo" />
        <div
          style={{ display: visible ? "none" : "flex" }}
          onMouseLeave={() => setVisible(false)}
          onMouseEnter={() => setVisible(true)}
        >
          <img src={menuIcon} alt="menu icon" />
          <h4>Menu</h4>
        </div>
      </header>
    </>
  );
}
