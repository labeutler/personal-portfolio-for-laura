function Nav(props) {
    return (
        <nav>
        <h1>Nav</h1>
        <ul>
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
        </nav>
    )
}
export default Nav