import "./card.css";
import axios from "axios";
import bin from "../img/bin.png";
import refresh from"../img/refresh.png";
import hurt from "../img/hurt.png";

function Card() {
    
    
    return (
        <div className="card">
            <p className="city"></p>
            <p className="country"></p>
            <p className="time"></p>
            <button className="hourly">Hourly forecast</button>
            <button className="weekly">Weekly forecast</button>
            <p className="date"></p>
            <p className="weekDay"></p>
            <img src="" className="sun" />
            <p className="grade"></p>
            <button className="return">
                <img src={refresh} className="returnimg" />
            </button>
            <button className="like">
                <img src={hurt} className="likeimg"/>
            </button>
            <button className="more">
                See more
            </button>
            <button className="del">
                <img src={bin} className="delimg" />
            </button>
        </div>
    )
}
export default Card