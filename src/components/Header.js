import Nav from "./Nav";
import "../styles/Header.css"

function Header(props) {
    return (
        <header>
            <Nav setPage={props.setPage}/>
            <h2 className="name">Laura Beutler</h2>
        </header>
        
    )
}
export default Header