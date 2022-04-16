import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import "../../Sass/MainShop.scss"


const ShopCard = (props) => {
    const [item, setItem] = useState(props.inStock)

    return (
        <>
            <Card className="shopCard">
                <Card.Img className="shopImg" variant="top" src={props.img} />
                <Card.Body>
                    <Card.Text className="shopPrice">{props.price}/{item}vnt</Card.Text>
                    <Card.Text className="shopName">{props.title}</Card.Text>
                    <Button onClick={() => setItem(item - 1)} variant="danger">BUY</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ShopCard