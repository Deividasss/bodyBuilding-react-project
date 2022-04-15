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
            <button className="button-85" onClick={openModal}>Užsiregistruokite</button>
            <Modal show={modal}>
                <Card>
                    <Card.Header>
                        Užsiregistruokite varžyboms
                        <Button
                            type="button"
                            className="justify-content-end"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={hideModal}
                            variant='danger'
                            style={{ float: 'right' }}
                        >
                            <span aria-hidden="false">&times;</span>
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Vardas:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Pavardė:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>El. paštas:</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Grupė, kurioje dalyvausite</Form.Label>
                                <Form.Select
                                    name="group"
                                    onChange={handleChange}
                                >
                                    <option>Pasirinkite grupę</option>
                                    <option>Klasikinis kultūrizmas</option>
                                    <option>Kultūrizmas</option>
                                    <option>Bikini fitness</option>
                                    <option>Moterų kultūrizmas</option>
                                    <option>Naujokų kultūrizmas</option>
                                </Form.Select>
                            </Form.Group>
                            <Button type="submit" className="m-2">Saugoti</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal>
            <Modal show={thanks}>
                <Card>
                    <Card.Header>
                        <Button
                            type="button"
                            className="justify-content-end"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={hideModal}
                            variant='danger'
                            style={{ float: 'right' }}
                        >
                            <span aria-hidden="false">&times;</span>
                        </Button>
                    </Card.Header>
                    <Card.Body>AČIŪ, KAD UŽSIREGISTRAVOTE <br></br> LAUKSIME JŪSŲ ATVYKSTANT</Card.Body>

                </Card>
            </Modal></>
    )
}

export default AddCompetitor