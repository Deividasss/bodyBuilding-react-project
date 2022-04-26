import "../Sass/BodyXMainPage.scss"
import { useNavigate } from "react-router-dom";

const BodyXMainPage = () => {
    const navigate = useNavigate();
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
                <div className="shopSection">
                    <a onClick={() => navigate('/EquipmentShop')}>
                        <img src="#" alt="foto" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default BodyXMainPage