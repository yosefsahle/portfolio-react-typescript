import './index.css'

function About() {
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="home-about-main">
            <div className="home-about-right">
                <img src="../assets/images/mypic.png
                " alt="" />
            </div>
            <div className="home-about-left">
                <p className='about-desc'>Hello! I am YOSEF SAHLE, a graduating software engineering student from Addis Ababa University with a strong passion for technology and innovation. My expertise lies in front-end development, where I excel at creating visually appealing and user-friendly interfaces. I also have foundational skills in back-end development, enabling me to work seamlessly across the full stack when needed. Additionally, I bring hands-on experience in Android development, having built several applications that demonstrate my versatility and commitment to learning.</p>
                <p className='about-desc'>As I embark on the next phase of my career, I am eager to apply my skills in real-world projects, collaborate with talented teams, and contribute to impactful solutions. Welcome to my portfolio, where you can explore my projects, services, and journey in the world of software engineering.</p>
            </div>
            </div>

            <div className="about-info">
                <div>
                    <h4>Basic Info</h4>
                    <p>Name : Yosef Sahle</p>
                    <p>Age : 24</p>
                    <p>City : Addis Ababa,Ethiopis</p>
                    <p>Email : yosefsahle48@gmail.com</p>
                    <p>Phone : 09 12 97 87 13</p>
                </div>
                <div>
                    <h4>Education</h4>
                    <p>Degree : Software Engineerin(Addis Ababa University)</p>
                    <h4>Awards And Certeficates</h4>
                    <p>Responsive Web Development (Solo Learn)</p>
                    <p>Android Development (Zohar Tech)</p>
                    <p>Full Stack Development (ODC Ethiopia)</p>
                </div>
                <div>
                    <h4>Hobbies</h4>
                    <p>Musical instrument(Piano)</p>
                    <p>Spiritual Trainings</p>
                    <p>Travling </p>
                </div>
            </div>
            <h1>My - Skills</h1>
            <div className="skills">
                <div className="skills-left">
                    <div className='skill-temp'>
                        <div>
                            <p>Html</p>
                            <p>95%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'95%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>Css</p>
                            <p>80%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'80%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>Java Script</p>
                            <p>75%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'75%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>Java</p>
                            <p>65%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'65%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>Python</p>
                            <p>55%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'55%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="skills-right">
                    <div className='skill-temp'>
                        <div>
                            <p>React</p>
                            <p>75%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'75%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>Bootstrap</p>
                            <p>80%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'80%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>WordPress</p>
                            <p>75%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'75%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>Flutter</p>
                            <p>75%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'75%'}}></div>
                        </div>
                    </div>
                    <div className='skill-temp'>
                        <div>
                            <p>PHP</p>
                            <p>75%</p>
                        </div>
                        <div className='skill-prog'>
                            <div style={{width:'75%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;