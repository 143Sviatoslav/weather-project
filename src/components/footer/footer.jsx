import logo from "../img/logo.png"
import whatsapp from "../img/whatsapp.png"
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"
import "./footer.css"

function Footer() { 
    return (
        
            <div className="footerContainer">
                <div className="logoDiv">
            <img src={logo} className="logoF" />
            </div>
            <div className="addressDiv">
            <p className="address">Address</p>
            <p className="addressP">
                Svobody str. 35
                <br />
                Kyiv
                <br />
                Ukraine
                </p>
            </div>
            <div className="contactsDiv">
            <p className="contacts">Contact us</p>
            <img src={instagram} className="instagram" />
            <img src={facebook} className="facebook" />
            <img src={whatsapp} className="watsapp" />
            </div>
        </div>
        
    )
}
export default Footer