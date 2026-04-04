import "./nav.css";
import glass from "../img/glass.png";


function Nav (){

    return(
        <div className="continerNav">
            <h1 className="title">Weather dashboard</h1>
           <div className="containerNav-data">
             <p className="text1">Create your personal list of <br /> faworite cities and always be <br />aware to the weather</p>
             <div className="line"></div>
            <p className="text2">October 2023 <br />Friday, 13</p>
           </div>
           <div className="containerNav-search">
             <input type="text" placeholder="search location" className="input"/>
            <button className="glass-bth"><img src={glass} className="search"/></button>
           </div>
        </div>
    )
}

export default Nav
