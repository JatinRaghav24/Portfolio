import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { slides } from "../../assets/assets";
import Footer from '../../Components/Footer/Footer'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (<>
    <div className="project-section">
      <div className="project">
        <h4>
          LATEST <span>PROJECTS</span>
        </h4>
        {slides.map((Slide, index) => {
          return (
            <>
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <div className="p-data">
                  <p className="number-main">{Slide.num}</p>
                  <h2>{Slide.title}</h2>
                  <div className="project-data">
                    <p>
                      <span>- </span>
                      {Slide.text1}
                    </p>
                    <p>
                      <span>- </span>
                      {Slide.text2}
                    </p>
                    <p>
                      <span>- </span>
                      {Slide.text3}
                    </p>
                    <p>
                      <span>- </span>
                      {Slide.text4}
                    </p>
                    <h6 className="usage"><span>{Slide.usage}</span></h6>
                  </div>
                  <hr />
                  <div className="project-btn">
                    <Link to={Slide.gitlink} target="_blank">
                      <i className="bi bi-github  projecticon" ></i>
                    </Link>
                    <Link to={Slide.live} target="_blank">
                      <i className="bi bi-arrow-up-right projecticon" ></i>
                    </Link>
                  </div>
                </div>
                <div className="project-img">
                  <img src={Slide.image} alt="" />
                  <div className="prev-next">
                    <i
                      onClick={nextSlide}
                      className="bi bi-arrow-left-square-fill project-iconspn"
                    ></i>
                    <i
                      onClick={prevSlide}
                      className="bi bi-arrow-right-square-fill project-iconspn"
                    ></i>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default Projects;
