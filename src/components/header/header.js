import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <Navbar >
            <Container>
                <Navbar.Brand as = {Link} to = "./articles"> SHARETRADE.com</Navbar.Brand>
            </Container>
        </Navbar>


    );
}

export default Header;
