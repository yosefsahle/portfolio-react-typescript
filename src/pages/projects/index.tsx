import './index.css';

function Projects() {
    return(
        <div className="projects">
            <h1>My - Projects</h1>
            <div className="home-projects-list">
                <div>
                    <img src="../assets/projects/absaf-1.png" alt="" />
                    <h3>ABSAF/Gospel in action project</h3>
                    <p>Developed with Html/css/Js/PHP</p>
                    <a href="https://gospelinacts.org/" target='_blank'>View Website</a>
                </div>
                <div>
                    <img src="../assets/projects/wcat-1.png" alt="" />
                    <h3>Wabe Children’s Aid and <br />Training/WCAT</h3>
                    <p>Developed with WordPress</p>
                    <a href="https://www.wcatethiopia.org/" target='_blank'>View Website</a>
                </div>
                <div>
                    <img src="../assets/projects/fiab-1.png" alt="" />
                    <h3>Fiab Real Estate S.C</h3>
                    <p>Developed with Html/css/Js/PHP</p>
                    <a href="https://fiabhomes.com/" target='_blank'>View Website</a>
                </div>
            </div>
            <div className="home-projects-list">
                <div>
                    <img src="../assets/projects/agri-1.png" alt="" />
                    <h3>ABSAF/Gospel in action project</h3>
                    <p>Developed with React-Typescript</p>
                    <a href="https://web-front-end-coral.vercel.app/#vcard" target='_blank'>View Website</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;