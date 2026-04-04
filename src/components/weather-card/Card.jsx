import "./card.css";
import axios from "axios";
import bin from "../img/bin.png";
import refresh from "../img/refresh.png";
import hurt from "../img/hurt.png";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

const weatherCardUrl = ({item}) => (
    <div className="card">
        {item.map(({ id, temp, country, name, sunrise }) => (
            <div key={id}>
            <div className="ccDiv">
                <p className="city">{name}</p>
                <p className="country">{country}</p>
            </div>
            <p className="time">{}</p>
            <div className="hwDiv">
                <button className="hourly">Hourly forecast</button>
                <button className="weekly">Weekly forecast</button>
            </div>
            <div className="dateDiv">
                <p className="dateC">{}</p>
                <div className="line2"></div>
                <p className="weekDay">{}</p>
            </div>
            <img src="" className="sun" />
            <p className="grade">{temp}</p>
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
))}
        </div>
)
function Card() {

 
    return (
        <div>
            <weatherCardUrl/>
        </div>
    )
}
export default Card