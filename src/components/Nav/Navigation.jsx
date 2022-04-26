import { Nav, Navbar, Container, Dropdown, Form, Button, Offcanvas, Table, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "../Sass/Navigation.scss"
import { FaShoppingCart, FaBars, } from 'react-icons/fa';

const Navigation = () => {
    const navigate = useNavigate();


    return (
        <>
            <Navbar className="navigation" expand={false}>
                <Container>
                    <Link className="navLogo" to="/BodyXMainPage">BodyX</Link>
                    <Link className="navLink1" to="/Header">Powerlifting record table</Link>
                    <Dropdown className="shopDropDown">
                        <Dropdown.Toggle className="shopDropDown" variant="none" >Shop</Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <NavDropdown.Item onClick={() => navigate('/EquipmentShop')}>Equipments</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/SupplementsShop')}>Supplements</NavDropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Link className="navCart" to="/Cart"><FaShoppingCart /></Link> */}
                    <Dropdown align="end" className="navCart">
                        <Dropdown.Toggle variant="none" className="navCart" >
                            <FaShoppingCart />
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark" className="p-3">
                            <Form className="cartMenu">
                                <Form.Group>
                                    <Form.Label>
                                        Your Shopping Cart
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Table class="table table-image">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="#" class="img-fluid img-thumbnail" alt="Foto" />
                                                </td>
                                                <td>Powerlifting Belt</td>
                                                <td>200$</td>
                                                <td>
                                                    <Button className="btn-close" variant="danger" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Form.Group>
                                        <Form.Label>Total: <span class="price text-success">200$</span></Form.Label>
                                    </Form.Group>
                                </Form.Group>
                                <div class="modal-footer border-top-0 d-flex justify-content-between">
                                    <Button className="btn btn-success">Checkout</Button>
                                </div>
                            </Form>
                        </Dropdown.Menu>
                    </Dropdown>


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
            </Navbar >
        </>
    )
}

export default Navigation