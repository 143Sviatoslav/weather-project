import logo from "../img/logo.png";
import user from "../img/user.png";
import "./header.css";

function Header() {
    return(
        <header>
            <div className="container">
            <img src={logo} className="logoImg"/>
                <p className="wwa">Who we are</p>
                <p className="contacts">Contacts</p>
                <p className="menu">Menu</p>
                <button className="signBth">Sign up</button>
                <img src={user} className="userImg"/>
            </div>
        </header>
    )
}
export default Header