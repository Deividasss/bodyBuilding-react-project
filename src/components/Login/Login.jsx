import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../Sass/Login.scss"


const Login = () => {
    return (
        <>
            <h1>---------------BodyX---------------</h1>
            <Form className="loginForm col-sm-3 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save info" />
                </Form.Group>
                <Button className="loginBtn" variant="dark"><Link className="loginBtnLink" to="/BodyBuildingInfo">Log in</Link></Button>
            </Form>
        </>
    )
}

export default Login