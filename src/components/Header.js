import Nav from './Nav';

function Header(props) {
    return (
        <header>
            <Nav setPage={props.setPage}/>
            <h2>Laura Beutler</h2>
        </header>
        
    )
}
export default Header