import React, { useState } from "react";
import bachi from "./../../../assets/images/Home/ChildrenTab/bachi.png";
import "./ChildrenSlideOneStyles.css";
const ChildrenSlideOne = () => {
  return (
    <div className="containerSLideOne">
      <div className="ImageContainer">
        <img className="bachiImg" src={bachi} class="img-fluid"></img>
      </div>
      <div className="containerTextSTyle">
        <div className="btnWhatweDO">WHAT WE DO</div>
        <p className="headingText">
          Providing Modern Quality Education in Kashmir & Pakistan
        </p>
        <p className="descText">
          Kashmir Education Foundation (KEF) is a charitable Educational Trust
          and is currently running three schools which provide modern quality
          education to bright children from marginalized sections of the society
        </p>
        <p className="descText">
          Illeracy and sub-standard education for the rural masses is recognized
          as the root cause Pakistan's major problems. Social and sectarian
          tensions and widespread pockets of poverty can offten be directly
          traced back to outmoded and inadequate education
        </p>
        <p className="descText">
          The primary aim of KEF is to make the highest quality education
          accessible to talented boys and girls from underprivileged and
          hitherto and marginalised sections of society, with special emphasis
          on female education
        </p>
      </div>
    </div>
  );
};

export default ChildrenSlideOne;
