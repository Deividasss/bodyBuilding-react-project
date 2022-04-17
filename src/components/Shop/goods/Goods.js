
const Goods = [
    {
        id: '1',
        title: 'Texas Powerlifting Belt',
        price: '175$',
        inStock: '12',
        type: 'Belts',
        img: "https://www.liftinglarge.com/assets/images/Brahma_Lever_Belt.jpg"
    },
    {
        id: '2',
        title: 'Texas Brahma Powerlifting Belt',
        price: '170$',
        inStock: '18',
        type: 'Belts',
        img: "https://www.liftinglarge.com/assets/images/brahma_prong_belt-3.jpg"
    },
    {
        id: '3',
        title: 'SBD Powerlifting Belt',
        price: '250$',
        inStock: '14',
        type: 'Belts',
        img: "https://www.sportheavy.eu/tuotekuvat/6F852292-743B-44C4-9D01-8BB648373E63.jpeg"
    },
    {
        id: '4',
        title: 'Tunturi Powerlifting Wrist Straps',
        price: '20$',
        inStock: '8',
        type: 'Wrist straps',
        img: "https://cdn.webshopapp.com/shops/281654/files/288908841/500x500x2/powerlifting-straps-pair.jpg"
    },
    {
        id: '5',
        title: 'Tuff Wrist Straps',
        price: '35$',
        inStock: '16',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/0787/5969/products/villain-sidekick-wrist-wraps-16-black-blue-wrist-wraps-tuffwraps-com-28458521690200_2000x.jpg?v=1628341279"
    },
    {
        id: '6',
        title: 'Rogue Powerlifting Belt',
        price: '220$',
        inStock: '17',
        type: 'Belts',
        img: "https://powerliftingtechnique.com/wp-content/uploads/2020/06/Rogue-3-Inch-Ohio.jpg"
    },
    {
        id: '7',
        title: 'Inner Wrist Straps',
        price: '32$',
        inStock: '22',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/1491/0004/products/inzer-advance-design-wrist-wraps-inzer-atomic-wrist-wraps-34291328843945_1600x.jpg?v=1634513441"
    },
    {
        id: '8',
        title: 'Rogue Powerlifting Belt',
        price: '120$',
        inStock: '6',
        type: 'Belts',
        img: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_414,b_rgb:f8f8f8/catalog/Straps%20Wraps%20and%20Support%20/Belts%20/Weightlifting/PS0027/PS0027-H_dasxkd.png"
    },
    {
        id: '9',
        title: 'Tuff Wrist Straps',
        price: '24$',
        inStock: '12',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/0787/5969/products/villain-wrist-wraps-24-black-camo-wrist-wraps-tuffwraps-com-13790993711192_2000x.jpg?v=1628204300"
    },
    {
        id: '10',
        title: 'Rogue Powerlifting Belt',
        price: '180$',
        inStock: '9',
        type: 'Belts',
        img: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Straps%20Wraps%20and%20Support%20/Belts%20/Weightlifting/HDDLEVSD/HDDLEVSD-h_ylyzck.png"
    },
    {
        id: '11',
        title: 'Tuff Wrist Straps',
        price: '24$',
        inStock: '11',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/0787/5969/products/villain-wrist-wraps-27-black-pink-wrist-wraps-tuffwraps-com-28459911184472_2000x.jpg?v=1628085504"
    },
    {
        id: '12',
        title: 'SBD Powerlifting Belt',
        price: '210$',
        inStock: '7',
        type: 'Belts',
        img: "https://di2ponv0v5otw.cloudfront.net/posts/2019/04/26/5cc3bc5fb3e917355ee473ec/m_5cc3bc8d8557aff527395770.jpg"
    },
    {
        id: '13',
        title: 'SBD Powerlifting Sleeves',
        price: '64$',
        inStock: '13',
        type: 'Sleeves',
        img: "https://i.ebayimg.com/images/g/500AAOSwIBBUaNfT/s-l300.jpg"
    },
    {
        id: '14',
        title: 'Stoic Powerlifting Sleeves',
        price: '35$',
        inStock: '10',
        type: 'Sleeves',
        img: "https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFuWE1zb1U0ekwuX0FDX1NMMTUwMF8uanBn.jpg"
    },
    {
        id: '15',
        title: 'PROfitness Powerlifting Sleeves',
        price: '42$',
        inStock: '18',
        type: 'Sleeves',
        img: "https://www.ubuy.com.ru/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFTZnVtZmk2U0wuX0FDX1NMMTUwMF8uanBn.jpg"
    },
    {
        id: '16',
        title: 'Gymreapers Powerlifting Sleevesc (black)',
        price: '40$',
        inStock: '8',
        type: 'Sleeves',
        img: "https://m.media-amazon.com/images/I/41BBAL4ekvS._AC_.jpg"
    },
    {
        id: '17',
        title: 'Gymreapers Powerlifting Sleeves (red)',
        price: '40$',
        inStock: '9',
        type: 'Sleeves',
        img: "https://m.media-amazon.com/images/I/4124RCu2obS._AC_.jpg"
    },
    {
        id: '18',
        title: 'Champ Powerlifting Sleeves (red)',
        price: '52$',
        inStock: '5',
        type: 'Sleeves',
        img: "http://cdn.shopify.com/s/files/1/2868/3070/products/Black_Powerlifting_Knee_Sleeves_Champ.jpg?v=1608655347"
    },
    {
        id: '19',
        title: 'Adidas Powerlifting Shoes',
        price: '160$',
        inStock: '6',
        type: 'Shoes',
        img: "https://gaponez.com/wa-data/public/shop/products/00/webp/62/81/8162/images/13940/13940.970.webp"
    },
    {
        id: '20',
        title: 'Adidas Powerlifting Shoes',
        price: '150$',
        inStock: '6',
        type: 'Shoes',
        img: "https://gaponez.com/wa-data/public/shop/products/02/webp/38/66/6638/images/15367/15367.970.webp"
    },
    {
        id: '21',
        title: 'NIKE ROMALEOS 2 Powerlifting Shoes',
        price: '182$',
        inStock: '4',
        type: 'Shoes',
        img: "https://cdn11.bigcommerce.com/s-ob1gxw6h/images/stencil/1280x1280/products/1443/1567/orange-blue__55356.1564006639.jpg?c=2"
    },
    {
        id: '22',
        title: 'Tomix 2 Powerlifting Shoes',
        price: '145$',
        inStock: '7',
        type: 'Shoes',
        img: "https://m.media-amazon.com/images/I/61pkcJ17qoL._AC_UL320_.jpg"
    },
]

export default Goods