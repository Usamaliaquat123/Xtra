import PropTypes from "prop-types";
import React, { useState } from "react";
import backgroundImage from "./../../../assets/images/Home/ChildrenTab/backgroud_of_bachi.png";
import "./ChildrenSlideTwoStyles.module.css";
import Typed from "react-typed";
const ChildrenSlideTwo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: "auto",
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `500`
      }}
    >
      <div className="containerContent">
        <div className="btnOurImpact">OUR IMPACT</div>
        <div className="desc">We invested in an educated tomorrow.</div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCount">500+</p>
              <p className="descContainer">
                Students have graduated from our schools
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCount">350+</p>
              <p className="descContainer">
                graduates in professions after completing higher education
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCount">11th</p>
              <p className="descContainer">
                Position secured in GPA among 1135 schools
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCount">23</p>
              <p className="descContainer">
                Years of providing modren education to underprivileged boys and
                girls{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenSlideTwo;
