// Creating Nav bar
import React from 'react';
import '../styles/Nav.css';

function Nav(props) {
    const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
    return (
        <nav className="inline">
            <div className="container">
                <h1 id="logo">Laura Beutler</h1>
                <ul className="nav nav-tabs">
                    {tabs.map((tab) => (
                        <li
                            className={
                                props.currentPage === tab ? "nav-item is-active" : "nav-item"
                            }
                            key={tab}
                        >
                            <a href={"#" + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab ? "nav-lik active" : "nav-link"
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Nav