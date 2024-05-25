import React from 'react';
import './index.css';
import Footer from '../../common/footer';
import { Link } from 'react-router-dom';


function Home(){
    return(<>
        <div className="home" id="home">
            <div className="home-left">
                <h1>Hello I am <span>Yosef Shale</span></h1>
                <h1>I am Passionate Full Stack Developer</h1>
                <h3>Building Digital Experiences That Inspire</h3>
            </div>
            <div className="home-right">
                <img src="../assets/images/home-page-img.png" alt="" />
            </div>
        </div>
        <div className="home-breaker"></div>
        <div className="home-about" id="about">
            <h1>About - Me</h1>
            <div className="home-about-main">
            <div className="home-about-right">
                <img src="../assets/images/mypic.png
                " alt="" />
            </div>
            <div className="home-about-left">
                <p>Hello! I am <span>Yosef Sahle</span>, a software engineering student graduating from Addis Ababa University. I specialize in front-end development and have skills in back-end and Android development. I am eager to apply my expertise in real-world projects and collaborate with talented teams. Welcome to my portfolio!</p>
                <p>Front-End  |  Back-End  |  Full-Stack  |  Android-Development</p>
                <div className="home-about-skills">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-square-js"></i>
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-bootstrap"></i>
                <i className="fa-brands fa-wordpress"></i>
                <i className="fa-brands fa-android"></i>
                <i className="fa-brands fa-node"></i>
                <i className="fa-solid fa-database"></i>
                </div>
                <div className="home-about-contacts">
                <Link to={'/about'} >View Detail</Link>
                {/* <button><i className="fa-solid fa-download"></i> Download CV</button> */}
                </div>
            </div>
            </div>
            
        </div>
        <div className="home-breaker"></div>
        <div className="home-services">
            <h1>My -Services</h1>
            <div className="home-services-list">
                <div>
                    <img src="../assets/services/ui-ux.jpg" alt="" />
                    <h3>Ui/Ux Design</h3>
                </div>
                <div>
                    <img src="../assets/services/web-development.jpg" alt="" />
                    <h3>Web Design & Development</h3>
                </div>
                <div>
                    <img src="../assets/services/app-development.jpg" alt="" />
                    <h3>Android Development</h3>
                </div>
            </div>
            <Link to={'/services'}>View All Services</Link>
        </div>
        <div className="home-breaker"></div>
        <div className="home-projects">
            <h1>My - Projects</h1>
            <div className="home-projects-list">
                <div>
                    <img src="../assets/projects/absaf-1.png" alt="" />
                    <h3>ABSAF/Gospel in action project</h3>
                    <a href="https://gospelinacts.org/" target='_blank'>View Website</a>
                </div>
                <div>
                    <img src="../assets/projects/wcat-1.png" alt="" />
                    <h3>Wabe Children’s Aid and <br />Training/WCAT</h3>
                    <a href="https://www.wcatethiopia.org/" target='_blank'>View Website</a>
                </div>
                <div>
                    <img src="../assets/projects/fiab-1.png" alt="" />
                    <h3>Fiab Real Estate S.C</h3>
                    <a href="https://fiabhomes.com/" target='_blank'>View Website</a>
                </div>
            </div>
            <Link to={'/projects'}>View All Projects</Link>
        </div>

        </>
    )
}

export default Home;