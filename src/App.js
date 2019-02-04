import React, { Component } from "react";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    weather: {
      icon: "",
      temperature: 0,
      max: 0,
      min: 0
    }
  };

  getWeather = () => {
    axios
      .get(
        "https://api.weather.gov/stations/KAUS/observations/latest?require_qc=false"
      )
      .then(response => {
        console.log(response.data.properties);
        this.setState({
          weather: {
            icon: response.data.properties.icon,
            temperature: Math.round(
              response.data.properties.temperature.value * (9 / 5) + 32
            ),
            max: 0,
            min: 0
          }
        });
      });
  };
  componentDidMount() {
    this.getWeather();
    setInterval(() => {
      this.getWeather();
    }, 10 * 60 * 1000);
  }
  render() {
    return (
      <div className="App">
        <div />
        <Clock />
        <br />
        <br />
        <Weather data={this.state.weather} />

        <div />
      </div>
    );
  }
}

export default App;
