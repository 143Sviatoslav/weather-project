import "./card.css";
import axios from "axios";
import bin from "../img/bin.png";
import refresh from "../img/refresh.png";
import hurt from "../img/hurt.png";

function Card() {


    return (
        <div className="card">
            <div className="ccDiv">
                <p className="city">Prague</p>
                <p className="country">Czech Republic</p>
            </div>
            <p className="time">14:00</p>
            <div className="hwDiv">
                <button className="hourly">Hourly forecast</button>
                <button className="weekly">Weekly forecast</button>
            </div>
            <div className="dateDiv">
                <p className="dateC">13.10.2023</p>
                <div className="line2"></div>
                <p className="weekDay">Friday</p>
            </div>
            <img src="" className="sun" />
            <p className="grade">22℃</p>
            <div className="bthDiv">
                <button className="return">
                    <img src={refresh} className="returnimg" />
                </button>
                <button className="like">
                    <img src={hurt} className="likeimg" />
                </button>
                <button className="more">
                    See more
                </button>
                <button className="del">
                    <img src={bin} className="delimg" />
                </button>
            </div>

        </div>
    )
}
export default Card