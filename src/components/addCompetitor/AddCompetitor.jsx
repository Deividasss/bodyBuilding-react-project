import { useState } from "react"
import { Form, Card, Button, Modal } from "react-bootstrap"
import "../Sass/AddCompetitor.scss"


const AddCompetitor = (props) => {
    const [modal, setModal] = useState(false)
    const [thanks, setThanks] = useState(false)
    const [term, setTerm] = useState({
        'name': '',
        'lastName': '',
        'email': '',
        'group': '',
    })

    const openModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
        setThanks(false)
    }

    const handleChange = (e) => {
        setTerm({
            ...term,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.onSave(term)
        setModal(false)
        setThanks(true)
        console.log(term)
    }
    return (

        <>
            <button className="button-85" onClick={openModal}>Registration</button>
            <Modal show={modal}>
                <Card className="compCard">
                    <Card.Header className="compHeader">
                        Registration
                        <Button
                            type="button"
                            className="compClose btn-close"
                            onClick={hideModal}
                            variant="danger"
                        >
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    className="compForm"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    placeholder="Name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control
                                    className="compForm"
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>E. mail:</Form.Label>
                                <Form.Control
                                    className="compForm"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="E. mail"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Group</Form.Label>
                                <Form.Select
                                    className="compForm"
                                    name="group"
                                    onChange={handleChange}
                                    placeholder="Group"
                                >
                                    <option>Select a group</option>
                                    <option>Classic Bodybuilding</option>
                                    <option>Bodybuilding</option>
                                    <option>Bikini Fitness</option>
                                    <option>Womens Bodybuilding</option>
                                    <option>Rokie Bodybuilding</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="light" type="submit" className="compRegister">Register</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal>
            <Modal show={thanks}>
                <Card className="compCard">
                    <Card.Header className="compHeader">
                        Registration
                        <Button
                            type="button"
                            className="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={hideModal}
                            variant='danger'
                            style={{ float: 'right' }}
                        >
                        </Button>
                    </Card.Header>
                    <Card.Body className="compCard" >Thanks for signing up <br></br> WE'LL BE WAITING FOR YOUR ARRIVAL</Card.Body>

                </Card>
            </Modal>
        </>
    )
}

export default AddCompetitor