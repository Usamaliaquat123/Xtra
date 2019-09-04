import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/svpc.png";
import ghar from "./../../../../assets/images/WhereWedo/svpc2.png";
import "./WhereWeWorkSlideOneStyles.css";
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
                  <div className="containerDescSl">
                    SOAN VALLEY PUBLIC SCHOOL
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
                  "An investment in knowledge pays the best interest"
                  <br />
                  <br />
                  <br />- Benjamin Franklin
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
                  <p className="headingSlideText">Soan Valley Public School</p>
                  <p className="DescStyleRight">
                    Encouraged by the phenomenal sucess of PVPS, KEF planned to
                    replicate similar schools in other parts of the country.
                    Thus, Soan Valley Public School was established in May,2005
                    at village Pakhowal about 35 km from Rawalpindi. The entire
                    funding for the school building serves as an adjuct to
                    College of Teacher Education as a Resource Center of initial
                    Teaching practices.
                    <br /> <br />
                    like PVPS, SVPS has been provided with all the modern
                    educational facilities. Its library, named after Miss Anna
                    Finn, a london school teacher has almost 10,000 books,
                    mostly donated by KEF UK.
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
