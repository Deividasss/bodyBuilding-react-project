import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import "../../Sass/MainShop.scss"
import { Modal } from "react-bootstrap"


const ShopCard = (props) => {
    const [item, setItem] = useState(props.inStock)
    const [modal, setModal] = useState(false)

    if (item === 0) {
        item = 'out of stock'
    }

    const openModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }



    return (
        <>
            <Card className="shopCard">
                <Card.Img onClick={openModal} className="shopImg" variant="top" src={props.img} />
                <Card.Body>
                    <Card.Text className="shopPrice">{props.price}<span>/{item}vnt</span></Card.Text>
                    <Card.Text className="shopName">{props.title}</Card.Text>
                    <Button className="shopCardBtn" onClick={() => setItem(item - 1)} variant="light">ADD TO CART</Button>
                </Card.Body>
            </Card>

            <Modal className="itemModal" show={modal} aria-labelledby="contained-modal-title-vcenter"centered>
                <Card className="itemCard">
                    <Card.Body className="itemInfo" >
                    <Card.Img className="itemImg" variant="top" src={props.img}></Card.Img>
                        <Card.Text className="itemInfoPrice">{props.price}</Card.Text>
                        <Card.Text className="itemInfoPrice">{props.title}</Card.Text>
                        <Button variant="light" className="itemBtn" onClick={hideModal}>Back</Button>

                    </Card.Body>

                </Card>
            </Modal>
        </>
    )
}

export default ShopCard