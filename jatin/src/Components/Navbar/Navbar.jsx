import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [menu,setMenu] = useState("home");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
 

  return (
    <>
    <div className='navbar'>
        <div className="nav-l">
            <Link to="/"><h2 className='logo'>JATIN<span>.</span></h2></Link>
        </div>
        <div className={`nav-r ${isOpen ? 'open' : ''}`}>
            <ul>
               <Link  to='/'  onClick={()=> setMenu("home")} className={menu ==="home"?"active":""}> HOME</Link>
               <a  href="#about" onClick={()=> setMenu("about")} className={menu ==="about"?"active":"/"}> ABOUT</a>
               <a  href='#services' onClick={()=> setMenu("services")} className={menu ==="services"?"active":""}> SERVICES</a>
               <Link  to='/resume'  onClick={()=> setMenu("resume")} className={menu ==="resume"?"active":""}> RESUME</Link>

               <Link  to='/projects' onClick={()=> setMenu("projects")} className={menu ==="projects"?"active":""}>PROJECTS</Link>
               <a  href='#contact' onClick={()=> setMenu("contact")} className={menu ==="contact"?"active":""}>CONTACT</a>

            </ul>
            <button className="btn-hire">Hire Me</button>
        </div>
        <div className="cross-icon" onClick={toggleMenu}>
        <i className={isOpen ? "bi bi-x" : "bi bi-list list"}></i>
      </div>

        
        
    </div>
    
    </>
  )
}

export default Navbar