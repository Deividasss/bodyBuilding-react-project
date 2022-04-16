import "../../Sass/MainShop.scss"
import ShopCard from "../shopCard/ShopCard"
import Goods from "../goods/Goods"


const MainShop = () => {
    return (
        <>
            <h1>DeividasPhysique Shope</h1>
            <p>Here you will find equipment and accessories that will help you achieve the desired results</p>


            <div className='row justify-content-center'>
                {Goods.map((shop) =>
                    <ShopCard
                        title={shop.title}
                        price={shop.price}
                        date={shop.date}
                        img={shop.img}
                    />
                )}
            </div>
        </>
    )
}

export default MainShop
