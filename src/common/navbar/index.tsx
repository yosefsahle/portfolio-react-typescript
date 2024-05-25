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
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <div className="nav-bar-links">
                <a href="https://www.linkedin.com/in/yosef-sahle-580003256/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/yosefsahle" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href="https://www.upwork.com/freelancers/~014405f668ebe63863?mp_source=share" target='_blank'><i className="fa-brands fa-upwork"></i></a>
                <a href="https://www.t.me/+251912978713" target='_blank'><i className="fa-brands fa-telegram"></i></a>
            </div>
        </div>
    )
}

export default Navbar;