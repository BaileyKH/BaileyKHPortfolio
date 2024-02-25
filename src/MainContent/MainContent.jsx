import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import "./MainContent.css"
import pic from '../assets/profile-picture.jpg';


const MainContent = () => {
    return(
        <div>
            <div className="main-container">
                <div className="bailey">
                    <h1>Bailey<span>KH</span></h1>
                    <p>Hello! I am Bailey Henderson, a Front-End Web Developer with a flair for crafting responsive, engaging websites. I've honed my skills in HTML, CSS, JavaScript, and frameworks like React.js, ensuring every project shines both technically and aesthetically. My journey began at a very young age with a general love for computers, fueling my passion for tech and design. Beyond coding, I'm an outdoor enthusiast, photographer, and an active participant in keeping up with the latest tech. I'm eager to transform your digital ideas into reality. Let's create something remarkable together!</p>
                    <a href="./assets/test.pdf" download="Test.pdf">
                        <button type="button">Contact Me</button>
                    </a>
                    <p className="skills">Skills</p><hr className="skills-line"/>
                    <div className="skills-icons">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#e0003c",}} className="icons"/>
                        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#e0003c",}} className="icons"/>
                        <FontAwesomeIcon icon={faJs} style={{color: "#e0003c",}} className="icons"/>
                        <FontAwesomeIcon icon={faReact} style={{color: "#e0003c",}} className="icons"/>
                    </div>
                </div>
                <div className="profile-pic">
                    <img src={pic} alt="profile picture of Bailey Henderson"/>
                </div>
            </div>
        </div>
    );
}

export default MainContent