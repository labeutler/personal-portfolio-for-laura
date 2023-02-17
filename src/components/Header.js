import Nav from './Nav';

function Header(props) {
    return (
        <header>
            <h1>Header</h1>
            <Nav setPage={props.setPage}/>
        </header>
        
    )
}
export default Header