
const EquipmentsGoods = [
    {
        id: '1',
        title: 'Texas Powerlifting Belt',
        price: 175,
        inStock: '12',
        type: 'Belts',
        img: "https://www.liftinglarge.com/assets/images/Brahma_Lever_Belt.jpg",
        description: 'If you are new to the sport of powerlifting or simply strength training and need a dependable training belt at a great price then Texas Training Belts should be #1 on your list'
    },
    {
        id: '2',
        title: 'Texas Brahma Powerlifting Belt',
        price: 170,
        inStock: '18',
        type: 'Belts',
        img: "https://www.liftinglarge.com/assets/images/brahma_prong_belt-3.jpg",
        description: 'If you are new to the sport of powerlifting or simply strength training and need a dependable training belt at a great price then Texas Training Belts should be #1 on your list'
    },
    {
        id: '3',
        title: 'SBD Powerlifting Belt',
        price: 250,
        inStock: '14',
        type: 'Belts',
        img: "https://www.sportheavy.eu/tuotekuvat/6F852292-743B-44C4-9D01-8BB648373E63.jpeg",
        description: 'Featuring a patented gliding lever, providing the adjustability of a prong belt with the ease and tightness of a lever belt. Ideal for sizing up or down whenever you need during training sessions and competitions. Designed through collaboration with world class athletes, coaches, and health professionals.'
    },
    {
        id: '4',
        title: 'Tunturi Powerlifting Wrist Straps',
        price: 20,
        inStock: '8',
        type: 'Wrist straps',
        img: "https://cdn.webshopapp.com/shops/281654/files/288908841/500x500x2/powerlifting-straps-pair.jpg",
        description: 'Can you use some support while bodybuilding or lifting weights? The Tunturi Powerlifting Straps give you added support to lift those extra kilos. Put your hand through the loop and wrap the strap tightly around your wrist.'
    },
    {
        id: '5',
        title: 'Tuff Wrist Straps',
        price: 35,
        inStock: '16',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/0787/5969/products/villain-sidekick-wrist-wraps-16-black-blue-wrist-wraps-tuffwraps-com-28458521690200_2000x.jpg?v=1628341279",
        description: 'Our NO THUMB LOOP Blackout Villain Sidekick 16" Wrist Wraps provide you the support when you need it. We use a "Belt Loop Tightening System" that acts like a belt does to your waist.  Never fuss or mess around with thumb loops again when using our Villain Sidekick Wrist Wraps.  We use a high-quality type of fabric that is made from a cotton/poly elastic blend.  '
    },
    {
        id: '6',
        title: 'Rogue Powerlifting Belt',
        price: 220,
        inStock: '17',
        type: 'Belts',
        img: "https://powerliftingtechnique.com/wp-content/uploads/2020/06/Rogue-3-Inch-Ohio.jpg",
        description: 'The Rogue Ohio Lifting Belt is handcrafted not to compete with the world of mass-produced, sporting-goods-store weightlifting belts, but to offer a stronger, longer-lasting alternative for customers serious about strength training and investing for the long haul.'
    },
    {
        id: '7',
        title: 'Inner Wrist Straps',
        price: 32,
        inStock: '22',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/1491/0004/products/inzer-advance-design-wrist-wraps-inzer-atomic-wrist-wraps-34291328843945_1600x.jpg?v=1634513441",
        description: '75 CM LONG QUCIK-EZ HOOK AND LOOP strap with a blend of nylon and cotton fabric, providing you a customized fit and overall wrist coverage.'
    },
    {
        id: '8',
        title: 'Rogue Powerlifting Belt',
        price: 120,
        inStock: '6',
        type: 'Belts',
        img: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_414,b_rgb:f8f8f8/catalog/Straps%20Wraps%20and%20Support%20/Belts%20/Weightlifting/PS0027/PS0027-H_dasxkd.png",
        description: 'With 3" of support in the front and 5" in the back, Rogues oversized 5" Nylon Weightlifting Belt conforms to your bodys natural shape while providing greater overall coverage than most nylon lifting belts on the market. Thin, light, and highly durable, its a budget-priced alternative to traditional leather weightlifting belts, offering firm support for the abdomen and lower back during even the most intense weight training programs.'
    },
    {
        id: '9',
        title: 'Tuff Wrist Straps',
        price: 24,
        inStock: '12',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/0787/5969/products/villain-wrist-wraps-24-black-camo-wrist-wraps-tuffwraps-com-13790993711192_2000x.jpg?v=1628204300",
        description: 'Our NO THUMB LOOP Blackout Villain Sidekick 16" Wrist Wraps provide you the support when you need it. We use a "Belt Loop Tightening System" that acts like a belt does to your waist.  Never fuss or mess around with thumb loops again when using our Villain Sidekick Wrist Wraps.  We use a high-quality type of fabric that is made from a cotton/poly elastic blend.  '
    },
    {
        id: '10',
        title: 'Rogue Powerlifting Belt',
        price: 180,
        inStock: '9',
        type: 'Belts',
        img: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Straps%20Wraps%20and%20Support%20/Belts%20/Weightlifting/HDDLEVSD/HDDLEVSD-h_ylyzck.png",
        description: 'Rogue’s Echo Lifting Belt is made from genuine leather and measures in 4" width and 10mm in thickness,* with five length options to choose from. All sizes of the belt include 10 precision-spaced holes and a single prong buckle design for easy custom tightening and optimal comfort and support. The leather on the Echo Belt can run pretty stiff out of the gate and may need some break-in time, but you’ll never need to worry about its reliability for securing the abdominal muscles and lower back on a wide variety of lifts.'
    },
    {
        id: '11',
        title: 'Tuff Wrist Straps',
        price: 24,
        inStock: '11',
        type: 'Wrist straps',
        img: "https://cdn.shopify.com/s/files/1/0787/5969/products/villain-wrist-wraps-27-black-pink-wrist-wraps-tuffwraps-com-28459911184472_2000x.jpg?v=1628085504",
        description: 'Our NO THUMB LOOP Blackout Villain Sidekick 16" Wrist Wraps provide you the support when you need it. We use a "Belt Loop Tightening System" that acts like a belt does to your waist.  Never fuss or mess around with thumb loops again when using our Villain Sidekick Wrist Wraps.  We use a high-quality type of fabric that is made from a cotton/poly elastic blend.  '
    },
    {
        id: '12',
        title: 'SBD Powerlifting Belt',
        price: 210,
        inStock: '7',
        type: 'Belts',
        img: "https://di2ponv0v5otw.cloudfront.net/posts/2019/04/26/5cc3bc5fb3e917355ee473ec/m_5cc3bc8d8557aff527395770.jpg",
        description: 'Featuring a patented gliding lever, providing the adjustability of a prong belt with the ease and tightness of a lever belt. Ideal for sizing up or down whenever you need during training sessions and competitions. Designed through collaboration with world class athletes, coaches, and health professionals.'
    },
    {
        id: '13',
        title: 'SBD Powerlifting Sleeves',
        price: 64,
        inStock: '13',
        type: 'Sleeves',
        img: "https://i.ebayimg.com/images/g/500AAOSwIBBUaNfT/s-l300.jpg",
        description: 'The sleeves combine the high grade neoprene used in our knee sleeves with a thinner interior panel, ideal for pulling and pressing motions. Storm is a limited edition collection, offering the same performance and manufactured to the same high standards as our classic product line.'
    },
    {
        id: '14',
        title: 'Stoic Powerlifting Sleeves',
        price: 35,
        inStock: '10',
        type: 'Sleeves',
        img: "https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFuWE1zb1U0ekwuX0FDX1NMMTUwMF8uanBn.jpg",
        description: 'Boasting impressive 30cm length and 7mm thickness to support the most extreme athletes, Stoic Knee Sleeves take you through unforgettable training sessions. Training equipment is no longer only about protection – it becomes the core confidence of your journey.'
    },
    {
        id: '15',
        title: 'PROfitness Powerlifting Sleeves',
        price: 42,
        inStock: '18',
        type: 'Sleeves',
        img: "https://www.ubuy.com.ru/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFTZnVtZmk2U0wuX0FDX1NMMTUwMF8uanBn.jpg",
        description: 'THE ULTIMATE CHOICE: Our Knee Compression Sleeves are So Strong and Versatile that they can be used by Professional Athletes, by those Needing Firm Knee Protection & for Injury Rehab. Ideal for Weightlifting, Wrestling, Cross Training, Bodybuilding, Powerlifting, Running or Walking. These Sleeves just Keep on Giving!'
    },
    {
        id: '16',
        title: 'Gymreapers Powerlifting Sleeves (black)',
        price: 40,
        inStock: '8',
        type: 'Sleeves',
        img: "https://m.media-amazon.com/images/I/41BBAL4ekvS._AC_.jpg",
        description: 'Gymreapers 7mm Knee Sleeves provide compression and warmth during and after a workout. Our neoprene compression sleeves can help reduce knee strain, knee pain, and discomfort without restricting your range of motion. '
    },
    {
        id: '17',
        title: 'Gymreapers Powerlifting Sleeves (red)',
        price: 40,
        inStock: '9',
        type: 'Sleeves',
        img: "https://m.media-amazon.com/images/I/4124RCu2obS._AC_.jpg",
        description: 'Gymreapers 7mm Knee Sleeves provide compression and warmth during and after a workout. Our neoprene compression sleeves can help reduce knee strain, knee pain, and discomfort without restricting your range of motion. '
    },
    {
        id: '18',
        title: 'Champ Powerlifting Sleeves (red)',
        price: 52,
        inStock: '5',
        type: 'Sleeves',
        img: "http://cdn.shopify.com/s/files/1/2868/3070/products/Black_Powerlifting_Knee_Sleeves_Champ.jpg?v=1608655347",
        description: 'THE CHAMP knee sleeve gives you the compression and accurate fit required for you to drive out of the bottom of a heavy squat. The tapered design ensures that the knee sleeve locks in place and does not move while performing a lift. The sleeve was tested in the gym with athletes of various sizes and strength levels, to ensure we had the right design for all body types. The knee sleeves can be worn throughout the workout session or easily slipped off. '
    },
    {
        id: '19',
        title: 'Adidas Powerlifting Shoes',
        price: 160,
        inStock: '6',
        type: 'Shoes',
        img: "https://gaponez.com/wa-data/public/shop/products/00/webp/62/81/8162/images/13940/13940.970.webp",
        description: 'Strength and technique are key. But for those big lifts you need an extra helping of confidence. Foot-hugging and reinforced, the sleek woven upper on these adidas Adipower Weightlifting II Shoes gives you the secure platform you need. Laces and a midfoot strap double up to ensure youre completely stable on the mat.'
    },
    {
        id: '20',
        title: 'Adidas Powerlifting Shoes',
        price: 150,
        inStock: '6',
        type: 'Shoes',
        img: "https://gaponez.com/wa-data/public/shop/products/02/webp/38/66/6638/images/15367/15367.970.webp",
        description: 'Strength and technique are key. But for those big lifts you need an extra helping of confidence. Foot-hugging and reinforced, the sleek woven upper on these adidas Adipower Weightlifting II Shoes gives you the secure platform you need. Laces and a midfoot strap double up to ensure youre completely stable on the mat.'
    },
    {
        id: '21',
        title: 'NIKE ROMALEOS 2 Powerlifting Shoes',
        price: 182,
        inStock: '4',
        type: 'Shoes',
        img: "https://cdn11.bigcommerce.com/s-ob1gxw6h/images/stencil/1280x1280/products/1443/1567/orange-blue__55356.1564006639.jpg?c=2",
        description: 'This updated design features a supportive midsole and a wide, flat outsole, with adjustable straps over the laces at the midfoot to secure the foot during high-intensity workouts. The substantial heel-to-toe drop reduces the ankle flexion needed at the bottom of a lift, and—combined with the rigid midsole—enables greater explosiveness off the ground.'
    },
    {
        id: '22',
        title: 'Tomix 2 Powerlifting Shoes',
        price: 145,
        inStock: '7',
        type: 'Shoes',
        img: "https://m.media-amazon.com/images/I/61pkcJ17qoL._AC_UL320_.jpg",
        description: 'Bodybuilding Weightlifting Powerlifting and MMA Shoes OTOMIX brings its heritage of mat sports experience in Martial Arts to the world of Wrestling, MMA, Bodybuilding, Grappling with the introduction of the MMA Stingray Escape shoe.'
    },
    
]

export default EquipmentsGoods