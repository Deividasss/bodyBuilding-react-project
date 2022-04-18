import { Nav, Navbar, Container, Dropdown, Form, Button, Offcanvas, NavDropdown, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../Sass/Navigation.scss"
import { FaShoppingCart, FaBars } from 'react-icons/fa';



const Navigation = () => {

    return (
        <>
            <Navbar className="navigation" expand={false}>
                <Container>
                    <Link className="navLogo" to="/">BodyX</Link>
                    <Nav className="me-auto">
                        <Link className="navLinks" to="/Header">Powerlifting record table</Link>
                        <Link className="navLinks" to="/MainShop">Shop</Link>
                    </Nav>
                    <Link className="navCart" to="/Cart"><FaShoppingCart /></Link>
                    <Navbar.Toggle className="navBars"><FaBars /></Navbar.Toggle>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation