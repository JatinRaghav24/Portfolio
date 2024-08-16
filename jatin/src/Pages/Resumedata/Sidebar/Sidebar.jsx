import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Myskills from "../Skills/Myskills";
import About from "../About/About";



const Sidebar = () => {
    const [selectedSection, setSelectedSection] = useState('Experience');
    const renderContent = () => {
        switch (selectedSection) {
          case 'Experience':
            return <div><Experience/></div>;
          case 'Education':
            return <div><Education/></div>;
          case 'Skills':
            return <div><Myskills/></div>;
          case 'About Us':
            return <div><About/></div>;
          default:
            return <div>Experience Content</div>;
        }
      }
  

  return (
    <div className="Sidebar">
      <div className="sidebar-items">
        <h2>Why Hire Me..?</h2>
        <p> My commitment to quality and efficiency ensures your project stands out and performs flawlessly.</p>
        <div className="right-data">
          <Link to=""><button onClick={() => setSelectedSection('Experience')} className={selectedSection==='Experience'?'btnactive':'sidebar-btn'}>Experience</button></Link>
          <Link to=""><button onClick={() => setSelectedSection('Education')} className={selectedSection==='Education'?'btnactive':'sidebar-btn'}>Education</button></Link>
          <Link to=""><button onClick={() => setSelectedSection('Skills')} className={selectedSection==='Skills'?'btnactive':'sidebar-btn'}>Skills</button></Link>
          <Link to=""><button onClick={() => setSelectedSection('About Us')} className={selectedSection==='About Us'?'btnactive':'sidebar-btn'}>About Us</button></Link>
        </div>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
