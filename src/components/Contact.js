// Contact information must include Contact: Name: email address: message: and submit button.  Confirm valid email address and confirm message is included. 
import React, { useState } from "react";
// In order to validate email
import { validateEmail } from "../utils/helpers"

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    // validate email address is provided and valid
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Form needs to be submitted', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Email is invalid, please try again.");
            } else {
                setErrorMessage('');
            }
        } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
                console.log("Email confirmation form", formState);
            }
        };
    
    return (
        <section>
            <div className="center">
                <h2 className="page-header">Contact Me</h2>
            </div>
            <div className="container">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Name">Name:</label>
                        <input 
                            className="input" 
                            type="text" 
                            name="name" 
                            defaultValue={name} 
                            onBlur={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="Email">Email address:</label>
                        <input 
                            className="input" 
                            type="email" 
                            name="email" 
                            defaultValue={email} 
                            onBlur={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="Message">Message:</label>
                        <textarea 
                            className="textarea" 
                            rows="5" 
                            name="Message" 
                            defaultValue={message} 
                            onBlur={handleChange} 
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;