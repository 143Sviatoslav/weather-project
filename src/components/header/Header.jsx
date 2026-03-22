import {useState} from "react";
import logo from "../img/logo.png";
import user from "../img/user.png";
import "./header.css";
import profileModal from "../profileModal/ProfileModal"

function Header() {
// const [modalOpen, setModalOpen] = useState(false)

// const hendleOpen = () =>{
//     if (modalOpen === false){
//         setModalOpen(true)
//     } else {
//         setModalOpen(false)
//     }
// }
    return(
        <header>
            <div className="container"> 
            <img src={logo} className="logoImg"/>
                <p className="wwa">Who we are</p>
                <p className="contactsH">Contacts</p>
                <p className="menu">Menu</p>
                <button className="signBth" >Sign up</button>
                <img src={user} className="userImg"/>
            </div>
        </header>
        
    )
}
export default Header