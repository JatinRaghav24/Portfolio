import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-content">
        <h1>
          <span>SKI</span>LLS
        </h1>
        <p className="skillpara">
        Mastering the art of web development with a diverse skill set: expert in crafting engaging front-end interfaces with React, building robust back-end systems with Node.js and Express, and managing data seamlessly with MongoDB.
        </p>
        <div className="skill-section">
        <div className="skill-items">
          <div className="single-skill">
            <p className="topic">ReactJs</p>
            <p className="percent">60%</p>
            <p className="bar bar-1"></p>
          </div>
          <div className="single-skill">
            <p className="topic">NodeJs</p>
            <p className="percent">70%</p>
            <p className="bar bar-2"></p>
          </div>
          <div className="single-skill">
            <p className="topic">ExpressJs</p>
            <p className="percent">70%</p>
            <p className="bar bar-3"></p>
          </div>
          <div className="single-skill">
            <p className="topic">MongoDB</p>
            <p className="percent">60%</p>
            <p className="bar bar-4"></p>
          </div>
        </div>
        <div className="skill-items">
          <div className="single-skill">
            <p className="topic">Html</p>
            <p className="percent">80%</p>
            <p className="bar bar-5"></p>
          </div>
          <div className="single-skill">
            <p className="topic">Css</p>
            <p className="percent">75%</p>
            <p className="bar bar-6"></p>
          </div>
          <div className="single-skill">
            <p className="topic">JavaScript</p>
            <p className="percent">60%</p>
            <p className="bar bar-7"></p>
          </div>
          <div className="single-skill">
            <p className="topic">Bootstrap</p>
            <p className="percent">80%</p>
            <p className="bar bar-8"></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
