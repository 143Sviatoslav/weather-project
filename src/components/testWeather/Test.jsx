import React, { Component } from "react";
import axios from "axios";
import "../nav/nav.css";
import "../weather-card/card.css"
import bin from "../img/bin.png";
import refresh from "../img/refresh.png";
import hurt from "../img/hurt.png";
import glass from "../img/glass.png";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";


class Test extends Component {
  state = {
    countries: [],
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
    });

    const response = await axios.get(`/weather?q=${name}&units=imperial&appid=0f38d6b8a76d19067772e2bef8f89a52`);
    const data = response.data;

    if (data.length > 10) {
      this.setState({
        error: "Too many matches found. Please enter a more specific query.",
      });
      return;
    }

    this.setState({ countries: [response.data] });
  };

   

  renderCountryCard = ({countrySearch}) =>{ 
    const { id, name, sys , dt, main , weather } = countrySearch;  



    return (
      <div key={id} className="card">
        <div className="ccDiv">
          <p className="city">{name}</p>
          <p className="country">{sys.country}</p>
        </div>
        <p className="time">{}</p>
        <div className="hwDiv">
          <button className="hourly">Hourly forecast</button>
          <button className="weekly">Weekly forecast</button>
        </div>
        <div className="dateDiv">
          <p className="dateC">{}.{}.{}</p>
          <div className="line2"></div>
          <p className="weekDay">{}</p>
        </div>
        <img src={weather.icon} className="sun" />
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
      
    );
  }

  render() {
    const { countries, error } = this.state;

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
    { countries.length > 0 ? (this.renderCountryCard({ countrySearch: countries[0]})) : null }
      </div >
    );
  }
}

export default Test;
