import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../Sass/Navigation.scss"

const Navigation = () => {
    return (
        <>
            <Navbar className="navBar">
                <Container>
                    <Link className="navLogo" to="/">BodyX</Link>
                    <Nav className="me-auto">
                        <Link className="navLinks" to="/Header">Registration</Link>
                    </Nav>
                    <NavDropdown
                        title="Dropdown"
                        menuVariant="dark"
                        variant="light"
                    >
                        <NavDropdown.Item><Link className="navLinks" to="/Header">Yess</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation