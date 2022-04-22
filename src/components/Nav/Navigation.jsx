import { Nav, Navbar, Container, Dropdown, Form, Button, Offcanvas, NavDropdown, FormControl, ListGroup } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "../Sass/Navigation.scss"
import { FaShoppingCart, FaBars } from 'react-icons/fa';

const Navigation = () => {
    const navigate = useNavigate();


    return (
        <>
            <Navbar className="navigation" expand={false}>
                <Container>
                    <Link className="navLogo" to="BodyBuildingInfo">BodyX</Link>
                    <Nav className="me-auto">
                            <Link className="navLink1" to="/Header">Powerlifting record table</Link>
                            <Link className="navLink2" to="/MainShop">Shop</Link>
                    </Nav>
                    <Link className="navCart" to="/Cart"><FaShoppingCart /></Link>
                    <Navbar.Toggle className="navBars"><FaBars /></Navbar.Toggle>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        placement="end"
                        className="canvas"
                    >
                        <Offcanvas.Header closeButton className="canvasHeader" >
                            <Offcanvas.Title className="canvasTitle">Account</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="canvas">
                            <div className="canvasCard">
                                <div class="top-container"> <img src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png" class="img-fluid profile-image" width="70" />
                                    <div class="ml-3">
                                        <h5 class="name">BodyX.User</h5>
                                        <p class="mail">BodyX.User@gmail.com</p>
                                    </div>
                                </div>
                                <div class="middle-container">
                                    <div class="d-flex flex-column text-right mr-2"> <span class="current-balance">Current Balance:</span> <span class="amount">1476 <span class="dollar-sign">$</span></span></div>
                                </div>
                                <Button className="canvasBtn" variant="dark" onClick={() => navigate("/")}>Sign Out</Button>
                            </div>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation