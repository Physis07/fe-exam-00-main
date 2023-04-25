import React, { Component } from "react";
import "./clima.css";

class Clima extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
    };
  }

  getWeatherData = () => {
    const apiKey = "8023d492cc76c7271eec0e96413e0b5c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ weatherData: data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { weatherData } = this.state;
    const temperature = weatherData.main ? `${weatherData.main.temp}°C` : "N/A";
    const description = weatherData.weather
      ? weatherData.weather[0].description
      : "N/A";

    return (
      <div className="content">
        <button className="btn-weather" onClick={this.getWeatherData}>
          Clima
        </button>
        <p className="temp">Temp: {temperature}</p>
      </div>
    );
  }
}

export default Clima;
