import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import './ContactPage.css'; 



const ContactPage = () => {
    return(
        <div className="background-img">
            <div className="form-body">
                <div className="form-wrapper">
                    <form action="" netlify>
                        <h1>Contact Me</h1>
                        <div className="input-box">
                            <input id="firstName" type="text" placeholder="First Name" onblur="validateInputFirst()"/>
                            <FontAwesomeIcon icon={faUser} style={{color: "#e0003c",}} className="icons"/>
                        </div>
                        <div className="input-box">
                            <input id="lastName" type="text" placeholder="Last Name" onblur="validateInputLast()"/>
                            <FontAwesomeIcon icon={faUser} style={{color: "#e0003c",}} className="icons"/>
                        </div>
                        <div className="input-box">
                            <input id="email" type="email" placeholder="Email" onblur="validateInputEmail()"/>
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#e0003c",}} className="icons"/>
                        </div>
                        <div className="input-box">
                            <textarea id="message" name="message" rows="4" cols="50" placeholder="Message"></textarea>
                            <FontAwesomeIcon icon={faMessage} style={{color: "#e0003c",}} className="icons"/>
                        </div>

                        <button id="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;