import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../Sass/Navigation.scss"
import Cart from "../Shop/Cart/Cart"

const Navigation = () => {
    return (
        <>
            <Navbar className="navBar">
                <Container>
                    <Link className="navLogo" to="/">BodyX</Link>
                    <Nav className="me-auto">
                        <Link className="navLinks" to="/Header">Registration</Link>
                        <Link className="navLinks" to="/MainShop">Shop</Link>
                        <Link className="navLinks" to="/Cart">Cart</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation