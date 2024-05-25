import React, { useEffect } from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';


function ScrollToTopOnRouteChange() {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  }

function Navbar(){
    return(
        <div className='nav-bar'>
            <div className="nav-bar-logo">
                <h2>Yosef Sahle</h2>
            </div>
            <div className="nav-bar-menu">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="nav-bar-links">
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-upwork"></i></a>
                <a href="#"><i className="fa-brands fa-telegram"></i></a>
            </div>
        </div>
    )
}

export default Navbar;