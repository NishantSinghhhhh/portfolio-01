import React from 'react'
import Header from '../Header/Header'
import './Projects.css'
import arrow from '../Assets/arrow.svg'
import GetInTouch from '../GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'
function Projects() {
    return (
        <div>
            <Header />
            <div className="project-page">
                <div className="my-projects">
                    <h1>
                        my <br />
                        projects
                    </h1>
                </div>
                <div className="project-page-container">
                    <div className="project-page-items">
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>July 2024</p>
                            </div>
                            <a target='_blank' href="https://yoooom.netlify.app/">
                                <div className="project-page-item-header">
                                    <h1>Yoom</h1>
                                    <p>-NEXTJS PRISMA-orm </p>
                                </div>
                                <div className="project-page-item-image project-page-item-image1"></div>
                                <a href="https://yoooom.netlify.app/" className="project-page-item-footer" target="_blank" rel="noopener noreferrer">
                                <p>Live Link</p>
                                    <img src={arrow} alt="Arrow" />
                                </a>
                            </a>
                        </div>
                        {/* https://ai-content-generator-01.netlify.app/ */}
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>May 2024 June 2024</p>
                            </div>
                            <a target="_blank"  href="https://ai-content-generator-01.netlify.app/" >
                                <div className="project-page-item-header">
                                    <h1>AI Content Generator</h1>
                                    <p>Nextjs gemini</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image2"></div>
                                <a target="_blank" href="https://ai-content-generator-01.netlify.app/" className="project-page-item-footer" target="_blank" rel="noopener noreferrer">
                                <p>Live Link</p>
                                    <img src={arrow} alt="Arrow" />
                                </a>
                            </a>
                        </div>
                        {/* https://dashboard-three-delta-61.vercel.app/ */}
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>Februrary 2024 </p>
                            </div>
                            <a target="_blank" href="https://virtual-ir-ten.vercel.app/">
                                <div className="project-page-item-header">
                                    <h1>Virtual IR</h1>
                                    <p></p>
                                </div>
                                <div className="project-page-item-image project-page-item-image3"></div>
                                <a target="_blank" href="https://virtual-ir-ten.vercel.app/" className="project-page-item-footer" target="_blank" rel="noopener noreferrer">
                                <p>Live Link</p>
                                    <img src={arrow} alt="Arrow" />
                                </a>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>February 2024</p>
                            </div>
                            <a target='_blank' href="https://dashboard-three-delta-61.vercel.app/">
                                <div className="project-page-item-header">
                                    <h1>Dashboard </h1>
                                    <p>Reactjs tailwind Css </p>
                                </div>
                                <div className="project-page-item-image project-page-item-image4"></div>
                                <a href="https://dashboard-three-delta-61.vercel.app/" className="project-page-item-footer" target="_blank" rel="noopener noreferrer">
                                <p>Live Link</p>
                                    <img src={arrow} alt="Arrow" />
                                </a>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>August 2024</p>
                            </div>
                            <a target="_blank" href="https://spark2k24-25.netlify.app/">
                                <div className="project-page-item-header">
                                    <h1>Spark 2k24-2k24</h1>
                                    <p>Html css & Javascript</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image5"></div>
                                <a href="https://spark2k24-25.netlify.app/" className="project-page-item-footer" target="_blank" rel="noopener noreferrer">
                                <p>Live Link</p>
                                    <img src={arrow} alt="Arrow" />
                                </a>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>December 2023</p>
                            </div>
                            <a href="https://candid-nasturtium-1b0197.netlify.app/" target='_blank'>
                                <div className="project-page-item-header">
                                    <h1>Saif's Cuisine</h1>
                                    <p>HTMl & css</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image6"></div>
                                <a href="https://candid-nasturtium-1b0197.netlify.app/" className="project-page-item-footer" target="_blank" rel="noopener noreferrer">
                                <p>Live Link</p>
                                    <img src={arrow} alt="Arrow" />
                                </a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default Projects
