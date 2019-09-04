import React, { useState } from "react";
import "./NewsEventsSlideOneStyle.css";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
import bachi from "./../../../assets/images/NewsandEvents/1.png";
const NewsEventsSlideOne = () => {
  return (
    <>
      <div className="containerStyle">
        <div className="headingSocialMmediaIcons">
          <div className="allignSocialAndHeading">
            {/* Heading container  */}
            <p className="latestPostText">LATEST POST</p>
            {/* Heading Icons */}
            <div className="containerIcons">
              <p className="followUsText">FOLLOW US</p>
              <img
                className="socialIcons"
                src={facebook}
                class="img-fluid"
              ></img>
              <img
                className="socialIcons"
                src={youtube}
                class="img-fluid"
              ></img>
              <img
                className="socialIcons"
                src={instagram}
                class="img-fluid"
              ></img>
              <img className="socialIcons" src={wifi} class="img-fluid"></img>
              <img
                className="socialIcons"
                src={twitter}
                class="img-fluid"
              ></img>
            </div>
          </div>
        </div>

        <div className="containerContent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="containerContentLeft">
                  <p className="containerHeading">
                    GROUND BREAKING CERMONY OF SECONDARY BLOCK OF BVPS
                  </p>
                  <p className="containerDesc">
                    The grounding breaking cermony for the construction of the
                    new building of Banjosa Valley Public School took place at
                    Kashmir.Mr. Yaqoob Sattar, DMD /CFO & Chairman, PSO CSR
                    Trust
                  </p>
                  <p className="containerLink">Continue reading this post</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="imageContainer">
                  <img className="tharkis" src={bachi}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsEventsSlideOne;
