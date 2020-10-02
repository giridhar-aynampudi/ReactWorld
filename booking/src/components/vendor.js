import "date-fns";
import React from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { DateTimePicker } from "react-rainbow-components";

const containerStyles = {
  maxWidth: 200,
};

class Vendor extends React.Component {
  state = {
    name: "",
    location: "",
    // selectedDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    duration: 30,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  submit = (event) => {
    event.preventDefault();
    console.log("submit state:", this.state);
    const payload = {
      name: this.state.name,
      location: this.state.location,
      dateTime: this.state.selectedDate,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      duration: this.state.duration,
    };
    axios({
      url: "/api/saveEvent",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("The data is sent to server");
        this.resetUserInputs();
      })
      .catch(() => {
        console.log("internal error at client");
      });
  };
  resetUserInputs = () => {
    this.setState({
      name: "",
      location: "",
      selectedDate: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      duration: "",
    });
  };
  render() {
    console.log("render state:", this.state);
    return (
      <div>
        <form onSubmit={this.submit}>
          <TextField
            value={this.state.name}
            name="name"
            id="standard-basic"
            label="Event name"
            onChange={this.handleChange}
          />{" "}
          <br />
          <TextField
            value={this.state.location}
            id="standard-basic"
            name="location"
            label="Event location"
            onChange={this.handleChange}
          />
          <div
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
            style={containerStyles}
          >
            <DateTimePicker
              required
              value={this.state.startTime}
              label="Event Start Time"
              onChange={(value) => this.setState({ startTime: value })}
            />
            <DateTimePicker
              required
              value={this.state.endTime}
              label="Event End time"
              onChange={(value) => this.setState({ endTime: value })}
            />
          </div>
          <TextField
            value={this.state.duration}
            id="standard-basic"
            name="duration"
            label="Event duration"
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Vendor;
