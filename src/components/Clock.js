import React, { Component } from "react";
import "./Clock.css";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.getTime = () => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      return `${hours}:${minutes}`;
    };
    this.state = {
      day: "",
      month: "",
      date: "",
      year: "",
      time: "",
      seconds: 0,
      ampm: ""
    };
    this.days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  }
  componentDidMount() {
    setInterval(() => {
      let date = new Date();
      this.setState({
        day: date.getDay(),
        month: date.getMonth(),
        date: date.getDate(),
        year: date.getFullYear(),
        time: this.getTime(),
        seconds:
          date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
        ampm: date.getHours() < 12 ? "am" : "pm"
      });
    }, 1000);
  }
  render() {
    return (
      <div className="Clock">
        <div className="fullDate">
          <div>
            <div className="day">{this.days[this.state.day]}</div>
            <div className="month">{this.months[this.state.month]}</div>
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
