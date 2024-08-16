import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import handledownload from '../../../Context/StoreContext'


const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-right">
            <img className="about-img" src={assets.photo} alt="" />
        </div>
        <div className="about-left">
            <h2><span>ABOUT</span> ME</h2>
            <p className="about-para">
            I’m a Full Stack Developer who turns ideas into engaging, high-performance web experiences. With expertise spanning front-end design and back-end development, I create innovative solutions that captivate users and perform flawlessly. Driven by a passion for technology and creativity. Let’s build something extraordinary together.
            </p>
            <Link onClick={handledownload}><button className='btn-hire'>Download CV <i className="bi bi-download" ></i></button></Link>
        </div>
    </div>
  )
}

export default About