// import React from "react";
// // import Nav from "./Nav";
// import "../styles/Header.css"

// function Header(props) {
//     return (
//         <header className="flex-row space-between px-1">
//             {/* <Nav setPage={props.setPage}/> */}
//             {/* <h2 className="name">Laura Beutler</h2> */}
//             <h2>Laura Beutler</h2>
//             {props.children}
//         </header> 
//     );
// }
// export default Header

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
                        <span className="content is-large">Laura Beutler</span>
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