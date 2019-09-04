import PropTypes from "prop-types";
import React, { useState } from "react";
import "./HomeSlideStyles.css";
import Typed from "react-typed";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import backgroundImage from "./../../../assets/images/Home/HomeSlide1.jpg";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
const HomeSlide = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: 0,
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `auto`
      }}
      className="backgroundHeight"
    >
      <div className="container-fluid">
        <div className="mainContainerHeadingText">
          {/* <div className={HomeSlideStyle.backgroundText}> */}

          <p>
            <span className="backgroundText">
              THE SMALLEST ACT OF KINDNESS IS WORTH MORE{" "}
            </span>
            <br />
            <span className="backgroundText">THAN THE GRANDEST INTENTION</span>
            <br />
            <span className="backgroundText">- OSCAR WILDE</span>
          </p>
          <div className="actNoeBtn">
            <p>ACT NOW</p>
          </div>
        </div>

        <div className="socialMediaTab">
          <div className="followUsText">FOLLOW US</div>
          <img className="socialIcons" src={facebook}></img>
          <img className="socialIcons" src={youtube} class="img-fluid"></img>
          <img className="socialIcons" src={instagram} class="img-fluid"></img>
          <img className="socialIcons" src={wifi} class="img-fluid"></img>
          <img className="socialIcons" src={twitter} class="img-fluid"></img>
        </div>
        <div className="textBottomTab">
          <div className="yellowIndicator"></div>
          WE ARE THE FUTURE
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
