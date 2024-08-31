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
                        { title: "HTML5", desc: "I mainly used to develop Website Markup" },
                        { title: "CSS3", desc: "I use this to style and bring design to browsers" },
                        { title: "JavaScript", desc: "With this technology I create visual effects and interaction and DOM elements" },
                        { title: "React.js", desc: "I loved it! I use it to create applications that have a lot of reactivity" },
                        { title: "Greensock - GSAP", desc: "I used this as an animation library, The most loved ones!" },
                        { title: "MongoDB", desc: "MongoDB is a flexible, document-oriented NoSQL database designed for scalability, high performance, and ease of development." },
                        { title: "Express JS", desc: "I use Express.js for its simplicity in handling routing and middleware, making server-side development quick and efficient." },
                        { title: "Node.js", desc: "I use it to writing server scripting for applications" },
                        { title: "Next JS", desc: "I use Next.js for its fast server-side rendering and easy routing, which enhance performance and development efficiency" },
                        { title: "Git & Github", desc: "I use Git for version control and GitHub for collaboration and code hosting." },
                        { title: "Redux Toolkit", desc: "Redux Toolkit simplifies state management with its easy-to-use API and built-in tools for creating and managing Redux stores." },
                        { title: "Prisma ORM", desc: "Prisma ORM streamlines database management with its intuitive schema modeling, type-safe queries, and automated migrations." },
                    ].map((skill, idx) => (
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
