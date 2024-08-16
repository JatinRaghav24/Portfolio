import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="resEdu">
      <div className="edu-top">
        <h2>My Education</h2>
        <p>
        My academic background equips me with the technical knowledge and problem-solving skills necessary to excel in creating innovative, effective web solutions.
        </p>
      </div>
      <div className="edu-data">
        <div className="edu-items">
          <h3 className="edu-time">
            <span>2024 - Pursuing 2nd Year</span>
          </h3>
          <h2 className="edu-title">Master's of Computer Application - (MCA)</h2>
          <p>
            <span>.</span> Monad University, Hapur
          </p>
        </div>
        <div className="edu-items">
          <h3 className="edu-time">
            <span>2020 - 2023 (Graduation Complete)</span>
          </h3>
          <h2 className="edu-title">Bacholer of Computer Application - (BCA)</h2>
          <p>
            <span>.</span> Saraswati Institute of Enineering & Technology, Pilkhuwa, Hapur
          </p>
        </div>
        <div className="edu-items">
          <h3 className="edu-time">
            <span>2019 - 2020 (Passed 12th)</span>
          </h3>
          <h2 className="edu-title">Intermediate School</h2>
          <p>
            <span>.</span> V.I.P Inter College, Pilkhuwa
          </p>
          
        </div>
        <div className="edu-items">
          <h3 className="edu-time">
            <span>2017 - 2018 (Passed 10th)</span>
          </h3>
          <h2 className="edu-title">Secondary School</h2>
          <p>
            <span>.</span> V.I.P Inter College, Pilkhuwa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
