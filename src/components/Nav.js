import React from "react";

function Nav(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <nav>
            <h1>Nav</h1>
            <div className="tabs is-centered">
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