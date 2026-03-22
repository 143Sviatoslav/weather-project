import "./forecast.css"
import axios from "axios"



function Forecast (){

    return (
        <div className="allDays">
<p className="dayforecast">8-day forecast</p>
<div className="oneDay"> 
    <p className="date"></p>
    <img src="" className="weatherImg" />
    <p className="temperature"></p> 
    <p className="weather"></p>
</div>
        </div>
    )
}
export default Forecast