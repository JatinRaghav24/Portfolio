import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='resabout'>
      <div className="about-top">
      <h2>About Me</h2>
      <p>I create innovative solutions that captivate users and perform flawlessly. Driven by a passion for technology and creativity. Let’s build something extraordinary together.</p>

      </div>
      <div className="about-data">
        <div className="about-right">
          <div className="name">
            <p className="about-para">Name :</p>
            <p className="about-head">Jatin Raghav</p>
          </div>
          <div className="name">
            <p className="about-para">Phone :</p>
            <p className="about-head">+91 7078063618</p>
          </div>
          <div className="name">
            <p className="about-para">Email :</p>
            <p className="about-head">thakurjatinraghav05@gmail.com</p>
          </div>
          <div className="name">
            <p className="about-para">Address :</p>
            <p className="about-head">Pilkhuwa, UP</p>
          </div>
        </div>
        <div className="about-l">
          <div className="name">
            <p className="about-para">Freelance :</p>
            <p className="about-head">Available</p>
          </div>
          <div className="name">
            <p className="about-para">Martial Status :</p>
            <p className="about-head">Single</p>
          </div>
          <div className="name">
            <p className="about-para">Language :</p>
            <p className="about-head">Hindi, English</p>
          </div>
          <div className="name">
            <p className="about-para">Nationality :</p>
            <p className="about-head">Indian</p>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default About