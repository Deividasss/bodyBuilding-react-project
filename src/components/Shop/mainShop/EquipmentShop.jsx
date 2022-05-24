import "../../Sass/MainShop.scss"
import ShopCard from "../shopCard/ShopCard"
import EquipmentsGoods from "../goods/EquipmentGoods"
import { Form } from "react-bootstrap"
import { useState } from "react"


const EquipmentShop = (props) => {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <h1>BodyX Shope</h1>
            <p>Here you will find equipment and accessories that will help you achieve the desired results</p>

            <Form className="shopSearch">
                <Form.Select
                    onChange={handleChange}
                    className="shopSelect">
                    <option>Select a group</option>
                    <option>Belts</option>
                    <option>Wrist straps</option>
                    <option>Sleeves</option>
                    <option>Shoes</option>
                </Form.Select>
            </Form>

            <div className="container">
                <div className='row justify-content-center'>
                    {EquipmentsGoods.filter(goods => goods.type.includes(search)).map((shop, i) =>
                        <ShopCard
                            key={i}
                            title={shop.title}
                            price={shop.price}
                            img={shop.img}
                            inStock={shop.inStock}
                            description={shop.description}
                        />
                    )}
                </div>
            </div>
            <div className="spacer"></div>
        </>
    )
}

export default EquipmentShop
