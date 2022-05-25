import "../Sass/BodyXMainPage.scss"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Rerousel } from 'rerousel';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const BodyXMainPage = () => {
    const navigate = useNavigate();
    const ref = useRef(null)
    return (
        <>
            <img className="mainPageImg" src="https://www.bodybuilding.com/fun/images/2015/default-motivation-article-facebook-960x540.jpg" alt="foto" />
            <div className="mainPageInfo">
                <h1 className="mainPageTitle">ARE YOU READY TO START YOUR JOURNEY?</h1>
                <div className="aboutUs">
                    <img src="https://pbs.twimg.com/media/FBXPv_LWQAQaNtr.jpg" alt="Foto" />
                    <div className="aboutUsText">
                        <h3>About BodyX.com</h3>
                        <p> We are committed to helping you gain the tools needed for living your life to its FITTEST. <br />  Everything we do, say, and feel starts with our customers! Every idea, program, project, and interaction has a customer-first mindset…and we don’t stop until the customer says WOW!</p>
                        <p>Our single-minded focus is helping you achieve your goals. If your motivation is flagging, we've got your back. We're obsessed with creating the best fitness site out there because we love hearing about your success once you’ve implemented our fitness solutions.</p>
                        <p>Here you will find the most popular brands of products that have been recognized as the best for many years</p>
                    </div>
                </div>
                <div className="shop">
                    <h2>MANY OFFERS AND DISCOUNTS!!!</h2>
                    <div className="shopSection">
                        <div className="shopLinks">
                            <div className="supplementsShopLink">
                                <a onClick={() => navigate('/SupplementsShop')}>
                                    <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/QF/MH/DH/84684939/hunk-gainer-3-kg-500x500.JPG" alt="foto" />
                                </a>
                                <p>Supplements<br /> <br /> <span>We sell products that have been recognized as the best in the world. <br />Here you can find a large supplements selection </span></p>
                            </div>
                            <div className="equipmentShopLink">
                                <a onClick={() => navigate('/EquipmentShop')}>
                                    <img src="https://s.alicdn.com/@sc04/kf/H6429c479fd284339bc6990ee6c95f984m.jpg" alt="Foto" />
                                </a>
                                <p>Equipment<br /> <br /> <span>We sell products that have been recognized as the best in the world. <br />Here you can find a large supplements selection  </span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="connectWithUs">
                    <h2>CONNECT WITH US</h2>
                    <div className="columns">
                        <div className="column">
                            <h5><FaInstagram className="columnLogo" />@BodyX.com</h5>
                            <p>Digital dose of workouts, community stories, and motivation for every goal</p>
                            <a href="https://www.instagram.com/">FOLLOW US</a>
                        </div>
                        <div className="column">
                            <h5><FaTwitter className="columnLogo" />@BodyX.com</h5>
                            <p>Fitness isn't always serious. Follow us for laughs and latest trends.</p>
                            <a href="https://twitter.com/">FOLLOW THE MOMENT</a>
                        </div>
                        <div className="column">
                            <h5><FaFacebook className="columnLogo" />@BodyX.com</h5>
                            <p>A huge community of virtual lifting partners is waiting to welcome you</p>
                            <a href="https://www.facebook.com/">JOIN THE COMMUNITY</a>
                        </div>
                        <div className="column">
                            <h5> <FaYoutube className="columnLogo" />@BodyX.com</h5>
                            <p>Listen up, class!!! Professor BodyX is here to educate and motivate!</p>
                            <a href="https://www.youtube.com/">SUBSCRIBE</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyXMainPage