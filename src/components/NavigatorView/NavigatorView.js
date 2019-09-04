import PropTypes from "prop-types";
import React, { useState, ReactDOM } from "react";
import "./NavigatorView.css";

export default class NavigatorView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ismenuActive: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({ ismenuActive: !this.state.ismenuActive });
  }
  render() {
    return (
      <div className="containerNav">
        <nav>
          <ul className={this.state.ismenuActive ? "showing" : "defaultClose"}>
            <a href="#" className="dropdown">
              <li>WHAT WE DO</li>
              <div className="dropdownContent">
                <a href="/Schools">SCHOOLS</a>
                <a href="/Teachers">TEACHER TRAINING</a>
              </div>
            </a>
            <a href="#" className="dropdownSchools">
              <li>WHERE WE WORK</li>
              <div className="dropdownContentSchools">
                <a href="/Pvps">PEARL VALLEY PUBLIC SCHOOL</a>
                <a href="/Bvps">BANJOSA VALLEY PUBLIC SCHOOL</a>
                <a href="/Svps">SOAN VALLEY PUBLIC SCHOOL</a>
                <a href="/Jact">JOAN ATKINSON COLLEGE OF TEACHER EDUCATION</a>
              </div>
            </a>
            <a href="/GetInvolved">
              <li>GET INVLOVED</li>
            </a>
            <a href="/News">
              <li>NEWS & EVENTS</li>
            </a>
            <a href="/ContactUs">
              <li>CONTACT US</li>
            </a>
          </ul>
          <div className="handle">
            <p className="menu">Kefuk</p>
            <div onClick={this.toggleClass} className="menu_icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
