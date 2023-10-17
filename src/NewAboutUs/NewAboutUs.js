import "./NewAboutUs.css"
import logo from "../assets/food-3.jpg"
const NewAboutUs = () =>{
    return(
        <>
            <div className="About-us-container">
                <div className="About-us-Images">
                        <div className="About-us-Img">
                            <img src={logo} alt=""  className="about-img"/>
                            <h2 className="img-text">OUR STORY</h2>
                            </div>
                        <div className="About-us-Img">
                            <img src={logo} alt=""  className="about-img"/>
                            <h2 className="text-sec">GROW WITH US</h2>
                            </div>
                        <div className="About-us-Img">
                             <img src={logo} alt=""  className="about-img"/>
                             <h2 className="img-text">REWARDS</h2>
                        </div>
                </div>
                <div className="About-us-Text">
                <a href="/catering"><span className="span-text"> CATERING</span></a>
                <a href="/allergen"><span className="span-text">ALLERGENS</span></a>
                </div>
            </div>
        </>
    )
}
export default NewAboutUs