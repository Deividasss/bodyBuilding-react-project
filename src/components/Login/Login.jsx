import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "../Sass/Login.scss"


const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        name: 'name',
        email: 'email',
        password:'password'
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        navigate("/BodyBuildingInfo")
        console.log(login)
    }

    return (
        <>
            <h1>---------------BodyX---------------</h1>
            <Form onSubmit={submitHandler} className="loginForm col-sm-3 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label aria-required >UserName</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="UserName"
                        name="name"
                        onChange={handleChange}
                        required  
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label aria-required>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label aria-required >Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Save info" />
                </Form.Group>
                <Button className="loginBtn" variant="dark" type="submit">LOGIN</Button>
            </Form>
        </>
    )
}

export default Login