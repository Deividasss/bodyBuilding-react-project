import "../Sass/Register.scss"
import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import axios from 'axios';



const Register = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [emailReg, setEmailReg] = useState('')

    const register = () => {
        axios.post("http://localhost3001/register", {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <>
            <Form className="loginForm col-sm-3 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label aria-required >UserName</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="UserName"
                        name="name"
                        required
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label aria-required>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                        onChange={(e) => {
                            setEmailReg(e.target.value)
                        }}
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
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Save info" />
                    <a className="registerBtn">Login</a>
                </Form.Group>
                <Button onClick={register} className="loginBtn" variant="dark" type="submit">REGISTER</Button>
            </Form>
            <div className="spacer3"></div>
        </>
    )
}

export default Register