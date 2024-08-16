import React, { useEffect, useRef } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Typed from 'typed.js';
import handledownload from "../../../Context/StoreContext";


const Header = () => {

  // Create a reference to the DOM element that will contain the typing effect
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer..", "Frontend Developer..", "UI/UX Designer..", "Wed Designer.."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    // Initialize Typed.js on the referenced element
    const typed = new Typed(typedElement.current, options);

    // Clean up the Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="header">
      <div className="header-right">
          <p>Full Stack Developer</p>
        <h1 className="basic-details1">
         Hello I'm
        </h1>
        <h1 className="basic-details">
        <span >Jatin Raghav</span>
        </h1>
        <h3 className="details-self">
          I'm a <span ref={typedElement} className="typing"></span>
        </h3>
        <h2>
        I blend creative front-end design with powerful back-end functionality to build responsive, user-centric applications. From concept to deployment, I turn ideas into reality with expertise in technologies like React, Node.js, and MongoDB. Let’s create something extraordinary together!
        </h2>
          <div className="header-icon">
            <Link to="https://getbootstrap.com/"><i className="bi bi-whatsapp" ></i></Link>
            <Link to="https://getbootstrap.com/"><i className="bi bi-instagram" ></i></Link>
            <Link to="https://getbootstrap.com/"><i className="bi bi-linkedin" ></i></Link>
            <Link to="https://getbootstrap.com/"><i className="bi bi-facebook" ></i></Link>
          </div>
        <div className="btn-icon">
        <button className="btn-hire h-btn">Hire Me</button>
        <button onClick={handledownload} className=" download">Download CV <i className="bi bi-download" ></i></button>

        </div>
      </div>
      <div className="header-left">
        <img className="photo-img" src={assets.photo} alt="" />
        <div className="circle1"></div>
       
      </div>
    </div>
  );
};

export default Header;
