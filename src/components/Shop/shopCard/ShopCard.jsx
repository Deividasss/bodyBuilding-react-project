import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import "../../Sass/MainShop.scss"
import { Modal } from "react-bootstrap"
import { FaStar, FaHeart, FaRandom, FaSearch, FaShoppingCart } from 'react-icons/fa';


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

            <div class="col-md-3 ">
                <div class="product-grid">
                    <div class="product-image">
                        <a onClick={openModal} class="image">
                            <img class="pic-1" src={props.img} />
                            <img class="pic-2" src={props.img} />
                        </a>
                        <span class="product-hot-label">Hot</span>
                        <ul class="product-links">
                            <li><a onClick={() => setItem(item - 1)} data-tip="Add to Wishlist"><i>{<FaHeart />}</i></a></li>
                            <li><a href="#" data-tip="Compare"><i>{<FaRandom />}</i></a></li>
                            <li><a href="#" data-tip="Quick View"><i>{<FaSearch />}</i></a></li>
                        </ul>
                    </div>
                    <div class="product-content">
                        <h3 className="product-title"><a>{props.title}</a></h3>
                        <ul className="rating">
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                        </ul>
                        <div class="price">{props.price}<span>/{item}vnt</span></div>
                    </div>
                </div>
            </div>

            <Modal className="itemModal" show={modal} aria-labelledby="contained-modal-title-vcenter" centered>
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