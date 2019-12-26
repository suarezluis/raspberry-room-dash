import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";

class Weather extends Component {
  state = {
    from: "8900 N Interstate 35, Austin TX, 78753",
    to: "8834 N Capital of Texas Hwy, Austin, TX",
    timeToWork: "Unknown"
  };

  getTimeToWork = () => {
    console.log("requesting time to work");
    axios
      .post("http://from-to-api.herokuapp.com/", {
        from: this.state.from,
        to: this.state.to
      })
      .then(response => {
        console.log(response.data);
        this.setState({ timeToWork: response.data.time });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getTimeToWork();
    setInterval(() => {
      this.getTimeToWork();
    }, 15 * 60 * 1000);
  }

  render() {
    return (
      <div className="Weather">
        <div className="weatherImage">
          <img className="weatherIcon" src={this.props.data.icon} alt="" />
        </div>
        <div className="currentTemp">
          <div>{this.props.data.temperature}°F</div>
          <div className="timeToWork">
            {this.state.timeToWork} Drive to Work
          </div>
        </div>
        <div className="minMaxTemp">
          <div className="maxTemp" />
          ⬆800°<div className="minTemp">⬇600°</div>
        </div>
      </div>
    );
  }
}

export default Weather;
