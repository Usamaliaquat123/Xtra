import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/bachiBachaRun.png";
import ghar from "./../../../../assets/images/WhereWedo/ghar.png";
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
                  <div className="containerDescSl">
                    PEARL VALLEY PUBLIC SCHOOL
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
                  <div className="nonSelect">
                    <a href="/Jact" style={{ textDecoration: "none" }}>
                      JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="firstSlideImage">
                  <img
                    // class='img-fluid'
                    // width={500}
                    height={300}
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
                  "When a nation come devoid of arts and learning, it invites
                  poverty. And when poverty comes it brings in it's wake
                  thousands of crimes"
                  <br />
                  <br />
                  <br />- Sir Syed Ahmed Khan
                </p>
                <div className="slideRightImage">
                  <img
                    src={ghar}
                    class="img-fluid"
                    width={500}
                    height={140}
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="slideRightContainer">
                <div className="textContainer">
                  <p className="headingSlideText">Pearl Valley Public School</p>
                  <p className="DescStyleRight">
                    Pearl Valley Public School and College was the pilot project
                    of Kashmir Education Foundation. It is located at Rawalkot,
                    Azad Kashmir for which over 3 acres were donated by the
                    Trustees. The school started functioning on August 14, 1996
                    and currently has classes up to 12th grade.
                    <br /> <br />
                    In line with KEF's policy, new intake is limited to class
                    Prep only. It is non residential day school were children
                    from underpriviledged areas of Rawalkot and surrounding
                    Villages (covering an area of 200 square kilometers with a
                    population of over 100,000 people) are admitted on merit
                    basis, with girls comprising 50% of the total number.
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
