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
                            <li><a data-tip="Add to Wishlist"><i>{<FaHeart />}</i></a></li>
                            <li><a onClick={() => setItem(item - 1)} data-tip="Add To Cart"><i>{<FaShoppingCart />}</i></a></li>
                            <li><a href={props.img} data-tip="Quick View"><i>{<FaSearch />}</i></a></li>
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
                <div class="lightbox-blanket">
                    <div class="pop-up-container">
                        <div class="pop-up-container-vertical">
                            <div class="pop-up-wrapper">
                               <Button variant="close" onClick={hideModal}></Button>
                                <div class="product-details">
                                    <div class="product-left">
                                        <div class="product-info">
                                            <div class="product-title">
                                                {props.title}
                                            </div>
                                            <div class="product-price" price-data="320.03">
                                                {props.price}<span class="product-price-cents">{props.inStock}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img class="InfoFoto" src={props.img}/>
                                        </div>
                                    </div>
                                    <div class="product-right">
                                        <div class="product-description">
                                            Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.
                                        </div>
                                        <div class="product-available">
                                            In stock. <span class="product-extended"><a href="#">Buy Extended Warranty</a></span>
                                        </div>
                                        <div class="product-rating">
                                            <i><FaStar/></i>
                                            <i><FaStar/></i>
                                            <i><FaStar/></i>
                                            <i><FaStar/></i>
                                            <i><FaStar/></i>
                                            <div class="product-rating-details">(3.1 - <span class="rating-count">1203</span> reviews)
                                            </div>

                                        </div>
                                        <div class="product-quantity">
                                            <label for="product-quantity-input" class="product-quantity-label">Quantity</label>
                                            <div class="product-quantity-subtract">
                                                <i class="fa fa-chevron-left"></i>
                                            </div>
                                            <div>
                                                <input type="text" id="product-quantity-input" placeholder="0" value="0" />
                                            </div>
                                            <div class="product-quantity-add">
                                                <i class="fa fa-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-checkout">
                                            Total Price
                                            <div class="product-checkout-total">
                                                <i class="fa fa-usd"></i>
                                                <div class="product-checkout-total-amount">
                                                    0.00
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-checkout-actions">
                                            <a class="add-to-cart" href="#" onclick="AddToCart(event);">Add to Cart</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ShopCard