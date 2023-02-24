// Creating Nav bar
import React from 'react';
import '../styles/Nav.css';

// function Nav(props) {
//     return (
//         <li>{props.value}</li>
//     );
// }


// function NavigationButtons(props) {
//     const buttons = props.buttons;
//     const nav = buttons.map((button) =>
//     <Nav key={button.toString()} value={button} />
// );
// return (
//     <ul>
//         {nav}
//     </ul>
// )
// }



function Nav(props) {
    const {
        tabs = ["About Me", "Portfolio", "Contact", "Resume"],
        setCurrentPage,
        currentPage,
    } = props;
    // useEffect(() => {
    //     document.title = (currentPage.name);
    // }, [currentPage]);

    return (
        <nav className="inline">
            <div className="container">
                <h1 id="logo">Laura Beutler</h1>
                <ul className="nav nav-tabs">
                    {tabs.map((Tab) => (
                        <li
                            className={`mx-5 ${currentPage.name === Tab.name ? "navActive" : "nav-item"}`
                            }
                            key={Tab.name}
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
                                    props.currentPage === Tab ? "nav-link active" : "nav-link"
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