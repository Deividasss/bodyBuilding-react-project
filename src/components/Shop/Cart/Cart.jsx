import { useState } from "react"
import { Modal, Card, Button } from "react-bootstrap"


const Cart = () => {
    const [isOpenCart, setIsOpenCart] = useState(false)

    const openCart=()=>{
        setIsOpenCart(true)
    }

    const closeCart=()=>{
        setIsOpenCart(false)
    }


    return (
        <> 
        <Button onClick={openCart}>Bandymas</Button>
        <Modal show={isOpenCart} aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Card className="compCard">
                <Card.Header className="compHeader">
                    Registration
                    <Button
                        type="button"
                        className="btn-close"
                        data-dismiss="modal"
                        aria-label="Close"
                        variant='danger'
                        onClick={closeCart}
                        style={{ float: 'right' }}
                    >
                    </Button>
                </Card.Header>
                <Card.Body className="compCard" >Shoping cart</Card.Body>

            </Card>
        </Modal></>
    )
}

export default Cart