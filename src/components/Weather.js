import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";

class Weather extends Component {
  state = {
    from: "8900 N Interstate 35 Austin TX 78753",
    to: "8834 N Capital of Texas Hwy Austin TX",
    randomFrom: "",
    randomTo: "",
    timeToWork: "Unknown"
  };

  getTimeToWork = () => {
    console.log("requesting time to work");
    console.log(this.state.randomFrom, this.state.randomTo);
    axios
      .post(
        // "http://from-to-api.herokuapp.com/"
        "http://localhost:8080",
        {
          from: this.state.from,
          to: this.state.to
        }
      )
      .then(response => {
        console.log(response.data);
        this.setState({ timeToWork: response.data.time });
      })
      .catch(error => {
        console.log(error);
      });
  };

  randomizeAddress = () => {
    let randomA = " " + (Math.floor(Math.random() * 9999) + 1000);
    let randomB = " " + (Math.floor(Math.random() * 9999) + 1000);
    let splitFrom = this.state.from.split(",");
    let splitTo = this.state.to.split(",");

    this.setState({
      randomFrom: splitFrom[0] + randomA + splitFrom[1],
      randomTo: splitTo[0] + randomB + splitTo[1]
    });
  };

  componentWillMount() {
    this.randomizeAddress();
  }
  componentDidMount() {
    this.randomizeAddress();
    this.getTimeToWork();
    setInterval(() => {
      this.randomizeAddress();
      this.getTimeToWork();
    }, 5 * 60 * 1000);
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
