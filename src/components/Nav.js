import React from "react";
import '../styles/Nav.css';

const styles = {
    navStyle: {
        background: 'green',
        justifyContent: 'flex-end',
    },
};

function Nav(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <nav className="inline">
            <div className="container">
            <h1 id="logo">Welcome</h1>
                <ul className="nav nav-tabs">
                    <li onClick={() => props.setPage("About")}>
                        About
                    </li>
                    <li onClick={() => props.setPage("Portfolio")}>
                        Portfolio
                    </li>
                    <li onClick={() => props.setPage("Contact")}>
                        Contact
                    </li>
                    <li onClick={() => props.setPage("Resume")}>
                        Resume
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav