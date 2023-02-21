// Contact information must include Contact: Name: email address: message: and submit button.  Confirm valid email address and confirm message is included. 
import React, { useState } from "react";
// In order to validate email
import { validateEmail } from "../../utils/helpers"

function Contact() {
    const [fromState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = fromState;

    // validate email address is provided and valid
    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Email is invalid, please try again.");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
            if (!errorMessage) {
                setFormState({ ...fromState, [e.target.name]: e.target.value });
                console.log("Email confirmation form", fromState);
            }
        };
    }
    return (
        <section>
            <div className="center">
                <h2 className="page-header">Contact Me</h2>
            </div>
            <div class="container">
                <form id="contact-form">
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

export default Contact