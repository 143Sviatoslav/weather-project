import React, { Component } from "react";
import axios from "axios";
import "../nav/nav.css";
import "../weather-card/card.css"
import "../forecast/forecast.css"
import bin from "../img/bin.png";
import refresh from "../img/refresh.png";
import hurt from "../img/hurt.png";
import glass from "../img/glass.png";
import "../weatherStats/weather.css";
import eye from "../img/eye.png";
import pa from "../img/pa.png";
import wind from "../img/wind.png";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";


class Test extends Component {
  state = {
    countries: [],
    forecastState: [],
    error: null,

  };

  // getdata(dt) {
  //   return new Date(dt * 1000);
  // }
  // getHours(dt) {
  //   return this.getDate(dt).getHours()
  // }
  // getWeekDay(dt) {
  //   return this.getDate(dt).getDate()
  // }
  // getMounth(dt) {
  //   return this.getDate(dt).getMounth()
  // }



  handleSubmit = async (evt) => {
    evt.preventDefault();

    const name = evt.target.elements[0].value.trim();

    this.setState({
      error: null,
      countries: [],
      forecastState: [],
    });

    const response = await axios.get(`/weather?q=${name}&units=imperial&appid=0f38d6b8a76d19067772e2bef8f89a52`);
    console.log(response.data)
    const data = response.data;

    const { lon, lat } = data.coord;

    const forecast = await axios.get(`/forecast?lat=${lat}&lon=${lon}&cnt=8&units=imperial&appid=0f38d6b8a76d19067772e2bef8f89a52`);
    console.log(forecast.data.list)

    if (data.length > 10) {
      this.setState({
        error: "Too many matches found. Please enter a more specific query.",
      });
      return;
    }

    this.setState({
      countries: [response.data],
      forecastState: forecast.data.list,
    });
  };



  renderCountryCard = ({ countrySearch, forecast }) => {
    const { id, name, sys, dt, main, weather, wind } = countrySearch;
    console.log(forecast)



    return (
      <div className="main-container">
        {/* first section - start */}
        <div key={id} className="card">
          <div className="ccDiv">
            <p className="city">{name}</p>
            <p className="country">{sys.country}</p>
          </div>
          <p className="time">{ }</p>
          <div className="hwDiv">
            <button className="hourly">Hourly forecast</button>
            <button className="weekly">Weekly forecast</button>
          </div>
          <div className="dateDiv">
            <p className="dateC">{ }.{ }.{ }</p>
            <div className="line2"></div>
            <p className="weekDay">{ }</p>
          </div>
          <img src={`https://openweathermap.org/payload/api/media/file/${weather[0].icon}.png`} className="sun" />
          <p className="grade">{main.temp}F</p>
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
        {/* end section - end */}
        {/* second section - start */}
        <div className="statusContener">
          <div className="statusDivQ">
            <p className="fell">Feels like</p>
            <p className="degreesC">{main.temp}℃</p>
            <img src="" className="cImg" />
          </div>
          <div className="statusDivW">
            <p className="min">Min ℃</p>
            <p className="degreesMin">{main.temp_min}℃</p>
            <p className="max">Max ℃</p>
            <p className="degreesMax">{main.temp_max}℃</p>
          </div>
          <div className="statusDivE">
            <p className="humidity">Humidity</p>
            <p className="procents">{main.humidity}%</p>
            <img src="" className="wImg" />
          </div>
          <div className="statusDivR">
            <p className="prssure">Pressure</p>
            <p className="pa">{main.pressure}Pa</p>
            <img src={pa} className="paImg" />
          </div>

          <div className="statusDivT">
            <p className="windSpeed">Wind speed</p>
            <p className="mS">{wind.speed} m/s</p>
            <img src={wind} className="windImg" />
          </div>
          <div className="statusDivY">
            <p className="visibility">Visibility</p>
            <p className="vision">Unlimited</p>
            <img src={eye} className="eyeImg" />
          </div>
        </div>
        {/* second section - end */}
        {/* 3 */}
        <div className="allDays">
          <p className="dayforecast">8-day forecast</p>
          {forecast.map(function ({ dt, clouds, dt_txt, main, pop, sys, visibility, weather, wind }) {
            console.log(dt)
            const date = new Date(dt * 1000)
            const formattedDate = date.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',   
              day: 'numeric'    
            });
            console.log(formattedDate)
            return (
              <div className="oneDay">
                <p className="date">{formattedDate}</p>
                <img src={`https://openweathermap.org/payload/api/media/file/${weather[0].icon}.png`} className="weatherImg" />
                <p className="temperature">{main.temp_min}/{main.temp_min}℃</p>
                <p className="weather">{weather[0].description}</p>
              </div>
            )
          })}

        </div>

        {/* 3 */}
      </div>

    );
  }

  render() {
    const { countries, forecastState, error } = this.state;
    return (
      <div>
        <div className="continerNav">
          <h1 className="title">Weather dashboard</h1>
          <div className="containerNav-data">
            <p className="text1">Create your personal list of <br /> faworite cities and always be <br />aware to the weather</p>
            <div className="line"></div>
            <p className="text2">October 2023 <br />Friday, 13</p>
          </div>
          <div className="containerNav-search">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="search location" className="input" />
              <button className="glass-bth"><img src={glass} className="search" /></button>
            </form>
          </div>
        </div>
        {countries.length > 0 ? (this.renderCountryCard({ countrySearch: countries[0], forecast: forecastState })) : null}
      </div >
    );
  }
}

export default Test;
