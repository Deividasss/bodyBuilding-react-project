import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../Sass/Navigation.scss"

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BodyX</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="navLinks" to="/">Home</Link>
                        <Link className="navLinks" to="/BodyBuildingInfo">Features</Link>
                        <Link className="navLinks" to="#pricing">Pricing</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation