import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewsEventsSlideTwoStyle.css";
// importing Posts
import pstImg1 from "./../../../assets/images/NewsandEvents/01.png";
import pstImg2 from "./../../../assets/images/NewsandEvents/02.png";
import evntImg1 from "./../../../assets/images/NewsandEvents/03.png";
import evntImg2 from "./../../../assets/images/NewsandEvents/04.png";
import pstImg3 from "./../../../assets/images/NewsandEvents/05.png";
import pstImg4 from "./../../../assets/images/NewsandEvents/06.png";
import Typed from "react-typed";
const NewsEventsSlideTwo = () => {
  return (
    <>
      <div className="containerView">
        <div className="oneRowConatiner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                {/* /////////////////////////////// */}
                <div className="postOne">
                  {/* todo Image section */}
                  <div className="btnStyle">NEWS POST</div>
                  <img className="socialIcons" src={pstImg1}></img>
                  <div className="containerCardText">
                    <p className="titleNews">
                      Tree planting initiative in Pearl Valley Public School,
                      Rawalkot.
                    </p>
                    <p className="linkNews">Read this post</p>
                  </div>
                </div>
                {/* /////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* ///////////////////////// */}
                <div className="postTwo">
                  {/* todo Image section */}
                  <div className="btnStyle">NEWS POST</div>
                  <img className="socialIcons" src={pstImg2}></img>
                  <div className="containerCardTextPostTwo">
                    <p className="titleNews">Banjosa Valley Public School</p>
                    <p className="linkNewspostTwo">Read this post</p>
                  </div>
                </div>
                {/* //////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-6">
                {/* /////////////////////// */}
                <div className="postThree">
                  <div className="containerCardTextPostThree">
                    <p className="titleNews">
                      Tree planting initiative in Green Fields Park
                    </p>
                    <p className="linkNews">Find out more about this event</p>
                  </div>
                  <div className="btnStyleSlideThree">EVENT</div>
                  {/* todo Image section */}
                  <img className="cardLlandImage" src={evntImg1}></img>
                </div>
                {/* /////////////////////// */}
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}

            <br />
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {/* ///////////////////////////////// */}
                <div className="postThree">
                  <div className="containerCardTextPostThree">
                    <p className="titleNews">
                      Donation by Acklam Grange School
                    </p>
                    <p className="linkNews">Find out more about this event</p>
                  </div>
                  <div className="btnStyleSlideThree">2018</div>
                  {/* todo Image section */}
                  <img className="cardLlandImage" src={evntImg2}></img>
                </div>
                {/* ///////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* //////////////////////////////// */}
                <div className="postTwo">
                  {/* todo Image section */}
                  <div className="btnStyle">NEWS POST</div>
                  <img className="socialIcons" src={pstImg3}></img>
                  <div className="containerCardTextPostTwo">
                    <p className="titleNews">
                      KEF UK Annual Fund Raising Dinner
                    </p>
                    <p className="linkNewspostTwoSlide2">Read this post</p>
                  </div>
                </div>
                {/* ////////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* /////////////////////// */}
                <div className="postOne">
                  {/* todo Image section */}
                  <div className="btnStyle">NEWS POST</div>
                  <img className="socialIcons" src={pstImg4}></img>
                  <div className="containerCardText">
                    <p className="titleNews">
                      KEF's students visit Aeronotical Complex, Kamra.
                    </p>
                    <p className="linkNews">Read this post</p>
                  </div>
                </div>
                {/* /////////////////////// */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default NewsEventsSlideTwo;
