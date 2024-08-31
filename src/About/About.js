import React from 'react'
import Footer from '../Footer/Footer'
import GetInTouch from '../GetInTouch/GetInTouch'
import Header from '../Header/Header'
import './About.css'
import flower from '../Assets/flower.svg'
function About() {
    return (
        <>
        <div>
            <div className="about">
                <Header />
                <div className="about-container">
                    <div className="container-text">
                        <div className="container-inner-text1">
                            <p>
                                Nishant
                            </p>
                        </div>
                        <div className="container-inner-text2">
                            <p>
                                Singh
                            </p>
                        </div>
                    </div>
                    <div className="container-quote container-quote1">
                        I create sites and <br /> applications that cause <br /> pleasant emotions
                    </div>
                    <div className="container-quote container-quote2">
                        I specialize in interaction <br /> Full Stack Development <br /> and enthusiastic about <br />Backend Development
                    </div>
                    <div className="container-image"></div>
                </div>
                <div className="about-container2">
                    <div className="about-container2-heading">
                        <div className="about-text-lower">
                            <p>Full Stack </p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developer</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&&nbsp;&nbsp;&nbsp;Web3  </p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; Enthusiast</p>
                        </div>
                    </div>
                    <div className="about-container2-p main">
                      
                        <p className="about-container2-p-right">
                        With a robust background in full-stack development, I excel at crafting sophisticated web applications that seamlessly integrate both front-end and back-end technologies. My proficiency spans a variety of frameworks and tools, including React for dynamic user interfaces, Express.js for efficient server-side logic, and Next.js for optimizing performance with server-side rendering and static site generation. This combination allows me to build responsive, high-performance applications that deliver exceptional user experiences.
                            </p>
                    </div>
                    {/* div */}
                    
                    <div className="about-container2-heading2">
                        <div className="about-text-lower heading">
                            <p> My</p>
                        </div>
                        <div className="about-text-lower heading">
                            <p> feature?</p>
                        </div>
                    </div>
                    <div className="about-container2-p main">
                        <p className=" about-container2-p-right">
                        In code and design, you weave your art,  <br/>
                        From front-end flair to back-end heart. <br/> 
                        With React and Express, you craft with might,  <br/>
                        Next.js and Redux, your tools ignite.  <br/>
                        Prisma ORM guides your data's dance,  <br/>
                        Git and GitHub ensure every chance.  <br/>
                        In tech’s vast realm, you shape and shine,  <br/>
                        Innovating boldly, your skills entwine.
                            </p>
                    </div>
                    <div className="about-container-flower">
                        <img src={flower} alt="" />
                    </div>
                </div>
                <div className="about-footer">
                    <GetInTouch />
                    <Footer />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About
