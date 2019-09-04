import PropTypes from "prop-types";
import React, { useState } from "react";
// import logoImg from "./../../Images/logo.png"
// import homeLesson from "./../../Images/Home/homeLesson.png"
// import teacherLesson from "./../../Images/Home/teacherLesson.png"
// import eductionLesson from "./../../Images/Home/eductionLesson.png"
import bachiWatching from "./../../../assets/images/Home/bachiWatching.png";
import "./HomeSlideThirdStyles.css";
const HomeSlideThird = () => {
  return (
    <div className="containerSlideThird">
      <div className="buttonWhatWeDo">
        <p>WHAT WE DO</p>
      </div>
      <div className="secondLayerContainerThird">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="containerTextInner">
                <p className="headingText">
                  Promoting 21st Century Quality Education in Kashmir & Pakistan
                  for future generations.
                </p>
                <div className="slideDescription">
                  <p className="descriptionText">
                    Kasimir Education Foundation UK was established in
                    conjunction with KEF Pakistan in 1996 out of an altruistic
                    response to fight poverty in equality amongest the most
                    vulnerable and marginalized rural communities in Azad
                    Kashmir and Pakistan. Three schools have been constructed in
                    various rural areas where currently 900 students are
                    enrolled.
                  </p>
                  <a href="/Schools" className="buttonLastBlack">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <div className="circleLayer">
        <div className="imageLayer">
          <img src={bachiWatching}></img>
        </div>
      </div>

      <div className="containerSecondImage"></div>
    </div>
  );
};

export default HomeSlideThird;
