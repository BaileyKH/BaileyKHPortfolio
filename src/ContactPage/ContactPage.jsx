import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import './ContactPage.css';

const ContactPage = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);

    const [validationMessage, setValidationMessage] = useState('');

    const validateInput = (inputRef, validationType) => {
        const inputElement = inputRef.current;
        if (inputElement.value.trim() === '') {
            inputElement.style.borderColor = 'red';
            return 'This field is required';
        } else if (validationType === 'email' && !inputElement.value.includes('@')) {
            inputElement.style.borderColor = 'red';
            return 'Please enter a valid email';
        } else {
            inputElement.style.borderColor = 'green';
            return '';
        }
    };


    const handleSubmit = (event) => { 

        const firstNameMessage = validateInput(firstNameRef);
        const lastNameMessage = validateInput(lastNameRef);
        const emailMessage = validateInput(emailRef, 'email');

        if (!firstNameMessage && !lastNameMessage && !emailMessage) {
            setValidationMessage("All inputs are valid. Form can be submitted.");

        } else {
            event.preventDefault();
            setValidationMessage("Please correct the highlighted fields.");
        }
    };

    return (
        <div className="background-img">
            <div className="form-body">
                <div className="form-wrapper">
                    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="redirect" value="/" />
                        <h1>Contact Me</h1>
                        <div className="input-box">
                            <input ref={firstNameRef} type="text" name="firstName" placeholder="First Name" />
                            <FontAwesomeIcon icon={faUser} style={{color: "#e0003c"}} className="icons"/>
                        </div>
                        <div className="input-box">
                            <input ref={lastNameRef} type="text" name="lastName" placeholder="Last Name" />
                            <FontAwesomeIcon icon={faUser} style={{color: "#e0003c"}} className="icons"/>
                        </div>
                        <div className="input-box">
                            <input ref={emailRef} type="email" name="email" placeholder="Email" />
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#e0003c"}} className="icons"/>
                        </div>
                        <div className="input-box">
                            <textarea id="message" name="message" rows="4" cols="50" placeholder="Message"></textarea>
                            <FontAwesomeIcon icon={faMessage} style={{color: "#e0003c"}} className="icons"/>
                        </div>

                        <button type="submit" className="btn">Submit</button>
                        {validationMessage && <p className="validation-message">{validationMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;