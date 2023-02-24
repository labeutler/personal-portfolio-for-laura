// import React, { useEffect } from "react";
import React from 'react';
import '../styles/Nav.css';

// function Nav(props) {
//     const {
//         pages = [],
//         setCurrentPage,
//         currentPage,
//     } = props;

//     useEffect(() => {
//         document.title =(currentPage.name);
//         }, [currentPage]);

//         return (
//             <nav>
//                 <ul className="flex-row">
//                     {pages.map((Page) => (
//                         <li
//                             className={`mx-5 ${
//                                 currentPage.name === Page.name && 'navActive'
//                             }`}
//                             key={Page.name}
//                         >
//                             <span onClick={() => setCurrentPage(Page)}
//                             >
                            
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         );
// }

// export default Nav;

// const styles = {
//     navStyle: {
//         background: 'green',
//         justifyContent: 'flex-end',
//     },
// };

function Nav(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <nav className="inline">
            <div className="container">
            <h1 id="logo">Welcome</h1>
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
                    {/* <li onClick={() => props.setPage("About")}>
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
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
export default Nav