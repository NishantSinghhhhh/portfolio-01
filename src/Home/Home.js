import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import flower from '../Assets/flower.svg';
import another from '../Assets/another.svg';
import arrow from '../Assets/arrow.svg';
import { Link } from 'react-router-dom';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div className='home'>
            <Header />
            <div className="container">
                <div className="container1">
                    <div className="txt-line" id='taimoor'>
                        <p>Nishant</p>
                    </div>
                    <div className="txt-line line-bottom" id="shahzada">
                        <p>Singh</p>
                    </div>
                </div>
                {/* <div></div> */}
            </div>
            <div className="left-side-quote">
                <p>
                    I excel in full-stack development, combining deep expertise <br />
                    in front-end frameworks with robust back-end systems. <br />
                    My proficiency extends to creating seamless user experiences, <br />
                    integrating complex APIs, and ensuring scalable, secure <br />
                    architectures creative strategy.
                    I’m committed to driving <br />
                    innovation in the digital landscape.
                </p>
            </div>
            <div className="container">
                <div></div>
                <div className="container1">
                    <div className="txt-line" id="digital">
                        <p>Web</p>
                    </div>
                    <div className="txt-line line-bottom" id="digital">
                        <p>Architect</p>
                    </div>
                </div>
            </div>
            <div className="flower-svg">
                <img src={flower} alt="Flower" />
            </div>
            <div className="short-about">
                <div className="main-h1-short-about">
                    <h1 className="main-short-about">
                        Shortly
                    </h1>
                    <h1 className='main-short-about'>
                        About
                    </h1>
                    <h1 className="main-short-about">
                        Myself!
                    </h1>
                </div>
                <div className="sub-main-p-short-about">
                    <p className="sub-main-short-about">
                        I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE.
                    </p>
                    <p className="sub-main-short-about">
                        I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
                    </p>
                </div>
                <div className="another-svg">
                    <img src={another} alt="Design Element" />
                </div>
            </div>
            <div className="my-skills-main-reel">
                <div className="my-skills-reel" id="skill-reel">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="reel-item">&nbsp; -- My skills</div>
                    ))}
                </div>
                <div className="skill-set-boxes">
                    {/* Skill Boxes */}
                    {/* Repeated code for skill boxes can be made DRY (Don't Repeat Yourself) */}
                    {[
    { title: "HTML5", desc: "Used for website markup development" },
    { title: "CSS3", desc: "Styles and designs webpages" },
    { title: "JavaScript", desc: "Creates effects and interacts with DOM" },
    { title: "React.js", desc: "Builds reactive and dynamic applications" },
    { title: "Greensock - GSAP", desc: "Animation library for rich animations" },
    { title: "MongoDB", desc: "Flexible, scalable NoSQL database" },
    { title: "Express JS", desc: "Simplifies server-side routing and middleware" },
    { title: "Node.js", desc: "Server-side scripting for applications" },
    { title: "Next JS", desc: "Enhances performance with server-side rendering" },
    { title: "Git & Github", desc: "Version control and code collaboration" },
    { title: "Redux Toolkit", desc: "Simplifies state management with Redux" },
    { title: "Prisma ORM", desc: "Streamlines database management and migrations" }
]

                    
                    .map((skill, idx) => (
                        <div key={idx} className="skill-set-box">
                            <h1 className="skill-set-box-h1">{skill.title}</h1>
                            <p className="skill-set-box-p">{skill.desc}</p>
                            <p>___</p>
                        </div>
                    ))}
                </div>
                <div className="project-and-work">
                    <h1>
                        <Link className="h1-project" to="/projects">
                            My Projects and Works <img src={arrow} alt="Arrow" />
                        </Link>
                    </h1>
                    <br />
                    <p>Click me!</p>
                </div>
                <GetInTouch />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
