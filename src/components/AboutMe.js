import React from "react";

// Creating code and explaination about me.
function AboutMe() {
    return (
        <section>
            <div className="container-a" id="about">
                <h2>About Me</h2>
                </div>
                <div className="image">
                    <img src={require('../assets/images/recent.jpg')}
                    alt="about-me"
                    className="photo"
                    width="250"        
                    /><br></br>
                </div>
                <div className="aboutMe">
                <p>
                    Full Stack Computer Programming is actually a full change in career for me.  My education prior to this point has been in business, accounting and physical therapy.  As with many, things have happened in my life to lead me to this path.<br></br>
                    <br></br>
                    I have two sons, who are just beginning college and the other is just finnishing college.  Both are involved in computers and enjoy building, programming, learning and designing somehow or another with a computer.  They are who started my drive down this current path.<br></br>
                    <br></br>
                    While taking my Full Stack Bootcamp, I learned so many new and exciting ways of programming.  I have enjoyed watching as you gain immediate results, as well as learning how to read the many error messages I had to trouble shoot and correct issues I came across.<br></br>
                    <br></br>
                    Now it is my turn to take what I have learned and put it into play with creating and helping others with errors and building.<br></br>
                </p>
            </div>
        </section>
    );
}

export default AboutMe;