"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  IconHeart,
  IconMenu2,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
// import headlinelogo from "../Assets/nav-top-logo.png";
// import logo from "../Assets/Logo.png";
import "../styles/header.css";

const MergedComponent = () => {
  const [menuclass, setMenu] = useState("toggleSidebar");
  const toggleMenu = () => {
    setMenu(menuclass === "toggleSidebar" ? "zindex3" : "toggleSidebar");
  };

  return (
    <nav>
      <div className="header">
        <section className="top">
          <span className="headline left-m">
            {/* <img className="headline-logo" src={headlinelogo} /> */}
            <span>Lorem ipsum dolor</span>
          </span>
          <span className="headline">
            {/* <img className="headline-logo" src={headlinelogo} /> */}
            <span>Lorem Ipsum Dolor </span>
          </span>
          <span className="headline right-m">
            {/* <img className="headline-logo" src={headlinelogo} /> */}
            <span>Lorem Ipsum Dolor</span>
          </span>
        </section>
        <section className="bottom-nav">
          <div className="bottom-nav-utility">
            <div className="NavBarLeft">
              <div className="hamburgerButton" onClick={toggleMenu}>
                <IconMenu2 />
              </div>
              <span className="logo">
                {/* <Image src={logo} alt="logo" /> */}
              </span>
            </div>

            <aside className={menuclass}>
              <div className="sibebarlogo">
                <span>LOGO</span>
                <span onClick={toggleMenu}>X</span>
              </div>
              <div className="signup">Sign Up</div>
              <div className="signin">Sign in</div>
              <div className="abt">About</div>
              <div className="skills">Skills</div>
              <div className="stories">Stories</div>
              <div className="contactus">Contact Us</div>
            </aside>

            <div className="nav-utilities">
              <IconSearch className="img search" />
              <IconHeart className="img like" />
              <IconShoppingBag className="img bag" />
              <IconUser className="img profile" />
              <select name="languages" id="languages" className="lang">
                <option value="ENG">ENG</option>
                <option value="ESP">ESP</option>
                <option value="FRA">FRA</option>
              </select>
            </div>
          </div>
          <span className="website-name">LOGO</span>

          <div className="nav-links">
            <ul>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">SKILLS</a>
              </li>
              <li>
                <a href="#">STORIES</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default MergedComponent;
