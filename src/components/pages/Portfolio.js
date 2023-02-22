import React from "react";
import Project from "../Project";

const projects = [
    {
        id: 0,
        title: "",
        languages: "",
        packages: "",
        image: "",
        description: "",
        repo: "",
        live: "",
    },
    {
        id: 1,
        title: "A Techies Blog",
        languages: "html, handlebars, js",
        packages: "bcrypt, connect-session-sequelize,dotenv, Express.js, express-handlebars, express-session, fetch-schema, mysql2, schema, sequelize",
        image: "/image/proj1.png",
        description: "A place where techies can go to post blogs, and read what others have written",
        repo: "https://github.com/labeutler/a_techies_blog",
        live: "https://a-techies-blog.herokuapp.com/",
    },
    {
        id: 2,
        title: "5 Day Weather Forcast",
        languages: "html, js, css, bootstrap",
        packages: "none",
        image: "/image/proj2.png",
        description: "An app allowing you to check the current local weather and 5 day forecast.  Also, stores previous cities searched.",
        repo: "https://github.com/labeutler/5-day-weather-forecast/blob/main/index.html",
        live: "https://labeutler.github.io/5-day-weather-forecast/",
    },
    {
        id: 3,
        title: "Internet Free Text Editor",
        languages: "node, js, html, routes, json ",
        packages: "Express, if-env, nodemon",
        image: "/image/proj3.png",
        description: "Being able to edit notes when either on or off the internet using PWA (Progressive Web Applications).",
        repo: "https://github.com/labeutler/internet_free_text_editor",
        live: "https://internet-free-text-editor.herokuapp.com/",
    },
    {
        id: 4,
        title: "Cocktail Music Match",
        languages: "html, tailwinds, css, js ",
        packages: "none",
        image: "/image/proj4.png",
        description: "Have a Cocktail with a recipe generated with a game to play while I enjoy it.",
        repo: "https://github.com/CocktailMusicMatch/CocktailMusicMatch",
        live: "https://cocktailmusicmatch.github.io/CocktailMusicMatch/",
    },
    {
        id: 5,
        title: "Task Organizer",
        languages: "Routes, html, css, js, db.json, node",
        packages: "Express, uuid",
        image: "/image/proj5.png",
        description: "The ability to organize thoughts and keep track of them until they are complete.",
        repo: "https://git.heroku.com/internet-free-text-editor.git",
        live: "https://sleepy-tor-26670.herokuapp.com/",
    },
    {
        id: 6,
        title: "Portfolio Challenge 2",
        languages: "html, js, css, ",
        packages: "none",
        image: "/image/proj6.png",
        description: "A electronic version of my resume for you to review and see what work I have accomplished along the way.",
        repo: "https://github.com/labeutler/lb-project-portfolio",
        live: "https://labeutler.github.io/lb-project-portfolio/",
    },
];

function Portfolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <hr />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio