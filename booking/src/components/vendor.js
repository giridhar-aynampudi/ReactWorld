import "date-fns";
import React from "react";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";

class Vendor extends React.Component {
  state = {
    name: "",
    location: "",
    selectedDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleDateChange = (day) => {
    this.setState({
      selectedDate: day,
    });
  };
  handleStartTime = (startTime) => {
    this.setState({
      startTime: startTime,
    });
  };
  handleEndTime = (endTime) => {
    this.setState({
      endTime: endTime,
    });
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
          />
          <TextField
            value={this.state.location}
            id="standard-basic"
            name="location"
            label="Event location"
            onChange={this.handleChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="startTime"
              name="startTime"
              label="Start Time "
              value={this.state.startTime}
              onChange={this.handleStartTime}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="endTime"
              name="endTime"
              label="End Time "
              value={this.state.endTime}
              onChange={this.handleEndTime}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Vendor;
