import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import './Header.css';

function Header() {
    useEffect(() => {
        const hamburger = document.querySelector('.toggle-menu');
        const overlay = document.querySelector('.nav-overlay');
        const closeBtn = document.querySelector('.close-btn');

        const openOverlay = () => {
            overlay.style.width = '100%';
            overlay.style.opacity = '1';
            hamburger.style.display = 'none'; // Hide the hamburger menu when overlay is open
            gsap.from('.overlay-nav a', {
                x: 120,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                delay: 0.5,
            });
            gsap.from('.overlay-bottom ul li', {
                x: 120,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                delay: 0.5,
            });
            document.body.classList.add('no-scroll'); // Prevent body scrolling
        };

        const closeOverlay = () => {
            overlay.style.width = '0';
            overlay.style.opacity = '0';
            hamburger.style.display = 'block'; // Show the hamburger menu when overlay is closed
            document.body.classList.remove('no-scroll'); // Allow body scrolling
        };

        hamburger.addEventListener('click', openOverlay);
        closeBtn.addEventListener('click', closeOverlay);

        // Cleanup function to remove event listeners
        return () => {
            hamburger.removeEventListener('click', openOverlay);
            closeBtn.removeEventListener('click', closeOverlay);
        };
    }, []);

    return (
        <>
            <div className="nav-overlay">
                <div className="overlay-top">
                    <div className="close-btn"><RiCloseLargeLine /></div>
                </div>
                <div className="overlay-nav">
                    <a href=".page1">Home</a>
                    <a href=".page3">Schedule</a>
                    <a href=".page5">Mentors</a>
                    <a href=".page4">Events</a>
                    <a href=".page6">FAQs</a>
                </div>
                <div className="overlay-bottom">
                    <ul>
                        {/* Social Links */}
                    </ul>
                </div>
            </div>

            <header>
                <div id="logo"></div>
                <div className="toggle-menu">
                    <RxHamburgerMenu />
                </div>
                <ul className="menu-items">
                    <li>
                        <Link to="/" className="li">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="li">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="li">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="li">Contact</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
