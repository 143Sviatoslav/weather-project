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
           <div className="container-left">
             <img src={logo} className="logoImg"/>
                <ul className="container-list">
                    <li className="container-list-item">Who we are</li>
                    <li className="container-list-item">Contacts</li>
                    <li className="container-list-item">Menu</li>
                </ul>
           </div>
              <div className="container-account">
                    <button className="signBth" >Sign up</button>
                    <img src={user} className="userImg"/>
              </div>
            </div>
        </header>
        
    )
}
export default Header
