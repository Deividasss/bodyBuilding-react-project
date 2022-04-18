import { useState } from "react"
import { Form, Card, Button, Modal } from "react-bootstrap"
import "../../Sass/AddCompetitor.scss"


const AddRecord = (props) => {
    const [modal, setModal] = useState(false)
    const [thanks, setThanks] = useState(false)
    const [term, setTerm] = useState({
        'name': '',
        'team': '',
        'category': '',
        'record': '',
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
            <button className="button-85" onClick={openModal}>Add New Record</button>
            <Modal show={modal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Card className="recordCard">
                    <Card.Header className="recordHeader">
                        Add New Record
                        <Button
                            type="button"
                            className="recordClose btn-close"
                            onClick={hideModal}
                            variant="danger"
                        >
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name/ Last Name:</Form.Label>
                                <Form.Control
                                    className="recordForm"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    placeholder="Name/ Last name..."
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Team:</Form.Label>
                                <Form.Control
                                    className="recordForm"
                                    type="text"
                                    name="team"
                                    onChange={handleChange}
                                    placeholder="Team..."
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category:</Form.Label>
                                <Form.Select
                                    className="recordForm"
                                    type="text"
                                    name="category"
                                    onChange={handleChange}
                                    placeholder="Category..."
                                >
                                    <option>Choose Category</option>
                                    <option>DEADLIFT</option>
                                    <option>BENCH PRESS</option>
                                    <option>SQUAT</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>New record:</Form.Label>
                                <Form.Control
                                    className="recordForm"
                                    name="record"
                                    onChange={handleChange}
                                    placeholder="New record..."
                                    type="number"
                                />
                            </Form.Group>
                            <Button variant="light" type="submit" className="addRecord">Add</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal >
            <Modal show={thanks} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Card className="recordCard">
                    <Card.Header className="recordHeader">
                        New record was added
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
                    <Card.Body className="recordCard" ><h3>New record was added!!!</h3> We are happy to see that you athieved new record</Card.Body>

                </Card>
            </Modal>
        </>
    )
}

export default AddRecord