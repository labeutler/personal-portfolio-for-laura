import React from "react";

function Resume() {
    return (
        // <h2>Resume</h2>
        <section className="my-5">
            <div className="my-2">
                <h3>
                    Download my <a href="https://www.linkedin.com/in/laura-beutler-92987413/details/featured/">Resume</a>
                    <br />
                    <br />
                </h3>
                <h3>Full Stack Coding Skills</h3>
                
                <h4>Front-end Proficiencies</h4>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h4>Back-end Proficiencies</h4>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
}
export default Resume