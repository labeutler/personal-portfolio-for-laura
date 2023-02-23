import React, { useState } from "react";
import Project from "../Project";
// import Image from "../../assets/projects/"
// import aTechiesBlog from "../../assets/projects/a_techies_blog.png";
function Portfolio() {
    const [projects] = useState([

    // const projects = [
    {
        id: 0,
        name: "Portfolio",
        languages: "everything",
        packages: "json, express",
        image: "",
        description: "my personal portfolio",
        repo: "https://github.com/labeutler/potential_react_candidates",
        link: "",

    },
    {
        id: 1,
        name: "A-Techies-Blog",
        languages: "html, handlebars, js",
        packages: "bcrypt, connect-session-sequelize,dotenv, Express.js, express-handlebars, express-session, fetch-schema, mysql2, schema, sequelize",
        // image: {aTechiesBlog},
        description: "A place where techies can go to post blogs, and read what others have written",
        repo: "https://github.com/labeutler/a_techies_blog",
        link: "https://a-techies-blog.herokuapp.com/",
    },
    {
        id: 2,
        name: "5 Day Weather Forcast",
        languages: "html, js, css, bootstrap",
        packages: "none",
        // image: "/image/proj2.png",
        description: "An app allowing you to check the current local weather and 5 day forecast.  Also, stores previous cities searched.",
        repo: "https://github.com/labeutler/5-day-weather-forecast/blob/main/index.html",
        link: "https://labeutler.github.io/5-day-weather-forecast/",
    },
    {
        id: 3,
        name: "Internet Free Text Editor",
        languages: "node, js, html, routes, json ",
        packages: "Express, if-env, nodemon",
        // image: "/image/proj3.png",
        description: "Being able to edit notes when either on or off the internet using PWA (Progressive Web Applications).",
        repo: "https://github.com/labeutler/internet_free_text_editor",
        link: "https://internet-free-text-editor.herokuapp.com/",
    },
    {
        id: 4,
        name: "Cocktail Music Match",
        languages: "html, tailwinds, css, js ",
        packages: "none",
        // image: "/image/proj4.png",
        description: "Have a Cocktail with a recipe generated with a game to play while I enjoy it.",
        repo: "https://github.com/CocktailMusicMatch/CocktailMusicMatch",
        link: "https://cocktailmusicmatch.github.io/CocktailMusicMatch/",
    },
    {
        id: 5,
        name: "Task Organizer",
        languages: "Routes, html, css, js, db.json, node",
        packages: "Express, uuid",
        // image: "/image/proj5.png",
        description: "The ability to organize thoughts and keep track of them until they are complete.",
        repo: "https://git.heroku.com/internet-free-text-editor.git",
        link: "https://sleepy-tor-26670.herokuapp.com/",
    },
    {
        id: 6,
        name: "Portfolio Challenge 2",
        languages: "html, js, css, ",
        packages: "none",
        // image: "/image/proj6.png",
        description: "A electronic version of my resume for you to review and see what work I have accomplished along the way.",
        repo: "https://github.com/labeutler/lb-project-portfolio",
        link: "https://labeutler.github.io/lb-project-portfolio/",
    },
]);

// function Portfolio() {
    return (
        <div>
            <div className="flex-row">
                <ul>
                    {projects.map(project => (
                        <li>{project.name}</li>
                    ))}
                </ul>
                {/* {projects.map((project, idx) => (
                    <Project
                    project={project}
                    key={"project" + idx}
                    />
                ))} */}
            </div>
            {/* <p className="content is-medium">Portfolio</p>
            <hr />

            <Project projects={projects} /> */}
        </div>
    );
}

export default Portfolio