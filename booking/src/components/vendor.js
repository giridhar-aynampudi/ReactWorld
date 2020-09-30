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

class Vendor extends React.Component {
  state = {
    selectedDate: new Date(),
  };
  //   const [selectedDate, setSelectedDate] = React.useState();

  handleDateChange = (date) => {
    this.setState({
      selectedDate: date,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <TextField id="standard-basic" label="Event name" />
        <TextField id="standard-basic" label="Event location" />
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
      </div>
    );
  }
}

export default Vendor;
