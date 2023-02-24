// Creating list of projects for portfolio
import React from "react";
import Project from "./Project";
import Blog from "../assets/projects/A-Techies-Blog.jpg";
import Forecast from "../assets/projects/5-Day-Weather-Forecast.jpg";
import Cocktail from "../assets/projects/Cocktail-Music-Match.jpg";
import Editor from "../assets/projects/Internet-Free-Text-Editor.jpg";
import FirstPortfolio from "../assets/projects/Portfolio-Challenge-2.jpg";
import Organizer from "../assets/projects/Task-Organizer.jpg";

export const projects = [
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
        image: Blog,
        description: "A place where techies can go to post blogs, and read what others have written",
        repo: "https://github.com/labeutler/a_techies_blog",
        link: "https://a-techies-blog.herokuapp.com/",
    },
    {
        id: 2,
        name: "5 Day Weather Forcast",
        languages: "html, js, css, bootstrap",
        packages: "none",
        image: Forecast,
        description: "An app allowing you to check the current local weather and 5 day forecast.  Also, stores previous cities searched.",
        repo: "https://github.com/labeutler/5-day-weather-forecast/blob/main/index.html",
        link: "https://labeutler.github.io/5-day-weather-forecast/",
    },
    {
        id: 3,
        name: "Internet Free Text Editor",
        languages: "node, js, html, routes, json ",
        packages: "Express, if-env, nodemon",
        image: Editor,
        description: "Being able to edit notes when either on or off the internet using PWA (Progressive Web Applications).",
        repo: "https://github.com/labeutler/internet_free_text_editor",
        link: "https://internet-free-text-editor.herokuapp.com/",
    },
    {
        id: 4,
        name: "Cocktail Music Match",
        languages: "html, tailwinds, css, js ",
        packages: "none",
        image: Cocktail,
        description: "Have a Cocktail with a recipe generated with a game to play while I enjoy it.",
        repo: "https://github.com/CocktailMusicMatch/CocktailMusicMatch",
        link: "https://cocktailmusicmatch.github.io/CocktailMusicMatch/",
    },
    {
        id: 5,
        name: "Task Organizer",
        languages: "Routes, html, css, js, db.json, node",
        packages: "Express, uuid",
        image: Organizer,
        description: "The ability to organize thoughts and keep track of them until they are complete.",
        repo: "https://git.heroku.com/internet-free-text-editor.git",
        link: "https://sleepy-tor-26670.herokuapp.com/",
    },
    {
        id: 6,
        name: "Portfolio Challenge 2",
        languages: "html, js, css, ",
        packages: "none",
        image: FirstPortfolio,
        description: "A electronic version of my resume for you to review and see what work I have accomplished along the way.",
        repo: "https://github.com/labeutler/lb-project-portfolio",
        link: "https://labeutler.github.io/lb-project-portfolio/",
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