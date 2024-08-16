import React from 'react'
import './Myskills.css'
import { assets } from '../../../assets/assets'

const Myskills = () => {
  return (
    <div className='resskills'>
      <div className="skill-top">
      <h2>My Skills</h2>
      <p>Expert in crafting engaging front-end interfaces with React, building robust back-end systems with Node.js and Express, and managing data seamlessly with MongoDB.</p>
      </div>
      <div className="skill-item">
        <img className='skill-icon' src={assets.html} alt="" />
        <img className='skill-icon' src={assets.css} alt="" />
        <img className='skill-icon' src={assets.js} alt="" />
        <img className='skill-icon' src={assets.react} alt="" />
        <img className='skill-icon' src={assets.nodejs} alt="" />
        <img className='skill-icon' src={assets.expressjs} alt="" />
        <img className='skill-icon' src={assets.mongodb} alt="" />
        <img className='skill-icon' src={assets.bootstrap} alt="" />
        <img className='skill-icon' src={assets.wordpress} alt="" />
        <img className='skill-icon' src={assets.github} alt="" />
      </div>
    </div>
  )
}

export default Myskills