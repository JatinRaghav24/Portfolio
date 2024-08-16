import React from 'react'
import './Services.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';



const Services = () => {
  return (
    <>
    <h1><span>SERV</span>ICES</h1>
    <div id='services' className='services'>
        <div className="cards">
          <div className="card-items">
            <div className="iconnum">
            <h2 className='num-details'>01</h2>
            <Link to=""><i className="bi bi-arrow-down-right-circle-fill"></i></Link>
            </div>
            <div className="cart-data">
              <h2>Full Stack Developer</h2>
              <p>Harness the full power of the MERN stack—MongoDB, Express, React, and Node.js—to create robust, scalable web applications. I seamlessly integrate these technologies to deliver dynamic, high-performance solutions that are both efficient and engaging.</p>
            </div>
        <hr />
          </div>
        </div>
        <div className="cards">
          <div className="card-items">
          <div className="iconnum">
            <h2 className='num-details'>02</h2>
            <Link to=""><i className="bi bi-arrow-down-right-circle-fill"></i></Link>
            </div>
            <div className="cart-data">
              <h2>Frontend Developer</h2>
              <p>Captivating, responsive interfaces that engage users at first glance. I create visually stunning and intuitive user experiences using the latest technologies, ensuring your website stands out from the crowd. </p>
            </div>
        <hr />
          </div>
        </div>
        <div className="cards">
          <div className="card-items">
          <div className="iconnum">
            <h2 className='num-details'>03</h2>
            <Link to=""><i className="bi bi-arrow-down-right-circle-fill"></i></Link>
            </div>
            <div className="cart-data">
              <h2>UI/UX Designer</h2>
              <p>I focus on creating aesthetically pleasing and highly functional interfaces, ensuring a seamless and enjoyable user experience across all devices. </p>
            </div>
        <hr />
          </div>
        </div>
        <div className="cards">
          <div className="card-items">
          <div className="iconnum">
            <h2 className='num-details'>04</h2>
            <Link to=""><i className="bi bi-arrow-down-right-circle-fill"></i></Link>
            </div>
            <div className="cart-data">
              <h2>SEO</h2>
              <p>Enhance your online visibility and drive more traffic with targeted SEO strategies. I optimize your site to rank higher in search results, ensuring you reach your audience effectively.</p>
            </div>
        <hr />
          </div>
        </div>
  

    </div>
    </>
  )
}

export default Services