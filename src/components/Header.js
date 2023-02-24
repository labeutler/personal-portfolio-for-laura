// Creating header code 
import React, { useState } from "react";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "AboutMe":
                return <AboutMe />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
                
            default:
                return <AboutMe />;
        }
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a
                    className="navbar-item"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/labeutler?tab=repositories"
                    >
                        <span className="content is-large">Welcome</span>
                    </a>
                </div>
            </nav>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;