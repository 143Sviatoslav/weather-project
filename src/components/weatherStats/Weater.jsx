import "./weather.css";


function Weather() {
    return (
        <div className="statusContener">
            <div className="statusDivQ">
                <p className="fell"></p>
                <p className="degreesC"></p>
                <img src="" alt="" />
            </div>
            <div className="statusDivW">
                <p className="min"></p>
                <p className="degreesMin"></p>
                <p className="max"></p>
                <p className="degreesMax"></p>
            </div>
            <div className="statusDivE">
                <p></p>
                <p className="procents"></p>
                <img src="" alt="" />
            </div>
            <div className="statusDivR">
                <p className="prssure"></p>
                <p className="pa"></p>
                <img src="" alt="" />
            </div>
            <div className="statusDivT">
                <p className="windSpeed"></p>
                <p className="mS"></p>
                <img src="" alt="" />
            </div>
            <div className="statusDivY">
                <p className="visibility"></p>
                <p className="vision"></p>
                <img src="" alt="" />
            </div>
        </div>
    )
}
export default Weather