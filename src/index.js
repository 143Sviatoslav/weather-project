import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Card from './components/weather-card/Card';
import Forecast from './components/forecast/Forecast';
import Footer from './components/footer/Footer';
import ProfileModal from './components/profileModal/ProfileModal';
import News from './components/news/News';
import Slider from './components/slider/Slider';
import Test from './components/testWeather/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header/>
    {/* <ProfileModal/> */}
    {/* <Nav/>
    <Card/> */}
    <Test/>
    <News/>
    <Slider/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
