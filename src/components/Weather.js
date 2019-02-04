import React, { Component } from "react";

import "./Weather.css";

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <div className="weatherImage">
          <img className="weatherIcon" src={this.props.data.icon} alt="" />
        </div>
        <div className="currentTemp">{this.props.data.temperature}°F</div>
        <div className="minMaxTemp">
          <div className="maxTemp" />
          ⬆800°<div className="minTemp">⬇600°</div>
        </div>
      </div>
    );
  }
}

export default Weather;
