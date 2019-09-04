import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/jact.png";
import ghar from "./../../../../assets/images/WhereWedo/jact2.png";
import "./WhereWeWorkSlideOneStyle.css";
import Typed from "react-typed";
const WhereWeWorkSlideOne = () => {
  return (
    <>
      <div className="containerSlide">
        <div className="conbtainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="workbtn">WHERE WE WORK</div>
                <div className="containerText">
                  <div className="nonSelect">
                    <a href="/Pvps" style={{ textDecoration: "none" }}>
                      PEARL VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="nonSelect">
                    <a href="/Bvps" style={{ textDecoration: "none" }}>
                      BANJOSA VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="nonSelect">
                    <a href="/Svps" style={{ textDecoration: "none" }}>
                      SOAN VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="containerDescSl">
                    JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="firstSlideImage">
                  <img
                    // class='img-fluid'
                    // width={500}
                    className="bachiImg"
                    src={bachiBachaRun}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="containerStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="slideTextLeft">
                <p className="slideDescLeft">
                  "No nation can raise to the height of glory unless your women
                  has side by side with you "
                  <br />
                  <br />
                  <br />- Muhammad Ali Jinnah
                </p>
                <div className="slideRightImage">
                  <img src={ghar} class="img-fluid"></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="slideRightContainer">
                <div className="textContainer">
                  <p className="headingSlideText">
                    Joan Atkinson College of Teacher Education
                  </p>
                  <p className="DescStyleRight">
                    Quality education that KEF is committed to cannot be
                    deliverd without teachers who are personally motivated, who
                    have a wide range of pedagogical skills to develop child
                    centered learning enviroments with a focus on interactive
                    teaching methodology to promote advanced cognitive
                    performance.
                    <br /> <br />
                    KEF made a conscious decision to invest in establishing and
                    developing our own College of Teacher Education in 2001, in
                    order to take the bes available teachers and support them
                    towords becoming outstanding teachers using the most
                    effective research oriented continous professional
                    development techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereWeWorkSlideOne;
