// Creating Nav bar
import React from 'react';
import '../styles/Nav.css';

//Creating Navigation prompts to fit requirements.  
function Nav(props) {
    const {
        tabs = ["About Me", "Portfolio", "Contact", "Resume"],
        setCurrentPage,
        currentPage,
    } = props;

    return (
        <nav className="inline">
            <div className="container">
                <h1 id="logo">Laura Beutler</h1>
                <ul className="nav nav-tabs">
                    {tabs.map((Tab, i) => (
                        <li key={i}
                            className={`mx-5 ${currentPage.name === Tab.name ? "navActive" : "nav-item"}`
                            }
                            // key={i}
                        >
                            <span
                                onClick={() =>
                                    setCurrentPage(Tab)}
                            >
                                {Tab.name}
                            </span>
                            <a href={"#" + Tab.toLowerCase()}
                                onClick={() => props.handlePageChange(Tab)}
                                className={
                                    props.currentPage === Tab ? "navActive" : "nav-link"
                                }
                            >
                                {Tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Nav