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
import Axios from "axios";

class Vendor extends React.Component {
  state = {
    name: "",
    location: "",
    selectedDate: new Date(),
  };
  //   const [selectedDate, setSelectedDate] = React.useState();

  handleChange = ({ target }) => {
    // console.log(target.name);
    // this.setState({
    //   name: target.name,
    //   location: target.location,
    // });
    const { name, location } = target;
    this.setState({ [name]: target.value });
  };
  handleDateChange = (date) => {
    this.setState({
      selectedDate: date,
    });
  };
  submit = (event) => {
    event.preventDefault();
    alert(`Button submit successful ${this.state.selectedDate}`);
    //       Axios.post("/dateTime").then((response) => {

    //       })
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.submit}>
          <TextField
            value={this.state.name}
            id="standard-basic"
            label="Event name"
            onChange={this.handleChange}
          />
          <TextField
            value={this.state.location}
            id="standard-basic"
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
              id="time-picker"
              label="Time picker"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
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
