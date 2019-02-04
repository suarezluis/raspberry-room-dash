import React, { Component } from "react";
import "./Clock.css";
class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: "",
      month: "",
      date: "",
      year: "",
      time: "",
      seconds: 0,
      ampm: "pm"
    };
  }
  componentDidMount() {
    setInterval(() => {
      let date = new Date();
      this.setState({
        day: date.getDay(),
        month: date.getMonth(),
        date: date.getDate(),
        year: date.getFullYear(),
        time: `${date.getHours()}:${date.getMinutes()}`,
        seconds: date.getSeconds(),
        ampm: "pm"
      });
    }, 1000);
  }
  render() {
    return (
      <div className="Clock">
        <div className="fullDate">
          <div>
            <div className="day">{this.state.day}</div>
            <div className="month">{this.state.month}</div>
          </div>

          <div className="date">{this.state.date}</div>

          <div className="year">{this.state.year}</div>
        </div>
        <div className="fullTime">
          <div className="time">{this.state.time}</div>

          <div className="seconds">
            {this.state.seconds} <br />
            <span className="amPm">{this.state.ampm}</span>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Clock;
