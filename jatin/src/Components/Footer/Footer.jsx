import React from "react";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="right-footer">
            <h3>
            JATIN<span> RAGHAV.</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dolor laborum recusandae reic
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dolor laborum recusandae reic
            </p>
            <div className="header-icon">
              <Link to="https://getbootstrap.com/">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="https://getbootstrap.com/">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="https://getbootstrap.com/">
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link to="https://getbootstrap.com/">
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>
          <div className="center-left">
            <h3>
              <span>GET IN </span>TOUCH
            </h3>
            <div>
              <p>(+91) 7078063618</p>
              <p>thakurjatinraghav05@gmail.com</p>
            </div>
          </div>
        </div>
        <hr />
        <p className="bottom">
          copyright 2024 @<span>JatinRaghav</span> - All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
