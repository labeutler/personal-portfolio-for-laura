import React from "react";

function Resume() {
    return (
        // <h2>Resume</h2>
        <section className="my-5">
            <div className="my-2">
                <h3>
                    Download my <a href="https://www.linkedin.com/in/laura-beutler-92987413/details/featured/">Resume</a>
                    <br />
                </h3>
                <h3>Full Stack Coding Skills</h3>
                
                <h4 className="proficiencies">Front-end Proficiencies</h4>
                <ul className="skills">
                    <li className="list">HTML</li>
                    <li className="list">CSS</li>
                    <li className="list">JavaScript</li>
                    <li className="list">jQuery</li>
                    <li className="list">Responsive Design</li>
                    <li className="list">React</li>
                    <li className="list">Bootstrap</li>
                </ul>
                <h4 className="proficiencies">Back-end Proficiencies</h4>
                <ul className="skills">
                    <li className="list">APIs</li>
                    <li className="list">Node</li>
                    <li className="list">Express</li>
                    <li className="list">MySQL, Sequelize</li>
                    <li className="list">MongoDB, Mongoose</li>
                    <li className="list">REST</li>
                    <li className="list">GraphQL</li>
                </ul>
            </div>
        </section>
    );
}
export default Resume