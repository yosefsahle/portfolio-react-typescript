import './index.css';

function Service() {
    return(
       <div className="srvices">
        <h1>My - Services</h1>
        <div className="home-services-list">
                <div>
                    <img src="../assets/services/ui-ux.jpg" alt="" />
                    <h3>Ui/Ux Design</h3>
                    <p>Designing intuitive and user-friendly interfaces that enhance user satisfaction. My focus is on creating seamless interactions and aesthetically pleasing layouts that meet user needs.</p>
                </div>
                <div>
                    <img src="../assets/services/web-development.jpg" alt="" />
                    <h3>Web Design & Development</h3>
                    <p>Creating responsive and visually appealing websites that provide an excellent user experience. I specialize in both front-end and back-end development to build robust and efficient web applications.</p>
                </div>
                <div>
                    <img src="../assets/services/app-development.jpg" alt="" />
                    <h3>Android Development</h3>
                    <p>Developing high-quality mobile applications for Android, ensuring functionality, performance, and user engagement. I build apps that are both innovative and user-centric.</p>
                </div>
            </div>
            <div className="home-services-list">
                <div>
                    <img src="../assets/services/api-development.png" alt="" />
                    <h3>Api Development and Integration</h3>
                    <p>Creating custom APIs and integrating third-party services to enhance the functionality of your applications. I ensure smooth and secure data exchange between different software systems.</p>
                </div>
                <div>
                    <img src="../assets/services/consulting.png" alt="" />
                    <h3>Consulting</h3>
                    <p>Providing expert advice on software development best practices, technology choices, and project management. I help clients make informed decisions to achieve their business goals.</p>
                </div>
                <div>
                    <img src="../assets/services/traning.png" alt="" />
                    <h3>Training</h3>
                    <p>Offering training sessions and workshops on various technologies and development methodologies. I aim to equip individuals and teams with the skills needed to succeed in the tech industry.</p>
                </div>
            </div>
       </div>
    )
}

export default Service;