import React from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <a className="navbar-item" target="_blank" href="https://github.com/esoccoli"><FontAwesomeIcon className="github-icon" icon={icon({ name: 'github', style: 'brands' })} /></a>
                <a className="navbar-item" target="_blank" href="https://linkedin.com/in/ella-soccoli"><FontAwesomeIcon className="linkedin-icon" icon={icon({ name: 'linkedin', style: 'brands' })} /></a>
            </div>

            <div className="navbar-center">
                <a className="navbar-item" href="#home">Home</a>
                <a className="navbar-item" href="#about">About</a>
                <a className="navbar-item" href="#education">Education</a>
                <a className="navbar-item" href="#experience">Experience</a>
                <a className="navbar-item" href="#projects">Projects</a>
                <a className="navbar-item" href="#contact">Contact</a>
            </div>

            <div className="navbar-right">
                <a className="navbar-item" target="_blank" href="https://esoccoli.me">Resume</a>
            </div>
        </div>
    )
}

export default Navbar;
